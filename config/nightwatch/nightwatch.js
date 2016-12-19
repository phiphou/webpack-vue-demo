const config = require('../webpack/webpack.test')
const projectRoot = process.cwd()
const utils = require('./utils.js')
  // http://nightwatchjs.org/guide#settings-file
module.exports = {
  src_folders: [`${projectRoot}/test/e2e/`],
  output_folder: `${projectRoot}/reports/e2e/${utils.reportsDir}/`,
  custom_commands_path: `${projectRoot}/test/commands/`,
  custom_assrtions_path: '',
  page_objects_path: 'test/e2e/pages',
  globals_path: 'config/nightwatch/globals.js',
  selenium: {
    start_process: !process.env.CIRCLE_ENV,
    server_path: './node_modules/selenium-standalone/.selenium/selenium-server/2.53.1-server.jar',
    log_path: `${projectRoot}/reports/e2e/`,
    host: '127.0.0.1',
    port: 4444,
    silent: true,
    cli_args: {
      'webdriver.chrome.driver': './node_modules/selenium-standalone/.selenium/chromedriver/2.25-x64-chromedriver',
      'webdriver.gecko.driver': require('geckodriver').path
    }
  },
  // 'test_workers': {'enabled': true, 'workers': 'auto'},
  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: process.env.CIRCLE_ENV ? 80 : 4444,
      selenium_host: process.env.CIRCLE_ENV ? 'ondemand.saucelabs.com' : 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        path: projectRoot + `/reports/e2e/${utils.reportsDir}/screenshots`,
        on_failure: true,
        on_error: true
      },
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.port)
      },
      /* eslint-disable no-template-curly-in-string */
      username: process.env.CIRCLE_ENV ? '${SAUCE_USERNAME}' : '',
      access_key: process.env.CIRCLE_ENV ? '${SAUCE_ACCESS_KEY}' : '',
      desiredCapabilities: {
        build: 'build-' + (process.env.CIRCLE_BUILD_NUM || process.env.SAUCE_BUILD_ID || Date.now()),
        passed: true,
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },
    circleci: {
      /* eslint-disable no-template-curly-in-string */
      output_folder: '${CIRCLE_TEST_REPORTS}'
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        marionette: true
      }
    },
    'firefox_mac': {
      desiredCapabilities: {
        browserName: 'firefox',
        platform: 'OS X 10.11',
        marionette: true
      }
    },
    'chrome_win7': {
      desiredCapabilities: {
        browserName: 'chrome',
        platform: 'Windows 7'
      }
    },
    'ie11': {
      desiredCapabilities: {
        platform: 'Windows 7',
        browserName: 'internet explorer'
      }
    },
    'edge14': {
      desiredCapabilities: {
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '14.14393'
      }
    },
    'android': {
      selenium_host: 'ondemand.saucelabs.com',
      selenium_port: 80,
      username: '${SAUCE_USERNAME}',
      access_key: '${SAUCE_ACCESS_KEY}',
      desiredCapabilities: {
        browserName: 'android'
      }
    },
    'ios': {
      selenium_host: 'ondemand.saucelabs.com',
      selenium_port: 80,
      username: '${SAUCE_USERNAME}',
      access_key: '${SAUCE_ACCESS_KEY}',
      desiredCapabilities: {
        browserName: 'iPhone'
      }
    }
  }
}
