<template>
  <PostList :posts="posts" />
</template>

<script>
import { ref } from 'vue'
import PostList from '../components/PostList.vue'


export default {
  name: 'Posts',
  components: { PostList }, 
  setup() {
    const posts = ref([
      {
        id: 1,
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xRdeP-JH_iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>',
        ArtistName: "ZusheyTheDJ",
        SongTitle: "Phoenix (Synth Mix)",
        
      },
      {
        id: 2,
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xRdeP-JH_iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>',
        ArtistName: "Zushey",
        SongTitle: "Phoenix",
      
      },
      {
        id: 3,
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/xRdeP-JH_iw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>',
        ArtistName: "ZusheyTheDJ",
        SongTitle: "Phoenix (Synth Mix)",
        
      }
    ])
    
    return { posts }
    
  }
}

</script>

<style lang="scss">

</style>