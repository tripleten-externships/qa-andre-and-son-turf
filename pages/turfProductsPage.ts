import { Locator, Page } from "@playwright/test";

export class TurfProducts {

    //variables
    readonly page: Page;
    readonly topDressing: Locator;
    readonly AmendmentsLearnMore: Locator;

    constructor(page: Page){
        this.page = page;
        this.topDressing = page.locator('//*[@id="comp-kmctlbje__item-klsv14oh"]/a/span');
        this.AmendmentsLearnMore = page.locator('#comp-kmctlbje__item-klsv0vv7').getByTestId('linkElement');
    }

    async navigatetoTopDressing(){
        await this.topDressing.click();
        await this.page.waitForURL('**/top-dressing-bunker-sand');

    }

    async navigatetoAmendments(){
        await this.AmendmentsLearnMore.click();
        await this.page.waitForURL('**/soil-admendments');

    }
}