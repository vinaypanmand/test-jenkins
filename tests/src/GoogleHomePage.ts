import { Locator, Page } from "@playwright/test";



export class GoogleHomePage {

    page: Page;
    searchBox: Locator;




    constructor(page: Page) {

        this.page = page;
        this.searchBox = page.locator('#APjFqb');




    }
    async navigateToGoogle() {

        await this.page.goto(`${process.env.googleUrl}`);

    }

    async searchForChannel() {
        await this.searchBox.fill(`${process.env.input_text}`);
        await this.page.keyboard.press('Enter');


    }






}