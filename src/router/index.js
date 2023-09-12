import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import PetCardTestPage from '../views/test/PetCardTestPage.vue';

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
    }
  ]
})

export default router