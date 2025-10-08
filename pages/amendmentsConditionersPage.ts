import { Locator, Page } from "@playwright/test";

export class AmendmentsConditioners {

    //variables
    readonly page: Page;
    readonly AmendmentsConditionersHeader: Locator;
    readonly C2OSoilBuilder: Locator;
    readonly enhancedLimeGyspumLearnMore: Locator;

    constructor(page: Page){
        this.page = page;
        this.AmendmentsConditionersHeader = page.getByText('Amendments & Conditioners');
        this.C2OSoilBuilder = page.locator('#comp-km1c9qob__item-kvv8iqne').getByTestId('linkElement');
        this.enhancedLimeGyspumLearnMore = page.locator('(//span[@class="wJVzSK wixui-button__label"][normalize-space()="Learn More"])[1]');
    }


    //click on C2O Soil Builder
    async navigateToC2O() {
        await this.C2OSoilBuilder.click();

  }
  async navigateToEnhancedLimeGyspum(){
        await this.enhancedLimeGyspumLearnMore.click();
    }


}