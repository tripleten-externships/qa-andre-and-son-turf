import { Page, Locator } from '@playwright/test';

export class CareersPage {
  readonly page: Page;
  readonly careersHeading: Locator;
  readonly introText: Locator;
  readonly learnMoreButton: Locator;
  readonly emailLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.careersHeading = page.getByRole('heading', { name: 'Careers' });
    this.introText = page.getByText(
      'We are always looking for qualified and motivated individuals to join our team'
    );
    this.learnMoreButton = page.getByRole('link', { name: 'Learn More' });
    this.emailLink = page
      .getByLabel('main content')
      .getByRole('link', { name: 'turf@andreandson.com' });
  }

  async navigate() {
    await this.page.goto('https://www.andreandson.com/careers');
  }

  async verifyHeadingAndIntro() {
    await this.page.waitForTimeout(500);
    await this.introText.scrollIntoViewIfNeeded();
  }

  async openLearnMorePDF() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.learnMoreButton.click(),
    ]);
    await newPage.waitForLoadState('load');
    return newPage;
  }

  async verifyEmailLink() {
    await this.emailLink.scrollIntoViewIfNeeded();
    await this.emailLink.waitFor({ state: 'visible', timeout: 8000 });
    const href = await this.emailLink.getAttribute('href');
    return href;
  }
}
