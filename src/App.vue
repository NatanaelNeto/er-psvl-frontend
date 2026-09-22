<script setup lang="ts">
import BrutalButton from './components/ui/BrutalButton.vue';
import { User } from '@lucide/vue';
</script>
<template>
  <h1>Teste h1</h1>
  <h2>Teste h2</h2>
  <h3>Teste h3</h3>
  <p>Teste de parágrafo</p>
  <p>Teste de <span class="u-brutal-font">parágrafo</span></p>
  <BrutalButton>Padrão</BrutalButton>
  <BrutalButton :shaded="false">Padrão sem sombra</BrutalButton>
  <BrutalButton type="secondary" rounded>
    <template #icon>
      <User />
    </template>
    Secundário
  </BrutalButton>
  <BrutalButton type="secondary" rounded>
    <template #icon>
      <User />
    </template>
  </BrutalButton>
  <BrutalButton type="accent" icon-position="right">
    Destaque
    <template #icon>
      <User />
    </template>
  </BrutalButton>
  <BrutalButton type="success" size="small">Sucesso</BrutalButton>
  <BrutalButton type="warning">Alerta</BrutalButton>
  <BrutalButton type="error" size="large">Erro</BrutalButton>
</template>

<style scoped></style>
