<script setup lang="ts">
import { User } from '@lucide/vue';

type PageIconType = 'primary' | 'secondary' | 'accent' | 'black' | 'white' | 'success' | 'warning' | 'error' | 'none'
type PageIconBorderType = 'light' | 'full' | 'none'
type PageContentType = PageIconType

const props = withDefaults(defineProps<{
  title: string
  subtitle: string
  iconType?: PageIconType
  iconRounded?: PageIconBorderType
  iconShadow?: boolean
  contentBackground?: PageContentType
}>(), {
  iconType: 'none',
  title: '',
  subtitle: '',
  iconRounded: 'none',
  iconShadow: true,
  contentBackground: 'none',
})
</script>

<template>
  <div class="brutal-page">
    <header class="brutal-page__header">
      <div class="brutal-page__header-left">
        <div v-if="$slots.icon" class="brutal-page__header--icon" :class="[
          `icon-${props.iconType}`,
          `icon-rounded-${props.iconRounded}`,
          { 'icon-shadow': props.iconShadow }
        ]">
          <slot name="icon">
            <User />
          </slot>
        </div>
        <div class="brutal-page__header--content">
          <h1>{{ props.title || 'Título da página' }}</h1>
          <p>{{ props.subtitle || 'Subtítulo da página.' }}</p>
        </div>
      </div>
      <div v-if="$slots.actions" class="brutal-page__header-right">
        <slot name="actions" />
      </div>
    </header>
    <main class="brutal-page__content" :class="[
      `content-${props.contentBackground}`,
    ]">
      <slot>
        <h2>Conteúdo da página</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta qui sint vel quasi sed, laborum
          assumenda dolores vitae voluptas unde adipisci natus rerum magni alias ea fuga necessitatibus aspernatur.</p>
      </slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins.scss' as *;
@use 'sass:list';

$page-colors: (
  "primary": ($primary-color, $white-color),
  "secondary": ($secondary-color, $white-color),
  "accent": ($accent-color, $white-color),
  "black": ($black-color, $white-color),
  "white": ($white-color, $black-color),
  "success": ($success-color, $black-color),
  "warning": ($warning-color, $white-color),
  "error": ($error-color, $white-color)
);

.brutal-page {
  background-color: var(--background-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  &__header {
    background-color: var(--white-color);
    padding: $padding;
    border-bottom: $border-width solid var(--black-color);

    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    &-left,
    &-right {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      gap: 1rem;
    }

    &--icon {
      @include brutal-border;

      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      padding: 0.625rem;

      &.icon-shadow {
        @include brutal-shadow($elevated: true, $hover: false);
      }

      &.icon-rounded-light {
        @include brutal-rounded;
      }

      &.icon-rounded-full {
        @include brutal-rounded(99999px);
      }

      @each $name, $colors in $page-colors {
        &.icon-#{$name} {
          background-color: list.nth($colors, 1);

          :deep(svg) {
            color: list.nth($colors, 2);
          }
        }
      }

      &:deep(svg) {
        width: 2.25rem;
        height: 2.25rem;
        stroke-width: 2px;
      }
    }
  }

  &__content {
    padding: $padding;

    @each $name, $colors in $page-colors {
      &.content-#{$name} {
        background-color: list.nth($colors, 1);

        :deep(h2),
        :deep(p) {
          color: list.nth($colors, 2);
        }
      }
    }
  }
}
</style>
