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
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/QP2qEccrA0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ArtistName: "ZusheyTheDJ",
        SongTitle: "Phoenix (Synth Mix)",
      },
      {
        id: 2,
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/32ZTc3T7_PE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ArtistName: "Zushey",
        SongTitle: "Phoenix",
      },
      {
        id: 3,
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZJGDbR6kGjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ArtistName: "ZusheyTheDJ",
        SongTitle: "Phoenix (Synth Mix)",
      },
      {
      id: 4,
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/fa1OGlTBz-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ArtistName: "ZusheyTheDJ",
        SongTitle: "Phoenix (Synth Mix)",
      },
      {
      id: 5,
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/dzrZbSTKUto" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ArtistName: "ZusheyTheDJ",
        SongTitle: "Phoenix (Synth Mix)",
      },
      {
      id: 6,
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/T_EeD-V6eDk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
        ArtistName: "ZusheyTheDJ",
        SongTitle: "Phoenix (Synth Mix)",
      },
      {
      id: 7,
        YoutubeEmbed: '<iframe width="100%" height="100%" src="https://www.youtube.com/embed/atfQGqiF5T4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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

