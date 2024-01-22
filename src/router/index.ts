import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signin',
      name: 'Signin',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    
  ]
})

export default router
