const { test, expect } = require('@playwright/test');

test('Test1', async ({ page }) => {

    await page.goto('https://www.facebook.com/');
    await page.getByTestId('royal-email').fill("vinaypanmand@gmail.com");
    await page.getByTestId('royal-pass').fill("Laxman@12345");
    await page.getByTestId('royal-login-button').click();
   


})