<template>
  <div class="music-posts">
     <div class="posts" v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
     </div>
  </div>
</template>

<script>
  import SinglePost from './SinglePost.vue';

export default {
  props: ['posts'],
  components: { SinglePost },
}

</script>

<style lang="scss">
 .music-posts {
    grid-column: span 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 300px;
    column-gap: 15px;
    row-gap: 20px;
  }


</style>