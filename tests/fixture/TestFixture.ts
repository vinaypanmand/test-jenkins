import {test as base} from '@playwright/test';
import { GoogleHomePage } from '../src/GoogleHomePage';
import { ResultPage } from '../src/ResultPage';
import { PlaylistPage } from '../src/PlaylistPage';

export const test = base.extend<{ 
    
    saveLogs: void;
    googlehomePage: GoogleHomePage;
    resultPage: ResultPage;
    playlistPage: PlaylistPage;






}> ({


saveLogs: [async ({}, use) => {

console.log('Global before is running...');
await use();
console. log ('Global afterEach is running...');

},
{auto: true}],

googlehomePage: async ({ page }, use) => {


    const googleHomePage = new GoogleHomePage(page);
    await use(googleHomePage);

},



playlistPage: async ({ page }, use) => {


    const playlistPage = new PlaylistPage(page);
    await use(playlistPage);

},



resultPage: async ({ page }, use) => {


    const resultPage = new ResultPage(page);
    await use(resultPage);

},

});

export { expect } from '@playwright/test';