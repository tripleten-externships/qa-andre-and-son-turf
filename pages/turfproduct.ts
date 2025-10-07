import { Locator, Page } from "@playwright/test";

export class HomePage {

    readonly page: Page;
    readonly textonHero: Locator;
    readonly description: Locator;
    readonly productImage: Locator;



    constructor(page: Page) {
        this.page = page;
        this.textonHero = page.locator('selector-for-textonHero');
        this.description = page.locator('selector-for-description');
            this.productImage = page.locator('selector-for-productImage');
        }
    
        async goto(path = '/') {
            await this.page.goto(path);
        }
    
        async waitForLoad() {
            await this.textonHero.waitFor({ state: 'visible' });
        }
    
        async hoverTurfProductsDropdown() {
            await this.textonHero.hover();
        }
    
        async clickTurfProductsTitle() {
            await this.textonHero.click();
        }
    }