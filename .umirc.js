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
};
