import { Locator, Page } from "@playwright/test";

export class HomePage {

    //variables
    readonly page: Page;
    readonly body: Locator;
    readonly TurfProducts: Locator;
    // readonly TopDressingBunkerSand: Locator;
    // readonly TopDressingBunkerSandLearnMore: Locator;
    // readonly AmendmentsConditionersLearnMore: Locator;
    // readonly AmendmentsConditionersSubMenu: Locator;

    constructor(page: Page){
        this.page = page
        this.body = page.getByRole('link', { name: 'ANDRE & SON' });
        this.TurfProducts = page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0); 
        // this.TopDressingBunkerSand = page.getByRole('link', { name: 'TOP DRESSING & BUNKER SAND' });
        // this.TopDressingBunkerSandLearnMore = page.locator('#comp-kmctlbje__item-klsv14oh').getByTestId('linkElement');
        // this.AmendmentsConditionersLearnMore = page.locator('#comp-kmctlbje__item-klsv0vv7').getByTestId('linkElement');
        // this.AmendmentsConditionersSubMenu = page.getByRole('link', { name: 'ADMENDMENTS & CONDITIONERS' });

    }

    async navigateToTurfProducts(){
        await this.TurfProducts.click();

    }

    // async navigateToTopDressingBunkerSand(){
    //     await this.TurfProducts.click();
    //     await this.TopDressingBunkerSandLearnMore.click();

    // }

    // async navigateToAmendmentsConditioners() {
    //     await this.TurfProducts.click();
    //     await this.AmendmentsConditionersLearnMore.click();

    // }

    //click on Turf Products sub menu link
    // async navigateToTopDressingBunkerSand() {

    //     await this.TurfProducts.hover();
    //     await this.body.hover();
    //     await this.page.waitForTimeout(1000);
    //     await page.getByRole('link', { name: 'logo_edited_edited.png' }).click();
    //     await this.TurfProducts.hover();
    //     await this.page.waitForTimeout(1000);
    //     await this.TopDressingBunkerSand.waitFor({ state: 'visible' });
    //     await this.TopDressingBunkerSand.click();
    //     await this.page.waitForURL('**/top-dressing-bunker-sand');
   
//    }


    //click on Amendments and Conditioners sub menu link 
    // async navigateToAmendmentsConditioners() {
        
    //     await this.TurfProducts.hover();
    //     await this.body.hover();
    //     await this.page.waitForTimeout(1000);
    //     await this.TurfProducts.hover();
    //     await this.page.waitForTimeout(1000);
    //     await this.AmendmentsConditionersSubMenu.waitFor({ state: 'visible' });
    //     await this.AmendmentsConditionersSubMenu.click();
    //     await this.page.waitForURL('**/soil-admendments');
    // }

}
