const optimization = {
  splitChunks: {
    chunks: 'all',
    minSize: 30000,
    automaticNameDelimiter: '-',
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      }
    }
  }
}

export default optimization;
