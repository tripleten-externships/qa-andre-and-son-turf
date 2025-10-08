import { Locator, Page } from "@playwright/test";

export class FertlSoil {

    readonly page: Page;
    readonly fertlSoilHeader: Locator;

    constructor (page: Page){
        this.page = page;
        this.fertlSoilHeader = page.locator("(//h1[normalize-space()='Fertl Soil'])[1])");
    }

}