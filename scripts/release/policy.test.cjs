const { test } = require('node:test');
const assert = require('node:assert/strict');
const { validateIdentity, validateManifest } = require('./policy.cjs');
const sha = 'a'.repeat(40);
const context = { repository: 'spo-fee/ssui', ref: 'refs/heads/dev', sha, requestedSha: sha, actor: 'EllaLee-spotec', triggeringActor: 'EllaLee-spotec', event: 'workflow_dispatch' };
const manifest = () => ({ schemaVersion: 1, branch: 'dev', baseSha: sha, tag: 'latest', packages: [{ name: 'aa-utils', path: 'packages/aa-utils', oldVersion: '2.1.38', version: '2.2.1' }] });
test('授权必须同时覆盖原触发者和重跑者，拒绝错误分支/提交/名单', () => {
  assert.doesNotThrow(() => validateIdentity(context, '["ellalee-SPOTEC"]'));
  for (const patch of [{ triggeringActor: 'outsider' }, { actor: 'outsider' }, { ref: 'refs/heads/main' }, { requestedSha: 'b'.repeat(40) }, { repository: 'other/ssui' }]) assert.throws(() => validateIdentity({ ...context, ...patch }, '["EllaLee-spotec"]'));
  for (const list of ['', '[]', '{}', 'broken']) assert.throws(() => validateIdentity(context, list));
});
test('清单只接受六包的唯一合法递增版本和受限路径', () => {
  assert.doesNotThrow(() => validateManifest(manifest()));
  for (const patch of [{ version: '2.1.37' }, { version: '2.1.38' }, { version: 'v2.2.1' }, { path: '../escape' }, { name: 'other' }]) {
    const m = manifest(); Object.assign(m.packages[0], patch); assert.throws(() => validateManifest(m));
  }
  const duplicate = manifest(); duplicate.packages.push({ ...duplicate.packages[0] }); assert.throws(() => validateManifest(duplicate));
  assert.throws(() => validateManifest({ ...manifest(), packages: [] }));
});
