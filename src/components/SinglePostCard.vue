<template>
  <section class="py-5 d-flex justify-content-center">
    <div class="card-container w-75">
      <div class="iframe-container" v-html="post.youtubeEmbed"></div>
      <div class="video-description">
        <div class="video-title">
          <h2>{{ post.artistName }}</h2>
          <p>{{ post.songTitle }}</p>
        </div>
        <a :href="post.downloadLink" class="btn btn-primary w-100 xx">Download</a>
      </div>
    </div>
  </section>

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

  section {
    background-color: #010101; 

    .card-container {
      box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
      border-radius: 8px;
      overflow: hidden;
      // background-color: #e07902;
      // background: rgb(255,51,0);
      // background: linear-gradient(104deg, rgba(255,51,0,1) 0%, rgba(236,77,29,1) 51%, rgba(241,146,59,1) 100%, rgba(222,185,120,1) 100%);
      background-color: #121313;

      .iframe-container {
        // height: 215px;
        
        position: relative;
        padding-bottom: 56.25%; /* 16:9 */
        padding-top: 25px;
        height: 0;
      }

      iframe {
        border-radius: 8px 8px 0px 0px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .video-description {
        padding: 15px 15px 30px 15px ;
        color: rgb(255, 255, 255);
        text-align: center;
      }

      .video-title {
        margin-bottom: 20px;
      }

      .artist-name, 
      .song-title {
        background: rgb(255,51,0);
        background: linear-gradient(104deg, rgba(255,51,0,1) 0%, rgba(236,77,29,1) 51%, rgba(241,146,59,1) 100%, rgba(222,185,120,1) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
    }
  }

</style>