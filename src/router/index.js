import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import PetCardTestPage from '../views/test/PetCardTestPage.vue';
import ShopCardTestPage from '../views/test/ShopCardTestPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    }, {
      path: '/pet-card-test-page',
      name: 'petCardTestPage',
      component: PetCardTestPage
    }, {
      path: '/shop-card-test-page',
      name: 'shopCardTestPage',
      component: ShopCardTestPage
    }
  ]
})

export default router