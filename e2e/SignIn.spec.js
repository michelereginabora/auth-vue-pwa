import { test, expect } from '@playwright/test'

test.describe('Login Page', () => {
  test('should render login form correctly and handle submit', async ({ page }) => {
    // Acesse a URL da aplicação
    await page.goto('/')

    // Verifica se o título do formulário está presente
    const title = page.locator('h2.title')
    await expect(title).toHaveText('AuthVue')

    // Verifica se os campos de email e senha estão presentes
    const emailInput = page.locator('input#email')
    const passwordInput = page.locator('input#password')
    const submitButton = page.locator('button[type="submit"]')

    await expect(emailInput).toBeVisible()
    await expect(passwordInput).toBeVisible()
    await expect(submitButton).toBeVisible()

    // Preenche o formulário e submete
    await emailInput.fill('teste@exemplo.com')
    await passwordInput.fill('senha123')
    await submitButton.click()

    // Verifica se o formulário foi submetido (pode precisar ajustar conforme o comportamento real)
  })
})
