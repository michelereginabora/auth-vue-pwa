import { test, expect } from '@playwright/test'

test.describe('SignIn Page Responsiveness', () => {
  test('should display the logo on small screens and hide it on larger screens', async ({
    page
  }) => {
    // Acesse a URL da aplicação
    await page.goto('/')

    // Simula uma tela pequena (<= 1024px de largura)
    await page.setViewportSize({ width: 1024, height: 800 })

    // Verifica se o logo está visível em uma tela pequena
    const imageLogo = page.locator('.image-logo')
    await expect(imageLogo).toBeVisible({ timeout: 5000 })

    // Simula uma tela maior (> 1024px de largura)
    await page.setViewportSize({ width: 1025, height: 800 })

    // Verifica se o logo está oculto em uma tela maior
    await expect(imageLogo).toBeHidden({ timeout: 5000 })
  })
})
