const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const YAML = require('yaml'); // Already present in the frozen root dependency tree.

test('构建没有发布权限；上传只取原 artifact，且每轮重新验证授权', () => {
  const file = path.resolve(__dirname, '../../.github/workflows/publish.yml');
  const workflow = YAML.parse(fs.readFileSync(file, 'utf8'));
  assert.deepEqual(Object.keys(workflow.on), ['workflow_dispatch']);
  assert.deepEqual(workflow.permissions, {});
  assert.equal(workflow.concurrency['cancel-in-progress'], false);
  const { build, publish } = workflow.jobs;
  assert.deepEqual(build.permissions, { contents: 'read' });
  assert.equal(publish.permissions['id-token'], 'write');
  assert.equal(publish.environment, 'npm-release');
  assert.equal(publish.needs, 'build');
  const download = publish.steps.find(s => s.uses?.startsWith('actions/download-artifact@'));
  assert.equal(download.with['artifact-ids'], '${{ needs.build.outputs.artifact-id }}');
  assert.equal(download.with.name, undefined);
  assert.ok(publish.steps.some(s => s.run === 'node scripts/release/ci.cjs publish' && s.env.NPM_PUBLISHERS === '${{ vars.NPM_PUBLISHERS }}'));
  for (const job of [build, publish]) {
    const checkout = job.steps.find(s => s.uses?.startsWith('actions/checkout@'));
    assert.equal(checkout.with.ref, '${{ github.sha }}');
    assert.equal(checkout.with['persist-credentials'], false);
    for (const step of job.steps.filter(s => s.uses)) assert.match(step.uses, /@[a-f0-9]{40}$/);
  }
  assert.ok(!publish.steps.some(s => /yarn|lerna|npm (?:ci|install(?! --global))|ci\.cjs (?:install|pack)/.test(s.run || '')));
});
