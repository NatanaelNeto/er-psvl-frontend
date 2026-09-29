<script setup lang="ts">
const props = withDefaults(defineProps<{
  orientation: 'vertical' | 'horizontal',
  color?: 'primary' | 'secondary' | 'accent' | 'success' | 'error' | 'warning' | 'info' | 'default',
}>(), {
  color: 'default'
});
</script>

<template>
  <div class="divider" :class="[`divider--${props.orientation}`, `divider--${props.color}`]"></div>
</template>

<style scoped lang="scss">
@use '@/styles/variables.scss' as *;

.divider {
  align-self: stretch;
  flex-shrink: 0;

  &--vertical {
    width: $border-width;
    height: auto;
    min-height: 4rem;
  }

  &--horizontal {
    height: $border-width;
    width: auto;
    min-width: 4rem;
  }

  &--primary {
    background-color: $primary-color;
  }

  &--secondary {
    background-color: $secondary-color;
  }

  &--accent {
    background-color: $accent-color;
  }

  &--success {
    background-color: $success-color;
  }

  &--error {
    background-color: $error-color;
  }

  &--warning {
    background-color: $warning-color;
  }

  &--default {
    background-color: var(--black-color);
  }
}
</style>
