import { test, expect, chromium } from '@playwright/test'

test('Slow motion demo', async () => {
    const browser = await chromium.launch({
        slowMo: 500,
        headless: false
    });
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 600 }
        }
    });
    const page = await context.newPage();
    await page.goto('https://demo.applitools.com/')

    await page.locator('#username').fill('gt')
    await page.locator('#password').fill('1234')
    await page.locator('#log-in').click()

    await context.close();

})