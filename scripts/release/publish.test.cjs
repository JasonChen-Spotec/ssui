const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');
const { getPublished } = require('./registry.cjs');
const { packRelease } = require('./pack.cjs');
const { publishRelease } = require('./publish.cjs');
const sha = 'a'.repeat(40);
const context = { sha, runId: '42', runAttempt: '1' };
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'ssui-release-')); t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const manifest = { schemaVersion: 1, branch: 'dev', baseSha: 'b'.repeat(40), tag: 'latest', packages: [] };
  for (const name of ['a-base-icon', 'a-icons']) {
    const dir = path.join(root, 'packages', name); fs.mkdirSync(path.join(dir, 'lib'), { recursive: true }); fs.mkdirSync(path.join(dir, 'es'));
    for (const p of ['lib/index.js', 'lib/index.d.ts', 'es/index.js']) fs.writeFileSync(path.join(dir, p), '// fixture\n');
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name, version: '4.0.1', repository: 'git+https://github.com/spo-fee/ssui.git', main: './lib/index.js', module: './es/index.js', types: './lib/index.d.ts', files: ['lib', 'es'], scripts: { prepack: 'node -e "require(\'fs\').writeFileSync(\'EXECUTED\',\'bad\')"' } }));
    manifest.packages.push({ name, path: `packages/${name}`, oldVersion: '4.0.0', version: '4.0.1' });
  }
  const outDir = path.join(root, 'artifacts'); return { root, manifest, outDir };
}
test('registry 只有明确的版本 404 是未发布，其他错误必须停止', async () => {
  assert.equal(await getPublished('a-icons', '4.0.1', { fetch: async () => ({ status: 404, ok: false }) }), null);
  for (const status of [401, 403, 429, 500]) await assert.rejects(getPublished('a-icons', '4.0.1', { fetch: async () => ({ status, ok: false }) }));
  await assert.rejects(getPublished('a-icons', '4.0.1', { fetch: async () => { throw new Error('offline'); } }));
});
test('真实打包不执行钩子；首次部分失败，第二轮只补剩余包', async t => {
  const f = fixture(t); await packRelease({ ...f, context });
  assert.equal(fs.existsSync(path.join(f.root, 'packages/a-icons/EXECUTED')), false);
  const saved = JSON.parse(fs.readFileSync(path.join(f.outDir, 'artifact.json')));
  const registry = new Map(); let fail = true; const uploads = [];
  const lookup = async name => registry.get(name) || null;
  const upload = async (filename, entry) => {
    uploads.push(entry.name);
    if (entry.name === 'a-icons' && fail) throw new Error('temporary failure');
    registry.set(entry.name, { integrity: entry.integrity });
  };
  await assert.rejects(publishRelease({ artifactDir: f.outDir, manifest: f.manifest, context, lookup, upload }), /temporary failure/);
  assert.deepEqual([...registry.keys()], ['a-base-icon']);
  fail = false;
  const results = await publishRelease({ artifactDir: f.outDir, manifest: f.manifest, context, lookup, upload });
  assert.deepEqual(results.map(x => x.status), ['skipped', 'published']);
  assert.deepEqual(uploads, ['a-base-icon', 'a-icons', 'a-icons']);
  assert.equal(saved.packages.length, 2);
});
test('产物来源、摘要、同版本冲突及缺入口均阻止上传', async t => {
  const f = fixture(t); await packRelease({ ...f, context });
  const upload = async () => { assert.fail('不应上传'); };
  await assert.rejects(publishRelease({ artifactDir: f.outDir, manifest: f.manifest, context: { ...context, runId: '999' }, upload }));
  await assert.rejects(publishRelease({ artifactDir: f.outDir, manifest: f.manifest, context, lookup: async () => ({ integrity: 'sha512-wrong' }), upload }), /内容冲突/);
  const artifact = JSON.parse(fs.readFileSync(path.join(f.outDir, 'artifact.json')));
  fs.appendFileSync(path.join(f.outDir, artifact.packages[1].filename), 'tampered');
  await assert.rejects(publishRelease({ artifactDir: f.outDir, manifest: f.manifest, context, lookup: async () => null, upload }), /摘要/);
  fs.rmSync(path.join(f.root, 'packages/a-icons/es/index.js'));
  await assert.rejects(packRelease({ ...f, outDir: path.join(f.root, 'other'), context }), /入口/);
});
test('上传响应丢失但 registry 摘要正确视为成功，不重复上传', async t => {
  const f=fixture(t);await packRelease({...f,context});const registry=new Map();let count=0;
  const result=await publishRelease({artifactDir:f.outDir,manifest:f.manifest,context,lookup:async name=>registry.get(name)||null,upload:async(file,e)=>{count++;registry.set(e.name,{integrity:e.integrity});throw new Error('lost response');}});
  assert.equal(count,2);assert.deepEqual(result.map(r=>r.status),['published','published']);
});
test('冻结产物丢失和危险 publishConfig 均拒绝', async t => {
  const f=fixture(t);
  await assert.rejects(publishRelease({artifactDir:f.outDir,manifest:f.manifest,context}),/不存在或已过期/);
  const filename=path.join(f.root,'packages/a-icons/package.json');const p=JSON.parse(fs.readFileSync(filename));p.publishConfig={registry:'https://other.example/'};fs.writeFileSync(filename,JSON.stringify(p));
  await assert.rejects(packRelease({...f,context}),/publishConfig/);
});
