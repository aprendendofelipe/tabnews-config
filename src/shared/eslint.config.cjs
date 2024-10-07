const eslintJs = require('@eslint/js');
const pluginNext = require('@next/eslint-plugin-next');
const pluginImport = require('eslint-plugin-import');
const pluginJsxA11y = require('eslint-plugin-jsx-a11y');
const pluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const pluginPrimerReact = require('eslint-plugin-primer-react');
const pluginReact = require('eslint-plugin-react');
const pluginReactHooks = require('eslint-plugin-react-hooks');
const pluginVitest = require('eslint-plugin-vitest');
const pluginVitestGlobals = require('eslint-plugin-vitest-globals');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    settings: {
      react: {
        version: '18',
      },
      'import/resolver': {
        node: {
          paths: ['.'],
        },
        typescript: {
          project: ['jsconfig.json', 'tsconfig.json'],
        },
      },
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@next/next': pluginNext,
      import: pluginImport,
      'jsx-a11y': pluginJsxA11y,
      'primer-react': pluginPrimerReact,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
    },
    rules: {
      ...eslintJs.configs.recommended.rules,
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      ...pluginImport.configs.recommended.rules,
      ...pluginJsxA11y.flatConfigs.recommended.rules,
      ...pluginPrimerReact.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      '@next/next/no-html-link-for-pages': 0,
      'import/newline-after-import': 'warn',
      'import/no-duplicates': 'warn',
      'import/no-useless-path-segments': [
        'warn',
        {
          noUselessIndex: true,
        },
      ],
      'import/order': [
        'warn',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
        },
      ],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-control-regex': 0,
      'no-sparse-arrays': 0,
      'no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
        },
      ],
      'prefer-const': 'warn',
      'react/react-in-jsx-scope': 0,
      'react/prop-types': 0,
      'react/no-unknown-property': ['error', { ignore: ['global', 'jsx'] }],
      'require-await': 'warn',
      'sort-imports': [
        'warn',
        {
          allowSeparatedGroups: true,
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
    },
  },
  {
    files: ['tests/*', '**/*.test.*', '**/*.spec.*'],
    ignores: ['tests/e2e/**'],
    languageOptions: pluginVitestGlobals.environments.env,
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
      'vitest/no-conditional-in-test': 'warn',
      'vitest/no-disabled-tests': 'warn',
      'vitest/no-focused-tests': 'warn',
      'vitest/prefer-strict-equal': 'warn',
      'vitest/prefer-to-be': 'warn',
    },
  },
  {
    ...pluginPrettierRecommended,
    rules: {
      ...pluginPrettierRecommended.rules,
      'prettier/prettier': 'warn',
    },
  },
  {
    ignores: ['**/.next/**', '**/__snapshots__/*', '**/coverage/**', '**/dist/*'],
  },
];
