<script setup lang="ts">
import { computed } from 'vue'

type RoundedType = 'none' | 'light'
type HeaderType = 'default' | 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'error' | 'none'

const props = withDefaults(defineProps<{
  title?: string,
  subtitle?: string,
  brutal_title?: boolean,
  rounded?: RoundedType,
  height?: number | string,
  width?: number | string,
  header?: HeaderType
}>(), {
  rounded: 'none',
  height: 'auto',
  width: 'auto',
  header: 'default',
  brutal_title: false,
})

const formatSize = (value: number | string) => {
  if (typeof value === 'number') return `${value}px`
  if (!isNaN(Number(value))) return `${value}px`
  return value
}

const cardStyle = computed(() => ({
  width: formatSize(props.width),
  height: formatSize(props.height)
}))
</script>
<template>
  <div :style="cardStyle" class="brutal-card" :class="[
    { 'brutal-card--rounded-light': props.rounded === 'light' },
    { 'brutal-card--brutal-title': props.brutal_title }
  ]">
    <div v-if="!$slots.header && props.header !== 'none'" class="brutal-card__header"
      :class="[`brutal-card__header--${props.header}`]">
      <div v-if="$slots.headericon" class="brutal-card__header--icon">
        <slot name="headericon" />
      </div>
      <div>
        <h3 class="brutal-card__title">{{ props.title }}</h3>
        <p v-if="props.subtitle" class="brutal-card__subtitle">{{ props.subtitle }}</p>
      </div>
    </div>
    <div v-else-if="props.header !== 'none'" class="brutal-card__header-slot"
      :class="[`brutal-card__header--${props.header}`]">
      <slot name="header" />
    </div>
    <div class="brutal-card__content">
      <slot />
    </div>
    <div v-if="$slots.footer" class="brutal-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<style scoped lang="scss">
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins.scss' as *;

.brutal-card {
  @include brutal-border;
  @include brutal-shadow($elevated: true, $hover: false);

  min-height: 50px;
  min-width: 50px;

  background-color: var(--background-color);
  color: var(--black-color);

  display: flex;
  flex-direction: column;

  overflow: hidden;

  &--rounded-light {
    @include brutal-rounded;
  }

  &--brutal-title {
    .brutal-card__title {
      @include brutal-font;
      text-transform: uppercase;
    }
  }

  &__header {
    display: flex;
    flex-flow: row wrap;
    border-bottom: $border-width solid var(--black-color);
    padding: $padding;
    background-color: var(--white-color);
    color: var(--black-color);

    &-slot {
      border-bottom: $border-width solid var(--black-color);
    }

    &--icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      aspect-ratio: 1;
      margin-right: 20px;

      & :deep(svg) {
        stroke-width: 2;
        width: 2.5rem;
        height: 2.5rem;
      }
    }

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
      background-color: $white-color;
      color: $black-color;
    }
  }

  &__content {
    padding: $padding;
  }

  &__footer {
    margin-top: auto;
    padding: $padding;
    border-top: $border-width solid var(--black-color);
    background-color: color-mix(in srgb, var(--white-color) 0%, var(--black-color) 15%);
  }
}
</style>
