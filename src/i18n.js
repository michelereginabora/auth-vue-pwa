import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      email: 'E-mail',
      password: 'Password',
      login: 'Login',
      signup: 'Sign up',
      validateemail: 'Insert a valid e-mail',
      name: 'Name',
      username: 'Username',
      welcome: 'Welcome',
      welcomemessage: 'Welcome to AuthVue'
    },
    password: {
      veryWeak: 'Very Weak',
      weak: 'Weak',
      moderate: 'Moderate',
      strong: 'Strong',
      veryStrong: 'Very Strong'
    },
    placeholder: {
      password: 'Enter your password',
      email: 'Enter your e-mail',
      name: 'Enter your name',
      username: 'Enter your username'
    }
  },
  pt: {
    message: {
      email: 'E-mail',
      password: 'Senha',
      login: 'Entrar',
      signup: 'Cadastrar',
      validateemail: 'Insira um e-mail válido',
      name: 'Nome',
      username: 'Nome de Usuário',
      welcome: 'Bem-vindo',
      welcomemessage: 'Seja bem-vindo ao AuthVue'
    },
    password: {
      veryWeak: 'Muito Fraca',
      weak: 'Fraca',
      moderate: 'Moderada',
      strong: 'Forte',
      veryStrong: 'Muito Forte'
    },
    placeholder: {
      password: 'Insira sua senha',
      email: 'Insira seu e-mail',
      name: 'Insira seu nome',
      username: 'Insira seu nome de usuário'
    }
  }
}

const i18n = createI18n({
  locale: 'pt',
  fallbackLocale: 'en',
  messages
})

export default i18n
