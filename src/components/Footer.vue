<template>
  <footer class="container-xxl">
    <div class="container text-cente d-flex justify-content-between p-3">
      <div>
        <span class="current-year">G. Centric Music. {{ year }}</span> 
      </div>
      <div>
       <span class="copyright">All Rights Reserved</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const date = new Date();
    let year = date.getFullYear();

    return { year }
  }
}
</script>

<style lang="scss" scoped>

  footer {
    // background: rgb(255,51,0);
    // background: linear-gradient(104deg, rgba(255,51,0,1) 0%, rgba(236,77,29,1) 51%, rgba(241,146,59,1) 100%, rgba(222,185,120,1) 100%);
    background-color: #121313; 

    .current-year, 
    .copyright {
      color: #ffffff;
    }
  }

</style>