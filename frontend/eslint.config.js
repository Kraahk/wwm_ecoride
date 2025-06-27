import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // Bloc principal : React + TSX
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: globals.browser,
    },
    plugins: {
      js,
      '@typescript-eslint': tseslint.plugin,
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended[0].rules,
      ...pluginReact.configs.flat.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },

  // Bloc spécifique : fichiers Node.js comme config (tailwind, postcss)
  {
    files: ['tailwind.config.js', 'postcss.config.cjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
