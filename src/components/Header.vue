<template>
  <header>
    <nav>
      <div class="logo">
        <router-link :to="{ name: 'Home'}"><h2>GCM</h2></router-link>
      </div>
      <div class="nav-links">
        <router-link :to="{ name: 'About'}">About</router-link>
        <router-link :to="{ name: 'Contact'}">Contact</router-link>
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
    background-image: url(../assets/images/header.jpg);
    background-size:cover;
    background-position:center;
    height: 100vh;

    nav {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      padding: 20px 20px;
      background-color: #ffffff;

      .logo {
        grid-column: span 6;
      }

      .nav-links {
        grid-column: span 6;
        justify-self: end;
        align-items: center;
        display: flex;
        gap: 40px;
      }
    }
  }

  

</style>