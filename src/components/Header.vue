<template>
  <header class="">
    <nav class="navbar navbar-expand-md ">
      <div class="navbar-brand">
        <router-link :to="{ name: 'Home'}"><img src="" alt="" />Logo Here</router-link>
      </div>

      <!-- toggle button for mobile nav -->
      <button 
        class="navbar-toggler text-white" 
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle-navigation"
      >
        <span class="navbar-toggler-icon bg-primary"></span>
      </button>

      <!-- navbar links -->
      <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link text-white" :to="{ hash: '#About'}">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" :to="{ hash: '#Follow'}">Follow Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-white" :to="{ hash: '#Bookings'}">Bookings</router-link>
          </li>
        </ul>
      </div>

    </nav>
  <section class="banner ">
    <h1 class="hero-heading-text text-white nn">G. Centric</h1>
    <h1 class="hero-heading-text text-white nm">Music</h1>
    <h6 class="text-white">Keep it moving</h6>
  </section>
</header>
</template>

<script>

  export default {
    
  }

</script>

<style lang="scss" scoped>

  header {
    // background-image: url(../assets/images/header.png);
    // background-size:cover;
    // background-position:center;
    background: rgb(255,51,0);
    background: linear-gradient(106deg, rgba(255,51,0,0.85) 50%, rgba(226,192,90,1) 100%);

    // height: 100vh;

    // .hero-img {
    //   background: rgb(255,51,0);
    //   background: linear-gradient(106deg, rgba(255,51,0,0.80) 50%, rgba(226,192,90,1) 100%);
    // }
  }

  .banner {
      // background: rgb(255,51,0);
      // background: linear-gradient(106deg, rgba(255,51,0,0.80) 50%, rgba(226,192,90,1) 100%);   
      height: 91vh; 
      
      // .hero-heading-text {
      //   font-size: 10.5rem;
      // }

      // .nn {
      //   margin-top: 55px;
      // }

      // .nm {
      //   margin-top: -50px;
      // }
    }

</style>