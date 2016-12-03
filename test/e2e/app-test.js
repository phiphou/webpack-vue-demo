module.exports = {
  'Testing Home page': browser => {
    var homePage = browser.page.Home()
    homePage.init()
    .assert.cssClassPresent('@active_link', 'router-link-active')
    .expect.element('@homeDiv').to.be.present
    .assert.containsText('@homeDiv', 'Home')
  },
  'Testing About page': browser => {
    var aboutPage = browser.page.About()
    aboutPage.init()
    .assert.cssClassPresent('@active_link', 'router-link-active')
    .expect.element('@aboutDiv').to.be.present
    .assert.containsText('@aboutDiv', 'About')
  },
  'Testing peopleList route': browser => {
    var peopleListPage = browser.page.PeopleList()
    peopleListPage.init()
    peopleListPage.checkTitle()
    .assert.urlEquals('http://localhost:8082/#/peopleList')
    .expect.element('@peopleListDiv').to.have.css('display').which.equals('block')
    .expect.element('input[id=g_all').to.be.selected
  },
  'Testing gender selection': browser => {
    var peopleListPage = browser.page.PeopleList()
    browser.waitForElementVisible('ul.bob', 2000, () => {
      browser.saveScreenshot(browser.screenshotsPath + '/screenshot.png')
      peopleListPage.checkMaleGenderSelection()
      peopleListPage.checkFemaleGenderSelection()
      peopleListPage.checkAllGenderSelection()
    })
    browser.pause(1).end()
  }
}
