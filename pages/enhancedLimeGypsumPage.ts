import { Locator, Page } from "@playwright/test";

export class EnhancedLimeGypsum {

    readonly page: Page;
    readonly enhancedLimeGyspumHeader: Locator;

    constructor(page: Page){
        this.page = page
        this.enhancedLimeGyspumHeader = page.locator('(//span[normalize-space()="Turf King Enhanced Lime & Gypsum"])[1]');

    }    
};
