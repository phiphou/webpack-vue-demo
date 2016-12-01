import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const about = () => require.ensure([], () => require('../components/About/About'), 'About')

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/home',
    component: require('../components/Home/Home')
  }, {
    path: '/peopleList',
    component: require('../components/PeopleList/PeopleList')
  }, {
    path: '/about',
    component: about
  }, {
    path: '/',
    redirect: '/home'
  }]
})
