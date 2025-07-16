import { test, expect } from '@playwright/test';


// const arr=['vinaypanmand@gamil.com', 'panmandvinay99@gmail.com', 'llm@gmail.com']

// for(const ele of arr){


  test('test', async ({ page }) => {

  await test.step('login to app', async () => {

    await page.goto('https://github.com/login');

  })

  await test.step('Enter username and password', async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).fill("Helloele");
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('java');
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();


  })


  await test.step('Validation', async () => {

    await expect(page.getByRole('alert')).toContainText('Incorrect fgusername or password.');

    

  })








});






// }

