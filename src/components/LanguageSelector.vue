<template>
  <div class="language-toggle">
    <button
      @click="toggleLanguage('pt')"
      :class="{ active: currentLocale === 'pt' }"
      aria-label="Português"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="flag-icon">
        <path fill="#6DA544" d="M0 0h512v512H0z" />
        <path fill="#FFDA44" d="M256 100.174L467.478 256 256 411.826 44.522 256z" />
        <circle fill="#F0F0F0" cx="256" cy="256" r="89.043" />
        <path
          fill="#0052B4"
          d="M211.478 250.435c-15.484 0-30.427 2.355-44.493 6.725.623 48.64 40.227 87.884 89.015 87.884 30.168 0 56.812-15.017 72.919-37.968-27.557-34.497-69.958-56.641-117.441-56.641z"
        />
        <path
          fill="#0052B4"
          d="M343.393 273.06a89.45 89.45 0 0 0 1.651-17.06c0-49.178-39.866-89.043-89.043-89.043-36.694 0-68.194 22.201-81.826 53.899a183.693 183.693 0 0 1 37.305-3.812c51.717-.001 98.503 21.497 131.913 56.016z"
        />
      </svg>
    </button>
    <button
      @click="toggleLanguage('en')"
      :class="{ active: currentLocale === 'en' }"
      aria-label="English"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="flag-icon">
        <path fill="#F0F0F0" d="M0 0h512v512H0z" />
        <path fill="#D80027" d="M0 0h512v64H0zm0 128h512v64H0zm0 128h512v64H0zm0 128h512v64H0z" />
        <path fill="#2E52B2" d="M0 0h256v256H0z" />
        <path
          fill="#F0F0F0"
          d="M196.641 219.316L216.916 256h31.717l-40.55-73.143-11.442 36.459zm-31.62 0l20.275 36.684h-40.549l20.274-36.684zm52.258-23.316l20.275 36.683h-40.55l20.275-36.683zm-72.534 0l20.275 36.683h-40.55l20.275-36.683zm113.956-34.974l20.275 36.683h-40.55l20.275-36.683zm-155.378 0l20.275 36.683h-40.55l20.275-36.683zm103.652-34.974l20.275 36.683h-40.55l20.275-36.683zm-51.926 0l20.275 36.683h-40.55l20.275-36.683z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLocale = ref(locale.value)

const toggleLanguage = (lang) => {
  locale.value = lang
  currentLocale.value = lang
}

watch(locale, (newLocale) => {
  currentLocale.value = newLocale
})
</script>

<style scoped>
.language-toggle {
  display: flex;
  gap: 8px;
}

button {
  background: none;
  border: 2px solid #ccc;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 2px;
  transition: all 0.3s ease;
  overflow: hidden;
}

button.active {
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
}

button:hover {
  transform: scale(1.1);
}

.flag-icon {
  width: 100%;
  height: 100%;
}
</style>
