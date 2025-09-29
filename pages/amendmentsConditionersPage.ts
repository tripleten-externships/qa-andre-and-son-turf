import { Locator, Page } from "@playwright/test";

export class AmmendmentsCoditioners {

    //variables
    readonly page: Page;
    readonly C2OSoilBuilder: Locator;

    constructor(page: Page){
        this.page = page
        //this.C2OSoilBuilder = page.locator('#comp-km1c9qp9__item-kvv8iqne').nth(5);
        this.C2OSoilBuilder = page.locator('#comp-km1c9qob__item-kvv8iqne').getByTestId('linkElement')
    }

    async navigateToC2O() {
        await this.C2OSoilBuilder.click();

  }


}