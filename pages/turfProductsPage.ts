import { Locator, Page } from "@playwright/test";

export class TurfProducts {

    //variables
    readonly page: Page;
    readonly topDressing: Locator;
    readonly AmendmentsLearnMore: Locator;

    constructor(page: Page){
        this.page = page;
        this.topDressing = page.locator('#comp-kmctlbje__item-klsv14oh').getByTestId('linkElement');
        this.AmendmentsLearnMore = page.locator('#comp-kmctlbje__item-klsv0vv7').getByTestId('linkElement');
        //await page.getByRole('link', { name: 'ADMENDMENTS & CONDITIONERS' }).click();
    }

    //navigate to Top Dressing page
    async navigatetoTopDressing(){
        await this.topDressing.click();
        await this.page.waitForURL('**/top-dressing-bunker-sand');

    }

    //navigate to Amendments page
    async navigatetoAmendments(){
        await this.AmendmentsLearnMore.click();
        await this.page.waitForURL('**/soil-admendments');

    }
}