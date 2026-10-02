import BrutalPage from '@/components/layout/BrutalPage.vue'
import { useAuthStore } from '@/stores/authStore'
import { useToastStore } from '@/stores/toastStore'
import AmbassadorsView from '@/views/AmbassadorsView.vue'
import CounselorsView from '@/views/CounselorsView.vue'
import DashboardView from '@/views/DashboardView.vue'
import EventsView from '@/views/EventsView.vue'
import LoginView from '@/views/LoginView.vue'
import PressKitView from '@/views/PressKitView.vue'
import SettingsView from '@/views/SettingsView.vue'
import { watch } from 'vue'
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
      component: () => DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/press-kit',
      name: 'press-kit',
      component: () => PressKitView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => LoginView,
      meta: { requiresGuest: true }
    },
    {
      path: '/page-model',
      name: 'page-model',
      component: () => BrutalPage
    },
    {
      path: '/ambassadors',
      name: 'ambassadors',
      component: () => AmbassadorsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/counselors',
      name: 'counselors',
      component: () => CounselorsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/events',
      name: 'events',
      component: () => EventsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => SettingsView,
      meta: { requiresAuth: true }
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  const toast = useToastStore()

  // 1. Pausa o roteador até que o Supabase termine de checar a sessão inicial
  if (!authStore.isReady) {
    await new Promise((resolve) => {
      const unwatch = watch(
        () => authStore.isReady,
        (isReady) => {
          if (isReady) {
            unwatch() // Para de observar assim que estiver pronto
            resolve(true) // Libera o roteador para continuar
          }
        },
        { immediate: true } // Dispara imediatamente para checar o estado atual
      )
    })
  }

  // 2. Agora sim, com o estado 100% atualizado, fazemos as checagens
  if (to.meta.requiresAuth && !authStore.isAuthenticated()) {
    toast.addToast('Você precisa estar logado para acessar esta página.', 'error')
    next({ name: 'login' })
    return
  }

  if (to.meta.requiresGuest && authStore.isAuthenticated()) {
    toast.addToast('Aviso: Você já está logado.', 'warning')
    next({ name: 'dashboard' })
    return
  }

  next()
})

export default router
