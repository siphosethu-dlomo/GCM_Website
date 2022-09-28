<template>
  <Header />
  <router-view />
</template>

<script>
  import Header from './components/Header.vue'
  import img from '../src/assets/images/thumb.png'

export default {
  components: { Header }
}

</script>

<style lang="scss">

  * {
    margin: 0px;
    padding: 0px;
  }

  a {
    text-decoration: none;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 30px;
  }

</style>