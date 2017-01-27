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
        data: People.data,
        router: router,
        template: '<div><test></test></div>',
        components: {
          'test': People
        }
      }).$mount()
    })

  it('should work with async code', () => {
    store.state.persons = []
    expect(vm.person).to.be.equal(null)
  })

  it('should work with async code2', () => {
    router.push('/peopleList/1')
    store.state.persons = mocks.people.results
    vm.$children[0].getPeople(1)
    expect(vm.$route.params.slug).to.be.equal('1')
    expect(vm.$children[0].person).to.be.equal(mocks.people.results[1])
    store.state.persons = []
  })
})
