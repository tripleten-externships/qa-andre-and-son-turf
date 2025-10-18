import { expect, Locator, Page } from "@playwright/test";


export class SeedingPage{

    //variables 
    readonly page: Page;
    readonly contractServicesLink: Locator;
    readonly seedingLink: Locator;
    readonly sendButton: Locator;
    readonly headingText: Locator;
    readonly emailInput: Locator;
    readonly emailLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.contractServicesLink = page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0);
        this.seedingLink = page.getByRole('link', { name: 'SEEDING' }).nth(0);
        this.sendButton = page.locator('button[aria-label="Send"]');
        this.headingText = page.locator('span.wixui-rich-text__text', { hasText: 'Seeding' }).first();
        this.emailInput = page.locator('input[name="email"]');
        this.emailLink = page.locator('a[data-auto-recognition="true"]').first();
    }

    async navigateSeeding() {
        // Visit the home page
        await this.page.goto('/');
        
        // Hover over CONTRACT SERVICES
        await this.contractServicesLink.hover();

        // Check if the submenu is visible
        if (await this.seedingLink.isVisible()) {
            // If submenu is visible, click the link from submenu
            await this.seedingLink.click();
            console.log('Clicked link from visible submenu');
            } else {
            // Otherwise, go to the link directly
            await this.page.goto('https://www.andreandson.com/seeding');
            console.log('Clicked link directly');

        // Verify that SEEDING page loads successfully
        await expect(this.page).toHaveURL('https://www.andreandson.com/seeding');
    }

    }

    async clickSendForm() {
        // Click the SEND button
        await expect(this.sendButton).toBeVisible();
        await this.sendButton.click();

    }

}
