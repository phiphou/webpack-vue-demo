const chai = require('chai')
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised')
chai.use(chaiAsPromised)
import Vue from 'vue'
import Hello from '../../src/app/components/Hello'
Vue.use(require('vue-resource'))

let response = {
  results: [
    {
      name: {
        first: 'npn',
        last: 'lkj'
      },
      gender: 'female',
      picture: {
        thumbnail: ''
      }
    }]
}
describe('Hello.vue', () => {
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

describe('Auth', () => {
  const vm = new Vue(Hello).$mount()

  beforeEach(() => {
    Vue.http.interceptors.push((request, next) => {
      next(request.respondWith(JSON.stringify(response), {
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

  it('should filter correctly', () => {
    return vm.getPeople(1).then((result) => {
      vm.gender = 'female'
      expect(vm.filteredPeople.length).to.be.equal(1)
      vm.gender = 'male'
      expect(vm.filteredPeople.length).to.be.equal(0)
    })
  })
})
