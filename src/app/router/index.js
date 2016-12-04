import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
    component: () => require.ensure([], () => require('../components/About/About'), 'About'),
    name: 'about'
  }, {
    path: '/',
    redirect: '/home'
  }]
})
