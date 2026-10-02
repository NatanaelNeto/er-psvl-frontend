<script setup lang="ts">
import BrutalPage from '@/components/layout/BrutalPage.vue';
import { Calendar } from '@lucide/vue';

</script>

<template>
  <BrutalPage title="Eventos" subtitle="Gerenciamento e informativos sobre nossos eventos" icon-rounded="full" icon-type="secondary"
    content-background="primary">
    <template #icon>
      <Calendar />
    </template>
    <div class="events">
      Tela de Eventos
    </div>
  </BrutalPage>
</template>

<style scoped lang="scss"></style>
