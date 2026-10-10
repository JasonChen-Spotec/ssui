const fs = require('node:fs');
const path = require('node:path');
const { run: execute } = require('./runtime.cjs');
const { getPublished } = require('./registry.cjs');
const { REPOSITORY, BRANCHES, PACKAGES, MANIFEST, validateManifest, check } = require('./policy.cjs');
async function localPreflight(root, run = execute, { requireSynced = true } = {}) {
  const git = args => run('git', args, { cwd: root });
  const branch = git(['branch', '--show-current']);
  check(BRANCHES.includes(branch), '只允许在 dev 或 dev-atnd-6.x 发版');
  check(!git(['status', '--porcelain']), '工作区有未提交内容，请先提交源码、配置和锁文件（无需提交 lib/es）');
  const remote = git(['remote', 'get-url', 'origin']);
  check([`https://github.com/${REPOSITORY}.git`, `https://github.com/${REPOSITORY}`, `git@github.com:${REPOSITORY}.git`, `ssh://git@github.com/${REPOSITORY}.git`].includes(remote), 'origin 不是配置的发布仓库');
  run('gh', ['auth', 'status', '--hostname', 'github.com'], { cwd: root });
  git(['fetch', 'origin', `refs/heads/${branch}:refs/remotes/origin/${branch}`, '--tags']);
  const sha = git(['rev-parse', 'HEAD']);
  if (requireSynced) check(sha === git(['rev-parse', `refs/remotes/origin/${branch}`]), '本地与远端未同步，请先拉取或推送已确认的代码');
  return { branch, sha };
}
function readPackages(root) {
  return PACKAGES.map(name => {
    const dir = `packages/${name}`;
    return { name, path: dir, pkg: JSON.parse(fs.readFileSync(path.join(root, dir, 'package.json'))) };
  });
}
async function prepareRelease({ root, run = execute, confirm, lookup = getPublished }) {
  const { branch, sha: baseSha } = await localPreflight(root, run);
  const before = readPackages(root);
  const git = args => run('git', args, { cwd: root });
  run(process.execPath, [path.join(root, 'node_modules/lerna/cli.js'), 'version', '--no-git-tag-version', '--no-push', '--ignore-scripts'], { cwd: root, inherit: true });
  const after = readPackages(root);
  const selected = after.filter((e, i) => e.pkg.version !== before[i].pkg.version).map((e) => ({ name: e.name, path: e.path, oldVersion: before.find(p => p.name === e.name).pkg.version, version: e.pkg.version }));
  if (!selected.length) { console.log('没有需要发布的新版本。'); return null; }
  const manifest = validateManifest({ schemaVersion: 1, branch, baseSha, tag: 'latest', packages: selected });
  for (const e of selected) {
    check(!await lookup(e.name, e.version), `${e.name}@${e.version} 已存在，请重新选择版本；本地变更已保留`);
    let exists = false; try { git(['show-ref', '--verify', `refs/tags/${e.name}@${e.version}`]); exists = true; } catch { /* git show-ref exits 1 when absent */ }
    check(!exists, `Git tag 已存在: ${e.name}@${e.version}`);
  }
  console.log(`\n发布分支: ${branch}\n上传目标: npmjs.org (latest)`);
  for (const e of selected) console.log(`  ${e.name}: ${e.oldVersion} → ${e.version}`);
  if (!await confirm('确认提交并触发 CI 发布？[y/N] ')) { console.log('已取消；版本变更保留在本地，尚未推送。'); return null; }
  const allowed = new Set(['package.json', 'package-lock.json', 'yarn.lock', 'lerna.json', MANIFEST, ...PACKAGES.flatMap(n => ['package.json', 'package-lock.json', 'yarn.lock'].map(f => `packages/${n}/${f}`))]);
  const changed = git(['diff', '--name-only', 'HEAD']).split('\n').filter(Boolean);
  check(changed.every(f => allowed.has(f)), '版本准备修改了非预期文件；停止并保留本地变更');
  const unknown = git(['ls-files', '--others', '--exclude-standard']).split('\n').filter(Boolean);
  check(unknown.every(f => allowed.has(f)), '版本准备产生了非预期新文件');
  fs.mkdirSync(path.join(root, 'scripts/release'), { recursive: true });
  fs.writeFileSync(path.join(root, MANIFEST), `${JSON.stringify(manifest, null, 2)}\n`);
  git(['add', '--', ...new Set([...changed, ...unknown, MANIFEST])]);
  git(['commit', '-m', `chore(release): ${selected.map(e => `${e.name}@${e.version}`).join(', ')}`]);
  const sha = git(['rev-parse', 'HEAD']);
  check(!git(['status', '--porcelain']), '提交 hook 留下了未提交文件；未推送，请检查');
  check(git(['diff-tree', '--no-commit-id', '--name-only', '-r', sha]).split('\n').every(f => allowed.has(f)), '提交 hook 修改了非预期文件；未推送，请检查');
  check(JSON.stringify(JSON.parse(git(['show', `${sha}:${MANIFEST}`]))) === JSON.stringify(manifest), '提交中的发布清单被修改；未推送');
  for (const e of selected) check(JSON.parse(git(['show', `${sha}:${e.path}/package.json`])).version === e.version, '提交版本与清单不一致；未推送');
  const tags = selected.map(e => `${e.name}@${e.version}`);
  for (const tag of tags) git(['tag', '-a', tag, sha, '-m', tag]);
  return { sha, branch, tags, manifest };
}
module.exports = { localPreflight, prepareRelease };
