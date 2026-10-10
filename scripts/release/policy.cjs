const fs = require('node:fs');
const path = require('node:path');
const REPOSITORY = 'spo-fee/ssui';
const BRANCHES = ['dev', 'dev-atnd-6.x'];
const PACKAGES = ['a-base-icon', 'a-icons', 'aa-utils', 'amssui', 'assui', 'ec-common'];
const REGISTRY = 'https://registry.npmjs.org/';
const TAG = 'latest';
const MANIFEST = 'scripts/release/manifest.json';
const SHA = /^[a-f0-9]{40}$/;
function check(condition, message) { if (!condition) throw new Error(message); }
function versionParts(value) {
  check(typeof value === 'string', '版本号必须是字符串');
  const match = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([\da-zA-Z-]+(?:\.[\da-zA-Z-]+)*))?(?:\+([\da-zA-Z-]+(?:\.[\da-zA-Z-]+)*))?$/.exec(value);
  check(match, `无效版本号: ${value}`);
  const pre = match[4]?.split('.') || [];
  check(pre.every(p => !/^\d+$/.test(p) || p === '0' || !p.startsWith('0')), `预发布版本号含前导零: ${value}`);
  return { core: match.slice(1, 4).map(BigInt), pre };
}
function compareVersions(a, b) {
  a = versionParts(a); b = versionParts(b);
  for (let i = 0; i < 3; i++) if (a.core[i] !== b.core[i]) return a.core[i] > b.core[i] ? 1 : -1;
  if (!a.pre.length || !b.pre.length) return a.pre.length === b.pre.length ? 0 : a.pre.length ? -1 : 1;
  for (let i = 0; i < Math.max(a.pre.length, b.pre.length); i++) {
    if (a.pre[i] === undefined) return -1;
    if (b.pre[i] === undefined) return 1;
    if (a.pre[i] === b.pre[i]) continue;
    const an = /^\d+$/.test(a.pre[i]), bn = /^\d+$/.test(b.pre[i]);
    if (an && bn) return BigInt(a.pre[i]) > BigInt(b.pre[i]) ? 1 : -1;
    if (an !== bn) return an ? -1 : 1;
    return a.pre[i] > b.pre[i] ? 1 : -1;
  }
  return 0;
}
function validateContext(c) {
  check(c.repository === REPOSITORY, '拒绝其他仓库的发布');
  check(c.event === 'workflow_dispatch', '只允许手动触发发布工作流');
  check(BRANCHES.some(b => c.ref === `refs/heads/${b}`), '不允许从此分支发布');
  check(SHA.test(c.sha) && c.sha === c.requestedSha, '工作流提交与请求提交不一致；不会发布新的分支头');
}
function validateIdentity(c, publishersJson) {
  validateContext(c);
  let users;
  try { users = JSON.parse(publishersJson); } catch { throw new Error('NPM_PUBLISHERS 必须是 JSON 用户名数组'); }
  check(Array.isArray(users) && users.length && users.every(u => typeof u === 'string' && /^[a-z\d-]+$/i.test(u)), 'NPM_PUBLISHERS 为空或无效');
  for (const actor of [c.actor, c.triggeringActor]) check(typeof actor === 'string' && users.some(u => u.toLowerCase() === actor.toLowerCase()), `没有发布权限: ${actor || '(未提供用户名)'}`);
}
function validateManifest(m) {
  check(m?.schemaVersion === 1 && BRANCHES.includes(m.branch) && SHA.test(m.baseSha) && m.tag === TAG, '无效发布清单');
  check(Array.isArray(m.packages) && m.packages.length > 0 && m.packages.length <= PACKAGES.length, '发布包清单为空或过大');
  const names = new Set();
  for (const e of m.packages) {
    check(PACKAGES.includes(e.name) && e.path === `packages/${e.name}` && !names.has(e.name), '非法或重复的包名/路径');
    check(compareVersions(e.version, e.oldVersion) > 0, `${e.name}: 版本必须递增`);
    // Both release lines intentionally publish stable versions under latest.
    check(!e.version.includes('-') && !e.version.includes('+'), 'latest 发布只接受正式版本，请选择不含预发布或构建后缀的版本');
    names.add(e.name);
  }
  return m;
}
function validateMetadata(pkg, e) {
  check(pkg.name === e.name && pkg.version === e.version && pkg.private !== true, `包名/版本/private 不符: ${e.name}`);
  const repo = typeof pkg.repository === 'string' ? pkg.repository : pkg.repository?.url;
  check(repo === `git+https://github.com/${REPOSITORY}.git`, `${e.name}: repository 必须指向真实 GitHub 仓库`);
  if (pkg.publishConfig) for (const [key, value] of Object.entries(pkg.publishConfig)) {
    const allowed = { registry: REGISTRY, access: 'public', tag: TAG, provenance: true };
    check(Object.hasOwn(allowed, key) && value === allowed[key], `${e.name}: 不允许的 publishConfig.${key}`);
  }
  for (const key of ['main', 'module', 'types']) {
    const value = pkg[key];
    check(typeof value === 'string' && /^(?:\.\/)?(?:lib|es)\//.test(value) && !value.split('/').includes('..') && !value.includes('\\'), `${e.name}: ${key} 必须指向 lib/es 内的文件`);
  }
  check(!pkg.bundleDependencies && !pkg.bundledDependencies, '发布包不能捆绑未经清单检查的 node_modules');
  return pkg;
}
function validatePackage(root, entry) {
  const dir = path.join(fs.realpathSync(root), entry.path);
  check(fs.realpathSync(dir) === dir, `包目录不能是符号链接: ${entry.path}`);
  return validateMetadata(JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8')), entry);
}
function ciContext(env = process.env) {
  return { repository: env.GITHUB_REPOSITORY, ref: env.GITHUB_REF, sha: env.GITHUB_SHA, requestedSha: env.RELEASE_SHA, event: env.GITHUB_EVENT_NAME, actor: env.GITHUB_ACTOR, triggeringActor: env.GITHUB_TRIGGERING_ACTOR, runId: env.GITHUB_RUN_ID, runAttempt: env.GITHUB_RUN_ATTEMPT };
}
module.exports = { REPOSITORY, BRANCHES, PACKAGES, REGISTRY, TAG, MANIFEST, SHA, check, compareVersions, validateContext, validateIdentity, validateManifest, validateMetadata, validatePackage, ciContext };
