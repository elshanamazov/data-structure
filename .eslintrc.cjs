module.exports = {
  extends: ['airbnb-base', 'airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-console': 2,
    'import/prefer-default-export': 0,
  },
};
