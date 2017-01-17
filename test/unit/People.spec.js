import Vue from 'vue'
import People from '../../src/app/components/People/People'
import router from '../../src/app/router'
import store from '../../src/app/store'
import Vuex from 'vuex'
Vue.use(Vuex)
const mocks = require('../mocks/db.json')
describe('People', () => {
  let vm =
  beforeEach(() => {
    vm = new Vue({
      router: router,
      template: '<div><test></test></div>',
      components: {
        'test': People
      }
    }).$mount()
  })

  it('should work with async code', () => {
    store.state.persons = JSON.stringify(mocks.people)
    expect(vm.person).not.to.be.equal(null)
  })

  it('should work with async code2', () => {
    store.state.persons = []
    router.push('/People/1')
    console.log('BOB' + vm.$route.params.slug)
    expect(vm.person).not.to.be.equal(null)
  })
})
