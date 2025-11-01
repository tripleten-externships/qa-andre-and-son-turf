import { Locator, Page } from "@playwright/test";

export class C2OSoilBuilder {

    readonly page: Page;
    readonly precisionOrganicsURL: string;

    constructor(page: Page){
        this.page = page;
        this.precisionOrganicsURL = page.url();
        
    }
}