import { Page, Locator, expect } from '@playwright/test';

export class SeproPage {
  readonly page: Page;
  readonly browseProductButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.browseProductButtons = page.locator('text=Browse Products');
  }

  async clickBrowseProductButton(index: number) {
    const button = this.browseProductButtons.nth(index);

    // Wait for popup or new tab if it opens
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup').catch(() => null), // catch if no popup
      button.click(),
    ]);

    // If a new page opened — close it
    if (newPage) {
      await newPage.waitForLoadState('load');
      await newPage.waitForTimeout(2000); // optional short delay
      await newPage.close();
      console.log(`Closed popup from Browse Product #${index + 1}`);
    } else {
      console.log(`No new page opened for Browse Product #${index + 1}`);
    }
  
  // Go back to Sepro page explicitly
    await this.page.goto('https://www.andreandson.com/sepro');
    await this.page.waitForLoadState('domcontentloaded');
}
}