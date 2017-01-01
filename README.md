<p align="center">
    <a href="https://circleci.com/gh/phiphou/webpack-vue-demo">
      <img src="https://img.shields.io/circleci/project/phiphou/webpack-vue-demo.svg?maxAge=0" alt="CircleCI">
    </a>
    <a href="https://badge.fury.io/gh/phiphou%2Fwebpack-vue-demo">
      <img src="https://badge.fury.io/gh/phiphou%2Fwebpack-vue-demo.svg" alt="GitHub version">
    </a>
    <a href="https://david-dm.org/phiphou/webpack-vue-demo">
      <img src="https://david-dm.org/phiphou/webpack-vue-demo.svg" alt="Dependency Status">
    </a>
    <a href="https://david-dm.org/phiphou/webpack-vue-demo?type=dev">
      <img src="https://david-dm.org/phiphou/webpack-vue-demo/dev-status.svg" alt="devDependency Status">
    </a>
    <a href="https://codecov.io/gh/phiphou/webpack-vue-demo">
      <img src="https://codecov.io/gh/phiphou/webpack-vue-demo/branch/master/graph/badge.svg" alt="codecov">
    </a>
    <a href="http://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/Licence-MIT-blue.svg" alt="MIT license">
    </a>
    <a href="#" style="text-decoration:none">
      <img src="https://reposs.herokuapp.com/?path=phiphou/webpack-vue-demo" alt="Size">
    </a>
</p>
<p align="center">
  <a href="https://saucelabs.com/u/phiphou"><img src="https://saucelabs.com/browser-matrix/phiphou.svg" alt="Browser Matrix"></a>
</p>

# webpack-vue-demo

A very basic but complete demo project that use [VueJs](http://babeljs.io/) as front-end framework (with [Vue-resource](https://github.com/pagekit/vue-resource), [Vue-router](https://github.com/vuejs/vue-router) and [VueX](https://github.com/vuejs/vuex)), [Babel](http://babeljs.io/) for [ES6](http://www.ecma-international.org/ecma-262/6.0/)/[ES7](http://www.ecma-international.org/ecma-262/7.0/) transpilation, [Webpack2](http://webpack.github.io/) as module bundler, [SASS](http://sass-lang.com/) as CSS preprocessor, [Karma](https://karma-runner.github.io/1.0/), [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/) for unit tests, [nightwatch](http://nightwatchjs.org/) for e2e tests and finally [Istanbul](https://github.com/gotwarlost/istanbul) for code coverage.

## Quick Start

```bash
$ git clone --depth 1 https://github.com/phiphou/webpack-vue-demo.git
$ cd webpack-vue-demo
$ npm install
$ npm run start
```

Your default browser should open at [http://127.0.0.1:8080](http://127.0.0.1:8080), then you can start developing in [`./src/app/main.js`](https://github.com/phiphou/webpack-vue-demo/blob/master/src/app/main.js)

## Table of contents
 * [Quick Start](#quick-start)
 * [Install](#install)
 * [Usage](#usage)
   * [Development](#start-developping)
   * [Building](#building)
   * [Testing](#testing)
     * [Unit tests](#unit-tests)
     * [E2E tests](#e2e-tests)
     * [Coverage](#coverage)
   * [Continuous integration](#continuous-integration)
 * [License](#license)

## Install

First, make sure you've got [NodeJS](http://nodejs.org) installed. If not, go to [nodejs.org](http://nodejs.org) to download and install it. It will also install NPM.

If everything is ok, `node -v` should print your node version and `npm -v` should print NPM's one. Minimum requirements for this project are node >= `5.x.x` and NPM >= `3.x.x`.

Then, clone or fork this repo and run `npm install` to install the application.

```bash
$ git clone https://github.com/phiphou/webpack-vue-demo.git
$ cd webpack-vue-demo
$ npm install
```
Dependencies will be installed in the `./node_modules` folder.

You can also use the new **[Yarn](https://yarnpkg.com/)** package manager.

```bash
$ yarn
```

## Usage

### Start developping

Dive into development right now by just running:
```bash
$ npm run start
```

This will pre-build the application, start webpack's dev server and open your browser at [http://127.0.0.1:8080](http://127.0.0.1:8080). Then, have a look at [`./src/app/main.js`](https://github.com/phiphou/webpack-vue-demo/blob/master/src/app/main.js).

### Building

You can build the app and get a "ready to deploy" release by just running:

```bash
$ npm run prod
```

You'll find your build in the `./dist` directory

### Testing

#### Unit-tests

[Karma](https://karma-runner.github.io/0.13/index.html) is used as test-runner, you can configure it in the [`./config/karma/karma.conf.js`](/config/karma/karma.conf.js) file.

You can run tests by just typing :

```bash
$ npm run test
```

Tests are written in ES6 for [Mocha](http://mochajs.org/) and use [Chai](http://chaijs.com/) and [chai-as-promised](http://chaijs.com/plugins/chai-as-promised/).

Unit-tests are located in the `./test/unit/` folder and reports are available in the `./reports/unit` folder, in [JUnit](http://junit.org/junit4/) format and HTML report.

#### E2E-tests

[NightwatchJs](http://www.nightwatchjs.org) is used as E2E-tests test-runner, you can configure it in the [`./config/nightwatch.js`](/config/nightwatch.js) file.

E2E-tests are located in the `./test/e2e/` folder.

You can run e2e tests by just typing :

```bash
$ npm run e2e
```

Chrome browser is used as default config, but you can override this by running:

```bash
$ npm run e2e -- --env [chrome],[firefox]
```

Reports are available in the `./reports/e2e` folder in [JUnit](http://junit.org/junit4/) format and HTML report. In case of failed test(s), you'll find screenshots in the `./reports/e2e/screenshots` folder.

#### Code coverage

[Istanbul](https://github.com/gotwarlost/istanbul) is used as code coverage tool. You can configure it in the [`./config/karma/karma.conf.js`](/config/karma/karma.conf.js) file.

It will produce reports you'll find in the `./reports/coverage/[browser_name]/` folder (index.html) each time you run unit-tests.

It will also generate [LCOV format](http://ltp.sourceforge.net/coverage/lcov.php) report in the `./reports/coverage/[browser_name]` folder.


### Continuous integration

[CircleCI](https://circleci.com/) is used for continuous integration, [Codecov](https://codecov.io) for coverage and [SauceLabs](https://saucelabs.com/) for cross-browsers testing.

See [`./circleci.yml`](/circle.yml) and badges at the top of this document.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).
