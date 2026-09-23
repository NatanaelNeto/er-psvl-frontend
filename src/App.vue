<script setup lang="ts">
import BrutalButton from './components/ui/BrutalButton.vue';
import { User } from '@lucide/vue';
</script>
<template>
  <div class="content">
    <section>
      <h1>Teste de fontes: H1</h1>
      <h2>Teste H2</h2>
      <h3>Teste H3</h3>
      <p>Teste de parágrafo</p>
      <p>Teste de <span class="u-brutal-font">parágrafo</span></p>
    </section>
    <section>
      <h2>Teste de Botões</h2>
      <h3>Padrões</h3>
      <div>
        <BrutalButton>Padrão</BrutalButton>
        <BrutalButton type="secondary">Secundário</BrutalButton>
        <BrutalButton type="accent">Destaque</BrutalButton>
        <BrutalButton type="ghost">Fantasma</BrutalButton>
        <BrutalButton>
          <template #icon><User /></template>
          Com Ícone
        </BrutalButton>
        <BrutalButton type="ghost">
          <template #icon><User /></template>
        </BrutalButton>
      </div>
      <h3>Tipos</h3>
      <div>
        <BrutalButton type="success">Sucesso!</BrutalButton>
        <BrutalButton type="warning">Alerta...</BrutalButton>
        <BrutalButton type="error">Erro!</BrutalButton>
        <BrutalButton disabled>Desabilitado</BrutalButton>
      </div>
      <h3>Tamanhos</h3>
      <div>
        <BrutalButton size="small">Pequeno</BrutalButton>
        <BrutalButton size="medium">Médio</BrutalButton>
        <BrutalButton size="large">Grande</BrutalButton>
      </div>
      <h3>Sombras</h3>
      <div>
        <BrutalButton shaded="up">Começo em Cima</BrutalButton>
        <BrutalButton shaded="down">Começo em Baixo</BrutalButton>
        <BrutalButton shaded="none">Sem sombra</BrutalButton>
      </div>
      <h3>Bordas</h3>
      <div>
        <BrutalButton rounded="none">Sem bordas</BrutalButton>
        <BrutalButton rounded="light" type="secondary">Leve</BrutalButton>
        <BrutalButton rounded="full" type="accent">Completo</BrutalButton>
        <BrutalButton type="ghost">
          <template #icon><User /></template>
        </BrutalButton>
        <BrutalButton type="ghost" rounded="light">
          <template #icon><User /></template>
        </BrutalButton>
        <BrutalButton type="ghost" rounded="full">
          <template #icon><User /></template>
        </BrutalButton>
      </div>
    </section>
  </div>
</template>

<style scoped></style>
