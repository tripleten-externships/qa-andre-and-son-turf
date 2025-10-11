import { expect, Locator, Page } from "@playwright/test";

export class TurfProductCatalogPage {
    readonly page: Page;
    readonly andreandsonlogo: Locator;
    readonly video: Locator;
    readonly ANDRE: Locator;
    readonly herosectionTitle: Locator;
    readonly herosectionDescription: Locator;
    readonly turfProductCatalogTitle: Locator;
    readonly turfProductCatalogDescription: Locator;
    readonly combinationProductsTitle: Locator;
    readonly combinationProductsDescription: Locator;
    readonly combinationProductslink: Locator;
    readonly learnMoreButton: Locator;
    readonly turfKingFertilizerTitle: Locator;
    readonly turfKingFertilizerDescription: Locator;
    readonly turfKingFertilizerLearnMoreButton: Locator;
    readonly controlAgentsTitle: Locator;
    readonly controlAgentsDescription: Locator;
    readonly controlAgentsLearnMoreButton: Locator;
    readonly LiquidfertilizerTitle: Locator;
    readonly LiquidfertilizerDescription: Locator;
    readonly LiquidfertilizerLearnMoreButton: Locator;
    readonly SeedTitle: Locator;
    readonly SeedDescription: Locator;
    readonly SeedLearnMoreButton: Locator;
    readonly AmendmentsAndConditionersTitle: Locator;
    readonly AmendmentsAndConditionersDescription: Locator;
    readonly AmendmentsAndConditionersLearnMoreButton: Locator;
    readonly TopDressingAndBunkerSandTitle: Locator;
    readonly TopDressingAndBunkerSandDescription: Locator;
    readonly TopDressingAndBunkerSandLearnMoreButton: Locator;
    readonly IceMeltTitle: Locator;
    readonly IceMeltDescription: Locator;
    readonly IceMeltLearnMoreButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.andreandsonlogo = page.locator('img[alt="Andre & Son Logo"]');
        this.video = page.locator('video');
        this.ANDRE = page.getByText('ANDRE & SON TURF');
        this.herosectionTitle = page.getByText('There\'s a Reason We\'re the');
        this.herosectionDescription = page.getByText('Our Turf King line of');
        this.turfProductCatalogTitle = page.getByText('TURF PRODUCT CATALOG');
        this.turfProductCatalogDescription = page.getByText('Browse our product catalog of');
        this.combinationProductsTitle = page.getByText('Combination Products', { exact: true });
        this.combinationProductsDescription = page.getByText('All of our combination');
        this.learnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.combinationProductslink = page.getByRole('link', { name: 'combination products' });
        this.turfKingFertilizerTitle = page.getByText('Turf King Fertilizer', { exact: true });
        this.turfKingFertilizerDescription = page.getByRole('paragraph').filter({ hasText: 'Our fertilizers are premium' });
        this.turfKingFertilizerLearnMoreButton = page.locator('#comp-kmctlbje__item-kes5qvil').getByRole('link', { name: 'Learn More' });
        this.controlAgentsTitle = page.getByText('Control Agents');
        this.controlAgentsDescription = page.getByText('Taking pride in teaming up');
        this.controlAgentsLearnMoreButton = page.getByRole('link', { name: 'Learn More' });
        this.LiquidfertilizerTitle = page.getByText('Liquid Fertilizer', { exact: true });
        this.LiquidfertilizerDescription = page.getByText('We\'ve got what you need to');
        this.LiquidfertilizerLearnMoreButton = page.getByRole('link', { name: 'Learn More' });
        this.SeedTitle = page.getByText('Seed', { exact: true });
        this.SeedDescription = page.getByText('Turf King seed is blended');
        this.SeedLearnMoreButton = page.getByRole('link', { name: 'Learn More' });
        this.AmendmentsAndConditionersTitle = page.getByText('Amendments & Conditioners');
        this.AmendmentsAndConditionersDescription = page.getByText('Golf, athletic sports,');
        this.AmendmentsAndConditionersLearnMoreButton = page.getByRole('link', { name: 'Learn More' });
        this.TopDressingAndBunkerSandTitle = page.getByText('Top Dressing & Bunker Sand', { exact: true });
        this.TopDressingAndBunkerSandDescription = page.getByText('Enhance your turf\'s health');
        this.TopDressingAndBunkerSandLearnMoreButton = page.getByRole('link', { name: 'Learn More' });
        this.IceMeltTitle = page.getByText('Ice Melt', { exact: true });
        this.IceMeltDescription = page.getByText('Ice melt is designed to make');
        this.IceMeltLearnMoreButton = page.getByRole('link', { name: 'Learn More' });
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