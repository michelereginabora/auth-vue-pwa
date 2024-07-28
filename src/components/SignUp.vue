<template>
  <div class="signup-container">
    <form @submit.prevent="handleSubmit" class="signup-form">
      <div class="image-logo">
        <img :src="imageUrl" alt="Logo" class="logo" />
      </div>

      <h2 class="title">Cadastro</h2>

      <div class="form-group">
        <label for="name">Nome</label>
        <input id="name" v-model="name" type="text" placeholder="Digite seu nome" required />
      </div>

      <div class="form-group">
        <label for="username">Nome de Usuário</label>
        <input
          id="username"
          v-model="username"
          type="text"
          placeholder="Digite seu nome de usuário"
          required
        />
      </div>

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
            autocomplete="new-password"
            @input="checkPasswordStrength"
          />

          <div class="icon-container">
            <i
              class="fa-solid"
              :class="passwordHidden ? 'fa-eye' : 'fa-eye-slash'"
              @click="togglePasswordVisibility"
            ></i>
          </div>
        </div>

        <div v-if="isPasswordTouched && password.length > 0" class="password-strength">
          <div
            class="strength-bar"
            :class="['strength-' + passwordStrength]"
            :style="{ width: strengthWidth }"
          ></div>
          <span class="strength-text">{{ strengthText }}</span>
        </div>
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import validator from 'validator'
import '@fortawesome/fontawesome-free/css/all.min.css'
import zxcvbn from 'zxcvbn'
import { api } from '../boot/axios'

const imageUrl = 'https://vuejs.org/images/logo.png'
const name = ref('')
const username = ref('')
const email = ref('')
const password = ref('')
const passwordHidden = ref(true)
const emailError = ref('')
const showError = ref(false)
const passwordStrength = ref<number>(0)
const isPasswordTouched = ref(false)

const validateEmail = () => {
  if (email.value && !validator.isEmail(email.value)) {
    emailError.value = 'Insira um e-mail válido'
    showError.value = true
  } else {
    emailError.value = ''
    showError.value = false
  }
}

const checkPasswordStrength = () => {
  isPasswordTouched.value = true
  const result = zxcvbn(password.value)
  passwordStrength.value = result.score
}

const strengthText = computed(
  () => ['Muito Fraca', 'Fraca', 'Moderada', 'Forte', 'Muito Forte'][passwordStrength.value] || ''
)
const strengthWidth = computed(
  () => ['0%', '25%', '50%', '75%', '100%'][passwordStrength.value] || '0%'
)

const handleSubmit = async () => {
  validateEmail()
  if (emailError.value) return

  try {
    const response = await api.post('/posts', {
      name: name.value,
      username: username.value,
      email: email.value,
      password: password.value
    })
    console.log('Cadastro realizado com sucesso:', response.data)
  } catch (error) {
    console.error('Erro ao realizar cadastro:', error)
  }
}

const togglePasswordVisibility = () => {
  passwordHidden.value = !passwordHidden.value
}
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vh;
}

.image-logo {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.logo {
  max-width: 80px;
}

.title {
  color: #22704d;
  margin-bottom: 20px;
  text-align: center;
  font-family: cursive;
}

.signup-form {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  height: auto;
  width: 500px;
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

.password-suggestion {
  font-size: 0.875em;
  color: #555;
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

.password-strength {
  margin-top: 10px;
}

.strength-bar {
  height: 5px;
  border-radius: 2px;
  background-color: #e0e0e0;
}

.strength-bar.strength-0 {
  background-color: red;
}

.strength-bar.strength-1 {
  background-color: orange;
}

.strength-bar.strength-2 {
  background-color: yellow;
}

.strength-bar.strength-3 {
  background-color: lightgreen;
}

.strength-bar.strength-4 {
  background-color: green;
}

.strength-text {
  margin-top: 5px;
  font-size: smaller;
}
</style>
