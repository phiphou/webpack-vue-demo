var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
const webpackConfig = require('./webpack/webpack.dev')
const path = require('path')
const express = require('express')
const opn = require('opn')
var port = process.env.PORT || 8082

webpackConfig.entry.app.unshift('webpack-dev-server/client?http://localhost:8082/')
var compiler = webpack(webpackConfig)
var server = new WebpackDevServer(compiler, {
  // webpack-dev-server options

  contentBase: path.resolve('/'),
  historyApiFallback: true,
  setup: function (app) {
    var jsonServer = require('json-server')
    app.use('/assets', express.static(path.join(__dirname, '../src/assets/')))
    app.use('/api', jsonServer.router(path.join(__dirname, '../test/mocks/db.json')))
  },

  // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
  staticOptions: {
  },

  clientLogLevel: 'info',
  quiet: false,
  inline: true,
  noInfo: process.env.NODE_ENV === 'testing',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  publicPath: webpackConfig.output.publicPath,
  stats: { colors: true }
})

module.exports = server.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
