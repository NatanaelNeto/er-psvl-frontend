<script setup lang="ts">
// 1. Definição dos Tipos Aceitos
type ButtonType = 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'ghost'
type ButtonSize = 'small' | 'medium' | 'large'
type IconPosition = 'left' | 'right'
type ShadeType = 'none' | 'up' | 'down'
type RoundedType = 'none' | 'light' | 'full'

// 2. Declaração das Props com Valores Padrão
const props = withDefaults(defineProps<{
  rounded?: RoundedType
  shaded?: ShadeType
  type?: ButtonType
  size?: ButtonSize
  iconPosition?: IconPosition
  disabled?: boolean
  width?: number | string
}>(), {
  rounded: 'none',
  shaded: 'up',
  type: 'primary',
  size: 'medium',
  iconPosition: 'left',
  disabled: false,
  width: 'auto',
})
</script>

<template>
  <button class="brutal-btn" :style="{ width: props.width }" :class="[
    `brutal-btn--${props.type}`,
    `brutal-btn--${props.size}`,
    `brutal-btn--shaded-${props.shaded}`,
    `brutal-btn--rounded-${props.rounded}`,
    {
      'brutal-btn--icon-right': props.iconPosition === 'right',
      'brutal-btn--no-text': !$slots.default
    }
  ]" :disabled="disabled">
    <!-- Slot do Ícone (Só é renderizado se algo for passado para #icon) -->
    <span v-if="$slots.icon" class="brutal-btn__icon">
      <slot name="icon" />
    </span>

    <!-- Slot Padrão para o Texto -->
    <span v-if="$slots.default" class="brutal-btn__text">
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
  margin: 4px;

  &--shaded {

    /* Comportamento do Shaded */
    &-up {
      @include brutal-shadow($elevated: true, $hover: true);
    }

    &-down {
      @include brutal-shadow($elevated: false, $hover: true);
    }

    &-none:hover:not(:disabled) {
      box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0.2);
      transition: box-shadow 0.15s ease;
    }
  }

  /* Comportamento do Rounded */
  &--rounded-light {
    @include brutal-rounded;
  }

  &--rounded-full {
    @include brutal-rounded(99999px);
  }

  /* Controle de Ícone à Direita (inverte a ordem do flex) */
  &--icon-right {
    flex-flow: row-reverse wrap;
  }

  /* Tamanhos */
  &--small {
    padding: 0 1rem;
    font-size: 0.75rem;
    min-height: $btn-height-small;

    &.brutal-btn--no-text {
      padding: 0;
      aspect-ratio: 1;
    }

    .brutal-btn__icon :deep(svg) {
      width: 1rem;
      height: 1rem;
    }
  }

  &--medium {
    padding: 0 1.5rem;
    font-size: 0.875rem;
    min-height: $btn-height-medium;

    &.brutal-btn--no-text {
      padding: 0;
      aspect-ratio: 1;
    }

    .brutal-btn__icon :deep(svg) {
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  &--large {
    padding: 0 2rem;
    font-size: 1.125rem;
    min-height: $btn-height-large;

    &.brutal-btn--no-text {
      padding: 0;
      aspect-ratio: 1;
    }

    .brutal-btn__icon :deep(svg) {
      width: 1.5rem;
      height: 1.5rem;
    }
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

  &--ghost {
    background-color: var(--white-color);
    color: var(--black-color);

    &.brutal-btn--shaded-up {
      @include brutal-shadow($elevated: true, $hover: true, $hover-color: #222428);
    }

    /* Quando for ghost E tiver o shaded-down, troca a cor do hover para preto */
    &.brutal-btn--shaded-down {
      @include brutal-shadow($elevated: false, $hover: true, $hover-color: #222428);
    }

    &.brutal-btn--shaded-none:hover:not(:disabled) {
      transition: box-shadow 0.15s ease;
      box-shadow: inset 0 0 0 999px #22242833;
    }
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
      stroke-width: 2px;
    }
  }
}
</style>
