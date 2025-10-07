import { Locator, Page, expect } from "@playwright/test";

export class TurfProductCatalogPage {
    readonly page: Page;
    readonly video: Locator;
    readonly herosectionTitle: Locator;
    readonly herosectionDescription: Locator;
    readonly turfProductCatalogTitle: Locator;
    readonly turfProductCatalogDescription: Locator;
    readonly combinationProductsTitle: Locator;
    readonly combinationProductsDescription: Locator;
    readonly learnMoreButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.video = page.locator('video');
        this.herosectionTitle = page.locator('text=There\'s a Reason We\'re the Turf King - See for Yourself');
        this.herosectionDescription = page.locator('text=See for yourself why we\'re the best in the business.');
        this.turfProductCatalogTitle = page.locator('h1', { hasText: 'Turf Product Catalog' });
        this.turfProductCatalogDescription = page.locator('text=Browse our product catalog');
        this.combinationProductsTitle = page.locator('text=Combination Products');
        this.combinationProductsDescription = page.locator('text=Our combination products offer the best of both worlds');
        this.learnMoreButton = page.locator('text=Learn More');
    }

    async goto(path = '/') {
        await this.page.goto(path);
    }

    async waitForLoad() {
        await this.video.waitFor({ state: 'visible' });
    }
    async verifyVideoIsVisible() {
        await expect(this.video).toBeVisible();
    }
    async verifyHeroSectionTitleIsVisible() {
        await expect(this.herosectionTitle).toBeVisible();
    }
    async verifyHeroSectionDescriptionIsVisible() {
        await expect(this.herosectionDescription).toBeVisible();
    }
    async verifyTurfProductCatalogTitleIsVisible() {
        await expect(this.turfProductCatalogTitle).toBeVisible();
    }
    async verifyTurfProductCatalogDescriptionIsVisible() {
        await expect(this.turfProductCatalogDescription).toBeVisible();
    }
    async verifyCombinationProductsTitleIsVisible() {
        await expect(this.combinationProductsTitle).toBeVisible();
    }
    async verifyCombinationProductsDescriptionIsVisible() {
        await expect(this.combinationProductsDescription).toBeVisible();
    }
    async verifyLearnMoreButtonIsVisible() {
        await expect(this.learnMoreButton).toBeVisible();
    }
    async clickLearnMoreButton() {
        await this.learnMoreButton.click();
    }       
}