import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(false)

  // Aplica a classe no HTML e salva no navegador
  function applyTheme() {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Alterna entre claro e escuro
  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme()
  }

  // Inicializa o tema quando o app carrega
  function initTheme() {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      isDark.value = savedTheme === 'dark'
    } else {
      // Se não tem tema salvo, pega a preferência do sistema operacional
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    applyTheme()
  }

  return { isDark, toggleTheme, initTheme }
})
