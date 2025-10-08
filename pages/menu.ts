import { Locator, Page } from "@playwright/test";

export class MenuPage {
  // variables
  readonly turfProductsMenu: Locator;
  readonly iceMeltsMenu: Locator;
  readonly contractServicesMenu: Locator;

  constructor(page: Page) {
    this.turfProductsMenu = page.locator('a:has-text("TURF PRODUCTS")').nth(0);
    this.iceMeltsMenu = page.locator('a:has-text("ICE MELTS")').nth(0);
    this.contractServicesMenu = page.locator('a:has-text("CONTRACT SERVICES")').nth(0);
  }
}

