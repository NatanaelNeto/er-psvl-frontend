import BrutalPage from '@/components/layout/BrutalPage.vue'
import DashboardView from '@/views/DashboardView.vue'
import LoginView from '@/views/LoginView.vue'
import PressKitView from '@/views/PressKitView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/press-kit',
      name: 'press-kit',
      component: PressKitView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/page-model',
      name: 'page-model',
      component: BrutalPage
    }
  ],
})

export default router
