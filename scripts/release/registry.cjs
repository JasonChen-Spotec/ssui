const { REGISTRY, check } = require('./policy.cjs');
async function getPublished(name, version, options = {}) {
  const fetcher = options.fetch || globalThis.fetch;
  const response = await fetcher(`${REGISTRY}${encodeURIComponent(name)}/${encodeURIComponent(version)}`, { signal: AbortSignal.timeout(30000), headers: { Accept: 'application/json' } });
  if (response.status === 404) return null;
  check(response.ok, `npm registry 请求失败 ${response.status}: ${name}@${version}`);
  const pkg = await response.json();
  check(pkg.name === name && pkg.version === version, `npm registry 返回版本不符: ${name}@${version}`);
  return { integrity: pkg.dist?.integrity, tarball: pkg.dist?.tarball };
}
module.exports = { getPublished };
