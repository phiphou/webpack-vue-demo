import Vue from 'vue'
import App from './App'
import Vueresource from 'vue-resource'
require('../style/style.sass')
require('./components/style.sass')
Vue.use(Vueresource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
