<script setup lang="ts">
// 1. Definição dos Tipos Aceitos
type ButtonType = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error'
type ButtonSize = 'small' | 'medium' | 'large'
type IconPosition = 'left' | 'right'

// 2. Declaração das Props com Valores Padrão
const props = withDefaults(defineProps<{
  rounded?: boolean
  shaded?: boolean
  type?: ButtonType
  size?: ButtonSize
  iconPosition?: IconPosition
  disabled?: boolean
}>(), {
  rounded: false,
  shaded: true,
  type: 'primary',
  size: 'medium',
  iconPosition: 'left',
  disabled: false
})
</script>

<template>
  <button class="brutal-btn" :class="[
    `brutal-btn--${props.type}`,
    `brutal-btn--${props.size}`,
    {
      'brutal-btn--rounded': props.rounded,
      'brutal-btn--shaded': props.shaded,
      'brutal-btn--icon-right': props.iconPosition === 'right'
    }
  ]" :disabled="disabled">
    <!-- Slot do Ícone (Só é renderizado se algo for passado para #icon) -->
    <span v-if="$slots.icon" class="brutal-btn__icon">
      <slot name="icon" />
    </span>

    <!-- Slot Padrão para o Texto -->
    <span class="brutal-btn__text">
      <slot />
    </span>
  </button>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins.scss' as *;

/* Base do Botão */
.brutal-btn {
  @include brutal-border;
  @include brutal-font;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  gap: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  /* Comportamento do Shaded */
  &--shaded {
    @include brutal-shadow;
  }

  /* Comportamento do Rounded */
  &--rounded {
    @include brutal-rounded;
  }

  /* Controle de Ícone à Direita (inverte a ordem do flex) */
  &--icon-right {
    flex-flow: row-reverse wrap;
  }

  /* Tamanhos */
  &--small {
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
  }

  &--medium {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }

  &--large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }

  /* Tipos de Cores (Paleta de alto contraste) */
  &--primary {
    background-color: $primary-color;
    color: $white-color;
  }

  &--secondary {
    background-color: $secondary-color;
    color: $black-color;
  }

  &--accent {
    background-color: $accent-color;
    color: $white-color;
  }

  &--success {
    background-color: $success-color;
    color: $black-color;
  }

  &--warning {
    background-color: $warning-color;
    color: $black-color;
  }

  &--error {
    background-color: $error-color;
    color: $white-color;
  }

  /* Estado Inativo */
  &:disabled {
    background-color: #94a3b8;
    color: #e2e8f0;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none; // Retira a sombra interativa
    transform: none;
  }

  /* Envolve o SVG e herda o tamanho correto */
  &__icon {
    display: flex;
    align-items: center;

    :deep(svg) {
      width: 1.5em;
      height: 1.5em;
    }
  }
}
</style>
