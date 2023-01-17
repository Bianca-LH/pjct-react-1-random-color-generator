/** @type {import('@typescript-eslint/utils').TSESLint.Linter.Config} */
const config = {
  extends: ['@upleveled/upleveled'],
};
module.exports = {
  rules: {
    // Note: you must disable the base rule as it can report incorrect errors
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
  },
};
module.exports = config;
