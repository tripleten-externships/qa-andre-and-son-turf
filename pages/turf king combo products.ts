import { Locator, Page, expect } from "@playwright/test";

export default class TurfProductCatalogPage {
    readonly page!: Page;
    readonly heading: Locator;
    readonly description: Locator;
    readonly productImage: Locator;


    constructor(page: Page) {
        this.page = page;
        this.heading = page.locator('h1');
        this.description = page.locator('p');
        this.productImage = page.locator('img');
    }

    async waitForLoad() {
        await this.page.waitForLoadState('networkidle');
    }

    async clickProductImage() {
        await this.productImage.click();
    }
}
