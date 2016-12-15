const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true,
      comments: true
    })
  ],
  stats: {
    colors: true,
    hash: true,
    version: true,
    timings: true,
    assets: false,
    chunks: true,
    chunkModules: false,
    modules: false,
    children: false,
    cached: false,
    reasons: true,
    source: false,
    errorDetails: true,
    chunkOrigins: false
  }
})
