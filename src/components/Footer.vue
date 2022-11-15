<template>
  <footer class="container-xxl">
    <div class="container">
      <div class="py-3 d-flex text-center justify-content-center">
        <div class="">
          <span class="gcm">G. Centric Music</span> 
        </div>
        <div class="">
          <span class="current-year ms-1"> {{ year }}</span>
        </div>
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

    .gcm,
    .current-year {
      color: #ffffff;
    }
  }

</style>