import { Page, Locator, expect } from '@playwright/test'; 
export class AlbaughPage {
  readonly page: Page;
  readonly browseProductButtons: Locator;
  readonly heading: Locator;
  readonly description: Locator;

  constructor(page: Page) {
    this.page = page;
    this.browseProductButtons = page.locator('a:has-text("Browse Products")');
    this.heading = page.locator('h1:has-text("Albaugh")');
    this.description = page.locator('span.wixui-rich-text__text', { hasText: 'Albaugh offers' });
  }
  
    async verifyAlbaughPageContent() {
    
    await expect(this.heading).toBeVisible();
    await expect(this.description.first()).toBeVisible();
    console.log('Verified Albaugh page heading and description');
  }
  async clickBrowseProductButton(index: number) {
    const expectedUrls = [
      /fungicides/i,
      /herbicides/i,
      /insecticides/i,
    ];

    const button = this.browseProductButtons.nth(index);

    // Wait for popup or new tab if it opens
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup').catch(() => null),
      button.click(),
    ]);

    if (newPage) {
      await newPage.waitForLoadState('load');

      // Assertion to verify URL
      if (expectedUrls[index]) {
        await expect(newPage).toHaveURL(expectedUrls[index]);
        console.log(`Browse Product #${index + 1} navigated correctly.`);
      } else {
        console.log(`No expected URL defined for Browse Product #${index + 1}`);
      }

      await newPage.waitForTimeout(2000);
      await newPage.close();
      console.log(`Closed popup from Browse Product #${index + 1}`);
    } else {
      console.log(`No new page opened for Browse Product #${index + 1}`);
    }

    // Return to main Albaugh page
    await this.page.goto('https://www.andreandson.com/prime-source');
    await this.page.waitForLoadState('domcontentloaded');
  }
}
