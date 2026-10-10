const { test }=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');const os=require('node:os');const path=require('node:path');
const {installDependencies}=require('./ci.cjs');
test('缺少任何子包锁文件，安装前即失败；安装失败不会继续 bootstrap',()=>{
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'ssui-locks-'));
 try{
  let calls=0;assert.throws(()=>installDependencies(dir,()=>{calls++;}),/锁文件/);assert.equal(calls,0);
  for(const name of ['','packages/a-base-icon','packages/a-icons','packages/aa-utils','packages/amssui','packages/assui','packages/ec-common']){fs.mkdirSync(path.join(dir,name),{recursive:true});fs.writeFileSync(path.join(dir,name,'yarn.lock'),'# fixture');}
  assert.throws(()=>installDependencies(dir,()=>{calls++;throw new Error('frozen lock mismatch');}),/frozen lock mismatch/);assert.equal(calls,1);
 }finally{fs.rmSync(dir,{recursive:true,force:true});}
});

test('根目录与 Lerna 子包安装均优先使用缓存，并保留冻结安装及锁文件检查', t => {
 const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ssui-cache-install-'));
 t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
 const locks = ['yarn.lock', ...['a-base-icon', 'a-icons', 'aa-utils', 'amssui', 'assui', 'ec-common'].map(name => `packages/${name}/yarn.lock`)];
 for (const file of locks) { fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true }); fs.writeFileSync(path.join(dir, file), '# fixture'); }
 const calls = [];
 installDependencies(dir, (command, args, options) => { calls.push({ command, args, options }); return ''; });
 assert.equal(calls.length, 3);
 assert.equal(calls[0].command, 'yarn');
 for (const flag of ['--frozen-lockfile', '--ignore-scripts', '--non-interactive', '--prefer-offline']) assert.ok(calls[0].args.includes(flag), flag);
 assert.equal(calls[1].command, process.execPath);
 assert.ok(calls[1].args.includes('bootstrap'));
 assert.ok(calls[1].args.includes('--ignore-scripts'));
 assert.ok(calls[1].args.includes('--force-local'));
 const forwarded = calls[1].args.slice(calls[1].args.indexOf('--') + 1);
 for (const flag of ['--frozen-lockfile', '--non-interactive', '--prefer-offline']) assert.ok(forwarded.includes(flag), flag);
 for (const call of calls.slice(0, 2)) { assert.equal(call.options.cwd, dir); assert.ok(!call.args.includes('--offline'), '缓存缺失时应允许联网下载'); }
 assert.equal(calls[2].command, 'git');
 assert.deepEqual(calls[2].args, ['diff', '--name-only', '--', ...locks]);
 assert.throws(() => installDependencies(dir, command => command === 'git' ? 'yarn.lock' : ''), /安装修改了锁文件/);
});
