<template>
  <section id="About" class="py-5 container-xxl about">
    <div class="container text-center">
      <h1 class="section-heading">All About GCM</h1>
      <div class="about-section-content">
        <div class="about-description">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo modi adipisci cum assumenda ea ut, veritatis voluptatibus minima similique atque maxime velit vero repellat eaque enim deserunt voluptate impedit temporibus ab harum nulla magni. Perferendis fugit blanditiis alias sequi ipsum magnam, nam odit et adipisci natus similique officiis iusto rem!</p>
        </div>
      </div>
      <SocialMediaAndBookings />
    </div>
  </section>
</template>

<script>

  import SocialMediaAndBookings from './SocialMediaAndBookings.vue';

  export default {
    components: { SocialMediaAndBookings },
    setup() {
      
    }
  }

</script>

<style lang="scss" scoped>

  .about {
    // background-color: #e07902;
    // background: rgb(255,51,0);
    // background: linear-gradient(104deg, rgba(255,51,0,1) 0%, rgba(236,77,29,1) 51%, rgba(241,146,59,1) 100%, rgba(222,185,120,1) 100%);
    // color: #fff;
    background-color: #010101; 
    
    // border-bottom: 3px solid rgb(255,51,0);
    border-top: 1px solid rgb(255,51,0);
    
    
    // height: 95vh;

    .section-heading {
      color: white;
    }

    .about-description {
      background: rgb(255,51,0);
      background: linear-gradient(104deg, rgba(255,51,0,1) 0%, rgba(236,77,29,1) 51%, rgba(241,146,59,1) 100%, rgba(222,185,120,1) 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

</style>