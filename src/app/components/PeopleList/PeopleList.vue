<template lang="pug" src="./PeopleList.tpl.pug"></template>
<script>
import Vue from 'vue'

Vue.filter('capitalize', value => value.charAt(0).toUpperCase() + value.substr(1))

export default {
  name: 'PeopleList',
  data () {
    return {
      environment: process.env.NODE_ENV,
      API_endPoint: process.env.API_endPoint,
      gender: 'all',
      persons: [],
      ready: false,
      pending: false
    }
  },
  methods: {
    getPeople (num) {
      return new Promise((resolve, reject) => {
        this.$user.query({
          results: num
        }).then(response => {
          response.json().then(data => {
            this.persons = data.results
            this.ready = true
            this.pending = false
            resolve(num)
          })/* .catch(function (error) {
            console.log(error)
          }) */
        })
      })
    },
    reload () {
      this.ready = false
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
    this.$user = this.$resource(this.API_endPoint)
    this.reload()
    Vue.nextTick(function () {
    // list is rendered
    })
  }
}
</script>
<style lang='sass' src='./style.sass'></style>
