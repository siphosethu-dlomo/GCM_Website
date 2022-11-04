<template>

  <nav aria-label="music section pagination buttons">
    <ul class="pagination justify-content-center">

      <!-- previous button -->
      <li class="page-item">
        <button class="page-link" @click="backPage">prev</button>
      </li>

      <!-- page is the page tracker found in handlePagination.js -->
      <!-- currentPage is the button number indicating current in pagination -->
      <li class="page-item d-flex">
        <button class="page-link" 
          v-for="item in Math.ceil(data.length / perPage)" 
          :key="item"
          :class="page === item ? 'active' : 'inactive'"
          @click="goToPage(item)">

            {{ item }}
            
        </button>
      </li>

      <!-- next button -->
      <li class="page-item">
        <button class="page-link" @click="nextPage">next</button>
      </li>
      
    </ul>  
  </nav>
</template>

<script>
  import handlePagination from '../handlePagination.js'

  export default {
    setup() {
      const handlePaginationValue = handlePagination()

      return { ...handlePaginationValue }
    }
  }

</script>