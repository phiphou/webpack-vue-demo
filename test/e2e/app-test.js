var SauceLabs = require('saucelabs')
var sauce = function (client, done) {
  var saucelabs = new SauceLabs({
    username: process.env.SAUCE_USERNAME,
    password: process.env.SAUCE_ACCESS_KEY
  })
  var sessionid = client.sessionId
  var jobName = client.currentTest['module']
  let a = client.globals.test_settings.report_prefix.split('_')
  client.globals.test_settings.report_prefix = `${client.options.desiredCapabilities.platform.replace(/\s/g, '_')}_${a[0]}_${a[1]}_`
  saucelabs.updateJob(sessionid, {
    passed: client.currentTest.results.failed === 0,
    name: jobName
  }, function () {})
  done()
}
module.exports = {
  'Testing Home page': browser => {
    var homePage = browser.page.Home()
    homePage.init()
    // this.waitForElementVisible('@active_link', 1000)
    // homePage.assert.urlEquals('http://localhost:8082/#/home')
    // browser.saveScreenshot(browser.screenshotsPath + '/screenshot.png')
    homePage.assert.cssClassPresent('@active_link', 'router-link-active')
    homePage.expect.element('@homeDiv').to.be.present
    homePage.assert.containsText('@homeDiv', 'Home')
  },
  'Testing About page': browser => {
    var aboutPage = browser.page.About()
    aboutPage.init()
    aboutPage.assert.cssClassPresent('@active_link', 'router-link-active')
    aboutPage.expect.element('@aboutDiv').to.be.present
    aboutPage.assert.containsText('@aboutDiv', 'About')
  },
  'Testing peopleList route': browser => {
    var peopleListPage = browser.page.PeopleList()
    peopleListPage.init()
    peopleListPage.checkTitle()
    browser.cssProp('.hello', 'display', function (result) {
      console.log(result)
      this.assert.equal(result.value, 'block')
    })
    // peopleListPage.checkDisplay()
    // peopleListPage.assert.urlEquals('http://localhost/dist/#/peopleList')
    // peopleListPage.expect.element('@peopleListDiv').to.have.css('display').which.equals('block')
    peopleListPage.expect.element('input[id=g_all]').to.be.selected
  },
  'Testing gender selection': browser => {
    var peopleListPage = browser.page.PeopleList()
    browser.waitForElementVisible('ul.bob', 10000, () => {
      // browser.saveScreenshot(browser.screenshotsPath + '/screenshot.png')
      peopleListPage.checkMaleGenderSelection()
      peopleListPage.checkFemaleGenderSelection()
      peopleListPage.checkAllGenderSelection()
    })
    browser.pause(1).end()
  },
  after: function (client, done) {
    sauce(client, done)
  }
}
