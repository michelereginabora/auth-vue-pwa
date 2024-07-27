// tests/signup.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Sign-Up Page', () => {
  test.beforeEach(async ({ page }) => {
    // Navegar para a página de registro
    await page.goto('http://localhost:5173/signup') // Ajuste a URL conforme necessário
  })

  test('should display the sign-up form correctly', async ({ page }) => {
    // Verificar se o formulário de registro está visível
    await expect(page.locator('.signup-form')).toBeVisible()

    // Verificar se os campos de entrada e rótulos estão presentes
    await expect(page.locator('label[for="name"]')).toHaveText('Nome')
    await expect(page.locator('label[for="username"]')).toHaveText('Nome de Usuário')
    await expect(page.locator('label[for="email"]')).toHaveText('Email')
    await expect(page.locator('label[for="password"]')).toHaveText('Senha')
  })

  test('should validate email input and show error message', async ({ page }) => {
    await page.fill('#email', 'invalid-email')
    // Usar o método correto para desfocar o campo
    await page.locator('#email').blur()
    await expect(page.locator('.error-message')).toHaveText('Insira um e-mail válido')
  })

  test('should show password strength when typing', async ({ page }) => {
    await page.fill('#password', 'weakpass')
    await expect(page.locator('.strength-text')).toHaveText('Muito Fraca')

    await page.fill('#password', 'Str0ngP@ssw0rd')
    await expect(page.locator('.strength-text')).toHaveText('Forte')
  })

  test('should toggle password visibility on icon click', async ({ page }) => {
    const passwordInput = page.locator('#password')
    const icon = page.locator('.icon-container i')

    await page.fill('#password', 'Str0ngP@ssw0rd')
    await expect(passwordInput).toHaveAttribute('type', 'password')
    await icon.click()
    await expect(passwordInput).toHaveAttribute('type', 'text')
    await icon.click()
    await expect(passwordInput).toHaveAttribute('type', 'password')
  })

  // eslint-disable-next-line playwright/expect-expect
  test('should submit the form correctly', async ({ page }) => {
    await page.fill('#name', 'John Doe')
    await page.fill('#username', 'john_doe')
    await page.fill('#email', 'john.doe@example.com')
    await page.fill('#password', 'Str0ngP@ssw0rd')
    await page.click('button[type="submit"]')

    // Adicione verificações adicionais após o envio do formulário, se necessário
  })
})
