module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: [
    'eslint:recommended',
  ],
  env: {
    node: true,
    es6: true,
    jest: true
  },
  rules: {
    'no-console': 0,
    'comma-dangle': ["error", "never"],
    semi: [2, "always"]
  },
  globals: {
    ga: true
  }
};