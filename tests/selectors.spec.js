import { test, expect } from '@playwright/test'

test('Selectors Demo', async ({ page }) => {

    await page.goto('https://www.saucedemo.com')
    await page.pause()
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('edison')
    await page.locator('#login-button').click()
    await page.locator('xpath=//input[@name="password"]').fill('qwerty')
    await page.locator('//input[@name="password"]').fill('ramanujan')
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()
});