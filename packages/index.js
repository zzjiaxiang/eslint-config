const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  plugins: [
    'import',
    'html',
    'markdown'
  ],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:eslint-comments/recommended',
    'plugin:import/recommended',
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    'plugin:jsonc/recommended-with-jsonc',
    'prettier'
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'] },
    },
    // see (https://www.npmjs.com/package/eslint-import-resolver-typescript)
    'import/parsers': {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    // see (https://github.com/import-js/eslint-plugin-import)
    "import/extensions": [
      ".js",
      ".jsx"
    ]
  },
  overrides: [
    {
      // see (https://github.com/vuejs/vue-eslint-parser#parseroptionsparser)
      // and (https://eslint.vuejs.org/user-guide/)
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: {
          // Script parser for `<script lang="ts">`
          "ts": '@typescript-eslint/parser',
        },
        ecmaFeatures: {
          jsx: true,
        }
      },
      rules: {
        'vue/no-v-html': 'warn',
        'vue/require-default-prop': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-v-text-v-html-on-component': 'off',
        'vue/html-self-closing': [
          'error',
          {
            html: {
              void: 'always',
              normal: 'always',
              component: 'always',
            },
            svg: 'always',
            math: 'always',
          },
        ],
      }
    },
    {
      // see (https://typescript-eslint.io/linting/typed-linting)
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended-type-checked'
      ],
      plugins: ['@typescript-eslint'],
      // see (https://typescript-eslint.io/packages/parser#project)
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
      rules: {
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        'require-await': 'off',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
        '@typescript-eslint/consistent-type-imports': [
          'error',
          { disallowTypeAnnotations: false },
        ],
        '@typescript-eslint/ban-ts-comment': ['off', { 'ts-ignore': false }],
      },
    },
    {
      // see (https://www.npmjs.com/package/eslint-plugin-markdown)
      files: ["**/*.md"],
      processor: "markdown/markdown"
    },
    {
      // see (https://www.npmjs.com/package/eslint-plugin-jsonc)
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
  ],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  // override/add rules settings here.
  rules: {
    // js/ts
    camelcase: ['error', { properties: 'never' }],
    'no-console': ['warn', { allow: ['error'] }],
    'no-debugger': 'warn',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'no-return-await': 'error',
    'no-var': 'error',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'prefer-const': [
      'warn',
      { destructuring: 'all', ignoreReadBeforeAssign: true },
    ],
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],
    'object-shorthand': [
      'error',
      'always',
      { ignoreConstructors: false, avoidQuotes: true },
    ],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',

    // best-practice
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'no-alert': 'warn',
    'no-case-declarations': 'error',
    'no-multi-str': 'error',
    'no-with': 'error',
    'no-void': 'error',

    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],

    // stylistic-issues
    'prefer-exponentiation-operator': 'error',

    // prettier
    'prettier/prettier': 'error',

    // import
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],

        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@vue/**',
            group: 'external',
            position: 'before',
          }
        ],
        pathGroupsExcludedImportTypes: ['type'],
      },
    ],
    'import/no-unresolved': 'off',
    'import/namespace': 'off',
    'import/default': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'import/named': 'off',

    // eslint-plugin-eslint-comments
    'eslint-comments/disable-enable-pair': ['error', { allowWholeFile: true }],

    // unicorn
    'unicorn/custom-error-definition': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/import-index': 'error',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-unsafe-regex': 'off',
    'unicorn/number-literal-case': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/throw-new-error': 'error',
  }
})
