import plugins from './sections/plugins';
import getWebpackCommonConfig from './sections/webpackCommonConfig';
import entry from './sections/entry';
import output from './sections/output';
import optimization from './sections/optimization';


const webpackConfig = {
    devtool: '#source-map',
    entry,
    output,
    module: {
      rules: getWebpackCommonConfig.getLoaders().concat(getWebpackCommonConfig.getStyleLoaders(false)),
    },
    resolve: getWebpackCommonConfig.resolve,
    plugins,
    mode: 'development',
    optimization,
};


export default webpackConfig;
