module.exports = {
  'Demo test Google': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer)
      .waitForElementVisible('body', 10000)
      .assert.elementPresent('.hello')
      .assert.containsText('.hello button', 'Reload')
      .expect.element('input[id=g_all').to.be.selected
  },

  'Demo test Google2': function (browser) {
    browser
      .click('input[id=g_male]', function (response) {
        this.expect.element('input[id=g_male').to.be.selected
      }).click('input[id=g_male]', function (response) {
        this.expect.element('input[id=g_male').to.be.selected
      })
      .pause(10000)
      .click('input[id=g_female]', function (response) {
        this.expect.element('input[id=g_female').to.be.selected
      })
      .pause(10000)
      .end()
  }
}
