const pkg = require('../../package.json')
module.exports = config => {
  // http://karma-runner.github.io/1.0/config/configuration-file.html
  config.set({
    autoWatch: false,
    browserDisconnectTimeout: 2000,
    browserNoActivityTimeout: 10000,
    browserConsoleLogOptions: {
      level: 'debug',
      format: '%b %T: %m',
      terminal: false
    },
    browsers: process.env.CIRCLE_ENV ? ['PhantomJS'] : ['Chrome'],
    captureTimeout: 60000,
    colors: true,
    concurrency: Infinity,
    coverageReporter: {
      dir: '../../reports/coverage',
      reporters: process.env.CIRCLE_ENV
        ? [ {type: 'html'},
            {type: 'text-summary'},
            {type: 'lcovonly', subdir: '.'},
            {type: 'json', subdir: '.'}
        ]
        : [ {type: 'html'},
            {type: 'text-summary'},
            {type: 'lcovonly'}
        ],
      subdir: function (browser) {
        return browser.toLowerCase().split(/[ /-]/)[0]
      },
      watermarks: {
        statements: [50, 90],
        functions: [50, 90],
        branches: [50, 90],
        lines: [50, 90]
      }
    },
    failOnEmptyTestSuite: true,
    frameworks: ['mocha', 'chai'],
    files: ['./karma.entry.js'],
    htmlReporter: {
      outputFile: '../../reports/unit/unit_tests_report.html',
      pageTitle: pkg.name + ' - Unit Tests',
      subPageTitle: pkg.description,
      groupSuites: true,
      useCompactStyle: false,
      useLegacyStyle: false
    },
    junitReporter: {
      outputFile: '../../../reports/unit/test-results.xml'
    },
    // logLevel: config.LOG_INFO,
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
      'karma-junit-reporter',
      'karma-htmlfile-reporter'
    ],
    preprocessors: {'./karma.entry.js': ['webpack']},
    reporters: ['mocha', 'html', 'junit', 'coverage'],
    reportSlowerThan: 0,
    singleRun: true,
    webpack: require('../webpack/webpack.test'),
    webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i.e.
      // noInfo: true,
            // and use stats to turn off verbose output
      stats: {
        // options i.e.
        colors: true,
        hash: true,
        version: true,
        timings: true,
        assets: false,
        chunks: false,
        chunkModules: false,
        modules: false,
        children: false,
        cached: false,
        reasons: true,
        source: false,
        errorDetails: true,
        chunkOrigins: false
      }
    },
    webpackServer: {noInfo: true}
  })
}
