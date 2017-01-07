// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')
Function.prototype.promise = require('core-js/es6/promise')
var exclude = ['./main.js']
var context = require.context('../../src/app', true, /\.js$/)
context.keys().forEach(key => {
  if (exclude.indexOf(key) === -1) context(key)
})
var testContext = require.context('../../test/unit', true, /\.spec\.js$/)
testContext.keys().forEach(key => {
  if (exclude.indexOf(key) === -1) testContext(key)
})
