module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  clearMocks: true,
  coverageDirectory: 'test/coverage',
  collectCoverage: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^assui$': '<rootDir>/packages/assui/src/index.ts',
    '\\.(css|less)$': '<rootDir>/jest.style-mock.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/', '/dist/'],
  // The private root and published component package share the name "assui".
  modulePathIgnorePatterns: ['<rootDir>/package.json'],
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
