import { ref } from "vue"

console.log('start of getPost');

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
  
  let init = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
  }
  
  let request = new Request("../../data/db.json", init)

  const load = async () => {
    try {
      let data = await fetch(request);
      if(!data.ok) {
        throw Error('no data available')
      }
      posts.value = await data.json();
      console.log(posts);
    }
    catch (err) {
      error.value = err.message
      console.log(err);
    } 
  }

  return { posts, error, load }
}

export default getPosts