<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <!-- Exibe logo apenas em telas pequenas -->
      <div v-if="isSmallScreen" class="image-logo">
        <img :src="imageUrl" alt="Logo" class="generic-image" />
      </div>

      <h2 class="title">AuthVue</h2>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          placeholder="Digite seu e-mail"
          required
          @blur="validateEmail"
          @input="validateEmail"
        />
        <span v-if="showError && emailError" class="error-message">{{ emailError }}</span>
      </div>

      <div class="form-group">
        <label for="password">Senha</label>
        <div class="password-container">
          <input
            id="password"
            v-model="password"
            :type="passwordHidden ? 'password' : 'text'"
            placeholder="Digite sua senha"
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

      <button type="submit">Entrar</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import '@fortawesome/fontawesome-free/css/all.min.css'

const imageUrl = 'https://vuejs.org/images/logo.png'
const email = ref('')
const password = ref('')
const passwordHidden = ref(true)
const isSmallScreen = ref(window.innerWidth <= 1024)
const emailError = ref('')
const showError = ref(false)

const validateEmail = () => {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  if (email.value && !emailPattern.test(email.value)) {
    emailError.value = 'Insira um e-mail válido'
    showError.value = true
  } else {
    emailError.value = ''
    showError.value = false
  }
}

const handleSubmit = () => {
  console.log('Email:', email.value)
  console.log('Senha:', password.value)
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
  height: 100vh;
}

.image-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.generic-image {
  max-width: 80px;
}

.title {
  color: #22704d;
  margin-bottom: 20px;
  text-align: center;
  font-family: cursive;
}

.login-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.form-group {
  margin-bottom: 20px;
  font-family: cursive;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  padding-right: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #2f9668;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #358a6e;
}

.password-container {
  display: flex;
  align-items: center;
  position: relative;
}

.error-message {
  color: red;
  font-size: 0.875em;
}

.icon-container {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

i {
  color: #ccc;
}

i:hover {
  color: #000;
}
</style>
