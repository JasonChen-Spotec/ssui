const fs = require('node:fs');
const path = require('node:path');
const { run, npmEnvironment } = require('./runtime.cjs');
const { integrity, inspectArchive } = require('./archive.cjs');
const { PACKAGES, REGISTRY, check, validateManifest, validatePackage } = require('./policy.cjs');
function rejectSymlinks(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    check(!e.isSymbolicLink(), `产物不允许符号链接: ${path.join(dir, e.name)}`);
    if (e.isDirectory()) rejectSymlinks(path.join(dir, e.name));
  }
}
async function orderedPackages(root, manifest) {
  const metas = new Map(manifest.packages.map(e => [e.name, validatePackage(root, e)]));
  const entries = new Map(manifest.packages.map(e => [e.name, e]));
  const order = [], visiting = new Set(), visited = new Set();
  // Build has installed Lerna; its semver is used only in this unprivileged job.
  let semver;
  const satisfies = (version, range) => {
    if (!semver) semver = require(require.resolve('semver', { paths: [require.resolve('lerna', { paths: [root] })] }));
    return semver.satisfies(version, range);
  };
  for (const [name, pkg] of metas) for (const [dep, range] of Object.entries({ ...pkg.dependencies, ...pkg.optionalDependencies, ...pkg.peerDependencies })) {
    if (!PACKAGES.includes(dep)) continue;
    const candidate = entries.get(dep);
    if (candidate && satisfies(candidate.version, range)) continue;
    const output = run('npm', ['view', `${dep}@${range}`, 'version', '--json', `--registry=${REGISTRY}`], { cwd: root });
    const published = JSON.parse(output || 'null');
    check(typeof published === 'string' || (Array.isArray(published) && published.length), `${name}: 内部依赖 ${dep}@${range} 尚未发布且不在本批次中`);
  }
  function visit(name) {
    if (visited.has(name)) return;
    check(!visiting.has(name), `运行时内部依赖循环: ${name}`); visiting.add(name);
    // Peer edges may form legitimate cycles (a-icons <-> assui).
    for (const dep of Object.keys({ ...metas.get(name).dependencies, ...metas.get(name).optionalDependencies })) if (entries.has(dep)) visit(dep);
    visiting.delete(name); visited.add(name); order.push(entries.get(name));
  }
  for (const name of entries.keys()) visit(name);
  return order;
}
async function packRelease({ root, manifest, outDir, context }) {
  validateManifest(manifest);
  check(/^[a-f0-9]{40}$/.test(context.sha) && /^\d+$/.test(context.runId) && /^\d+$/.test(context.runAttempt), '缺失构建运行身份');
  fs.mkdirSync(outDir, { recursive: true });
  check(fs.readdirSync(outDir).length === 0, '打包输出目录必须为空，避免混入旧产物');
  const artifact = { schemaVersion: 1, commit: context.sha, runId: context.runId, runAttempt: context.runAttempt, manifest, packages: [] };
  for (const entry of await orderedPackages(root, manifest)) {
    const dir = path.join(root, entry.path);
    for (const output of ['lib', 'es']) { check(fs.existsSync(path.join(dir, output)), `${entry.name}: 缺少构建产物 ${output}`); rejectSymlinks(path.join(dir, output)); }
    const config = npmEnvironment();
    try {
      const output = JSON.parse(run('npm', ['pack', '--ignore-scripts', '--json', '--pack-destination', outDir], { cwd: dir, env: config.env }));
      const packed = Array.isArray(output) ? output[0] : output[entry.name];
      check(packed && packed.filename === `${entry.name}-${entry.version}.tgz`, 'npm pack 输出文件名不符');
      const tarball = path.join(outDir, packed.filename);
      inspectArchive(tarball, entry);
      artifact.packages.push({ ...entry, filename: packed.filename, integrity: integrity(tarball) });
    } finally { config.cleanup(); }
  }
  fs.writeFileSync(path.join(outDir, 'artifact.json'), `${JSON.stringify(artifact, null, 2)}\n`);
  return artifact;
}
module.exports = { packRelease, orderedPackages };
