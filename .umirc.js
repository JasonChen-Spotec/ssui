export default {
  // ssr: {},
  base: '/sui',
  publicPath: '/sui/',
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
      'babel-plugin-import',
      {
        libraryName: 'assui',
        style: true,
      },
      'assui',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'a-icons',
        style: false,
        camel2DashComponentName: false,
      },
      'a-icons',
    ],
    [
      'babel-plugin-import',
      {
        libraryName: 'aa-utils',
        style: false,
        camel2DashComponentName: false,
      },
      'aa-utils',
    ],
  ],
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.module.rules.delete('svg');
    memo.module
      .rule('svg')
      .test(/\.svg$/)
      .use('svg')
      .loader('@svgr/webpack');
  },

  mode: 'site',
  title: 'assui',
  favicon: '/favicon.ico',
  logo: '/logo.svg',
  locales: [['zh-CN', '中文']],
  dynamicImport: {},
  manifest: {},
  links: [{ rel: 'manifest', href: '/asset-manifest.json' }],
  hash: true,
  resolve: {
    includes: ['docs', 'packages/assui/src', 'packages/a-icons/demo', 'packages/aa-utils/src'],
  },
  navs: {
    'zh-CN': [null, { title: 'GitHub', path: 'https://github.com:SPOTEC-LTD/assui.git' }],
  },
};
