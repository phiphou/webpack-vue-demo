import Vue from 'vue'
import App from './App'
import Vueresource from 'vue-resource'
import router from './router'
import store from './store'

require('../style/style.sass')
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Vueresource)
Vue.config.devtools = process.env.NODE_ENV === 'development'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  router,
  components: {
    App
  }
})
