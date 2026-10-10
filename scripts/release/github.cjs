const { run: execute } = require('./runtime.cjs');
const { REPOSITORY, BRANCHES, SHA, check } = require('./policy.cjs');
const { randomUUID } = require('node:crypto');
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
function findRun(release, requestId, run) {
  check(SHA.test(release.sha) && BRANCHES.includes(release.branch), '非法 dispatch 提交/分支');
  check(/^[a-z\d-]+$/i.test(requestId), '非法请求 ID');
  const response = JSON.parse(run('gh', ['api', `repos/${REPOSITORY}/actions/workflows/publish.yml/runs?event=workflow_dispatch&head_sha=${release.sha}&per_page=100`]));
  return response.workflow_runs.find(r => r.display_title === `npm-release-${requestId}` && r.head_sha === release.sha);
}
async function publishPrepared(release, { run = execute, requestId = randomUUID(), wait = sleep } = {}) {
  const existing = findRun(release, requestId, run);
  if (existing) return { runId: existing.id, url: existing.html_url };
  for (const tag of release.tags) {
    check(run('git', ['rev-parse', `refs/tags/${tag}^{}`]) === release.sha, `发布 tag 缺失或指向错误提交：${tag}`);
  }
  run('git', ['push', '--atomic', 'origin', `${release.sha}:refs/heads/${release.branch}`, ...release.tags.map(t => `refs/tags/${t}:refs/tags/${t}`)]);
  const head = run('git', ['ls-remote', 'origin', `refs/heads/${release.branch}`]).split(/\s/)[0];
  check(head === release.sha, '远端分支已前进，停止触发；不会发布其他提交');
  return dispatchRelease(release, { run, requestId, wait });
}
async function dispatchRelease(release, { run = execute, requestId = randomUUID(), wait = sleep } = {}) {
  const find = () => findRun(release, requestId, run);
  let found = find();
  if (!found) {
    try { run('gh', ['workflow', 'run', 'publish.yml', '--repo', REPOSITORY, '--ref', release.branch, '-f', `release_sha=${release.sha}`, '-f', `request_id=${requestId}`]); }
    catch (e) { throw new Error(`触发结果未确认，请用原 SHA 恢复，勿重新升版本。${e.message}`); }
    for (let i = 0; i < 20 && !found; i++) { await wait(3000); found = find(); }
  }
  check(found, `暂未找到运行，请稍后使用 --resume ${release.sha}；请求 ID: ${requestId}`);
  return { runId: found.id, url: found.html_url };
}
async function retryRun(runId, { run = execute } = {}) {
  check(/^\d+$/.test(runId), 'run ID 必须是数字');
  const r = JSON.parse(run('gh', ['api', `repos/${REPOSITORY}/actions/runs/${runId}`]));
  check(r.repository?.full_name === REPOSITORY && r.path === '.github/workflows/publish.yml' && r.event === 'workflow_dispatch' && BRANCHES.includes(r.head_branch), '只能重跑本仓库的发布工作流');
  check(r.status === 'completed' && ['failure', 'cancelled', 'timed_out'].includes(r.conclusion), '任务尚未结束或无需失败重跑');
  run('gh', ['run', 'rerun', runId, '--failed', '--repo', REPOSITORY]);
  console.log(`已提交一轮补发：${runId}。若再次失败会停止，不自动重跑。`);
}
function watchRun(runId, { run = execute } = {}) {
  run('gh', ['run', 'watch', String(runId), '--repo', REPOSITORY, '--exit-status'], { inherit: true });
}
module.exports = { dispatchRelease, publishPrepared, retryRun, watchRun };
