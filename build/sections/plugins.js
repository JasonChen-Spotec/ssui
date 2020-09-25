import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackBar from 'webpackbar';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import resolveCwd from './resolveCwd';
import { envEnum, prefixCls } from './consts';

const env = process.env.NODE_ENV || envEnum.development;
const definitions = {
  'process.env.NODE_ENV': JSON.stringify(env),
  NODE_ENV: JSON.stringify(env),
  __STATIC__: env === envEnum.static,
  __DEV__: env === envEnum.development,
  __PRODUCTION__: env === envEnum.production,
  __TESTING__: env === envEnum.test,
  __PREFIX_CLS__: JSON.stringify(prefixCls)
};

const webpackBar = new WebpackBar();
const definePlugin = new webpack.DefinePlugin(definitions)
const replacementPlugin = new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh/);
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  chunks: ['index'],
  title: 'panda-web',
  template: resolveCwd('src/index.html'),
  filename: 'index.html',
  // favicon: './build/sections/favicon.png',
  inject: true
})

const uglifyJsPlugin = new UglifyJsPlugin({ sourceMap: true })
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].[hash:8].css',
  chunkFilename: '[id].[hash:8].css',
})

const cleanWebpackPlugin = new CleanWebpackPlugin();
// const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();

const plugins = [
  cleanWebpackPlugin,
  webpackBar,
  htmlWebpackPlugin,
  definePlugin,
  replacementPlugin,
  // bundleAnalyzerPlugin
];


if (env === 'production') {
  plugins.push(uglifyJsPlugin)
  plugins.push(miniCssExtractPlugin)
}

export default plugins;
