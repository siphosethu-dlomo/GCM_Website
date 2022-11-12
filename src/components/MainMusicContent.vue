<template>
    <section class="music-content-container py-5">
      <div class="container-xxl">
        <h1 class="text-center fs-1 mb-5 section-heading">Main Music</h1>

        <!-- Music Posts -->
        <MusicGrid />

        <!-- Pagination -->
        <!-- <Pagination /> -->
      </div>
    </section>
</template>

<script>
  import MusicGrid from './MusicGrid.vue'
  // import SideBar from './SideBar.vue'
  
  export default {
    name: 'Home',
    components: {
      MusicGrid
    }
  }

</script>

<style lang="scss" scoped>

.music-content-container {
  background-color: #010101;

  .section-heading {
    color: #ffffff;
  }

}

  
</style>