const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack/webpack.prod')
const opn = require('opn')
const path = require('path')
var port = process.env.PORT || 8082
var app = express()
var compiler = webpack(webpackConfig)
var jsonServer = require('json-server')

app.use('/api', jsonServer.router(path.join(__dirname, '../test/mocks/db.json')))

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// serve pure static assets
// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use('./', express.static('../../src/public'))

module.exports = app.listen(port, (err) => {
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
