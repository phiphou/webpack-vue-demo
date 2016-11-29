module.exports = config => {
  config.set({
    autoWatch: false,
    browsers: process.env.CIRCLE_ENV ? ['PhantomJS'] : ['Chrome'],
    coverageReporter: {
      dir: '../../reports/coverage',
      reporters: process.env.CIRCLE_ENV
        ? [ {type: 'html'},
            {type: 'text-summary'},
            {type: 'lcovonly', subdir: '.'},
            {type: 'json', subdir: '.'}
        ]
        : [ {type: 'html'},
            {type: 'text-summary'}
        ],
      subdir: function (browser) {
        return browser.toLowerCase().split(/[ /-]/)[0]
      },
      watermarks: {
        statements: [50, 99],
        functions: [50, 99],
        branches: [50, 99],
        lines: [50, 99]
      }
    },
    frameworks: ['mocha', 'chai'],
    files: ['./karma.entry.js'],
    logLevel: config.LOG_INFO,
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        // success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      },
      output: 'full'
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-webpack',
      'karma-mocha',
      'karma-chai',
      'karma-chai-as-promised',
      'karma-sourcemap-loader',
      'karma-mocha-reporter',
      'karma-junit-reporter'
    ],
    preprocessors: {'./karma.entry.js': ['webpack']},
    reporters: ['mocha', 'coverage', 'junit'],
    junitReporter: {
      outputFile: '../../../reports/junit/test-results.xml'
    },
    singleRun: true,
    webpack: require('../webpack/webpack.test'),
    webpackServer: {noInfo: true}
  })
}
