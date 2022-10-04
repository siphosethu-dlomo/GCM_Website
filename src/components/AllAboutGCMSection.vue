<template>
  <section id="About" class="about-section-container">
    <h1>All About GCM</h1>
    <div class="about-section-content">
      <!-- <div class="about-image">
        <img src="../assets/images/logo.png" alt="">
      </div> -->
      <div class="about-description">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo modi adipisci cum assumenda ea ut, veritatis voluptatibus minima similique atque maxime velit vero repellat eaque enim deserunt voluptate impedit temporibus ab harum nulla magni. Perferendis fugit blanditiis alias sequi ipsum magnam, nam odit et adipisci natus similique officiis iusto rem!</p>
      </div>
    </div>
    <div id="Follow" class="social-media">
      <h1>Follow Us</h1>
      <p>GCM Youtube</p>
      <p>GCM Facebook</p>
      <p>AudioMinded Twitter, Facebook and Instagram</p>
    </div>    
    <div id="Bookings" class="bookings">
      <h1>For Bookings</h1>
      <h3 class="artist-name">AudioMinded</h3>
      <p class="artist-email">email@email.com</p>
      <p class="artist-number">000 000 0000</p>
    </div>

  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
  
  .about-section-container {
    grid-column: span 3;
    background-color: #03000D;
    height: 100vh;

    & h1 {
      color: #fff;
      text-align: center;
      font-size: 4rem;
    }

    & img {
      width: 300px;
      height: 300px;
    }

    // .about-section-content {
    //   display: grid;
    //   grid-template-columns: repeat(2, 1fr);
    // }

    .about-description p {
      color: #fff;
      text-align: center;
    }

    .artist-name,
    .artist-number,
    .artist-email,
    .social-media p {
      color: #fff;
      text-align: center;
    }
  }
  
</style>