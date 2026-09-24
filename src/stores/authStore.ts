import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@supabase/supabase-js'
import type { CounselorType } from '@/types/CounselorType'
import { supabase } from '@/services/supabase'

export const useAuthStore = defineStore('auth', () => {
  // Estado
  const user = ref<User | null>(null)
  const profile = ref<CounselorType | null>(null)
  const isReady = ref(false) // Avisa quando o Supabase terminou de checar a sessão

  // Getters computados
  const isAuthenticated = () => !!user.value

  // Ações
  async function fetchProfile(userId: string) {
    try {
      const { data, error } = await supabase
        .from('conselheiros')
        .select('*')
        .eq('id', userId)
        .maybeSingle() // Garante que retorna apenas um objeto, não um array

      if (error) throw error
      profile.value = data
    } catch (error) {
      console.error('Erro ao buscar perfil do conselheiro:', error)
      profile.value = null
    }
  }

  // Atualizamos o setUser para buscar o perfil automaticamente
  async function setUser(sessionUser: User | null) {
    user.value = sessionUser
    if (sessionUser) {
      await fetchProfile(sessionUser.id)
    } else {
      profile.value = null // Limpa os dados se fizer logout
    }
  }

  function setReady(status: boolean) {
    isReady.value = status
  }

  return { user, profile, isReady, isAuthenticated, setUser, setReady }
})
