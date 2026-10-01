<script setup lang="ts">
import BrutalPage from '@/components/layout/BrutalPage.vue';
import { UserShield } from '@lucide/vue';

</script>

<template>
  <BrutalPage title="Embaixadores" subtitle="Liste e gerencie os embaixadores da Embaixada Pastor Sidny Viana Leite" icon-rounded="full" icon-type="secondary"
    content-background="primary">
    <template #icon>
      <UserShield />
    </template>
    <div class="ambassadors">
      Tela de Embaixadores
    </div>
  </BrutalPage>
</template>

<style scoped lang="scss"></style>
