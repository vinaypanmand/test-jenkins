import { test, expect } from '@playwright/test';

import data from '../TestData/qa/data.json'

type testData={

TestSet1:{

skill1:string,
skill2:string


},

TestSet2:{

skill1:string,
skill2:string


}



}


const typedTestData=data as testData;

for(const dataset in typedTestData){

    const skill=typedTestData[dataset as keyof testData];


    test(`my test23-${skill.skill1}`, async ({page}) => {
  

  // Step to navigate to the login page
  await test.step('login to app', async () => {
   
    await page.goto(`${process.env.URL}`);
    //await page.goto(${process.env.URL});  //`${process.env.URL}` 'https://github.com/login'
  });

  await test.step('Enter username and password', async () => {
    await page.getByRole('textbox', { name: 'Username or email address' }).fill(skill.skill1);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(skill.skill2);
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();


  })


  await test.step('Validation', async () => {

    await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');

    

  })



    
});







  












}






