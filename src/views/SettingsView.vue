<script setup lang="ts">
import BrutalPage from '@/components/layout/BrutalPage.vue';
import { Settings } from '@lucide/vue';

</script>

<template>
  <BrutalPage title="Configurações Gerais" icon-rounded="full" icon-type="primary"
    content-background="secondary">
    <template #icon>
      <Settings />
    </template>
    <div class="events">
      Tela de Configurações Gerais
    </div>
  </BrutalPage>
</template>

<style scoped lang="scss"></style>
