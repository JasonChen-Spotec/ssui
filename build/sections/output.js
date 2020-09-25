import resolveCwd from './resolveCwd';

const output = {
  publicPath: '/',
  path: resolveCwd('dist'),
  filename: '[name].[chunkhash:8].js',
  chunkFilename: '[name].[contenthash:8].async.js'
}

module.exports = output;
