import { test, expect } from '@playwright/test'

test.describe('HomeView responsiveness', () => {
  test('should display Logo component on larger screens', async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 })
    await page.goto('/')

    const logo = page.locator('.logo')
    await expect(logo).toBeVisible()
  })

  test('should hide Logo component on smaller screens', async ({ page }) => {
    await page.setViewportSize({ width: 767, height: 768 })
    await page.goto('/')

    const logo = page.locator('.logo')
    await expect(logo).toBeHidden()
  })
})
