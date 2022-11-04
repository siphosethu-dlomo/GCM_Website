<template>
  <SinglePostCard/>
  <AllAboutGCMSection />
  <Footer />
</template>

<script>
  // import postItems from '../store.js'
  // import { useRoute } from 'vue-router'
  import AllAboutGCMSection from '../components/AllAboutGCMSection.vue'
  import Footer from '../components/Footer.vue'
  import SinglePostCard from '../components/SinglePostCard.vue'

  export default {
    components: {
    AllAboutGCMSection,
    Footer,
    SinglePostCard
},

  }

</script>

<style lang="scss">
  

</style>
