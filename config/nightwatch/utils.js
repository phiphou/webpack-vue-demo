const defaultBrowser = 'chrome'

function makeDate () {
  return new Date().toISOString().replace(/:/g, '-').slice(0, -5)
}

function makeReportsDir () {
  return process.env.__NIGHTWATCH_ENV || defaultBrowser
}

function makeReportFilename () {
  let commit = process.env.CIRCLE_ENV ? process.env.CIRCLE_SHA1.substr(0, 7) : ''
  let build = process.env.CIRCLE_ENV ? process.env.CIRCLE_BUILD_NUM : ''
  let prefix = process.env.CIRCLE_ENV ? `${commit}_${build}` : ``
  return `${makeReportsDir()}_e2e_${makeDate()}_${prefix}.html`
}

exports.defaultBrowser = defaultBrowser
exports.date = makeDate()
exports.reportsDir = makeReportsDir()
exports.reportFilename = makeReportFilename()
