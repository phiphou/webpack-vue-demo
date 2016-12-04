const config = require('../webpack/webpack.test')
const projectRoot = process.cwd()
  // http://nightwatchjs.org/guide#settings-file
module.exports = {
  src_folders: [projectRoot + '/test/e2e/'],
  output_folder: projectRoot + '/reports/e2e/',
  custom_commands_path: '',
  custom_assrtions_path: '',
  page_objects_path: 'test/e2e/pages',
  globals_path: 'config/nightwatch/globals.js',
  selenium: {
    start_process: true,
    request_timeout_options: {
      timeout: 10000,
      retry_attempts: 5
    },
    server_path: './node_modules/selenium-standalone/.selenium/selenium-server/2.53.1-server.jar',
    log_path: projectRoot + '/reports/e2e/',
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path,
      'webdriver.gecko.driver': require('geckodriver').path,
      'webdriver.firefox.profile': 'nightwatch'
    }
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: false,
      screenshots: {
        enabled: true,
        path: projectRoot + '/reports/e2e/screenshots',
        on_failure: true,
        on_error: true
      },
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || config.port)
      }
    },
    circleci: {
      output_folder: '${CIRCLE_TEST_REPORTS}' // eslint-disable-line no-template-curly-in-string
    },
    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
        marionette: true
      },
      screenshots: {
        path: projectRoot + '/reports/e2e/firefox/screenshots'
      },
      output_folder: projectRoot + '/reports/e2e/firefox'
    },
    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      screenshots: {
        path: projectRoot + '/reports/e2e/chrome/screenshots'
      },
      output_folder: projectRoot + '/reports/e2e/chrome'
    }
  }
}
