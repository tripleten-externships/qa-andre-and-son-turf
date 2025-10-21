import { Locator, Page } from "@playwright/test";

export class MenuPage {
  // variables
  readonly page: Page;
  readonly turfProductsMenu: Locator;
  readonly iceMeltsMenu: Locator;
  readonly contractServicesMenu: Locator;
  readonly contractServicesTitle: Locator;
  
  // constructor  
  constructor(page: Page) {
    this.page = page;
    this.turfProductsMenu = page.getByRole('link', { name: 'Turf Products' }).nth(0);
    this.iceMeltsMenu = page.getByRole('link', { name: 'ICE MELTS' })
    this.contractServicesMenu = page.locator('a:has-text("CONTRACT SERVICES")').nth(0);
    this.contractServicesTitle = page.locator('h1, h2, [role="heading"]').first();
  }
  //methods
    async navigateToIceMelts(): Promise<void> {
    await this.page.goto('/', { waitUntil: 'load' });
    await this.turfProductsMenu.hover();
    await this.page.waitForTimeout(7000);
    const isMenuVisible = await this.iceMeltsMenu.isVisible({ timeout: 20000 }).catch(() => false);
    
    if (isMenuVisible) {
      await this.iceMeltsMenu.click({ timeout: 20000 });
    } else {
      await this.page.goto('https://www.andreandson.com/ice-melts');
    }
  }

  async navigateToContractServices(): Promise<void> {
    await this.page.goto('/', { waitUntil: 'load' });
    await this.contractServicesMenu.click();
  }

}