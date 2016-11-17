const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {configFile: './.eslintrc.js'},
        context: '/'
      },
      minimize: false,
      debug: true,
      comments: true
    })
  ]
})
