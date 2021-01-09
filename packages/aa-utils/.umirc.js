// 配置文件内容
export default {
  base: '/aa-utils',
  publicPath: '/aa-utils/',
  exportStatic: {},
  favicon: '/favicon.ico',
  mode: 'site',
  logo: '/reacticon.svg',
  hash: true,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
      'antd',
    ]
  ],
  chainWebpack(memo, { env, webpack, createCSSRule }) {
    memo.module.rules.delete('svg');

    memo.module
      .rule('svg')
        .test(/\.svg$/)
        .use('svg')
          .loader('@svgr/webpack')
  }
};
