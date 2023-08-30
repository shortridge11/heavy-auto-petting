import { createRouter, createWebHistory } from 'vue-router';
import ShopPage from '../views/ShopPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShopPage
    },
  ]
})

export default router
