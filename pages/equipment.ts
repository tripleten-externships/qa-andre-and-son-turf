import { expect, Locator, Page } from "@playwright/test";


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