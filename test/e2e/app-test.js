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
    // const devServer = browser.globals.devServerURL
    browser
      .url('http://localhost:8082/#/peopleList')
      .waitForElementVisible('.hello', 100)
      .assert.elementPresent('.hello', 'Testing .hello presence.')
    browser.expect.element('.hello').to.have.css('display').which.equals('block')
    browser.expect.element('input[id=g_all').to.be.selected
    browser.getTitle(function (title) {
      this.assert.equal(typeof title, 'string', 'Title is a string.')
      this.assert.equal(title, 'webpack-vue-demo', 'Title is the good one.')
    })
    browser.assert.urlEquals('http://localhost:8082/#/peopleList')
  },

  'Testing gender selection': browser => {
    browser.waitForElementVisible('ul.bob', 2000, function () {
      browser
        .click('li label[id=g_male]', response => {
          this.expect.element('li input[id=g_male]').to.be.selected
          this.assert.cssClassPresent('ul.bob li:nth-child(1) div img', 'male',
            'male class should be present in the first element.')
        })
        .click('li label[id=g_female]', response => {
          this.assert.cssClassNotPresent('ul.bob li:nth-child(1) div img', 'male',
            'male class should not be present anymore in the first element.')
          this.assert.cssClassPresent('ul.bob li:nth-child(1) div img', 'female',
            'female class should be present in the first element.')
        })
        .click('li label[id=g_all]', response => {
          this.expect.element('li input[id=g_all').to.be.selected
        })
    })
    browser.pause(1).end()
  }
}
