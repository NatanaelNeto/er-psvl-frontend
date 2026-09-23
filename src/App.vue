<script setup lang="ts">
import BrutalButton from './components/ui/BrutalButton.vue';
import BrutalCard from './components/layout/BrutalCard.vue';
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
          <template #icon>
            <User />
          </template>
          Com Ícone
        </BrutalButton>
        <BrutalButton type="ghost">
          <template #icon>
            <User />
          </template>
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
        <BrutalButton shaded="none" type="ghost">
          <template #icon>
            <User />
          </template>
        </BrutalButton>
      </div>
      <h3>Bordas</h3>
      <div>
        <BrutalButton rounded="none">Sem bordas</BrutalButton>
        <BrutalButton rounded="light" type="secondary">Leve</BrutalButton>
        <BrutalButton rounded="full" type="accent">Completo</BrutalButton>
        <BrutalButton type="ghost">
          <template #icon>
            <User />
          </template>
        </BrutalButton>
        <BrutalButton type="ghost" rounded="light">
          <template #icon>
            <User />
          </template>
        </BrutalButton>
        <BrutalButton type="ghost" rounded="full">
          <template #icon>
            <User />
          </template>
        </BrutalButton>
      </div>
    </section>
    <section>
      <h2>Teste de Cards</h2>
      <div class="group-cards">

        <BrutalCard title="Card 1">Conteúdo do card</BrutalCard>
        <BrutalCard title="Card 2" rounded="light" header="primary">
          <h3>Conteúdo do card</h3>
          <p>Conteúdo do card</p>
        </BrutalCard>
        <BrutalCard title="Card 3" subtitle="Teste de subtítulo" width="400">
          <h3>Conteúdo do card</h3>
          <p>Conteúdo do card</p>
        </BrutalCard>
      </div>
      <div class="group-cards">
        <BrutalCard brutal_title height="400" width="408" title="Card 3">
          <h3>Conteúdo do card</h3>
          <p>Conteúdo do card</p>
          <template #footer>
            <div class="card-buttons">
              <BrutalButton width="100%" type="error">Cancelar</BrutalButton>
              <BrutalButton width="100%">Confirmar</BrutalButton>
            </div>
          </template>
        </BrutalCard>
        <BrutalCard header="success" rounded="light" height="400" width="400" title="Card 4" subtitle="Teste de ícone">
          <template #headericon>
            <User />
          </template>
          <h3>Conteúdo do card</h3>
          <p>Conteúdo do card</p>
        </BrutalCard>
      </div>
    </section>
  </div>
</template>

<style scoped>
section {
  margin-bottom: 20px;
}

.group-cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;
}

.card-buttons {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
</style>
