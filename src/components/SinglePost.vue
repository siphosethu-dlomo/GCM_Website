<template>
  <div class="card-container">
    <div class="iframe-container" v-html="post.YoutubeEmbed"></div>
    <div class="video-description">
      <div class="video-title">
        <h2>{{ post.ArtistName }}</h2>
        <p>{{ post.SongTitle }}</p>
      </div>
      <!-- make it a link, display inline-block/block -->
      <a href="https://drive.google.com/uc?export=download&id=1aSQgcFSH37XGE1WSFpvtLEkPGo2pVipm">
        <i class="fa-solid fa-file-arrow-down"></i>
        <span>Download</span>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: ['post']
}

</script>

<style lang="scss">

  .card-container {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    border-radius: 8px;
    overflow: hidden;
    width: 300px;

    .iframe-container {
      width: 300px;
      height: 215px;
    }

    iframe {
      border-radius: 8px 8px 0px 0px;
    }

    .video-description {
      padding: 15px 15px 30px 15px ;
      color: rgb(68, 67, 67);
      text-align: center;
    }

    .video-title {
      margin-bottom: 20px;
    }

    a {
      text-decoration: none;
      color: inherit;
      padding: 8px;
      background-color: rgb(153, 209, 120);
      border-radius: 4px;
    }


  }

  

  
</style>