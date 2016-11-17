[![CircleCI](https://img.shields.io/circleci/project/phiphou/webpack-es6-demo.svg?maxAge=2592000)](https://circleci.com/gh/phiphou/webpack-es6-demo)
[![GitHub version](https://badge.fury.io/gh/phiphou%2Fwebpack-es6-demo.svg)](https://badge.fury.io/gh/phiphou%2Fwebpack-es6-demo)
[![Dependency Status](https://david-dm.org/phiphou/webpack-es6-demo.svg)](https://david-dm.org/phiphou/webpack-es6-demo)
[![devDependency Status](https://david-dm.org/phiphou/webpack-es6-demo/dev-status.svg)](https://david-dm.org/phiphou/webpack-es6-demo#info=devDependencies)
[![codecov](https://codecov.io/gh/phiphou/webpack-es6-demo/branch/master/graph/badge.svg)](https://codecov.io/gh/phiphou/webpack-es6-demo)
[![MIT license](https://img.shields.io/badge/Licence-MIT-blue.svg)](http://opensource.org/licenses/MIT)
[![Size](https://reposs.herokuapp.com/?path=phiphou/webpack-es6-demo)](#)

# webpack-es6-demo

A very basic but complete demo project that use [Babel](http://babeljs.io/) for [ES6](http://www.ecma-international.org/ecma-262/6.0/) transpilation, [Webpack2](http://webpack.github.io/) as module loader, [SASS](http://sass-lang.com/) as a CSS preprocessor, [Karma](https://karma-runner.github.io/1.0/), [Mocha](http://mochajs.org/), [Chai](http://chaijs.com/), [chai-as-promised](http://chaijs.com/plugins/chai-as-promised/), [Sinon](http://sinonjs.org/), [sinon-stub-promise](https://github.com/substantial/sinon-stub-promise) for tests, and [Istanbul](https://github.com/gotwarlost/istanbul) for code coverage.

## Quick Start

```bash
$ npm i -g webpack webpack-dev-server karma-cli rimraf
$ git clone --depth 1 https://github.com/phiphou/webpack-es6-demo.git
$ cd webpack-es6-demo
$ npm install
$ npm run start
```

Your default browser should open at [http://127.0.0.1:8080](http://127.0.0.1:8080), then you can start developing in [`./src/app/main.js`](https://github.com/phiphou/webpack-es6-demo/blob/master/src/app/main.js)

## Table of contents
 * [Quick Start](#quick-start)
 * [Installing](#installing)
   * [Global dependencies](#global-dependencies)
   * [Install](#install)
 * [Usage](#usage)
   * [Development](#start-developing)
   * [Building](#building)
   * [Testing](#testing)
 * [License](#license)

## Installing

First, make sure you've got [NodeJS](http://nodejs.org) installed. If not, go to [nodejs.org](http://nodejs.org) to download and install it. It will also install NPM.

If everything is ok, `node -v` should print your node version and `npm -v` should print NPM's one. Minimum requirements for this project are node >= `5.x.x` and NPM >= `3.x.x`.

### Global dependencies

Before installing the application, you may have to install some global dependencies.

| Dependency                                         | Version       | Install                       |
| :------------------------------------------------- | :------------ | :---------------------------- |
| [Webpack](http://webpack.github.io)                | 2.1.0-beta.25 | `npm i webpack -g`            |
| [Rimraf](https://github.com/isaacs/rimraf)         | 2.5.x         | `npm i rimraf -g`             |
| [Karma](https://github.com/karma-runner/karma-cli) | 1.3.x         | `npm i karma-cli -g`          |
| [Webpack dev server](http://webpack.github.io)     | 2.1.0-beta.0  | `npm i webpack-dev-server -g` |

You can also install all these dependencies in just one command :

`$ npm i -g webpack webpack-dev-server karma-cli rimraf`

### Install

Clone or fork this repo and run `npm install` to install the application.

```bash
$ git clone https://github.com/phiphou/webpack-es6-demo.git
$ cd webpack-es6-demo
$ npm install
```
Dependencies will be installed in the `./node_modules` folder.

## Usage

#### Start developping

Dive into development right now by just running:
```bash
$ npm run start
```

This will pre-build the application, start webpack's dev server and open your browser at [http://127.0.0.1:8080](http://127.0.0.1:8080). Then, have a look at [`./src/app/main.js`](https://github.com/phiphou/webpack-es6-demo/blob/master/src/app/main.js).

#### Building

You can build the app and get a "ready to deploy" release by just running:

```bash
$ npm run prod
```

You'll find your build in the `./dist` directory

#### Testing

[Karma](https://karma-runner.github.io/0.13/index.html) is used as test-runner, you can configure it in the [`./config/karma/karma.conf.js`](/config/karma/karma.conf.js) file.
You can run tests by just typing :

```bash
$ npm run test
```

Tests are written in ES6 for [Mocha](http://mochajs.org/) and use [Chai](http://chaijs.com/), [chai-as-promised](http://chaijs.com/plugins/chai-as-promised/), [Sinon](http://sinonjs.org/) and  [sinon-stub-promise](https://github.com/substantial/sinon-stub-promise).

#### Code coverage

[Istanbul](https://github.com/gotwarlost/istanbul) is used as code coverage tool. You can configure it in the [`./config/karma/karma.conf.js`](/config/karma/karma.conf.js) file.

It will produce reports you'll find in the `./coverage` folder each time you run unit-tests.

## License

This project is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).
