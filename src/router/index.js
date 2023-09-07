import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import AnimalCardTestPage from '../views/test/AnimalCardTestPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    }, {
      path: '/animal-card-test-page',
      name: 'animalCardTestPage',
      component: AnimalCardTestPage
    }
  ]
})

export default router