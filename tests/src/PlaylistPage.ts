import { Page, Locator, expect } from '@playwright/test';


export class PlaylistPage {

    page: Page;
    titleOfPage: Locator;


    constructor(page: Page) {

        this.page = page;
        this.titleOfPage = page.locator("//title[text()='Playwright by Testers Talk☑️ - YouTube']");



    }


    async getTitleOfPage() {


        
        //await expect(this.titleOfPage.innerText()).toBe('Playwright by Testers Talk☑️ - YouTube');
        await expect(this.page).toHaveTitle("Playwright by Testers Talk☑️ - YouTube");
        
        await this.page.waitForTimeout(5000);



    }

}