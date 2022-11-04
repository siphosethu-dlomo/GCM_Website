<template>
  <footer class="container-xxl">
    <div class="container text-center">
      <div class="year">GCM. {{ year }}</div>
      <div class="reserve">All Rights Reserved</div>
    </div>
  </footer>
</template>

<script>
export default {
  setup() {
    const year = Date.now();

    return { year }
  }
}
</script>

<style lang="scss">

</style>