<script setup lang="ts">
import BrutalSidebar from '@/components/layout/BrutalSidebar.vue';
import BrutalButton from '@/components/ui/BrutalButton.vue';
import BrutalDivider from '@/components/layout/BrutalDivider.vue';
import SidebarButtonComponent from '@/components/er/SidebarButtonComponent.vue';

import { Calendar, LayoutDashboard, LogOut, MoveLeft, MoveRight, Settings, Users, UserShield } from '@lucide/vue';
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
    <template #default>
      <div class="sidebar__content">
        <div class="sidebar__content--actions">
          <SidebarButtonComponent name="dashboard" :icon="LayoutDashboard" text="Dashboard"
            :hide-sidebar="hideSidebar" />
          <SidebarButtonComponent name="ambassadors" :icon="UserShield" text="Lista de Embaixadores"
            :hide-sidebar="hideSidebar" />
          <SidebarButtonComponent name="counselors" :icon="Users" text="Lista de Conselheiros"
            :hide-sidebar="hideSidebar" />
          <SidebarButtonComponent name="events" :icon="Calendar" text="Eventos" :hide-sidebar="hideSidebar" />
          <BrutalDivider orientation="horizontal" />
          <SidebarButtonComponent name="settings" :icon="Settings" text="Configurações" :hide-sidebar="hideSidebar" />
        </div>
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

  &__content {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    width: 100%;

    &--actions {
      flex: 1;
      display: flex;
      flex-flow: column wrap;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
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
