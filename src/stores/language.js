import { defineStore } from 'pinia'
import { useI18n } from 'vue-i18n'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLanguage: 'pt'
  }),
  actions: {
    setLanguage(lang) {
      this.currentLanguage = lang
      const { locale } = useI18n()
      locale.value = lang
      localStorage.setItem('language', lang)
    },
    initLanguage() {
      const savedLanguage = localStorage.getItem('language')
      if (savedLanguage) {
        this.setLanguage(savedLanguage)
      }
    }
  }
})
