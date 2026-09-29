<script setup lang="ts">
import BrutalSidebar from '../layout/BrutalSidebar.vue';
import BrutalButton from '../ui/BrutalButton.vue';
import { LogOut } from '@lucide/vue';

</script>

<template>
  <BrutalSidebar hide>
    <template #bottom>
      <div class="app--sidebar__bottom">
        <BrutalButton type="error" width="100%" size="small">
          <template #icon>
            <LogOut />
          </template>
        </BrutalButton>
      </div>
    </template>
  </BrutalSidebar>
</template>

<style scoped lang="scss"></style>
