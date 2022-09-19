<template>
    <h1>Main Music</h1>
    <div class="music-content-container" >
      <MusicGrid />
      <SideBar />
    </div>

</template>

<script>
  import MusicGrid from './MusicGrid.vue';
  import SideBar from './SideBar.vue';
  
  export default {
    name: 'Home',
    components: {
      MusicGrid,
      SideBar
    }
  }

</script>

<style lang="scss" scoped>

  h1 {
    grid-column: span 3;
    text-align: center;
    margin-top: 50px;
    font-size: 4rem;
  }
  .music-content-container {
    grid-column: span 3;
    display: grid;
    grid-template-columns: 4fr 0.5fr 1.5fr;
    column-gap: 50px;
    padding: 0px 120px;
  }
</style>