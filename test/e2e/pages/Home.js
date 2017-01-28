module.exports = {
  url: function () {
    return this.api.globals.devServerURL + '/'
  },
  elements: {
    active_link: '.menu li.home > a',
    homeDiv: '#home'
  },
  commands: [{
    init () {
      this.navigate()
      this.waitForElementVisible('.menu', 10000)
      return this.api
    }
  }]
}
