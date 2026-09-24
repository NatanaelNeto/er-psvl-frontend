<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { supabase } from '@/services/supabase'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()

onMounted(() => {
  // Pega a sessão inicial assim que o app abre
  supabase.auth.getSession().then(async ({ data }) => {
    await authStore.setUser(data.session?.user ?? null)
    authStore.setReady(true)
  })

  // Fica escutando qualquer mudança (Login, Logout, Token Expirado)
  supabase.auth.onAuthStateChange(async (_event, session) => {
    await authStore.setUser(session?.user ?? null)
  })
})
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss"></style>
