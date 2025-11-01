import { Page, Locator } from '@playwright/test';

export class SalesTeamPage {
  readonly page: Page;
  readonly contactSection: Locator;
  readonly messageField: Locator;
  readonly emailField: Locator;
  readonly submitButton: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.contactSection = page.getByRole('heading', { name: 'Contact Us', exact: false });
    this.messageField = page.getByPlaceholder('Enter your text here');
    this.emailField = page.getByPlaceholder('Email Address*');
    this.submitButton = page.getByRole('button', { name: /submit/i });
    this.successMessage = page.locator('text=Thank you, text=Message sent, text=successfully, .success');
  }

  async navigate() {
    await this.page.goto('https://www.andreandson.com/sales-team');
  }

  async fillContactForm() {
    await this.messageField.fill('This is a test message from Playwright automation.');
    await this.emailField.fill('testuser@example.com');
  }

  async submitForm() {
    await this.submitButton.click();
  }

  async isSubmissionSuccessful(): Promise<boolean> {
    return await this.successMessage.first().isVisible();
  }
}