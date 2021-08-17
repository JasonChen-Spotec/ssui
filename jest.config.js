module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  clearMocks: true,
  coverageDirectory: 'test/coverage',
  collectCoverage: true,

  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
