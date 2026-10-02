<script setup lang="ts">
import BrutalPage from '@/components/layout/BrutalPage.vue';
import { useAuthStore } from '@/stores/authStore';
import { LayoutDashboard } from '@lucide/vue';
import { computed } from 'vue';

const auth = useAuthStore();

const subtitle = computed(() => {
  return `Seja bem-vindo, conselheiro ${auth.profile?.name ?? 'da Embaixada Pastor Sidny Viana Leite'}!`;
});
</script>

<template>
  <BrutalPage title="Dashboard" :subtitle="subtitle" icon-rounded="full" icon-type="secondary"
    content-background="primary">
    <template #icon>
      <LayoutDashboard />
    </template>
    <div class="dashboard">
      Tela de Dashboard
    </div>
  </BrutalPage>
</template>

<style scoped lang="scss"></style>
