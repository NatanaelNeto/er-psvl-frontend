<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { supabase } from '@/services/supabase'
import { useAuthStore } from '@/stores/authStore'
import BrutalToast from './components/ui/BrutalToast.vue'
import SidebarComponent from './components/er/SidebarComponent.vue';

const auth = useAuthStore()

const route = useRoute();
const noSidebarViews = [
  '/login',
];

const hideSidebar = computed(() => {
  return noSidebarViews.includes(route.path);
});

onMounted(() => {
  // Pega a sessão inicial assim que o app abre
  supabase.auth.getSession().then(async ({ data }) => {
    await auth.setUser(data.session?.user ?? null)
    auth.setReady(true)
  })

  // Fica escutando qualquer mudança (Login, Logout, Token Expirado)
  supabase.auth.onAuthStateChange(async (_event, session) => {
    await auth.setUser(session?.user ?? null)
  })
})
</script>

<template>
  <div class="app">
    <SidebarComponent v-if="!hideSidebar" />
    <div class="app__main">
      <RouterView />
    </div>
    <BrutalToast />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins.scss' as *;

.app {
  display: flex;
  flex-flow: row nowrap;

  &__sidebar {
    flex-shrink: 0;
  }

  &__main {
    flex: 1;
    width: 100%;
  }
}
</style>
