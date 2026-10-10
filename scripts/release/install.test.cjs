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
