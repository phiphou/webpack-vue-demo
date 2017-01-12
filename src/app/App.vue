<script>
import Home from './components/Home/Home'
import PeopleList from './components/PeopleList/PeopleList'

export default {
  name: 'app',
  components: {
    Home,
    PeopleList
  }
}
</script>

<template lang="pug">
#app
  nav.menu
    ul
      li.home
        .mdiv
          router-link(to='/home') Home
      li.peopleList
        .mdiv
          router-link(to='/peopleList') People list
      li.about
        .mdiv
          router-link(to='/about') About
  transition(name='fade', mode='out-in')
    router-view.router-view
</template>
