<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import BrutalButton from '../ui/BrutalButton.vue';
import type { Component } from 'vue';

const route = useRoute();
const router = useRouter();

const props = defineProps<{
  name: string,
  text: string,
  icon: Component,
  hideSidebar: boolean,
}>();

const navigate = () => router.push({ name: props.name });
</script>

<template>
  <BrutalButton @click="navigate" size="small" width="100%" :type="route.name === props.name ? 'primary' : 'ghost'"
    :bordered="route.name === props.name" :shaded="route.name === props.name ? 'up' : 'none'">
    <template #icon>
      <component :is="props.icon" />
    </template>
    <template #default v-if="!hideSidebar">{{ props.text }}</template>
  </BrutalButton>
</template>

<style scoped lang="scss">
.brutal-btn {
  text-align: left !important;
  justify-content: flex-start !important;
}
</style>
