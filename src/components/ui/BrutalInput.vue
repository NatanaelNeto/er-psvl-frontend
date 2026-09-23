<script setup lang="ts">
import { computed } from 'vue'

// 1. Definição dos Tipos Aceitos
type InputSize = 'small' | 'medium' | 'large'
type ShadeType = 'none' | 'up' | 'down'
type RoundedType = 'none' | 'light' | 'full'
type InputStatus = 'default' | 'error' | 'success' | 'warning'

// 2. Declaração das Props com Valores Padrão
const props = withDefaults(defineProps<{
  modelValue?: string | number
  type?: string
  placeholder?: string
  disabled?: boolean
  size?: InputSize
  rounded?: RoundedType
  shaded?: ShadeType
  label?: string
  error?: string
  hint?: string
  message?: string
  status?: InputStatus
  width?: number | string
}>(), {
  modelValue: '',
  type: 'text',
  placeholder: '',
  disabled: false,
  size: 'medium',
  rounded: 'none',
  shaded: 'none',
  status: 'default',
  width: '100%'
})

const resolvedStatus = computed(() => {
  if (props.error) return 'error'
  return props.status
})

const resolvedMessage = computed(() => {
  return props.message || props.error || props.hint
})

// 3. Emits para v-model e eventos
const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()

// 4. Handler de input
const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="brutal-input-wrapper" :style="{ width: props.width }">
    <!-- Label Opcional -->
    <label v-if="label" class="brutal-input-wrapper__label">{{ label }}</label>

    <div class="brutal-input-container">
      <!-- Slot para ícone à esquerda -->
      <span v-if="$slots.left" class="brutal-input-container__icon brutal-input-container__icon--left">
        <slot name="left" />
      </span>

      <!-- Input Principal -->
      <input class="brutal-input" :class="[
        `brutal-input--${size}`,
        `brutal-input--shaded-${shaded}`,
        `brutal-input--rounded-${rounded}`,
        `brutal-input--status-${resolvedStatus}`,
        { 'brutal-input--with-left-icon': $slots.left },
        { 'brutal-input--with-right-icon': $slots.right }
      ]" :type="type" :value="modelValue" :placeholder="placeholder" :disabled="disabled" @input="onInput"
        @focus="$emit('focus', $event)" @blur="$emit('blur', $event)" />

      <!-- Slot para ícone à direita -->
      <span v-if="$slots.right" class="brutal-input-container__icon brutal-input-container__icon--right">
        <slot name="right" />
      </span>
    </div>

    <!-- Mensagens -->
    <span v-if="resolvedMessage" class="brutal-input-wrapper__message" :class="`brutal-input-wrapper__message--${resolvedStatus}`">
      {{ resolvedMessage }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins.scss' as *;

.brutal-input-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;
  padding-bottom: 1.25rem;
  gap: 4px;

  &__label {
    @include brutal-font;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: var(--black-color);
  }

  &__message {
    @include normal-font;
    font-size: 0.75rem;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;

    &--error {
      color: $error-color;
      font-weight: 600;
    }

    &--success {
      color: $success-color;
      font-weight: 600;
    }

    &--warning {
      color: $warning-color;
      font-weight: 600;
    }

    &--default {
      color: #64748b;
    }
  }
}

.brutal-input-container {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  &__icon {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black-color);

    :deep(svg) {
      width: 1.25rem;
      height: 1.25rem;
      stroke-width: 2px;
    }

    &--left {
      left: 0.75rem;
    }

    &--right {
      right: 0.75rem;
    }
  }
}

.brutal-input {
  @include brutal-border;
  @include normal-font;

  width: 100%;
  background-color: var(--white-color);
  color: var(--black-color);
  outline: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;

  &::placeholder {
    color: #94a3b8;
  }

  /* Comportamento do Shaded */
  &--shaded-up {
    box-shadow: $shadow-offset $shadow-offset 0px 0px var(--black-color);
    transform: translate(-$shadow-offset, -$shadow-offset);

    &:focus:not(:disabled) {
      transform: translate(0, 0);
      box-shadow: 0 0 0px 0px var(--black-color);
    }
  }

  &--shaded-down {
    box-shadow: 0 0 0px 0px var(--black-color);
    transform: translate(0, 0);

    &:focus:not(:disabled) {
      transform: translate(-$shadow-offset, -$shadow-offset);
      box-shadow: $shadow-offset $shadow-offset 0px 0px var(--black-color);
    }
  }

  &--shaded-none {
    box-shadow: 0 0 0px 0px var(--black-color);

    &:focus:not(:disabled) {
      box-shadow: inset 0 0 0 999px rgba(0, 0, 0, 0.05);
    }
  }

  /* Comportamento do Rounded */
  &--rounded-light {
    @include brutal-rounded;
  }

  &--rounded-full {
    @include brutal-rounded(99999px);
  }

  /* Tamanhos */
  &--small {
    padding: 0 0.75rem;
    font-size: 0.875rem;
    min-height: $btn-height-small;

    &.brutal-input--with-left-icon {
      padding-left: 2.25rem;
    }

    &.brutal-input--with-right-icon {
      padding-right: 2.25rem;
    }
  }

  &--medium {
    padding: 0 1rem;
    font-size: 1rem;
    min-height: $btn-height-medium;

    &.brutal-input--with-left-icon {
      padding-left: 2.5rem;
    }

    &.brutal-input--with-right-icon {
      padding-right: 2.5rem;
    }
  }

  &--large {
    padding: 0 1.25rem;
    font-size: 1.125rem;
    min-height: $btn-height-large;

    &.brutal-input--with-left-icon {
      padding-left: 3rem;
    }

    &.brutal-input--with-right-icon {
      padding-right: 3rem;
    }
  }

  /* Estado de Status */
  &--status-error {
    border-color: $error-color;

    &:focus:not(:disabled) {
      box-shadow: inset 0 0 0 1px $error-color;
    }
  }

  &--status-success {
    border-color: $success-color;

    &:focus:not(:disabled) {
      box-shadow: inset 0 0 0 1px $success-color;
    }
  }

  &--status-warning {
    border-color: $warning-color;

    &:focus:not(:disabled) {
      box-shadow: inset 0 0 0 1px $warning-color;
    }
  }

  /* Estado Inativo */
  &:disabled {
    background-color: #e2e8f0;
    color: #94a3b8;
    cursor: not-allowed;
    opacity: 0.7;
    box-shadow: none;
    transform: none;
    border-color: #94a3b8;
  }

  /* Ocultar setas de controle para type="number" */
  &[type="number"] {
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
}

// Suporte ao tema dark
html.dark {
  .brutal-input-wrapper__label {
    color: var(--black-color);
  }

  .brutal-input {
    background-color: var(--background-color);

    &::placeholder {
      color: #64748b;
    }
  }

  .brutal-input--shaded-none:focus:not(:disabled) {
    box-shadow: inset 0 0 0 999px rgba(255, 255, 255, 0.05);
  }
}
</style>
