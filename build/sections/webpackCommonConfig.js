

import fs from 'fs';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import autoprefixer from 'autoprefixer';
import lessToJS from 'less-vars-to-js';
import getBabelCommonConfig from './getBabelCommonConfig';
import resolve from './resolve';
import resolveCwd from './resolveCwd';
import { prefixCls } from './consts';

const autoprefixerConfig = autoprefixer({
  remove: false
});

const babelConfig = getBabelCommonConfig();

const themeVariables = lessToJS(
  fs.readFileSync(resolveCwd('./src/shared/styles/themes/default.less'), 'utf8')
);

export default {
  resolve,
  getLoaders() {
    return [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: babelConfig
      },
      {
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/font-woff',
        },
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/octet-stream',
        },
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'assets/images',
              name: '[name].[ext]?[contenthash:8]',
            },
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'spotec-icon-[name]'
            }
          }
        ]
      },
    ];
  },

  getStyleLoaders(extractCss) {
    const styleLoader = {
      loader: 'style-loader',
    };

    const postcssLoader = {
      loader: 'postcss-loader',
      options: { plugins: [autoprefixerConfig] },
    };

    const getCSSLoader = (isCSSModules) => [
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          sourceMap: true,
          ...(isCSSModules
            ? {
                modules: {
                  localIdentName: '[local]___[hash:base64:5]',
                },
              }
            : {}),
        },
      },
      postcssLoader,
    ];

    const cssLoader = getCSSLoader();

    const getLessLoaders = (isCSSModules)=>([
      ...getCSSLoader(isCSSModules),
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            strictMath: false,
            modifyVars: {
              'ant-prefix': prefixCls,
              ...themeVariables
            },
            javascriptEnabled: true,
          },
        },
      }
    ])

    const modulesLessLoaders = getLessLoaders(true);
    const normalLessLoaders = getLessLoaders(false);

    if (extractCss) {
      const extractCssLoader = {
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it use publicPath in webpackOptions.output
        }
      }
      cssLoader.unshift(extractCssLoader);
      modulesLessLoaders.unshift(extractCssLoader);
      normalLessLoaders.unshift(extractCssLoader);
    } else {
      cssLoader.unshift(styleLoader);
      modulesLessLoaders.unshift(styleLoader);
      normalLessLoaders.unshift(styleLoader);
    }
    return [
      {
        test: /\.css$/,
        use: cssLoader,
      },
      {
        test: /\.less$/,
        include: resolveCwd('src'),
        use: modulesLessLoaders,
      },
      {
        test: /\.less$/,
        include: resolveCwd('node_modules'),
        use: normalLessLoaders,
      },
    ];
  },
};
