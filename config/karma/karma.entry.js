// Polyfill fn.bind() for PhantomJS
/* eslint-disable no-extend-native */
Function.prototype.bind = require('function-bind')

var exclude = ['./main.js']
var context = require.context('../../src/app', true, /\.js$/)
context.keys().forEach(key => {
  if (exclude.indexOf(key) === -1) context(key)
})
