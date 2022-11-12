<template>
  <header class="container-fluid">
    <div class="container-xxl">
     <nav class="navbar navbar-expand-md">
      <div class="navbar-brand">
        <router-link :to="{ name: 'Home'}"><img src="" alt="" />Logo Here</router-link>
      </div>

      <!-- toggle button for mobile nav -->
      <button 
        class="navbar-toggler" 
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label="Toggle-navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- navbar links -->
      <div
        class="collapse navbar-collapse justify-content-end align-center"
        id="main-nav"
      >

        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#About'}">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#Follow'}">Follow Us</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ hash: '#Bookings'}">Bookings</router-link>
          </li>
        </ul>

      </div>

      </nav>
    </div>
  </header>
</template>

<script>

  export default {
    
  }

</script>

<style lang="scss" scoped>

  header {
    background-image: url(../assets/images/header.png);
    background-size:cover;
    background-position:center;
    height: 100vh;
  }

</style>