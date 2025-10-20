const merge = require('webpack-merge');
const path = require('path');
const common = require('../../webpack.common.js');

module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'assui.js',
    library: 'assui',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/, // 只处理 JS/TS 文件里的 import
        use: ['@svgr/webpack', 'file-loader'], // 或 type: 'asset/resource' 替换 file-loader
      },
    ],
  },
});
