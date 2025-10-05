import { Page, Locator, expect } from '@playwright/test';

export class EnvuPage {
  readonly page: Page;
  readonly browseProductButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.browseProductButtons = page.locator('text=Browse Products');
  }

    async clickBrowseProductButton(index: number) {
    const buttons = this.page.locator('a:has-text("Browse Products")');
    await buttons.nth(index).click();
  }
}