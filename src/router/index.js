import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SinglePost from '../views/SinglePost.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  mode: history,
  
  scrollBehavior (to, from, savedPosition) {
    if(to.hash) {
      return { 
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/post/:id',
      name: 'Post',
      component: SinglePost
    },
    {
      path: '/www.google.com',
      name: 'Download',
      component: SinglePost
    }
  ]
})

// https://drive.google.com/uc?export=download&id=1aSQgcFSH37XGE1WSFpvtLEkPGo2pVipm

export default router
