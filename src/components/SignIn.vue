<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <div class="image-logo">
        <img :src="imageUrl" alt="Logo" class="logo" />
      </div>

      <h2 class="title">AuthVue</h2>

      <div class="form-group">
        <label for="email">{{ $t('message.email') }}</label>
        <input
          id="email"
          v-model="email"
          type="email"
          :placeholder="t('placeholder.email')"
          required
        />
        <span v-if="showError && emailError" class="error-message">{{ emailError }}</span>
      </div>

      <div class="form-group">
        <label for="password">{{ $t('message.password') }}</label>
        <div class="password-container">
          <input
            id="password"
            v-model="password"
            :type="passwordHidden ? 'password' : 'text'"
            :placeholder="t('placeholder.password')"
            required
          />
          <div class="icon-container">
            <i
              class="fa-solid"
              :class="passwordHidden ? 'fa-eye' : 'fa-eye-slash'"
              @click="togglePasswordVisibility"
            ></i>
          </div>
        </div>
      </div>

      <button type="submit">{{ $t('message.login') }}</button>
      <button type="button" class="signup-button" @click="navigateToSignUp">
        {{ $t('message.signup') }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import '@fortawesome/fontawesome-free/css/all.min.css'
import router from '@/router'
import validator from 'validator'
import { useI18n } from 'vue-i18n'
import { api } from '../boot/axios'

const imageUrl = 'https://vuejs.org/images/logo.png'
const email = ref('')
const password = ref('')
const passwordHidden = ref(true)
const isSmallScreen = ref(window.innerWidth <= 1024)
const emailError = ref('')
const showError = ref(false)
const loginError = ref(false)

const { t } = useI18n()

const navigateToSignUp = () => {
  router.push({ name: 'signup' })
}

const validateEmail = () => {
  if (email.value && !validator.isEmail(email.value)) {
    emailError.value = t('message.validateemail')
    showError.value = true
  } else {
    emailError.value = ''
    showError.value = false
  }
}

const handleSubmit = async () => {
  validateEmail()
  if (loginError.value) return

  console.log('Email:', email.value)
  console.log('Senha:', password.value)

  try {
    // Usando a API de teste para buscar todos os posts
    const response = await api.get('/posts')
    const users = response.data

    // Simulação de verificação de login
    const user = users.find(
      (user) => user.email === email.value && user.password === password.value
    )

    if (user) {
      console.log('Login bem-sucedido:', user)
    } else {
      loginError.value = 'Email ou senha inválidos'
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error)
    loginError.value = 'Erro ao realizar login'
  }
}

const togglePasswordVisibility = () => {
  passwordHidden.value = !passwordHidden.value
}

const handleResize = () => {
  isSmallScreen.value = window.innerWidth <= 1024
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
}

.login-form {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  overflow-y: auto;
  max-height: 90vh;
}

.image-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  max-width: 80px;
  height: auto;
}

.title {
  color: #22704d;
  margin-bottom: 20px;
  text-align: center;
  font-size: 24px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}

.password-container {
  position: relative;
}

.icon-container {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #2f9668;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #358a6e;
}

.signup-button {
  margin-top: 10px;
  background-color: #4a4a4a;
}

.signup-button:hover {
  background-color: #5a5a5a;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

@media (max-width: 480px) {
  .title {
    font-size: 20px;
  }

  input,
  button {
    font-size: 14px;
  }
}
</style>
