import { Locator, Page } from "@playwright/test";

export class AmendmentsConditioners {

    //variables
    readonly page: Page;
    readonly AmendmentsConditionersHeader: Locator;
    readonly C2OSoilBuilder: Locator;

    constructor(page: Page){
        this.page = page;
        this.AmendmentsConditionersHeader = page.getByText('Amendments & Conditioners');
        this.C2OSoilBuilder = page.locator('#comp-km1c9qob__item-kvv8iqne').getByTestId('linkElement');
    }


    //click on C2O Soil Builder
    async navigateToC2O() {
        await this.C2OSoilBuilder.click();

  }


}