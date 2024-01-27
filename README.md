# Setup

yarn add husky lint-staged

yarn add -D eslint prettier


npm init @eslint/config

// package.json
```js
"lint-staged": {
    "**/**/*.{js,ts,json,html,css}": "prettier --write",
    "**/*.ts": "eslint"
  },
```

```js
"sripts": {
    "lint": "lint-staged"
  }
```
yarn husky-init && yarn install

npx husky add .husky/pre-commit 

