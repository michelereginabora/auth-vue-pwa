<template>
  <select v-model="currentLocale" @change="changeLanguage">
    <option value="pt">Português</option>
    <option value="en">English</option>
  </select>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const changeLanguage = () => {
  locale.value = currentLocale.value
}

watch(locale, (newLocale) => {
  currentLocale.value = newLocale
})
</script>
