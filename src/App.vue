<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
</script>
<template>
  <!-- Usando Tailwind para centralizar tudo no meio da tela com um fundo cinza claro -->
  <div class="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4">
   
    <div class="max-w-md text-center space-y-6">
      <h1 class="text-3xl font-bold text-slate-800">
        Acampamento Base Pronto! ⛺
      </h1>
     
      <p class="text-slate-600">
        Se o botão abaixo estiver com cor, bordas arredondadas e efeito de hover (mudar de cor ao passar o mouse), a instalação do BoldKit + Tailwind foi um sucesso:
      </p>

      <!-- Aqui está o seu componente de alta qualidade! -->
      <Button>Entrar no Sistema</Button>
    </div>

  </div>
</template>
<style scoped>

</style>
