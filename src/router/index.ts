import LoginView from '@/views/LoginView.vue'
import PressKitView from '@/views/PressKitView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/press-kit',
      component: PressKitView
    },
    {
      path: '/login',
      component: LoginView
    }
  ],
})

export default router
