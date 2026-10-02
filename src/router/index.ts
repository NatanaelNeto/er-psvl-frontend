import BrutalPage from '@/components/layout/BrutalPage.vue'
import { useAuthStore } from '@/stores/authStore'
import { useToastStore } from '@/stores/toastStore'
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
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/press-kit',
      name: 'press-kit',
      component: PressKitView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/page-model',
      name: 'page-model',
      component: BrutalPage
    }
  ],
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const toast = useToastStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    toast.addToast('Você precisa estar logado para acessar esta página.', 'error');
    next({ name: 'login' })
  } else if (to.meta.requiresGuest && authStore.isAuthenticated()) {
    toast.addToast('Você já está logado.', 'warning');
    next({ name: 'dashboard' })
  } else {
    next()
  }
})

export default router
