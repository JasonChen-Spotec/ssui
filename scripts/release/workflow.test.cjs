const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const YAML = require('yaml');
const workflow = YAML.parse(fs.readFileSync(path.resolve(__dirname, '../../.github/workflows/publish.yml'), 'utf8'));

test('构建没有发布权限；上传只取原 artifact，且每轮重新验证授权', () => {
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
  const { build, publish } = workflow.jobs;
  const cacheIndex = build.steps.findIndex(s => s.uses?.startsWith('actions/cache@'));
  assert.ok(cacheIndex >= 0, '构建任务需要恢复 Yarn 下载缓存');
  const cache = build.steps[cacheIndex];
  assert.match(cache.with.path, /^\$\{\{ runner\.temp \}\}\//);
  assert.ok(!/node_modules|\/lib\/|\/es\//.test(cache.with.path));
  assert.match(cache.with.key, /runner\.os/);
  assert.match(cache.with.key, /runner\.arch/);
  assert.match(cache.with.key, /hashFiles\('yarn\.lock', 'packages\/\*\/yarn\.lock'\)/);
  assert.equal(cache.with['restore-keys'].trim(), cache.with.key.slice(0, cache.with.key.indexOf('${{ hashFiles')));
  const installIndex = build.steps.findIndex(s => s.run === 'node scripts/release/ci.cjs install');
  assert.ok(cacheIndex < installIndex);
  assert.equal(build.steps[installIndex].env?.YARN_CACHE_FOLDER, cache.with.path, '安装与恢复缓存必须使用同一目录');
  assert.equal(build.steps[installIndex].if, undefined, '缓存命中不能跳过冻结安装');
  assert.ok(!publish.steps.some(s => s.uses?.startsWith('actions/cache') || s.with?.cache));
  assert.equal(publish.env?.YARN_CACHE_FOLDER, undefined);
});

test('工作流和任务级 env 不引用该位置不可用的 runner 上下文', () => {
  // https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#context-availability
  for (const env of [workflow.env, ...Object.values(workflow.jobs).map(job => job.env)]) {
    for (const [name, value] of Object.entries(env || {})) {
      assert.doesNotMatch(String(value), /\$\{\{[^}]*\brunner\s*[.\[]/i, `${name}: runner 只能在支持它的步骤等位置使用`);
    }
  }
});
