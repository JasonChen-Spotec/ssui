module.exports = {
  extends: [require.resolve('code-rule/dist/eslint')],
  rules: {
    'no-param-reassign': [
      2,
      { props: true, ignorePropertyModificationsFor: ['draftState', 'draftData', 'draftValues'] },
    ],
  },
  settings: {
    react: {
      version: '999',
    },
  },
};
