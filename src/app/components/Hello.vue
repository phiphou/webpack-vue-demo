<template lang="pug">
  .hello
    a.refresh(href='/', @click.prevent='reload()') Refresh
    .container
      ul
        li
          input#g_all(type='radio', name='s', v-model='gender', value='all')
          label#g_all(for='g_all') All
          .check
        li
          input#g_male(type='radio', v-model='gender', value='male')
          label#g_male(for='g_male') Male
          .check
        li
          input#g_female(type='radio', name='s', v-model='gender', value='female')
          label#g_female(for='g_female') Female
          .check
    ul.bob
      li(v-for='person in filteredPeople')
        .item
          img.item_avatar(:src='person.picture.thumbnail')
          .item_label
            | {{person.name.first | capitalize}} {{person.name.last.toUpperCase()}}
</template>

<script>
// require('./style.sass')

import Vue from 'vue'

Vue.filter('capitalize', value => value.charAt(0).toUpperCase() + value.substr(1))

export default {
  name: 'hello',
  data () {
    return {
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
    this.$user = this.$resource('https://api.randomuser.me/')
    this.reload()
    Vue.nextTick(function () {
    // list is rendered
    })
  }
}
</script>
<style lang='sass' src='./style.sass'></style>
