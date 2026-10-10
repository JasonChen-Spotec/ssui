const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const { run } = require('./runtime.cjs');
const { prepareRelease, localPreflight } = require('./prepare.cjs');
function fixture(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ssui-git-')); t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  const root = path.join(dir, 'repo'), remote = path.join(dir, 'remote.git');
  run('git', ['init', '--bare', remote]); run('git', ['init', '-b', 'dev', root]);
  const git = args => run('git', args, { cwd: root });
  git(['config', 'user.email', 'test@example.com']); git(['config', 'user.name', 'Release Test']);
  for (const name of ['a-base-icon','a-icons','aa-utils','amssui','assui','ec-common']) {
    fs.mkdirSync(path.join(root, `packages/${name}`), { recursive: true });
    fs.writeFileSync(path.join(root, `packages/${name}/package.json`), JSON.stringify({ name, version: '2.1.38' }));
  }
  fs.writeFileSync(path.join(root, '.gitignore'), 'packages/*/lib/\npackages/*/es/\n');
  git(['add', '.']); git(['commit', '-m', 'base']); git(['remote', 'add', 'origin', remote]); git(['push', '-u', 'origin', 'dev']);
  const runner = (cmd, args, opts) => {
    if (cmd === 'gh') return args[0] === 'api' ? JSON.stringify({ login: 'EllaLee-spotec' }) : '';
    if (cmd === 'git' && args[0] === 'remote' && args[1] === 'get-url') return 'https://github.com/spo-fee/ssui.git';
    return run(cmd, args, opts);
  };
  return { root, git, runner };
}
test('干净源码无需 lib/es 即可准备版本，脏源码及领先远端会拒绝', async t => {
  const f = fixture(t); assert.equal((await localPreflight(f.root, f.runner)).branch, 'dev');
  fs.mkdirSync(path.join(f.root, 'packages/aa-utils/lib')); fs.writeFileSync(path.join(f.root, 'packages/aa-utils/lib/index.js'), 'ignored');
  assert.equal((await localPreflight(f.root, f.runner)).branch, 'dev');
  fs.writeFileSync(path.join(f.root, 'dirty.txt'), 'dirty'); await assert.rejects(localPreflight(f.root, f.runner), /工作区/);
  f.git(['add', 'dirty.txt']); f.git(['commit', '-m', 'ahead']); await assert.rejects(localPreflight(f.root, f.runner), /同步/);
});
test('准备自定义版本及清单；确认取消保留文件且不创建提交', async t => {
  const f = fixture(t); const base = f.git(['rev-parse', 'HEAD']);
  const versionRunner = (cmd, args, opts) => {
    if (cmd === process.execPath && args[0].endsWith('lerna/cli.js')) { const p=path.join(f.root,'packages/aa-utils/package.json'); fs.writeFileSync(p,JSON.stringify({name:'aa-utils',version:'2.2.1'})); return ''; }
    return f.runner(cmd,args,opts);
  };
  const result = await prepareRelease({ root:f.root, run:versionRunner, confirm:async()=>false, lookup:async()=>null });
  assert.equal(result,null); assert.equal(f.git(['rev-parse','HEAD']),base);
  assert.equal(JSON.parse(fs.readFileSync(path.join(f.root,'packages/aa-utils/package.json'))).version,'2.2.1');
});
test('确认后清单、提交和 tag 相同；CI 校验对应父提交版本', async t => {
  const f = fixture(t); const { readRelease } = require('./ci.cjs');
  const versionRunner = (cmd,args,opts) => {
    if(cmd===process.execPath){const p=path.join(f.root,'packages/aa-utils/package.json');fs.writeFileSync(p,JSON.stringify({name:'aa-utils',version:'2.2.1'}));return '';}
    return f.runner(cmd,args,opts);
  };
  const result = await prepareRelease({root:f.root,run:versionRunner,confirm:async()=>true,lookup:async()=>null});
  assert.equal(f.git(['rev-parse','aa-utils@2.2.1^{}']),result.sha);
  assert.equal(result.manifest.packages[0].version,'2.2.1');
  const c={repository:'spo-fee/ssui',ref:'refs/heads/dev',sha:result.sha,requestedSha:result.sha,event:'workflow_dispatch'};
  assert.equal(readRelease(f.root,c).baseSha,result.manifest.baseSha);
  assert.equal(f.git(['rev-parse','origin/dev']),result.manifest.baseSha);
});
test('Git hook 改源码会阻止生成发布 tag', async t => {
  const f=fixture(t);const hook=path.join(f.root,'.git/hooks/pre-commit');
  fs.writeFileSync(hook,'#!/bin/sh\nprintf changed > unexpected.txt\ngit add unexpected.txt\n');fs.chmodSync(hook,0o755);
  const runner=(cmd,args,opts)=>{if(cmd===process.execPath){fs.writeFileSync(path.join(f.root,'packages/aa-utils/package.json'),JSON.stringify({name:'aa-utils',version:'2.2.1'}));return '';}return f.runner(cmd,args,opts);};
  await assert.rejects(prepareRelease({root:f.root,run:runner,confirm:async()=>true,lookup:async()=>null}),/非预期/);
  assert.equal(f.git(['tag','--list']),'');
});
