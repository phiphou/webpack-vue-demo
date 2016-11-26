module.exports = {
  'Testing first load': function (browser) {
    const devServer = browser.globals.devServerURL
    browser
      .url(devServer).waitForElementVisible('body', 1000)
      .assert.elementPresent('.hello', 'Testing .hello presence.')
    browser.expect.element('.hello').to.have.css('display').which.equals('block')
    browser.assert.containsText('.hello a', 'Refresh', 'Testing refresh button')
    browser.expect.element('input[id=g_all').to.be.selected
    browser.getTitle(function (title) {
      this.assert.equal(typeof title, 'string', 'Title is a string.')
      this.assert.equal(title, 'webpack-vue-demo', 'Title is the good one.')
    })
    browser.pause(54000)
  },
  'Testing gender selection': function (browser) {
    browser.waitForElementVisible('ul.bob', 2000, function () {
      browser
      .click('li label[id=g_male]', function (response) {
        this.expect.element('li input[id=g_male]').to.be.selected
        this.assert.cssClassPresent('ul.bob li:nth-child(1) div img', 'male',
        'male class should be present in the first element.')
      })
      .click('li label[id=g_female]', function (response) {
        this.assert.cssClassNotPresent('ul.bob li:nth-child(1) div img', 'male',
        'male class should not be present anymore in the first element.')
        this.assert.cssClassPresent('ul.bob li:nth-child(1) div img', 'female',
        'female class should be present in the first element.')
      })
      .click('li label[id=g_all]', function (response) {
        this.expect.element('li input[id=g_all').to.be.selected
      })
    })
    browser.pause(1).end()
  }
}
