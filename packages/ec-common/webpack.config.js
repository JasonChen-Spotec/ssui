const merge = require('webpack-merge');
const path = require('node:path');
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
        test: /\.(png|jpe?g|gif|svg)$/i, // 👈 匹配图片文件
        type: 'asset/resource', // 👈 使用 asset module 自动生成文件 URL
        generator: {
          filename: 'assets/[name].[hash:8][ext]', // 👈 输出路径格式
        },
      },
    ],
  },
});
