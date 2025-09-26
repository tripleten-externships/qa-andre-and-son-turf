import { Locator, Page } from "@playwright/test";

export class HomePage{

    //variables 
    readonly page: Page;
    readonly textOnHeroSection: Locator;

    constructor(page: Page){
        this.page=page;
        this.textOnHeroSection=page.getByText('EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT');
        // this.textOnHeroSection = page.locator('h1.hero'); 
    }

}