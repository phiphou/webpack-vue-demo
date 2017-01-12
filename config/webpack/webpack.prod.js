const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')
const pkg = require('../../package.json')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin

module.exports = webpackMerge(commonConfig, {
  output: {
    path: path.resolve('./dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.API_endPoint': JSON.stringify('https://api.randomuser.me/')
    }),
    // Simply copies the files over
    new CopyWebpackPlugin([{
      from: 'src/public'
    }, {
      from: 'src/assets/',
      to: 'assets/'
    }], {
      ignore: ['*.pug', 'Thumbs.db']
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      compress: {
        screw_ie8: false,
        unused: true,
        warnings: false
      },
      comments: false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      comments: false
    }),
    new webpack.BannerPlugin({
      options: {
        raw: true,
        entryOnly: true
      },
      banner: getBanner()
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module, count) => {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../../node_modules')
          ) === 0
        )
      }
    })
  ],
  stats: {
    colors: true,
    hash: true,
    version: true,
    timings: true,
    assets: true,
    chunks: false,
    chunkModules: false,
    modules: true,
    children: false,
    cached: false,
    reasons: true,
    source: false,
    errorDetails: true,
    chunkOrigins: false
  }
})

// Generate banner text for Webpack banner"s plugin.
function getBanner () {
  let d = new Date()
  let m = d.getMonth() < 10 ? '0' + (d.getMonth() + 1) : d.getMonth() + 1
  let day = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
  return pkg.name + ' - v' + pkg.version + ' - ' + m + '-' + day + '-' + d.getFullYear() + '\nCopyright (c) ' + d.getFullYear() + ' ' + pkg.author + ' - Licensed ' + pkg.license
}
