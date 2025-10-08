import { Locator, Page } from "@playwright/test";

export class EnhancedLimeGypsum {

    readonly page: Page;
    readonly enhancedLimeGyspumHeader: Locator;
    readonly fertlSoil: Locator;

    constructor(page: Page){
        this.page = page
        this.enhancedLimeGyspumHeader = page.locator('(//span[normalize-space()="Turf King Enhanced Lime & Gypsum"])[1]');
        this.fertlSoil = page.locator('(//span[normalize-space()="Learn More"])[2]');
    }    

    //problem with locator
    async navigateToFertlSoil(){
        await this.fertlSoil.click();
    }
};
