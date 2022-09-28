<template>
  <div>
    <div class="youtube__embedded__video__container">
      {{ post.YoutubeEmbed }}
    </div>
    <div class="video__description">
      <div class="vidoe__title">
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

  .postCardContainer {

  }

  
</style>