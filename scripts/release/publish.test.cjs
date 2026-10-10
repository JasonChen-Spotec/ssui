const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { getPublished } = require('./registry.cjs');
const { packRelease } = require('./pack.cjs');
const { publishRelease } = require('./publish.cjs');
const sha = 'a'.repeat(40);
const context = { sha, runId: '42', runAttempt: '1' };
function fixture(t, names = ['a-base-icon', 'a-icons']) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'ssui-release-')); t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const manifest = { schemaVersion: 1, branch: 'dev', baseSha: 'b'.repeat(40), tag: 'latest', packages: [] };
  for (const name of names) {
    const dir = path.join(root, 'packages', name); fs.mkdirSync(path.join(dir, 'lib'), { recursive: true }); fs.mkdirSync(path.join(dir, 'es'));
    for (const p of ['lib/index.js', 'lib/index.d.ts', 'es/index.js']) fs.writeFileSync(path.join(dir, p), '// fixture\n');
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name, version: '4.0.1', repository: 'git+https://github.com/spo-fee/ssui.git', main: './lib/index.js', module: './es/index.js', types: './lib/index.d.ts', files: ['lib', 'es'], scripts: { prepack: 'node -e "require(\'fs\').writeFileSync(\'EXECUTED\',\'bad\')"' } }));
    manifest.packages.push({ name, path: `packages/${name}`, oldVersion: '4.0.0', version: '4.0.1' });
  }
  const outDir = path.join(root, 'artifacts'); return { root, manifest, outDir };
}
function clock() {
  let elapsed = 0;
  const sleeps = [], messages = [];
  return {
    now: () => elapsed,
    advance: ms => { elapsed += ms; },
    sleep: async ms => { sleeps.push(ms); elapsed += ms; },
    log: message => messages.push(message),
    sleeps, messages,
  };
}
test('registry 只有明确的版本 404 是未发布，其他错误必须停止', async () => {
  assert.equal(await getPublished('a-icons', '4.0.1', { fetch: async () => ({ status: 404, ok: false }) }), null);
  for (const status of [401, 403, 429, 500]) await assert.rejects(getPublished('a-icons', '4.0.1', { fetch: async () => ({ status, ok: false }) }));
  await assert.rejects(getPublished('a-icons', '4.0.1', { fetch: async () => { throw new Error('offline'); } }));
});
test('registry 请求在剩余确认时间用尽时中止', async () => {
  await assert.rejects(getPublished('a-icons', '4.0.1', {
    timeoutMs: 5,
    fetch: async (url, { signal }) => {
      await new Promise((resolve, reject) => {
        const timer = setTimeout(resolve, 100);
        signal.addEventListener('abort', () => { clearTimeout(timer); reject(signal.reason); }, { once: true });
      });
      throw new Error('请求未按剩余期限中止');
    },
  }), { name: 'TimeoutError' });
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
  await assert.rejects(publishRelease({ artifactDir: f.outDir, manifest: f.manifest, context, lookup, upload, ...clock() }), /temporary failure/);
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
test('冻结产物丢失和危险 publishConfig 均拒绝', async t => {
  const f=fixture(t);
  await assert.rejects(publishRelease({artifactDir:f.outDir,manifest:f.manifest,context}),/不存在或已过期/);
  const filename=path.join(f.root,'packages/a-icons/package.json');const p=JSON.parse(fs.readFileSync(filename));p.publishConfig={registry:'https://other.example/'};fs.writeFileSync(filename,JSON.stringify(p));
  await assert.rejects(packRelease({...f,context}),/publishConfig/);
});
test('六个包分别延迟可见时一轮全部完成，接近五分钟和上传响应丢失也不重复上传', async t => {
  const cases = [
    { name: 'a-base-icon', delay: 0, lostResponse: true },
    { name: 'a-icons', delay: 20000 },
    { name: 'ec-common', delay: 40000 },
    { name: 'aa-utils', delay: 120000 },
    { name: 'amssui', delay: 200000 },
    { name: 'assui', delay: 280000, lostResponse: true },
  ];
  const names = cases.map(c => c.name);
  const f = fixture(t, names); await packRelease({ ...f, context });
  const time = clock(), uploaded = new Map(), uploads = [];
  const lookup = (name, version, options) => getPublished(name, version, {
    ...options,
    fetch: async () => {
      const entry = uploaded.get(name);
      if (!entry || time.now() < entry.visibleAt) return { status: 404, ok: false };
      return { status: 200, ok: true, json: async () => ({ name, version, dist: { integrity: entry.integrity } }) };
    },
  });
  const upload = async (file, entry) => {
    assert.equal(uploaded.has(entry.name), false, `${entry.name} 不应重复上传`);
    uploads.push({ name: entry.name, time: time.now() });
    const scenario = cases.find(c => c.name === entry.name);
    uploaded.set(entry.name, { integrity: entry.integrity, visibleAt: time.now() + scenario.delay });
    if (scenario.lostResponse) throw new Error('上传已接受，但响应丢失');
  };
  const options = { artifactDir: f.outDir, manifest: f.manifest, context, lookup, upload, ...time };
  const results = await publishRelease(options);
  assert.deepEqual(results.map(r => [r.name, r.status]), names.map(name => [name, 'published']));
  assert.deepEqual(uploads.map(u => u.time), [0, 0, 20000, 60000, 180000, 380000]);
  assert.equal(uploads.length, 6);
  assert.equal(time.now(), 660000);
  assert.ok(time.sleeps.every(ms => ms === 20000));
  for (const name of names) assert.ok(time.messages.some(message => message.includes(`${name}@4.0.1`)));
  const resumed = await publishRelease({ ...options, context: { ...context, runAttempt: '2' } });
  assert.deepEqual(resumed.map(r => r.status), Array(6).fill('skipped'));
  assert.equal(uploads.length, 6);
});
test('一直不可见时最多等待五分钟，不重复上传、不继续后续包，且可用原产物恢复', async t => {
  const f = fixture(t); await packRelease({ ...f, context });
  const time = clock(), uploaded = new Map(), uploads = [];
  const upload = async (file, entry) => { uploads.push(entry.name); uploaded.set(entry.name, { integrity: entry.integrity }); };
  await assert.rejects(publishRelease({
    artifactDir: f.outDir, manifest: f.manifest, context, ...time, upload, lookup: async () => null,
  }), error => {
    assert.match(error.message, /a-base-icon@4\.0\.1.*超时/);
    assert.deepEqual(error.results.map(r => r.status), ['not-confirmed', 'not-confirmed']);
    return true;
  });
  assert.equal(time.now(), 300000);
  assert.deepEqual(uploads, ['a-base-icon']);
  const result = await publishRelease({
    artifactDir: f.outDir, manifest: f.manifest, context: { ...context, runAttempt: '2' },
    ...time, upload, lookup: async name => uploaded.get(name) || null,
  });
  assert.deepEqual(result.map(r => r.status), ['skipped', 'published']);
  assert.deepEqual(uploads, ['a-base-icon', 'a-icons']);
});
test('等待时间包含 registry 查询耗时，最后请求不能超出剩余期限', async t => {
  const f = fixture(t); await packRelease({ ...f, context });
  const time = clock(), timeouts = []; let uploaded = false;
  await assert.rejects(publishRelease({
    artifactDir: f.outDir, manifest: f.manifest, context, ...time,
    upload: async () => { assert.equal(uploaded, false); uploaded = true; },
    lookup: async (name, version, options) => {
      if (uploaded) {
        assert.ok(options.timeoutMs > 0 && options.timeoutMs <= 30000);
        assert.ok(options.timeoutMs <= 300000 - time.now());
        timeouts.push(options.timeoutMs);
        time.advance(Math.min(29000, options.timeoutMs));
      }
      return null;
    },
  }), /超时/);
  assert.equal(time.now(), 300000);
  assert.equal(timeouts.at(-1), 6000);
});
test('等待后发现摘要冲突立即停止，不继续等待或上传后续包', async t => {
  const f = fixture(t); await packRelease({ ...f, context });
  const time = clock(), uploads = [];
  await assert.rejects(publishRelease({
    artifactDir: f.outDir, manifest: f.manifest, context, ...time,
    upload: async (file, entry) => { uploads.push(entry.name); },
    lookup: async () => time.now() >= 20000 ? { integrity: 'sha512-conflict' } : null,
  }), /内容冲突/);
  assert.deepEqual(uploads, ['a-base-icon']);
  assert.deepEqual(time.sleeps, [20000]);
});
test('确认期间的鉴权、限流或服务端错误不会当作尚未可见而重试', async t => {
  const f = fixture(t); await packRelease({ ...f, context });
  for (const status of [401, 403, 429, 500]) {
    const time = clock(), uploads = [];
    await assert.rejects(publishRelease({
      artifactDir: f.outDir, manifest: f.manifest, context, ...time,
      upload: async (file, entry) => { uploads.push(entry.name); },
      lookup: (name, version, options) => getPublished(name, version, {
        ...options, fetch: async () => ({ status: uploads.length ? status : 404, ok: false }),
      }),
    }), new RegExp(`请求失败 ${status}`));
    assert.deepEqual(uploads, ['a-base-icon']);
    assert.equal(time.sleeps.length, 0);
  }
});
