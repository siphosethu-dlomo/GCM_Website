<template>
  <header>
    <nav>
      <div class="logo">
        <router-link :to="{ name: 'Home'}"><img :src="logo" alt="" /></router-link>
      </div>
      <div class="nav-links">
        <router-link :to="{ name: 'About'}">About</router-link>
        <router-link :to="{ name: 'Contact'}">Contact</router-link>
      </div>
    </nav>
  </header>
</template>

<script>

  const logo = new URL("/..assets/images/logo.png", import.meta.url).href
  // import logo from '../assets/images/logo.png'

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