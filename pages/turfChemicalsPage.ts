import { Page, Locator, expect } from '@playwright/test';

export class TurfChemicalsPage {
  readonly page: Page;
  readonly learnMoreButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.learnMoreButtons = page.locator('text=Learn More');
  }

  async goto() {
    await this.page.goto('https://www.andreandson.com/control-agents-2');
    await expect(this.page).toHaveURL(/control-agents-2/);
  }

  async clickLearnMore(index: number) {
    await this.learnMoreButtons.nth(index).click();
  }

  async goBackToTurfChemicals() {
    await this.page.goBack();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveURL(/control-agents-2/);
  }
}
