import globals from 'globals';
import typescriptESLintParser from '@typescript-eslint/parser';
import pluginTypescriptESLint from '@typescript-eslint/eslint-plugin';
import pluginImport from 'eslint-plugin-import';
import pluginJs from '@eslint/js';

export default [
  {
    ignores: ['dist/*', '.angular/*', '.prettierrc.js', '**/*.spec.ts'],
  },
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptESLintParser,
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
      },
    },
    plugins: {
      '@typescript-eslint': pluginTypescriptESLint,
      import: pluginImport,
    },
  },
  pluginJs.configs.recommended,
];
