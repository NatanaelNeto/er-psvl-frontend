<script setup lang="ts">
const props = withDefaults(defineProps<{
  position?: 'left' | 'right'
}>(), {
  position: 'left'
})
</script>

<template>
  <div class="sidebar" :class="`sidebar--${props.position}`">
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
  width: 20%;
  position: sticky;
  /* Sticky é melhor que fixed aqui pois empurra o main em vez de sobrepor */
  top: 0;
  min-width: 250px;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: var(--white-color);

  display: flex;
  flex-direction: column;

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
