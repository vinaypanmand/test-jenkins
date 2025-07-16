
import { Page, Locator } from '@playwright/test';

export class ResultPage {


    page: Page;
    playlistURL: Locator;

    constructor(page: Page) {

        this.page = page;
        this.playlistURL = page.locator("//h3[text()='Playwright by Testers Talk☑️']");


    }

    async clickOnPlaylist() {

        await this.playlistURL.click();




    }

}