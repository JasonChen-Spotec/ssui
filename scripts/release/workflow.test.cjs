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

test('Yarn 下载缓存覆盖所有锁文件，命中缓存也必须安装校验，发布任务不恢复缓存', () => {
  const workflow = YAML.parse(fs.readFileSync(path.resolve(__dirname, '../../.github/workflows/publish.yml'), 'utf8'));
  const { build, publish } = workflow.jobs;
  const cacheIndex = build.steps.findIndex(s => s.uses?.startsWith('actions/cache@'));
  assert.ok(cacheIndex >= 0, '构建任务需要恢复 Yarn 下载缓存');
  const cache = build.steps[cacheIndex];
  assert.equal(cache.with.path, '${{ env.YARN_CACHE_FOLDER }}');
  assert.match(build.env.YARN_CACHE_FOLDER, /^\$\{\{ runner\.temp \}\}\//);
  assert.ok(!/node_modules|\/lib\/|\/es\//.test(build.env.YARN_CACHE_FOLDER));
  assert.match(cache.with.key, /runner\.os/);
  assert.match(cache.with.key, /runner\.arch/);
  assert.match(cache.with.key, /hashFiles\('yarn\.lock', 'packages\/\*\/yarn\.lock'\)/);
  assert.equal(cache.with['restore-keys'].trim(), cache.with.key.slice(0, cache.with.key.indexOf('${{ hashFiles')));
  const installIndex = build.steps.findIndex(s => s.run === 'node scripts/release/ci.cjs install');
  assert.ok(cacheIndex < installIndex);
  assert.equal(build.steps[installIndex].if, undefined, '缓存命中不能跳过冻结安装');
  assert.ok(!publish.steps.some(s => s.uses?.startsWith('actions/cache') || s.with?.cache));
  assert.equal(publish.env?.YARN_CACHE_FOLDER, undefined);
});
