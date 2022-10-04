<template>
    <h1>Main Music</h1>
    <Section class="music-content-container" >
      <MusicGrid />
      <SideBar />
    </Section>
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
    margin-top: 90px;
    font-size: 4rem;
  }
  .music-content-container {
    grid-column: span 3;
    display: grid;
    grid-template-columns: 4fr 0.5fr 1.5fr;
    column-gap: 110px;
    padding: 0px 50px;
    margin: 90px 0px;
  }
  
</style>