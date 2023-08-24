// see (https://eslint.org/docs/latest/use/core-concepts)
const { defineConfig } = require("eslint-define-config");
const process = require("node:process");

module.exports = defineConfig({
  root: true,
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  reportUnusedDisableDirectives: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:import/recommended",
    "plugin:jsonc/recommended-with-jsonc",
    "plugin:markdown/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "import",
    "promise",
    "html",
    "unicorn",
    "unused-imports",
    "prettier",
  ],
  rules: {
    // prettier
    "prettier/prettier": ["warn"],
    // js/ts
    "no-undef": "off",
    camelcase: ["error", { properties: "never" }],
    "no-console": ["warn", { allow: ["error"] }],
    "no-debugger": "warn",
    "no-constant-condition": ["error", { checkLoops: false }],
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-return-await": "error",
    "no-var": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "prefer-const": [
      "warn",
      { destructuring: "all", ignoreReadBeforeAssign: true },
    ],
    "prefer-arrow-callback": [
      "error",
      { allowNamedFunctions: false, allowUnboundThis: true },
    ],
    "object-shorthand": [
      "error",
      "always",
      { ignoreConstructors: false, avoidQuotes: true },
    ],
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",

    "no-redeclare": ["error", { builtinGlobals: false }],
    // eslint-plugin-eslint-comments
    "eslint-comments/disable-enable-pair": ["error", { allowWholeFile: true }],
    // best-practice
    "array-callback-return": "error",
    "block-scoped-var": "error",
    "no-alert": "warn",
    "no-case-declarations": "error",
    "no-multi-str": "error",
    "no-with": "error",
    "no-void": "error",

    "sort-imports": [
      "warn",
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    // import
    "import/no-unresolved": "off",
    "object-curly-spacing": ["error", "always"],

    // unicorn
    "unicorn/custom-error-definition": "error",
    "unicorn/error-message": "error",
    "unicorn/escape-case": "error",
    "unicorn/import-index": "error",
    "unicorn/new-for-builtins": "error",
    "unicorn/no-array-method-this-argument": "error",
    "unicorn/no-array-push-push": "error",
    "unicorn/no-console-spaces": "error",
    "unicorn/no-for-loop": "error",
    "unicorn/no-hex-escape": "error",
    "unicorn/no-instanceof-array": "error",
    "unicorn/no-invalid-remove-event-listener": "error",
    "unicorn/no-new-array": "error",
    "unicorn/no-new-buffer": "error",
    "unicorn/no-unsafe-regex": "off",
    "unicorn/number-literal-case": "error",
    "unicorn/prefer-array-find": "error",
    "unicorn/prefer-array-flat-map": "error",
    "unicorn/prefer-array-index-of": "error",
    "unicorn/prefer-array-some": "error",
    "unicorn/prefer-date-now": "error",
    "unicorn/prefer-dom-node-dataset": "error",
    "unicorn/prefer-includes": "error",
    "unicorn/prefer-keyboard-event-key": "error",
    "unicorn/prefer-math-trunc": "error",
    "unicorn/prefer-modern-dom-apis": "error",
    "unicorn/prefer-negative-index": "error",
    "unicorn/prefer-number-properties": "error",
    "unicorn/prefer-optional-catch-binding": "error",
    "unicorn/prefer-prototype-methods": "error",
    "unicorn/prefer-query-selector": "error",
    "unicorn/prefer-reflect-apply": "error",
    "unicorn/prefer-string-slice": "error",
    "unicorn/prefer-string-starts-ends-with": "error",
    "unicorn/prefer-string-trim-start-end": "error",
    "unicorn/prefer-type-error": "error",
    "unicorn/throw-new-error": "error",
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
    },
    // see (https://www.npmjs.com/package/eslint-import-resolver-typescript)
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    // see (https://github.com/import-js/eslint-plugin-import)
    "import/extensions": [".js", ".jsx"],
  },
  overrides: [
    {
      // see (https://github.com/vuejs/vue-eslint-parser#parseroptionsparser)
      // and (https://eslint.vuejs.org/user-guide/)
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: {
          // Script parser for `<script lang="ts">`
          ts: "@typescript-eslint/parser",
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    {
      // see (https://typescript-eslint.io/linting/typed-linting)
      excludedFiles: ["**/*.md/*.*", "vite.config.ts"],
      files: ["*.ts", "*.tsx", "*.mts", "*.cts"],
      parser: "@typescript-eslint/parser",
      extends: [
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended-type-checked",
      ],
      plugins: ["@typescript-eslint"],
      // see (https://typescript-eslint.io/packages/parser#project)
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: process.cwd(),
      },
      rules: {
        "@typescript-eslint/no-redeclare": "error",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "error",
        "no-implied-eval": "off",
        "@typescript-eslint/no-implied-eval": "error",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": ["error", { allowKeywords: true }],
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-misused-promises": "error",
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "error",
        "@typescript-eslint/no-unsafe-argument": "error",
        "@typescript-eslint/no-unsafe-assignment": "error",
        "@typescript-eslint/no-unsafe-call": "error",
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-unsafe-return": "error",
        "require-await": "off",
        "@typescript-eslint/require-await": "error",
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/restrict-template-expressions": "error",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-non-null-asserted-optional-chain": "off",
        "@typescript-eslint/consistent-type-imports": [
          "error",
          { disallowTypeAnnotations: false },
        ],
        "@typescript-eslint/ban-ts-comment": ["off", { "ts-ignore": false }],
      },
    },
    {
      // see (https://www.npmjs.com/package/eslint-plugin-markdown)
      files: ["**/*.md"],
      processor: "markdown/markdown",
    },
    {
      // see (https://www.npmjs.com/package/eslint-plugin-jsonc)
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  ignorePatterns: [
    "node_modules/",
    "*.min.*",
    "*.d.ts",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "out",
    "coverage",
    "public",
    "temp",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    // ignore for in lint-staged
    "*.css",
    "*.png",
    "*.ico",
    "*.toml",
    "*.patch",
    "*.txt",
    "*.crt",
    "*.key",
    "Dockerfile",
    // force include
    "!.github",
    "!.vitepress",
    "!.vscode",
    // force exclude
    "**/.vitepress/cache",
  ],
});
