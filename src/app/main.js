import Vue from 'vue'
import App from './App'
import Vueresource from 'vue-resource'
import VueRouter from 'vue-router'

require('../style/style.sass')

Vue.use(VueRouter)
Vue.use(Vueresource)
Vue.config.devtools = process.env.NODE_ENV === 'development'

const about = () => require.ensure([], () => require('./components/About/About'), 'About')

const routes = [{
  path: '/home',
  component: require('./components/Home/Home')
}, {
  path: '/peopleList',
  component: require('./components/PeopleList/PeopleList')
}, {
  path: '/about',
  component: about
}, {
  path: '/',
  redirect: '/home'
}]

const router = new VueRouter({
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {
    App
  }
})
