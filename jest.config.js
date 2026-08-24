module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  clearMocks: true,
  coverageDirectory: 'test/coverage',
  collectCoverage: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/', '/dist/'],
  coveragePathIgnorePatterns: ['/node_modules/', '/lib/', '/es/', '/dist/'],

  globals: {
    'ts-jest': {
      tsconfig: {
        ...require('./tsconfig.json').compilerOptions,
        allowJs: true,
      },
    },
  },
};
