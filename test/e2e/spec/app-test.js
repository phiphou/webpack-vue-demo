module.exports = {

  'Page load': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('.hello')
      .assert.containsText('.hello a', 'Refresh')
      .expect.element('input[id=g_all').to.be.selected
  },

  'Testing gender selection': function (browser) {
    browser
      .click('li label[id=g_male]', function (response) {
        this.expect.element('li input[id=g_male]').to.be.selected
      })
      .pause(50)
      .click('li label[id=g_female]', function (response) {
        this.expect.element('li input[id=g_female').to.be.selected
      })
      .pause(50)
      .click('li label[id=g_all]', function (response) {
        this.expect.element('li input[id=g_all').to.be.selected
      })
      .pause(50)
      .end()
  }
}
