import BrutalPage from '@/components/layout/BrutalPage.vue'
import AmbassadorsView from '@/views/AmbassadorsView.vue'
import CounselorsView from '@/views/CounselorsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import EventsView from '@/views/EventsView.vue'
import LoginView from '@/views/LoginView.vue'
import PressKitView from '@/views/PressKitView.vue'
import SettingsView from '@/views/SettingsView.vue'
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
    },
    {
      path: '/ambassadors',
      name: 'ambassadors',
      component: AmbassadorsView
    },
    {
      path: '/counselors',
      name: 'counselors',
      component: CounselorsView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
  ],
})

export default router
