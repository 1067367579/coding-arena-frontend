import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/oj/login',
      name: 'Login',
      component: () => import("@/views/Login.vue")
    },
    {
      path: '/oj/system',
      name: 'System',
      component: () => import("@/views/System.vue")
    }
  ],
})

export default router
