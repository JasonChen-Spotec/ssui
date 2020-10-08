// 配置文件内容
export default {
  favicon: '/favicon.ico',
  mode: 'site',
  logo: '/reacticon.svg',
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
