import reactPlugin from 'eslint-plugin-react';
import storybookPlugin from 'eslint-plugin-storybook';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ["node_modules"],
  },
  {
    files: ["**/*.jsx", "**/*.tsx"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'no-debugger': 'warn',
    },
  },
  {
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      // TypeScript 用のルールをここに追加できます
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    plugins: {
      storybook: storybookPlugin,
    },
    rules: {
      // Storybook recommended rules (手動で定義)
      ...storybookPlugin.configs.recommended.rules,
    },
  },
];
