import { Locator, Page } from "@playwright/test";

export class HomePage {

    //variables
    readonly page: Page;
    readonly body: Locator;
    readonly TurfProducts: Locator;
    readonly TopDressingBunkerSand: Locator;
    readonly TopDressingBunkerSandLearnMore: Locator;
    readonly AmendmentsConditionersLearnMore: Locator;
    readonly AmendmentsConditionersSubMenu: Locator;

    constructor(page: Page){
        this.page = page
        this.body = page.getByRole('link', { name: 'ANDRE & SON' });
        this.TurfProducts = page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0); 
        this.TopDressingBunkerSand = page.getByRole('link', { name: 'TOP DRESSING & BUNKER SAND' });
        this.TopDressingBunkerSandLearnMore = page.locator('#comp-kmctlbje__item-klsv14oh').getByTestId('linkElement');
        this.AmendmentsConditionersLearnMore = page.locator('#comp-kmctlbje__item-klsv0vv7').getByTestId('linkElement');
        this.AmendmentsConditionersSubMenu = page.getByRole('link', { name: 'ADMENDMENTS & CONDITIONERS' });
    }

    // CLick on Turf Products in header
    async navigateToTurfProducts(){
        await this.TurfProducts.click();
    }

    //click on Top Dressing Bunker Sand in Turf Products sub menu
    async navigateToTopDressingBunkerSandViaHover() {
        await this.TurfProducts.hover();
        await this.page.waitForTimeout(1000);
        await this.TopDressingBunkerSand.waitFor({ state: 'visible' });
        await this.TopDressingBunkerSand.click();
        await this.page.waitForURL('**/top-dressing-bunker-sand');
   }

    //click on Amendments and Conditioners in Turf Products sub menu 
    async navigateToAmendmentsConditionersViaHover() {
        await this.TurfProducts.hover();
        await this.page.waitForTimeout(1000);
        await this.AmendmentsConditionersSubMenu.waitFor({ state: 'visible' });
        await this.AmendmentsConditionersSubMenu.click();
        await this.page.waitForURL('**/soil-admendments');
    }

}
