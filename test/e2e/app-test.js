module.exports = {
  'Testing Home page': browser => {
    var homePage = browser.page.Home()
    homePage.init()
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
    browser.assert.urlEquals('http://localhost:8082/#/peopleList')
    peopleListPage.expect.element('@peopleListDiv').to.have.css('display').which.equals('block')
    browser.expect.element('input[id=g_all').to.be.selected
  },
  'Testing gender selection': browser => {
    var peopleListPage = browser.page.PeopleList()
    browser.waitForElementVisible('ul.bob', 2000, function () {
      console.log(browser)
      browser.saveScreenshot(browser.screenshotsPath + '/fileName.png')
      peopleListPage.checkMaleGenderSelection()
      peopleListPage.checkFemaleGenderSelection()
      peopleListPage.checkAllGenderSelection()
    })
    browser.pause(1).end()
  }
}
