const HtmlReporter = require('nightwatch-html-reporter')
const utils = require('./utils.js')
const reporter = new HtmlReporter({
  openBrowser: !process.env.CIRCLE_ENV,
  reportsDirectory: `${process.cwd()}/reports/e2e/${utils.reportsDir}/`,
  reportFilename: utils.reportFilename,
  themeName: 'outlook',
  hideSuccess: false,
  uniqueFilename: false,
  relativeScreenshots: false,
  logLevel: 3
})
module.exports = {
  reporter: reporter.fn
}
