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
});
