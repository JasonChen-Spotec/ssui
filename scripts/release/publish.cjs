const fs = require('node:fs');
const path = require('node:path');
const { validateManifest, check, REGISTRY, TAG } = require('./policy.cjs');
const { integrity, inspectArchive } = require('./archive.cjs');
const { getPublished } = require('./registry.cjs');
const { run, npmEnvironment } = require('./runtime.cjs');
function verifiedArtifacts(artifactDir, manifest, context) {
  validateManifest(manifest);
  const file = path.join(artifactDir, 'artifact.json');
  check(fs.existsSync(file), '构建产物不存在或已过期，请检查原运行；不会自动重新构建');
  const artifact = JSON.parse(fs.readFileSync(file, 'utf8'));
  check(artifact.schemaVersion === 1 && artifact.commit === context.sha && artifact.runId === context.runId, '产物来源与发布运行不一致');
  check(/^\d+$/.test(artifact.runAttempt) && Number(artifact.runAttempt) <= Number(context.runAttempt), '产物运行轮次无效');
  check(JSON.stringify(artifact.manifest) === JSON.stringify(manifest), '产物内发布清单与原提交不一致');
  check(Array.isArray(artifact.packages) && artifact.packages.length === manifest.packages.length, '产物包数量不符');
  const seen = new Set();
  for (const item of artifact.packages) {
    const e = manifest.packages.find(e => e.name === item.name);
    check(e && e.version === item.version && e.path === item.path && !seen.has(e.name), '产物包清单不符');
    seen.add(e.name);
    check(item.filename === `${e.name}-${e.version}.tgz`, '非法 tarball 名称');
    const tarball = path.join(artifactDir, item.filename);
    check(fs.lstatSync(tarball).isFile(), 'tarball 必须是普通文件');
    check(item.integrity === integrity(tarball), `${e.name}: 产物摘要不匹配`);
    inspectArchive(tarball, e);
  }
  return artifact.packages;
}
function npmUpload(file) {
  check(process.env.ACTIONS_ID_TOKEN_REQUEST_URL && process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN, '真实上传只能在 OIDC 工作流内执行');
  check(!process.env.NPM_TOKEN && !process.env.NODE_AUTH_TOKEN, '不接受长期 npm token');
  const config = npmEnvironment();
  try { run('npm', ['publish', file, '--ignore-scripts', `--registry=${REGISTRY}`, `--tag=${TAG}`, '--access=public', '--provenance'], { cwd: config.dir, env: config.env, inherit: true }); }
  finally { config.cleanup(); }
}
async function publishRelease({ artifactDir, manifest, context, lookup = getPublished, upload = npmUpload, dryRun = false }) {
  const packages = verifiedArtifacts(artifactDir, manifest, context);
  const results = [];
  try {
    // Check every collision before starting any new upload.
    const existing = new Map();
    for (const e of packages) {
      const remote = await lookup(e.name, e.version);
      if (remote) check(remote.integrity === e.integrity, `${e.name}@${e.version}: 已发布版本内容冲突或缺少摘要`);
      existing.set(e.name, remote);
    }
    for (const e of packages) {
      if (existing.get(e.name)) { results.push({ name: e.name, version: e.version, status: 'skipped' }); continue; }
      if (dryRun) { results.push({ name: e.name, version: e.version, status: 'would-publish' }); continue; }
      let error;
      try { await upload(path.join(artifactDir, e.filename), e); } catch (e) { error = e; }
      const remote = await lookup(e.name, e.version);
      if (!remote || remote.integrity !== e.integrity) throw error || new Error(`${e.name}: 上传后未确认正确版本，停止；可手动重跑原任务`);
      results.push({ name: e.name, version: e.version, status: 'published' });
    }
    return results;
  } catch (error) {
    const completed = new Set(results.map(r => r.name));
    error.results = [...results, ...packages.filter(e => !completed.has(e.name)).map(e => ({ name: e.name, version: e.version, status: 'not-confirmed' }))];
    throw error;
  }
}
module.exports = { publishRelease, verifiedArtifacts };
