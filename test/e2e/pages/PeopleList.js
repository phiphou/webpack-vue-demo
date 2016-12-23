module.exports = {
  url: '#/peopleList',
  elements: {
    active_link: '.menu li.peopleList > a',
    peopleListDiv: '.hello'
  },
  commands: [{
    init () {
      this.navigate(this.api.globals.devServerURL + this.url)
      this.waitForElementVisible('@peopleListDiv', 10000)
      return this.api
    },
    checkTitle () {
      this.api.getTitle(function (title) {
        this.assert.equal(typeof title, 'string', 'Title is a string.')
        this.assert.equal(title, 'webpack-vue-demo', 'Title is the good one.')
        return this.api
      })
    },
    checkDisplay () {
      // peopleListPage.expect.element('@peopleListDiv').to.have.css('display').which.equals('block')
      this.api.getCssProperty('.hello', 'display', function (result) {
        this.assert.equal(typeof result, 'object')
        this.assert.equal(result.status, 0)
        this.assert.equal(result.value, 'block')
      })
    },
    checkMaleGenderSelection () {
      this.click('li label[id=g_male]', response => {
        this.expect.element('li input[id=g_male]').to.be.selected
        this.assert.cssClassPresent('ul.bob li:nth-child(1) div img', 'male',
          'male class should be present in the first element.')
      })
    },
    checkFemaleGenderSelection () {
      this.click('li label[id=g_female]', response => {
        this.assert.cssClassNotPresent('ul.bob li:nth-child(1) div img', 'male',
          'male class should not be present anymore in the first element.')
        this.assert.cssClassPresent('ul.bob li:nth-child(1) div img', 'female',
          'female class should be present in the first element.')
      })
    },
    checkAllGenderSelection () {
      this.click('li label[id=g_all]', response => {
        this.expect.element('li input[id=g_all]').to.be.selected
      })
    }
  }]
}
