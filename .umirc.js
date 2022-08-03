export default {
  // ssr: {},
  base: '/ssui',
  publicPath: '/ssui/',
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  // forkTSChecker: {},
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
        libraryDirectory: 'es',
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
  favicon: '/sui/favicon.ico',
  logo: '/sui/logo.svg',
  locales: [['zh-CN', '中文']],
  dynamicImport: {},
  manifest: {},
  hash: true,
  links: [
    { rel: 'stylesheet', href: '/sui/antd.min.css' }, // fix product demo no antd styles
    { rel: 'stylesheet', href: '/sui/single-img-upload.css' },
    { rel: 'stylesheet', href: '/sui/split-pane.css' },
    { rel: 'stylesheet', href: '/sui/highlight-textarea.css' },
  ],
  resolve: {
    includes: [
      'docs',
      'packages/assui/src',
      'packages/a-icons/demo',
      'packages/aa-utils/src',
      'packages/amssui/src',
    ],
  },
  navs: {
    'zh-CN': [null, { title: 'GitHub', path: 'https://github.com:SPOTEC-LTD/assui.git' }],
  },
};
