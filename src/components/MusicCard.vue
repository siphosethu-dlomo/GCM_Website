<template>

  <div v-for="item in paginatedData" :key="item.id" class="col mb-4">
    <div class="card-container shadow-sm">
      <div class="iframe-container" v-html="item.youtubeEmbed"></div>
      <div class="video-description">
        <div class="video-title">
          <h2 class="artist-name">{{ item.artistName }}</h2>
          <p class="song-title">{{ item.songTitle }}</p>
        </div>
        <!-- make it a download link button, display inline-block/block -->
        <a :href="item.downloadLink" class="btn btn-primary w-100 bg-colour border-0">Download</a>
      </div>
    </div>
  </div>

  <!-- pagination -->
  <nav aria-label="music section pagination buttons" class="position-absolute top-100 bottom-50 start-50 translate-middle">
    <ul class="pagination justify-content-center">

      <!-- previous button -->
      <li class="page-item">
        <button class="page-link" @click="backPage">prev</button>
      </li>

      <!-- page is the page tracker found in handlePagination.js -->
      <!-- currentPage is the button number indicating current in pagination -->
      <li class="page-item d-flex">
        <button class="page-link" 
          v-for="item in Math.ceil(data.length / perPage)" 
          :key="item"
          :class="page === item ? 'active' : 'inactive'"
          @click="goToPage(item)">

            {{ item }}
            
        </button>
      </li>

      <!-- next button -->
      <li class="page-item">
        <button class="page-link" @click="nextPage">next</button>
      </li>
      
    </ul>  
  </nav>

</template>

<script>
  import handlePagination from '../handlePagination.js'

  export default {
    setup() {
      const handlePaginationValue = handlePagination();

      return { ...handlePaginationValue }
    }
  }

</script>

<style lang="scss">

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

      .bg-colour {
        background: linear-gradient(104deg, rgba(255,51,0,1) 0%, rgba(236,77,29,1) 51%, rgba(241,146,59,1) 100%, rgba(222,185,120,1) 100%);

      }
  }

</style>