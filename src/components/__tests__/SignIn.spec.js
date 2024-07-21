import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SignIn from '../SignIn.vue'

describe('SignIn', () => {
  it('renders the form correctly', () => {
    const wrapper = mount(SignIn)

    // Verifica se o título está presente
    expect(wrapper.find('h2').text()).toBe('AuthVue')

    // Verifica se o formulário contém campos e botão corretos
    expect(wrapper.find('input#email').exists()).toBe(true)
    expect(wrapper.find('input#password').exists()).toBe(true)
    expect(wrapper.find('button').text()).toBe('Entrar')
  })
})
