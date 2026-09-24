<script setup lang="ts">
import { useAuthStore } from '@/stores/authStore';

const auth = useAuthStore();
</script>

<template>
  <div class="dashboard">
    <div class="dashboard__header">
      <h1 v-if="auth.profile">Olá, conselheiro {{ auth.profile.name }}!</h1>
      <h1>Dashboard</h1>

    </div>
  </div>
</template>

<style scoped lang="scss"></style>
