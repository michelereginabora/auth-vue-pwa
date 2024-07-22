import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SignIn from '../SignIn.vue'

describe('SignIn', () => {
  it('renders the form correctly', () => {
    const wrapper = mount(SignIn)

    // Verifica se o título está presente
    expect(wrapper.find('h2.title').text()).toBe('AuthVue')

    // Verifica se o formulário contém campos e botão corretos
    expect(wrapper.find('input#email').exists()).toBe(true)
    expect(wrapper.find('input#password').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Entrar')

    // Verifica a presença do ícone de alternância de senha
    expect(wrapper.find('.icon-container i').exists()).toBe(true)
  })

  it('shows error message for invalid email', async () => {
    const wrapper = mount(SignIn)

    // Preenche o campo de e-mail com um e-mail inválido
    await wrapper.find('input#email').setValue('invalid-email')

    // Simula o blur no campo de e-mail para disparar a validação
    await wrapper.find('input#email').trigger('blur')

    // Verifica se a mensagem de erro é exibida
    expect(wrapper.find('.error-message').text()).toBe('Insira um e-mail válido')
  })

  it('toggles password visibility', async () => {
    const wrapper = mount(SignIn)

    // Verifica o estado inicial da visibilidade da senha
    expect(wrapper.find('input#password').attributes('type')).toBe('password')

    // Clica no ícone de alternância de senha
    await wrapper.find('.icon-container i').trigger('click')

    // Verifica se o tipo do campo de senha foi alterado para 'text'
    expect(wrapper.find('input#password').attributes('type')).toBe('text')

    // Clica novamente no ícone de alternância de senha
    await wrapper.find('.icon-container i').trigger('click')

    // Verifica se o tipo do campo de senha foi revertido para 'password'
    expect(wrapper.find('input#password').attributes('type')).toBe('password')
  })

  it('should handle form submission', async () => {
    const wrapper = mount(SignIn)

    // Preenche o formulário
    await wrapper.find('input#email').setValue('teste@exemplo.com')
    await wrapper.find('input#password').setValue('senha123')

    // Simula o envio do formulário
    await wrapper.find('form').trigger('submit.prevent')

    // Verifica se o formulário foi enviado corretamente
    // (Você pode precisar ajustar a verificação dependendo do que ocorre no evento submit)
    expect(wrapper.emitted()).toHaveProperty('submit')
  })
})
