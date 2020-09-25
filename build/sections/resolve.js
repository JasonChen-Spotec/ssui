import resolveCwd from './resolveCwd';

const resolve = {
  extensions: ['.js', '.jsx'],
  alias: {
    '@': resolveCwd('src'),
  }
};

export default resolve;
