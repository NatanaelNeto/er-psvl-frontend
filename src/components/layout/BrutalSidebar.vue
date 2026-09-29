<script setup lang="ts">
const props = withDefaults(defineProps<{
  position?: 'left' | 'right',
  hide?: boolean,
}>(), {
  position: 'left',
  hide: false,
})
</script>

<template>
  <div class="sidebar" :class="[`sidebar--${props.position}`, `sidebar--${props.hide ? 'hidden' : 'visible'}`]">
    <div v-if="$slots.top" class="sidebar__top">
      <slot name="top" />
    </div>
    <div v-if="$slots.default" class="sidebar__content">
      <slot />
    </div>
    <div v-if="$slots.bottom" class="sidebar__bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins.scss' as *;


.sidebar {
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--white-color);

  display: flex;
  flex-direction: column;

  transition: all 0.3s ease;

  &--visible {
    width: 20%;
    max-width: 300px;
    min-width: 250px;
  }

  &--hidden {
    width: 100px;
    max-width: 100px;
    min-width: 100px;
  }

  &__top {
    padding: $padding;
    border-bottom: $border-width solid var(--black-color);
  }

  &__content {
    padding: $padding;
  }

  &__bottom {
    padding: $padding;
    margin-top: auto;
    border-top: $border-width solid var(--black-color);
  }

  &--left {
    border-right: $border-width solid var(--black-color);
  }

  &--right {
    order: 2;
    /* Move a sidebar para o final do flex-container no App.vue */
    border-left: $border-width solid var(--black-color);
  }
}
</style>
