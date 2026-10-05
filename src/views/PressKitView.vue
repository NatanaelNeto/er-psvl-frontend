<script setup lang="ts">
import BrutalButton from '@/components/ui/BrutalButton.vue';
import BrutalCard from '@/components/layout/BrutalCard.vue';
import { User } from '@lucide/vue';
import BrutalInput from '@/components/ui/BrutalInput.vue';
import { h, ref } from 'vue';
import type { AmbassadorType } from '@/types/AmbassadorType';
import BrutalDataTable from '@/components/layout/BrutalDataTable.vue';
import type { BrutalTableColumn } from '@/components/utils/BrutalTableColumnType';

const mock = ref<AmbassadorType[]>([
  {
    id: '1',
    name: 'Ambassador 1',
    birthday: '2000-01-01',
    role: 'Ambassador',
    is_chief: false,
    guardian_name: 'Guardian 1',
    guardian_phone: '123456789',
    counselor_id: '1',
    score: 10,
    active: true,
    created_at: '2022-01-01',
    created_by: 'Admin',
    modified_at: '2022-01-01',
    modified_by: 'Admin',
  },
  {
    id: '2',
    name: 'Ambassador 2',
    birthday: '2000-01-01',
    role: 'Ambassador',
    is_chief: false,
    guardian_name: 'Guardian 2',
    guardian_phone: '987654321',
    counselor_id: '2',
    score: 20,
    active: true,
    created_at: '2022-01-01',
    created_by: 'Admin',
    modified_at: '2022-01-01',
    modified_by: 'Admin',
  },
  {
    id: '3',
    name: 'Ambassador 3',
    birthday: '2000-01-01',
    role: 'Ambassador',
    is_chief: false,
    guardian_name: 'Guardian 3',
    guardian_phone: '123456789',
    counselor_id: '3',
    score: 30,
    active: true,
    created_at: '2022-01-01',
    created_by: 'Admin',
    modified_at: '2022-01-01',
    modified_by: 'Admin',
  },
]);

const columns: BrutalTableColumn<AmbassadorType>[] = [
  {
    title: 'Nome',
    key: 'id',
    render: (row: AmbassadorType) => {
      return h('span', null, () => row.name)
    },
  },
  {
    title: 'Função',
    key: 'role',
    render: (row: AmbassadorType) => {
      return h('span', null, () => row.role)
    },
  },
  {
    title: 'Nome do Responsável',
    key: 'guardian_name',
    render: (row: AmbassadorType) => {
      return h('span', null, () => row.guardian_name)
    },
  },
]
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
    <section>
      <h2>Inputs</h2>
      <div class="container">
        <BrutalCard title="Teste de Inputs">
          <div class="group-inputs">
            <BrutalInput placeholder="Teste de placeholder" />
            <BrutalInput type="number" />
            <BrutalInput type="password" />
            <BrutalInput label="Teste de Label" placeholder="Teste de placeholder" />
            <BrutalInput label="Teste de Sombra" placeholder="Up" shaded="up" />
            <BrutalInput label="Teste de Sombra" placeholder="Down" shaded="down" />
            <BrutalInput label="Teste com Ícone" placeholder="Esquerda">
              <template #left>
                <User />
              </template>
            </BrutalInput>
            <BrutalInput label="Teste com Ícone" placeholder="Direita">
              <template #right>
                <User />
              </template>
            </BrutalInput>
            <BrutalInput label="Teste de Tamanho" placeholder="Pequeno" size="small" />
            <BrutalInput label="Teste de Tamanho" placeholder="Médio" size="medium" />
            <BrutalInput label="Teste de Tamanho" placeholder="Grande" size="large" />
            <BrutalInput label="Teste de Bordas" placeholder="Sem" rounded="none" />
            <BrutalInput label="Teste de Bordas" placeholder="Leve" rounded="light" />
            <BrutalInput label="Teste de Bordas" placeholder="Completo" rounded="full" />
            <BrutalInput label="Teste de Estado" placeholder="Hint" hint="Dica sob o input" />
            <BrutalInput label="Teste de Estado" placeholder="Disabled" disabled />
            <BrutalInput label="Teste de Estado" placeholder="Sucesso" status="success" message="Sucesso!" />
            <BrutalInput label="Teste de Estado" placeholder="Alerta" status="warning" message="Cuidado!" />
            <BrutalInput label="Teste de Estado" placeholder="Erro" error="Erro ao preencher" />
          </div>
        </BrutalCard>
      </div>
    </section>
    <section>
      <h2>Brutal Table</h2>
      <div class="container">
        <BrutalCard title="Tabela de Embaixadores com espaçamento">
          <BrutalDataTable :columns="columns" :data="mock" />
        </BrutalCard>
        <BrutalCard title="Tabela de Embaixadores sem espaçamento">
          <BrutalDataTable :columns="columns" :data="mock" :spaced="false" />
        </BrutalCard>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
section {
  margin-bottom: 20px;
}

.group {
  &-cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 8px;
  }

  &-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 100%;
    gap: 8px;
    align-items: end;
  }
}

.card-buttons {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.container {
  width: 90%;
  margin: 0 auto;
}
</style>
