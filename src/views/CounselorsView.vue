<script setup lang="ts">
import BrutalPage from '@/components/layout/BrutalPage.vue';
import { Users } from '@lucide/vue';

</script>

<template>
  <BrutalPage title="Conselheiros" subtitle="Gerenciamento e informativos para os conselheiros" icon-rounded="full" icon-type="secondary"
    content-background="primary">
    <template #icon>
      <Users />
    </template>
    <div class="counselors">
      Tela de Conselheiros
    </div>
  </BrutalPage>
</template>

<style scoped lang="scss"></style>
