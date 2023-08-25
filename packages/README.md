# @zzjiaxiang/eslint-config

- Only Support vue3.
- Support JavaScript and TypeScript also json and markdown
- ESLint analyzes code to find problems and
- Prettier auto fix for formatting.

## Install

```
npm install -D eslint @zzjiaxiang/eslint-config
or
pnpm add -D eslint @zzjiaxiang/eslint-config
```

## Config .eslintrc

```
{
  "extends": "@zzjiaxiang"
}
```

## Config .prettierrc

The preset uses the default prettier rules.
you can override the rules in your .prettierrc file.

```
{
  // such as
  "semi": false,
  "singleQuote": true
}
```

.prettierignore Exclude files that do not formatting.

## Setting you VS Code for auto fix

- Your VS Code needs to install Prettier and Eslint extension also keep open prettier
- Add the following settings to your settings.json:

```
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },
  "eslint.codeAction.showDocumentation": {
    "enable": true
  },
  // you can optional this following in your settings.json
  "eslint.validate": [
    "javascript",
    "typescript",
    "vue",
    "html",
    "markdown",
    "json"
  ],
```

## [TypeScript Rules](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

Will introduce some config when a tsconfig.json in the project root.
