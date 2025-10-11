import { Locator, Page } from "@playwright/test";

export class TurfConditioners {

  readonly page: Page;
  readonly turfConditionersHeader: Locator;

  constructor (page:Page){
    this.page = page;
    this.turfConditionersHeader = page.locator("(//h1[normalize-space()='Turf Conditioners'])[1]");

        }

};