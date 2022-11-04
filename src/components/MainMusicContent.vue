<template>
    <section class="music-content-container">
      <div class="container-xxl">
        <h1 class="text-center fs-1 my-5">Main Music</h1>

        <!-- Music Posts -->
        <MusicGrid />

        <!-- Pagination -->
        <!-- <Pagination /> -->
      </div>
    </section>
</template>

<script>
  import MusicGrid from './MusicGrid.vue'
  // import Pagination from './Pagination.vue'
  // import SideBar from './SideBar.vue'
  
  export default {
    name: 'Home',
    components: {
      MusicGrid,
      // Pagination
    }
  }

</script>

<style lang="scss" scoped>


  
</style>