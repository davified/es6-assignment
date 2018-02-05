# Simple Template for Writing/Running ES6 (using `babel`)

### Getting Started
- Fork the repo
- clone the repo and `cd` into basic-es6-template`
- run `yarn install`
- run `yarn start` and you should see 'hello world' printed to the console 

### What this template does to allow us to run ES6:
- installs `babel-cli` and `babel-preset-es2015`
- has a custom `yarn start` script which runs: `babel-node --presets es2015 file2.js` (note the use of `babel-node` instead of `node`)

### Try it!
- Run `node file2.js` and you will see an error, because `file2.js` is using the ES6 import syntax
- Run `yarn start` instead, and everything will run fine.

---
Copyright (c) 2018 ThoughtWorks. For personal use and training purposes only; not to be copied or distributed without further approval.
