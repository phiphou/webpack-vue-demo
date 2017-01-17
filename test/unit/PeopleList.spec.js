// const chai = require('chai')
// const expect = chai.expect
// const chaiAsPromised = require('chai-as-promised')
// chai.use(chaiAsPromised)
import Vue from 'vue'
import Hello from '../../src/app/components/PeopleList/PeopleList'
Vue.use(require('vue-resource'))
import router from '../../src/app/router'
const mocks = require('../mocks/db.json')

describe('Router', () => {
  it('should find the lazy loaded about comp', (done) => {
    router.push({
      path: '/about',
      append: true
    })
    expect(router.resolve('/about').resolved.matched.length).not.equal(0)
    done()
  })
})

describe('PeopleList.vue', () => {
  it('should be pending false before mount', () => {
    const defaultData = Hello.data().pending
    expect(defaultData).to.be.equal(false)
  })

  it('should be pending true at mount', () => {
    const Ctor = Vue.extend(Hello)
    const vm = new Ctor().$mount()
    expect(vm.pending).to.be.equal(true)
  })

  it('should capitalize first letter', () => {
    let cap = Vue.filter('capitalize')
    expect(cap('bob')).to.be.equal('Bob')
  })
})

describe('Call API', () => {
  const vm = new Vue(Hello).$mount()
  vm.persons = null
  beforeEach(() => {
    Vue.http.interceptors.push((request, next) => {
      next(request.respondWith(JSON.stringify(mocks.people), {
        status: 200
      }))
    })
  })

  afterEach(() => {
    Vue.http.interceptors.shift()
  })

  it('should work with async code', () => {
    return vm.getPeople(1).then((result) => {
      expect(vm.persons.length).to.be.eql(result)
        // console.log(vm.$el.querySelectorAll('.bob li')[0].querySelectorAll('.item .item_label')[0])
    })
  })

  it('should not be pending at the end', () => {
    return vm.getPeople(1).then((result) => {
      expect(vm.pending).to.be.equal(false)
    })
  })

  it('should filter people correctly', () => {
    return vm.getPeople(1).then((result) => {
      vm.gender = 'female'
      expect(vm.filteredPeople.length).to.be.equal(3)
      vm.gender = 'male'
      expect(vm.filteredPeople.length).to.be.equal(4)
    })
  })
})
