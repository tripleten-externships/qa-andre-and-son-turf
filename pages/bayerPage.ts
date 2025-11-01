import { Page, Locator, expect } from '@playwright/test';

export class BayerPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async clickBrowseProductButton(index: number) {
    const buttons = this.page.locator('a:has-text("Browse Products")');
    await buttons.nth(index).click();
  }
}
