
const getconfig = () => {
  const plugins = [
    [
      '@babel/plugin-transform-runtime',
      {
        help: false,
      },
    ],
  ];

  return {
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          useBuiltIns: 'entry',
          "corejs": 3,
          "loose": true
        },
      ],
      '@babel/preset-react',
    ],
    plugins,
  };
};


module.exports = getconfig();
