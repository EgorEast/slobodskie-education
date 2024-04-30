/* eslint-disable */
const process = require('process')

module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    '@feature-sliced',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'next',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-refresh', 'sonarjs'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-use-before-define': 'error',
    quotes: ['warn', 'single'],
    'linebreak-style': ['warn', process.platform === 'win32' ? 'windows' : 'unix'],
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    curly: ['error', 'multi'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    'react/self-closing-comp': ['error', { component: true, html: true }],
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          '../**/app/',
          '../**/pages/',
          '../**/widgets/',
          '../**/features/',
          '../**/entities/',
          '../**/shared/',
        ],
      },
    ],
    // feature-sliced/import-order
    'import/order': 'error',
    // feature-sliced/public-api
    'import/no-internal-modules': [
      'error',
      {
        allow: [
          'pages/*',
          'widgets/*',
          'features/*',
          'entities/*',
          'shared/*',

          '@testing-library/**',
          'antd/**',
          'dayjs/**',
          'styled-components/**',
          'next/**',
        ],
      },
    ],
    // feature-sliced/layers-slices
    'boundaries/element-types': 'error',
    'react-refresh/only-export-components': ['error', { allowConstantExport: true }],

    // для accessibility
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/mouse-events-have-key-events': 'error',
    'jsx-a11y/label-has-associated-control': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': [
      'error',
      {
        handlers: ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp'],
      },
    ],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: ['none', 'presentation'],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
        li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
        table: ['grid'],
        td: ['gridcell'],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: ['tabpanel'],
      },
    ],
  },
}
