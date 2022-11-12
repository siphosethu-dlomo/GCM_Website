<template>
  <div>
    <div class="card-container">
      <div class="iframe-container" v-html="post.youtubeEmbed"></div>
      <div class="video-description">
        <div class="video-title">
          <h2>{{ post.artistName }}</h2>
          <p>{{ post.songTitle }}</p>
        </div>
        <!-- make it a link, display inline-block/block -->
      </div>
    </div>
  </div>

</template>

<script>
  import postItems from '../store.js'
  import { useRoute } from 'vue-router'

  export default {

    setup() {
      const route = useRoute()
      // Looking for the single post's id
      const post = postItems.find((routerId) => {
        return routerId.id === parseInt(route.params.id)
      })

      return { post }
      
    }


  }

</script>

<style lang="scss" scoped>



</style>