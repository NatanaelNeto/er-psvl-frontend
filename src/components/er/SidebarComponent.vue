<script setup lang="ts">
import BrutalSidebar from '../layout/BrutalSidebar.vue';
import BrutalButton from '../ui/BrutalButton.vue';
import BrutalDivider from '../layout/BrutalDivider.vue';
import { LogOut, MoveLeft, MoveRight } from '@lucide/vue';

import { ref } from 'vue';

const hideSidebar = ref(false);

function toggleSidebar() {
  hideSidebar.value = !hideSidebar.value;
}

</script>

<template>
  <BrutalSidebar :hide="hideSidebar">
    <template #top>
      <div class="sidebar__top">
        <div class="sidebar__top--shield"></div>
        <BrutalDivider orientation="vertical" v-if="!hideSidebar" />
        <p class="u-brutal-font" v-if="!hideSidebar">
          Embaixada Pastor Sidny Viana Leite
        </p>
      </div>
    </template>
    <template #bottom>
      <div class="sidebar__bottom">
        <BrutalButton type="error" width="100%" size="small">
          <template #icon>
            <LogOut />
          </template>
          <template #default v-if="!hideSidebar">
            Sair
          </template>
        </BrutalButton>
        <BrutalButton @click="toggleSidebar" type="ghost" width="100%" size="small" shaded="none" :bordered="false">
          <template #icon>
            <MoveLeft v-if="!hideSidebar" />
            <MoveRight v-else />
          </template>
          <template #default v-if="!hideSidebar">
            Ocultar
          </template>
        </BrutalButton>
      </div>
    </template>
  </BrutalSidebar>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.sidebar {
  &__top {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    &--shield {
      aspect-ratio: 1;
      height: 4rem;
      background-color: $secondary-color;
      margin: 0 auto;

      mask-image: url('@/assets/shield.svg');
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;

      -webkit-mask-image: url('@/assets/shield.svg');
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }
  }

  &__bottom {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    gap: 8px
  }
}
</style>
