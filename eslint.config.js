import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import perfectionist from 'eslint-plugin-perfectionist'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import reactPlugin from 'eslint-plugin-react'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      prettierConfig, // Disable conflicting rules
    ],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      perfectionist,
      'react': reactPlugin, // Add eslint-plugin-react
      prettier: prettierPlugin, // Add prettier plugin
    },
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
        },
      ],

      'perfectionist/sort-objects': [
        'error',
        {
          type: 'line-length',
          order: 'asc',
        },
      ],
      'perfectionist/sort-classes': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
        },
      ],

      'prettier/prettier': [
        'error',
        {
          printWidth: 100,
          singleQuote: true,
          jsxSingleQuote: false,
          bracketSameLine: false,
        },
      ],
      'react/self-closing-comp': [
        'error',
        {
          component: true,
          html: true,
        },
      ],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
  },
)
