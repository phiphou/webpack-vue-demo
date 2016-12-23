module.exports = {
  url: '/#/about',
  elements: {
    active_link: '.menu li.about > a',
    aboutDiv: '#about'
  },
  commands: [{
    init () {
      this.navigate(this.api.globals.devServerURL + this.url)
      this.waitForElementVisible('#about', 10000)
      return this.api
    }
  }]
}
