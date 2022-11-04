import { ref, computed } from "vue";
import postItems from './store.js'

export default function handlePagination() {
  // starting page
  let page = ref(1);
  

  // returns an array of 24 objects
  // this is where the original data is, an array of objects, hwich will later be paginated
  let data = postItems
  
  // how many items to display per page. items to be returned
  // so if want 5 items per page for example, change this value
  const perPage = 9;

  const paginatedData = computed(() =>
    data.slice((page.value - 1) * perPage, page.value * perPage)
  );

  console.log(paginatedData);


  // ----------------------------------------------------------------------------------------- //
                    /* Buttons */
  // --------------------------------------------------------------------------------------- //

  const nextPage = () => {
    if (page.value !== Math.ceil(data.length / perPage)) {
      page.value += 1;
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage) => {
    page.value = numPage;
  };

  return { data, paginatedData, perPage, page, nextPage, backPage, goToPage };
}


// page.value is key

// when you change page.value in buttons, it changes the paginated data array
// which means the different set of object in the paginated data array
// meaning different content on screen. 
// Press button => new set of objects in array => display content represented by that array
