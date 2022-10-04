<template>
  <header>
    <nav>
      <div class="logo">
        <router-link :to="{ name: 'Home'}"><img src="../assets/images/logo.png" alt="" /></router-link>
      </div>
      <div class="nav-links">
        <router-link :to="{ hash: '#About'}">About</router-link>
        <router-link :to="{ hash: '#Follow'}">Follow Us</router-link>
        <router-link :to="{ hash: '#Bookings'}">Bookings</router-link>
      </div>
    </nav>
  </header>
</template>

<script>

  export default {
    
  }

</script>

<style lang="scss">

  header {
    grid-column: span 3;
    background-image: url(../assets/images/header.png);
    background-size:cover;
    background-position:center;
    height: 100vh;

    nav {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      padding: 20px 20px;
      

      .logo {
        grid-column: span 6;
      }

      img {
        width: 80px;
        height: 80px;
      }

      .nav-links {
        grid-column: span 6;
        justify-self: end;
        align-items: center;
        display: flex;
        gap: 40px;

        a {
          color: #fff;
        }
      }
    }
  }

  

</style>