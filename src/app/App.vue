<script>
import Home from './components/Home/Home'
import About from './components/About/About'
import PeopleList from './components/PeopleList/PeopleList'

export default {
  name: 'app',
  components: {
    Home,
    PeopleList,
    About
  }
}
</script>

<template lang="pug">
#app
  nav.menu
    ul
      li
        router-link(to='/home') Home
      li
        router-link(to='/peopleList') People list
      li
        router-link(to='/about') About
  router-view.router-view
</template>
