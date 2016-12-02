module.exports = {
  url: '/',
  elements: {
    active_link: '.menu li.home > a',
    homeDiv: '#home'
  },
  commands: [{
    init () {
      this.navigate(this.api.globals.devServerURL + this.url)
      this.waitForElementVisible('body', 1000)
      return this.api
    }
  }]
}
