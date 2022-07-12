module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'import',
    '@typescript-eslint'
  ],
  rules: {
    'no-void': [0],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    'import/order': ['error', {
      groups: ['type', 'external', 'internal', 'builtin', 'object', 'index', 'parent', 'sibling'],
      'newlines-between': 'always'
    }]
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ]
}
