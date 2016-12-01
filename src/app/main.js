import Vue from 'vue'
import App from './App'
import Vueresource from 'vue-resource'
import router from './router'

require('../style/style.sass')

Vue.use(Vueresource)
Vue.config.devtools = process.env.NODE_ENV === 'development'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {
    App
  }
})
