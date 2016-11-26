const webpack = require('webpack')
const path = require('path')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
  output: {publicPath: '/'},
  devServer: {
    port: 8080,
    host: '127.0.0.1',
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    stats: 'minimal',
    contentBase: path.resolve('src/public')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
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
