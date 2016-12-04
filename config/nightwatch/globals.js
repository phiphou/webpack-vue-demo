const HtmlReporter = require('nightwatch-html-reporter')
const date = new Date().toISOString().replace(/:/g, '-').slice(0, -5)
const reporter = new HtmlReporter({
  /* If true the generated html will be opened in your browser after the test run. */
  openBrowser: !process.env.CIRCLE_ENV,
  /* The directory you've set nightwatch to store your reports. */
  reportsDirectory: process.cwd() + '/reports/e2e/' + process.env.__NIGHTWATCH_ENV,
  /* The filename that the html report will be saved as. */
  reportFilename: `e2e_${date}.html`,
  /* The theme that will be used to generate the html report. */
  themeName: 'outlook',
  /* If true then only errors will be shown in the report. */
  hideSuccess: false,
  /* If true we append a timestamp to the end of the generated report filename */
  uniqueFilename: false,
  /* If true we convert screenshot paths from absolute paths to relative to output file. */
  relativeScreenshots: false
})
module.exports = {
  reporter: reporter.fn
}
