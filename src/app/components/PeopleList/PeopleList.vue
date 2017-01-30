<template lang="pug" src="./PeopleList.tpl.pug"></template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
import store from '../../store'
import UserService from '../../services/UserService'
Vue.use(Vuex)
Vue.filter('capitalize', value => value.charAt(0).toUpperCase() + value.substr(1))

export default {
  name: 'PeopleList',
  data () {
    return {
      environment: process.env.NODE_ENV,
      API_endPoint: process.env.API_endPoint,
      gender: 'all',
      persons: store.state.persons,
      pending: false
    }
  },
  methods: {
    getPeople (num) {
      return new Promise((resolve, reject) => {
        if (store.state.persons.length === 0) {
          UserService.get().then(response => {
            response.json().then(data => {
              let parsed = []
              let i = 0
              for (let p of data.results) {
                parsed.push(Object.assign({id: i++}, p))
              }
              store.state.persons = this.persons = parsed
              this.pending = false
              resolve(parsed.length)
            })
            // .catch(function (error) {
            //   reject(error)
            // })
          })
        } else {
          this.pending = false
          this.persons = store.state.persons
          resolve(this.persons.length)
        }
      })
    },
    reload () {
      this.pending = true
      this.getPeople(10)
    }
  },
  computed: {
    filteredPeople () {
      return this.gender === 'all' ? this.persons : this.persons.filter(person => person.gender === this.gender)
    }
  },
  mounted () {
    this.reload()
    Vue.nextTick(function () {
    })
  }
}
</script>
<style lang='sass' src='./style.sass'></style>
