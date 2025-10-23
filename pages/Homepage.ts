import { Page, Locator, FrameLocator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly contactSection: Locator;
  readonly mapFrame: FrameLocator;

  constructor(page: Page) {
    this.page = page;
    this.contactSection = page.getByText('CONTACT').nth(2);
    this.mapFrame = page.frameLocator('iframe[title="Google Maps"]');
  }

  async scrollToContactSection() {
    await this.contactSection.scrollIntoViewIfNeeded();
  }

  async enableSatelliteView() {
    const satelliteButton = this.mapFrame.getByRole('menuitemradio', { name: 'Show satellite imagery' });

    // Wait until the button is visible
    await satelliteButton.waitFor({ state: 'visible', timeout: 20000 });
    console.log('✅ Satellite button is visible.');

    // Ensure it’s scrolled into view
    await satelliteButton.scrollIntoViewIfNeeded();

    // Optional small wait to ensure Google Maps is interactive
    await this.page.waitForTimeout(2000);

    // Click the Satellite button
    await satelliteButton.click({ timeout: 10000 });
    console.log('✅ Clicked Satellite button successfully.');
  }

  async verifyMapCanvasVisible() {
    const mapCanvas = this.page.locator('//div[@id="comp-ig69hlqz"]');
    await expect(mapCanvas).toBeVisible({ timeout: 20000 });
  }
}
