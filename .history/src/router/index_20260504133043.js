import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'm',
      component: () => import('../views/LoginView.vue'),
    },
  ],
})

export default router
