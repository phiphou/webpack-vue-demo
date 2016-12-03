module.exports = {
  url: function () {
    return this.api.globals.devServerURL + '/about'
  },
  elements: {
    active_link: '.menu li.home > a',
    homeDiv: '#home'
  },
  commands: [{
    init () {
      this.navigate()
      this.waitForElementVisible('body', 1000)
      return this.api
    }
  }]
}
