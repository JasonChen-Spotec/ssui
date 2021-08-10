export default {
  // ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  forkTSChecker: {},
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ],

    [
      'import',
      {
        libraryName: 'assui',
        style: true,
      },
      'assui',
    ],
  ],
  mode: 'site',
  title: 'ahooks',
  favicon: '/simple-logo.svg',
  logo: '/logo.svg',
  dynamicImport: {},
  manifest: {},
  links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  hash: true,
  resolve: {
    includes: ['docs', 'packages/assui/src'],
  },
  links: [{ rel: 'stylesheet', href: '/style.css' }],
  navs: {
    'zh-CN': [null, { title: 'GitHub', path: 'github.com:SPOTEC-LTD/assui.git' }],
    'en-US': [null, { title: 'GitHub', path: 'github.com:SPOTEC-LTD/assui.git' }],
  },
  headScripts: ['https://s4.cnzz.com/z_stat.php?id=1278992092&web_id=1278992092'],
};
