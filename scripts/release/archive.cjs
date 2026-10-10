const fs = require('node:fs');
const crypto = require('node:crypto');
const { run } = require('./runtime.cjs');
const { check, validateMetadata } = require('./policy.cjs');
function integrity(file) { return `sha512-${crypto.createHash('sha512').update(fs.readFileSync(file)).digest('base64')}`; }
function inspectArchive(file, entry) {
  check(fs.statSync(file).size <= 100 * 1024 * 1024, '包文件超过 100 MiB');
  const names = run('tar', ['-tzf', file]).split('\n');
  const seen = new Set();
  for (const n of names) {
    check(n.startsWith('package/') && !n.split('/').includes('..') && !/[\\\x00-\x1f]/.test(n) && !seen.has(n), `非法 tar 路径: ${n}`);
    seen.add(n);
  }
  const listing = run('tar', ['-tvzf', file]).split('\n');
  check(listing.every(line => /^[-d]/.test(line)), 'tar 包不能包含符号链接或特殊文件');
  const pkg = validateMetadata(JSON.parse(run('tar', ['-xOzf', file, 'package/package.json'])), entry);
  for (const field of ['main', 'module', 'types']) check(seen.has(`package/${pkg[field].replace(/^\.\//, '')}`), `${entry.name}: 打包结果缺少 ${field} 入口`);
  return pkg;
}
module.exports = { integrity, inspectArchive };
