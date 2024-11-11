import eslintPluginCypress from 'eslint-plugin-cypress'
import pluginJs from '@eslint/js'

export default [
  {
    languageOptions: {
      globals: {
        // Generelle globale variabler for nettlesermiljø
        cy: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        FormData: 'readonly',
        document: 'readonly',
        location: 'readonly',
        alert: 'readonly',
        window: 'readonly',
        URL: 'readonly',
        Image: 'readonly',
        URLSearchParams: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: {
      cypress: eslintPluginCypress,
    },
    rules: {
      'no-undef': ['error'],
      'no-unused-vars': ['warn'],
    },
  },
  pluginJs.configs.recommended,
  {
    files: ['**/*.test.js', '**/*.spec.js', '**/*.cy.js'],
    languageOptions: {
      globals: {
        jest: 'readonly',
        global: 'readonly',
        beforeEach: 'readonly',
        'cypress/globals': 'readonly',
      },
    },
    rules: {
      'no-undef': 'off',
    },
  },
  {
    files: ['cypress.config.cjs'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
]
