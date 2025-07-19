import {test, expect} from '@playwright/test';

test('test for jenkins', {tag: ['@vinay']}, async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle('Fast and reliable end-to-end testing for modern web apps | Playwright');
});