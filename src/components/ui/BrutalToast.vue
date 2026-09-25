<script setup lang="ts">
import { useToastStore } from '@/stores/toastStore'
import { CheckCircle, AlertTriangle, Info, XCircle, X } from '@lucide/vue'

const toast = useToastStore()

// Mapeia o tipo do toast para o ícone correto
const getIcon = (type: string) => {
  switch (type) {
    case 'success': return CheckCircle
    case 'error': return XCircle
    case 'warning': return AlertTriangle
    default: return Info
  }
}
</script>

<template>
  <!-- O Container Fixo no canto inferior direito -->
  <div class="toast-container">
    <TransitionGroup name="toast" tag="div" class="toast-list">

      <div v-for="t in toast.toasts" :key="t.id" class="brutal-toast" :class="`brutal-toast--${t.type}`">
        <component :is="getIcon(t.type)" class="toast-icon" />

        <p class="toast-message">{{ t.message }}</p>

        <button class="toast-close" @click="toast.removeToast(t.id)">
          <X :size="18" />
        </button>
      </div>

    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/variables.scss' as *;
@use '@/styles/mixins.scss' as *;

.toast-container {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  /* Permite clicar através do container invisível */
}

.toast-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.brutal-toast {
  @include brutal-border;
  @include brutal-font;
  @include brutal-shadow($hover: false);

  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  width: 320px;
  pointer-events: auto;
  /* Reativa o clique apenas dentro do card */

  &--success {
    background-color: $success-color;
    color: $black-color;
  }

  &--error {
    background-color: $error-color;
    color: $white-color;
  }

  &--warning {
    background-color: $warning-color;
    color: $black-color;
  }

  &--info {
    background-color: $white-color;
    color: $black-color;
  }

  .toast-icon {
    flex-shrink: 0;
  }

  .toast-message {
    flex: 1;
    font-size: 0.875rem;
    margin: 0;
  }

  .toast-close {
    background: transparent;
    border: none;
    cursor: pointer;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    opacity: 0.7;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
}

/* Animações do Vue (TransitionGroup) */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(100px) translateY(10px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>
