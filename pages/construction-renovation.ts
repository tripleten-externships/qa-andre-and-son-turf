import { expect, Locator, Page } from "@playwright/test";


export class ConstructionAndRenovationPage{

    //variables 
    readonly page: Page;
    readonly contractServicesLink: Locator;
    readonly constructionAndRenovationLink: Locator;
    readonly sendButton: Locator;
    readonly headingText: Locator;
    readonly emailInput: Locator;
    readonly emailLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.contractServicesLink = page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0);
        this.constructionAndRenovationLink = page.getByRole('link', { name: 'CONSTRUCTION & RENOVATION' });
        this.sendButton = page.locator('button[aria-label="Send"]');
        this.headingText = page.locator('span.wixui-rich-text__text', { hasText: 'Construction and Renovation' }).first();
        this.emailInput = page.locator('input[name="email"]');
        this.emailLink = page.locator('a[data-auto-recognition="true"]').first();
    }

    async navigate() {
        // Visit the home page
        await this.page.goto('/');

        // Hover over CONTRACT SERVICES
        await this.contractServicesLink.hover();

        // Check if the submenu is visible
        if (await this.constructionAndRenovationLink.isVisible()) {
            // If submenu is visible, click the link from submenu
            await this.constructionAndRenovationLink.click();
            console.log('Clicked link from visible submenu');
            } else {
            // Otherwise, go to the link directly
            await this.page.goto('https://www.andreandson.com/construction-renovation');
            console.log('Clicked link directly');
        }
        // Verify that CONSTRUCTION & RENOVATION page loads successfully
        await expect(this.page).toHaveURL('https://www.andreandson.com/construction-renovation');
    }

    async sendForm() {
        // Click the SEND button
        await expect(this.sendButton).toBeVisible();
        await this.sendButton.click();

    }

}
