module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'semi':'error',
    'quotes': ['error','single'],
    'jsx-quotes': ['error','prefer-double'],
    'indent': ['error', 2],
    'max-len': ['error', {'code': 80,'ignoreStrings': true }],
    'no-multiple-empty-lines':'error',
    'no-trailing-spaces':'error',
    'no-unused-vars':'warn',
    'no-undef':'warn',
    'no-console':'warn',
    'object-curly-spacing': ['error','always'],
    'react/jsx-tag-spacing': [2, {'beforeSelfClosing':'always' }]
  },
}
