import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


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
  ]
})

export default router
