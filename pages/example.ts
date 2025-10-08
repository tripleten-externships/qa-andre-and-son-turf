import { expect, Locator, Page } from "@playwright/test";


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

export class SeedingPage{

    //variables 
    readonly page: Page;
    readonly contractServicesLink: Locator;
    readonly seedingLink: Locator;
    readonly sendButton: Locator;


    constructor(page: Page){
        this.page = page;
        this.contractServicesLink = page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0);
        this.seedingLink = page.getByRole('link', { name: 'SEEDING' });
        this.sendButton = page.locator('button[aria-label="Send"]');
    }

    async navigate() {
        // Visit the home page
        await this.page.goto('/');
        
        // Hover over CONTRACT SERVICES
        await this.contractServicesLink.hover();

        // When sub menu is visible, click on SEEDING link
        await this.seedingLink.click();

        // Verify that SEEDING page loads successfully
        await expect(this.page).toHaveURL('https://www.andreandson.com/seeding');
    }

    async sendForm() {
        // Click the SEND button
        await expect(this.sendButton).toBeVisible();
        await this.sendButton.click();

    }

}

export class ConstructionAndRenovationPage{

    //variables 
    readonly page: Page;
    readonly contractServicesLink: Locator;
    readonly constructionAndRenovationLink: Locator;
    readonly sendButton: Locator;

    constructor(page: Page){
        this.page =page;
        this.contractServicesLink = page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0);
        this.constructionAndRenovationLink = page.getByRole('link', { name: 'CONSTRUCTION & RENOVATION' });
        this.sendButton = page.locator('button[aria-label="Send"]');
    }

    async navigate() {
        // Visit the home page
        await this.page.goto('/');

        // Hover over CONTRACT SERVICES
        await this.contractServicesLink.hover();

        // When sub menu is visible, click on CONSTRUCTION & RENOVATION link
        await this.constructionAndRenovationLink.click();

        // Verify that CONSTRUCTION & RENOVATION page loads successfully
        await expect(this.page).toHaveURL('https://www.andreandson.com/construction-renovation');
    }

    async sendForm() {
        // Click the SEND button
        await expect(this.sendButton).toBeVisible();
        await this.sendButton.click();

    }

}

export class EquipmentPage {
    readonly page: Page;
    readonly equipmentLink: Locator;
    readonly heroTitle: Locator;
    readonly heroVideoContainer: Locator;
    readonly heroVideo: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.equipmentLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
        this.heroTitle = page.locator('span.color_15.wixui-rich-text__text');
        this.heroVideoContainer = page.locator('#videoContainer_comp-klspq2qr');
        this.heroVideo = this.heroVideoContainer.locator('video');
        this.submitButton = page.locator('button[aria-label="Submit"]').first();
    }

    async navigate() {
        await this.page.goto('/');
        await this.equipmentLink.click();
        await expect(this.page).toHaveURL(/equipment/);
    }

    async verifyHeroTitle(expectedText: string) {
        await expect(this.heroTitle).toHaveText(expectedText);
    }

    async verifyHeroVideo() {
        await expect(this.heroVideoContainer).toBeVisible();
        await expect(this.heroVideoContainer).toHaveAttribute('data-video-info', /.+/);
        await expect(this.heroVideo).toBeVisible();

        const isPaused = await this.heroVideo.evaluate(video => (video as HTMLVideoElement).paused);
        return isPaused;
    }

    async submitForm() {
        // Ensure the SUBMIT button is visible
        await expect(this.submitButton).toBeVisible();

        // Click the SUBMIT button
        await this.submitButton.click();

    }
}