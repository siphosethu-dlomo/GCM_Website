<template>
  <div class="container music-posts-container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 position-relative">
      <MusicCard/>
    </div>
  </div>
  
</template> 


<script>
  // import postItems from '../store.js'
  import MusicCard from '../components/MusicCard.vue'


  export default {
    components: { MusicCard },

    // setup() {
    //   let posts = postItems
    //   return { posts }
    // }

  }

</script>

<style lang="scss" scoped>

</style>

