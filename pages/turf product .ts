import { expect, Locator, Page } from "@playwright/test";

export class TurfProductPage {
    readonly page: Page;
    readonly andreandsonlogo: Locator;
    readonly arrowbutton: Locator;
    readonly servicesTitle: Locator;
    readonly TurfProductsheading: Locator;
    readonly TurfProductsdescription: Locator;
    readonly video: Locator;
    readonly ANDREandsontext: Locator;
    readonly herosectionTitletext: Locator;
    readonly herosectionDescriptiontext: Locator;
    readonly turfProductCatalogheading: Locator;
    readonly turfProductCatalogDescription: Locator;
    readonly combinationProductsTitle: Locator;
    readonly combinationProductsDescription: Locator;
    readonly combinationProductslink: Locator;
    readonly learnMoreButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.andreandsonlogo = page.getByRole('link', { name: 'logo_edited_edited.png' });
        this.arrowbutton = page.locator('button[aria-label="Scroll down"]');
        this.servicesTitle = page.locator('h2:has-text("SERVICES")');
        this.TurfProductsheading = page.locator('h2:has-text("TURF PRODUCTS")');
        this.TurfProductsdescription = page.locator('text=Turf King products are high-quality, durable, and designed to meet the needs of both residential and commercial customers. Whether you are looking for a low-maintenance lawn or a high-performance sports field, we have the right solution for you.');
        this.learnMoreButton = page.locator('text=LEARN MORE');
        this.video = page.locator('video');
        this.ANDREandsontext = page.locator('text=ANDRE & SON TURF');
        this.herosectionTitletext = page.locator('h1').first();
        this.herosectionDescriptiontext = page.locator('p').first();
        this.turfProductCatalogheading = page.locator('h2').first();
        this.turfProductCatalogDescription = page.locator('p').nth(1);
        this.combinationProductsTitle = page.locator('h2').nth(1);
        this.combinationProductsDescription = page.locator('p').nth(2);
        this.combinationProductslink = page.locator('a:has-text("Learn More")').first();
        this.learnMoreButton = page.locator('a:has-text("Learn More")').first();
    }

    async goto(path = '/') {
        await this.page.goto(path);
    }
    async clickarrowbutton() {
        await this.arrowbutton.click();
    
    }
    async waitForLoad() {
        await this.video.waitFor({ state: 'visible' });
    }

    async verifyVideoIsVisible() {
        await expect(this.video).toBeVisible();
    }

    async verifyHeroSectionTitleIsVisible() {
        await expect(this.herosectionTitletext).toBeVisible();
    }

    async verifyHeroSectionDescriptionIsVisible() {
        await expect(this.herosectionDescriptiontext).toBeVisible();
    }

    async verifyTurfProductCatalogTitleIsVisible() {
        await expect(this.turfProductCatalogheading).toBeVisible();
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
    async verifyCombinationProductsLinkIsVisible() {
        await expect(this.combinationProductslink).toBeVisible();
    }
    async clickCombinationProductsLink() {
        await this.combinationProductslink.click();
    }
    async verifyLearnMoreButtonIsVisible() {
        await expect(this.learnMoreButton).toBeVisible();
    }

    async clickLearnMoreButton() {
        await this.learnMoreButton.click();
    }
    async clickAndreAndSonLogo() {
        await this.andreandsonlogo.click();
    }
}