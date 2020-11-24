module.exports = {
  extends: [
    require.resolve('code-rule/dist/eslint'),
    'plugin:react-hooks/recommended'
  ],
  env: {
    browser: true,
    node: true,
    mocha: true,
    jest: true,
    es6: true
  },
  globals: {
    'location': true,
    'window': true,
    '__TESTING__': true,
    'process.env.BASE_API': true,
    '__SERVERRENDER__': true,
    '__STATIC__': true,
    '__DEV__': true,
    '__PREFIX_CLS__': true,
    'mockStore': true,
    'jest': true
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-param-reassign': 0,
    'arrow-body-style': 0,
    'space-before-function-paren': 1,
    'no-plusplus': 0,
    'indent': ['error', 2, { SwitchCase: 1 }],
    'o-restricted-syntax': 0
  }
};
