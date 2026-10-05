<script setup lang="ts" generic="T extends Record<string, any>">
import BrutalTableCell from '@/components/utils/BrutalTableCell'; // Importa o renderizador que criamos
import type { BrutalTableColumn } from '../utils/BrutalTableColumnType';

const props = withDefaults(defineProps<{
  columns: BrutalTableColumn<T>[];
  data: T[];
  size?: 'small' | 'medium' | 'large';
  maxHeight?: string;
  spaced?: boolean
}>(), {
  spaced: true,
  size: 'medium',
  maxHeight: '300px'
});
</script>

<template>
  <div class="brutal-table-wrapper" :style="{ maxHeight: props.maxHeight }">
    <table class="brutal-table" :class="`brutal-table--${props.size}`">
      <thead>
        <tr>
          <th v-for="col in props.columns" :key="String(col.key)"
            :style="{ width: typeof col.width === 'number' ? `${col.width}px` : col.width }">
            {{ col.title }}
          </th>
        </tr>
      </thead>
      <tbody :class="[{'brutal-table__spaced': props.spaced}]">
        <tr v-if="props.spaced" class="brutal-table__spacer">
          <td :colspan="props.columns.length"></td>
        </tr>
        <tr v-if="props.data.length === 0">
          <td :colspan="props.columns.length" class="brutal-table__empty">
            Nenhum dado encontrado.
          </td>
        </tr>
        <tr v-for="(row, rowIndex) in props.data" :key="rowIndex">
          <td v-for="col in props.columns" :key="String(col.key)">
            <!-- Se existir a função render, delega para o componente funcional -->
            <BrutalTableCell v-if="col.render" :renderFn="col.render" :row="row" />
            <!-- Caso contrário, exibe o valor puro da chave -->
            <template v-else>
              {{ row[col.key as keyof T] }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins.scss' as *;

.brutal-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-align: left;

  thead {
    @include brutal-border;
    box-shadow: $shadow-offset $shadow-offset 0px 0px var(--black-color);
  }

  th {
    @include brutal-font;
    text-transform: uppercase;
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: $primary-color;
    color: $white-color;

    /* Bordas manuais do cabeçalho */
    border-bottom: $border-width solid var(--black-color);
    border-right: $border-width solid var(--black-color);

    &:last-child {
      border-right: none;
    }
  }

  th,
  td {
    border-right: $border-width solid var(--black-color);
    border-bottom: $border-width solid var(--black-color);

    &:last-child {
      border-right: none; // Tira a borda direita da última coluna
    }
  }


  tr:last-child td {
    border-bottom: none; // Tira a borda inferior da última linha
  }

  /* Efeito Hover nas Linhas */
  tbody.brutal-table__spaced tr:not(:first-child) {
    @include brutal-border;

    background-color: var(--white-color);
    box-shadow: $shadow-offset 0 0px 0px var(--black-color);
    transition: background-color 0.15s ease;
    
    &:hover {
      background-color: rgba($secondary-color, 0.1);
    }
    
    &:last-child {
      box-shadow: $shadow-offset 0 0px 0px var(--black-color), $shadow-offset $shadow-offset 0px 0px var(--black-color);
    }
  }
  
  tbody:not(.brutal-table__spaced) tr {
    @include brutal-border;
    
    background-color: var(--white-color);
    box-shadow: $shadow-offset 0 0px 0px var(--black-color);
    transition: background-color 0.15s ease;

    &:hover {
      background-color: rgba($secondary-color, 0.1);
    }
    
    &:last-child {
      box-shadow: $shadow-offset 0 0px 0px var(--black-color), $shadow-offset $shadow-offset 0px 0px var(--black-color);
    }
  }

  thead:has(+ tbody:not(.brutal-table__spaced))  {
    box-shadow: none;
    position: relative;

    &:after {
      position: absolute;
      display: block;
      right: -$border-width * 2;
      top: 0;
      content: '';
      width: $border-width;
      height: 120%;
      background-color: var(--black-color);
    }

    tr th {
      border-bottom: 0 !important;
    }
  }

  &__spacer {
    height: 1rem;
    user-select: none;
    /* Altura do espaço entre cabeçalho e dados */

    td {
      border: none !important;
      /* Sem bordas na linha invisível */
      padding: 0 !important;
      background: transparent;
    }
  }

  &__empty {
    text-align: center;
    padding: 2rem !important;
    font-weight: 700;
    color: #64748b;
  }

  /* Controle de Tamanhos (Paddings e Fontes) */
  &--small {

    th,
    td {
      padding: 0.5rem 0.75rem;
      font-size: 0.75rem;
    }
  }

  &--medium {

    th,
    td {
      padding: 0.75rem 1rem;
      font-size: 0.875rem;
    }
  }

  &--large {

    th,
    td {
      padding: 1.25rem 1.5rem;
      font-size: 1rem;
    }
  }
}
</style>
