<script setup lang="ts">
import BrutalCard from '@/components/layout/BrutalCard.vue';
import BrutalButton from '@/components/ui/BrutalButton.vue';
import BrutalInput from '@/components/ui/BrutalInput.vue';
import { supabase } from '@/services/supabase';
import { ChevronRight, Lock, Undo2, User } from '@lucide/vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const loading = ref(false);
const errorMessage = ref('');

const router = useRouter();

const handleLogin = async () => {
  if (!email.value || !password.value) {
    errorMessage.value = 'Por favor, preencha todos os campos.';
    return;
  }

  loading.value = true;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });

    if (error) throw error;

    console.log('Login realizado com sucesso!', data);
    router.push('/');
  } catch (error) {
    console.error('Erro no login:', error);
    errorMessage.value = 'E-mail ou senha incorretos. Tente novamente.';
  } finally {
    loading.value = false;
  }
}

</script>

<template>
  <div class="login">
    <BrutalCard>
      <template #header>
        <div class="login__header">
          <div class="login__header--shield"></div>
          <div class="login__header--content">
            <h1>Embaixada Pastor Sidny Viana Leite</h1>
            <p>Sistema de Gerenciamento de Embaixada</p>
          </div>
        </div>
      </template>
      <div class="login__content">
        <div class="login__content--inputs">
          <BrutalInput v-model="email" label="E-mail" placeholder="seu.nome@exemplo.com">
            <template #left>
              <User />
            </template>
          </BrutalInput>
          <BrutalInput v-model="password" label="Senha" placeholder="*******" type="password">
            <template #left>
              <Lock />
            </template>
          </BrutalInput>
        </div>
      </div>
      <template #footer>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <div class="login__footer">
          <BrutalButton width="100%" type="ghost">
            <template #icon>
              <Undo2 />
            </template>
            Voltar
          </BrutalButton>
          <BrutalButton width="100%" type="secondary" :disabled="loading" @click="handleLogin">
            <template #icon>
              <ChevronRight />
            </template>
            Acessar
          </BrutalButton>
        </div>
      </template>
    </BrutalCard>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
@use '@/styles/mixins' as *;

.login {
  background-color: $primary-color;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 1rem;
    padding: $padding;
    background-color: $white-color;
    max-width: 500px;

    &--shield {
      width: 150px;
      height: 150px;
      flex-shrink: 0;

      /* Esta é a cor que vai preencher o ícone */
      background-color: $secondary-color;

      /* Aqui usamos a imagem como uma máscara para recortar o background acima */
      mask-image: url('@/assets/shield.svg');
      mask-size: contain;
      mask-repeat: no-repeat;
      mask-position: center;

      -webkit-mask-image: url('@/assets/shield.svg');
      -webkit-mask-size: contain;
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-position: center;
    }

    &--content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
  }

  &__footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }
}
</style>
