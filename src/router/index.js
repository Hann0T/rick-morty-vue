import { createRouter, createWebHistory } from 'vue-router';

import Home from '@/views/Home.vue';
import CharaterDetail from '@/views/CharacterDetail.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/charater/:id',
    name: 'Character',
    component: CharaterDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
