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

  contentBase: path.resolve('../src/public'),
  // Can also be an array, or: contentBase: "http://localhost/",
  // Enable special support for Hot Module Replacement
  // Page is no longer updated, but a "webpackHotUpdate" message is sent to the content
  // Use "webpack/hot/dev-server" as additional module in your entry point
  // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

  historyApiFallback: true,
  // Set this as true if you want to access dev server from arbitrary url.
  // This is handy if you are using a html5 router.

  // Set this if you want to enable gzip compression for assets

  // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
  // Use "**" to proxy all paths to the specified server.
  // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
  // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).

  setup: function (app) {
    // Here you can access the Express app object and add your own custom middleware to it.
    // For example, to define custom handlers for some paths:
    // app.get('/some/path', function(req, res) {
    //   res.json({ custom: 'response' });
    // });
    // var compiler = webpack(webpackConfig)
    var jsonServer = require('json-server')

    app.use('/api', jsonServer.router(path.join(__dirname, '../test/mocks/db.json')))
    app.use('./', express.static('../../src/public'))
  },

  // pass [static options](http://expressjs.com/en/4x/api.html#express.static) to inner express server
  staticOptions: {
  },

  clientLogLevel: 'info',
  // Control the console log messages shown in the browser when using inline mode. Can be `error`, `warning`, `info` or `none`.

  // webpack-dev-middleware options
  quiet: false,
  inline: true,
  noInfo: process.env.NODE_ENV === 'testing',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  // It's a required option.
  publicPath: '/',
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
