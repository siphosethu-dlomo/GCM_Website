<template>
  <footer>
    <div class="year">GCM. {{ year }}</div>
    <div class="reserve">All Rights Reserved</div>
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
  footer {
    grid-column: span 3;
    background-color: #03000D;
    border-top: 1px solid #fff;
    text-align: center;

    & div {
      color: #fff;
    }
  }

</style>