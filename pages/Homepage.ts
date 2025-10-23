import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly aboutButton: Locator;
  readonly salesTeamLink: Locator;
  readonly careersLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.aboutButton = page.getByRole('button', { name: 'ABOUT', exact: true });
    this.salesTeamLink = page.getByRole('link', { name: /Sales Team/i });
    this.careersLink = page.getByRole('link', { name: /Careers/i });
  }

  async navigate() {
    await this.page.goto('https://www.andreandson.com/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async openAboutDropdown() {
    // Try hovering multiple times in case of animation or delayed menu render
    for (let i = 0; i < 3; i++) {
      await this.aboutButton.hover();
      await this.page.waitForTimeout(700);
    }

    // Ensure the dropdown itself appears
    const dropdown = this.page.locator('ul.sub-menu, div.sub-menu, nav ul:has-text("Sales Team")');
    await dropdown.first().waitFor({ state: 'visible', timeout: 10000 });
  }

  async navigateToSalesTeam() {
    await this.openAboutDropdown();
    const link = this.salesTeamLink;
    await link.waitFor({ state: 'visible', timeout: 10000 });
    await link.scrollIntoViewIfNeeded();
    await link.click({ force: true });
    await this.page.waitForLoadState('domcontentloaded');
  }

  async navigateToCareers() {
    await this.openAboutDropdown();
    const link = this.careersLink;
    await link.waitFor({ state: 'visible', timeout: 10000 });
    await link.scrollIntoViewIfNeeded();
    await link.click({ force: true });
    await this.page.waitForLoadState('domcontentloaded');
  }
}