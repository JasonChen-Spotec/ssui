const { test } = require('node:test');
const assert = require('node:assert/strict');
const { dispatchRelease, retryRun, publishPrepared } = require('./github.cjs');
test('dispatch 精确匹配 request ID，不返回其他同时发生的运行', async () => {
  const commands=[]; let reads=0;
  const run=(cmd,args)=> { commands.push(args); if(args[0]==='api')return JSON.stringify({workflow_runs:[{id:7,display_title:'npm-release-other',head_sha:'a'.repeat(40)},...(++reads>1?[{id:8,display_title:'npm-release-expected',head_sha:'a'.repeat(40),html_url:'https://github.com/run/8'}]:[])]}); return ''; };
  assert.equal((await dispatchRelease({sha:'a'.repeat(40),branch:'dev'},{run,requestId:'expected',wait:async()=>{}})).runId,8);
  assert.equal(commands.filter(c=>c[0]==='workflow').length,1);
});
test('重跑只接受本仓库发布工作流，且只触发一次', async () => {
  let count=0;const run=(cmd,args)=>args[0]==='api'?JSON.stringify({path:'.github/workflows/publish.yml',event:'workflow_dispatch',head_branch:'dev',repository:{full_name:'spo-fee/ssui'},status:'completed',conclusion:'failure'}):(count++,'');
  await retryRun('12',{run}); assert.equal(count,1);
  await assert.rejects(retryRun('../escape',{run}));
  await assert.rejects(retryRun('12',{run:()=>JSON.stringify({path:'.github/workflows/other.yml'})}));
});
test('已建立运行的恢复不再次 push，允许远端分支继续前进',async()=>{
 const run=(cmd,args)=>{
  if(cmd==='git')assert.fail('已建立运行不应再推送或检查远端分支头');
  return JSON.stringify({workflow_runs:[{id:9,display_title:'npm-release-saved',head_sha:'a'.repeat(40),html_url:'https://github.com/run/9'}]});
 };
 const result=await publishPrepared({sha:'a'.repeat(40),branch:'dev',tags:['aa-utils@2.2.1']},{run,requestId:'saved'});
 assert.equal(result.runId,9);
});
