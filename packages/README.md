# @zzjiaxiang/eslint-config

- Only support vue3.
- Support JavaScript and TypeScript also markdown.
- ESLint analyzes code to find problems.
- Prettier auto fix for formatting.

Preset use [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) runs Prettier as an ESLint rule. and use [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to disable all formatting-related ESLint rules.

## Install

```
npm install -D eslint @zzjiaxiang/eslint-config
or
pnpm add -D eslint @zzjiaxiang/eslint-config
```

## Config .eslintrc

```
{
  "root": true,
  "extends": "@zzjiaxiang"
}
```

The preset has exclude some files that do not need to be checked,you also add file in `.eslintignore`.

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

Setting `.prettierignore` exclude files that do not formatting.

## Setting you VS Code for auto fix

- Your VS Code needs to install Prettier and Eslint extension also keep open prettier.
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
  // Comment out the configuration related to Vue file formatting
  // "[vue]": {
  //   "editor.defaultFormatter": "Vue.volar"
  // },
```

## [TypeScript Rules](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

- Setting some rules in the tsconfig.json in the project root.
- preset extends `@typescript-eslint/stylistic-type-checked`, so setting [compilerOptions.strictNullChecks](https://www.typescriptlang.org/tsconfig#strictNullChecks) help you check for possible null or undefined values, of course you can also close the rules `"@typescript-eslint/prefer-nullish-coalescing": "off"`.

```
 // tsconfig.json
{

  "compilerOptions": {
    "strictNullChecks": true
  }

  // other config...
  // The following is optional.
  // add your rules here.
    "baseUrl": ".",
    "target": "es6",
    "module": "es2022",
    "moduleResolution": "Bundler",
    "esModuleInterop": true
}
```

## override rules

you can override or close the rules.

```
// .eslintrc
{
  "root": true,
  "extends": "@zzjiaxiang",
  rules:{
    // your rules...
  }
}
```
