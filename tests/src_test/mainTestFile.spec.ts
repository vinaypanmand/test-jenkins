//import { test, expect } from '@playwright/test';
import { test, expect } from '../../tests/fixture/TestFixture';
// import { GoogleHomePage } from "../src/GoogleHomePage";
// import { ResultPage } from "../src/ResultPage";
// import { PlaylistPage } from "../src/PlaylistPage";

test.only('my test', async ({ page, googlehomePage, resultPage, playlistPage }) => {
    console.log('test is running...');
   // const googleHomePage = new GoogleHomePage(page);
    await googlehomePage.navigateToGoogle();
    await googlehomePage.searchForChannel();


   // const resultPage = new ResultPage(page);
    await resultPage.clickOnPlaylist();

   // const playlistPage = new PlaylistPage(page);
    await playlistPage.getTitleOfPage();

    console.log('test is finished...');




});


test('test2', () => {

    console.log('test2 is running...');
    console.log('test2 is finished...');

})

test('test3', () => {

    console.log('test3 is running...');
    console.log('test3 is finished...');


})