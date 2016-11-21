<template>
  <div class="hello">
    <button @click.prevent="reload()">Reload</button>
    <label><input id="g_all" type="radio" value="all"  v-model="gender"> All</label>
    <label><input id="g_male" type="radio" value="male" v-model="gender"> Male</label>
    <label><input id="g_female" type="radio" value="female" v-model="gender"> Female</label>
      <ul class="bob" v-show="!pending">
        <li v-for="person in filteredPeople">
          <div class="item">
            <img :src="person.picture.thumbnail" class="item_avatar"></img>
            <div class="item_label">{{person.name.first | capitalize}} {{person.name.last.toUpperCase()}}</div>
          </div>
        </li>
      </ul>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.filter('capitalize', value => value.charAt(0).toUpperCase() + value.substr(1))
export default {
  name: 'hello',
  data () {
    return {
      gender: 'all',
      persons: [],
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
            this.pending = false
            resolve(num)
          })/* .catch(function (error) {
            console.log(error)
          }) */
        })
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
    this.$user = this.$resource('https://api.randomuser.me/')
    this.reload()
    Vue.nextTick(function () {
    // list is rendered
    })
  }
}
</script>
<style lang="sass">
  @import "./style.sass";
</style>
