const process = require('process')

module.exports = {
  extends: [
    'next/core-web-vitals',
    'next',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:@conarti/feature-sliced/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['.eslintrc.js', 'next.config.js', 'jest.config.ts', 'public/**'],

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
  },
  plugins: ['react', '@typescript-eslint', 'react-refresh', 'sonarjs', 'jsdoc', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        typescript: true,
        node: true,
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react-hooks/exhaustive-deps': 'off',
    // 'no-use-before-define': 'warn',
    quotes: ['warn', 'single'],
    'linebreak-style': ['warn', process.platform === 'win32' ? 'windows' : 'unix'],
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
    curly: ['error', 'multi'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['error', 'as-needed'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    camelcase: 'error',
    'react/jsx-props-no-spreading': 'error',
    'import/no-named-as-default': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/member-ordering': [
      'error',
      { default: ['signature', 'method', 'constructor', 'field'] },
    ],
    '@typescript-eslint/no-confusing-non-null-assertion': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: false,
      },
    ],
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    'jsdoc/require-description-complete-sentence': [
      'error',
      {
        tags: ['see', 'copyright'],
      },
    ],
    'jsdoc/require-param': [
      'error',
      {
        checkDestructured: true,
      },
    ],
    'jsdoc/require-param-name': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/check-tag-names': 'error',
    'jsdoc/no-types': 'error',
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'jsdoc/check-alignment': 'error',
    'jsdoc/no-bad-blocks': 'error',
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
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

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
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/no-duplicate-string': 'error',
    'sonarjs/cognitive-complexity': 'error',

    '@conarti/feature-sliced/absolute-relative': 'warn',
  },
}
