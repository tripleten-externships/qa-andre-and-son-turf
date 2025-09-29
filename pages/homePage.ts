import { Locator, Page } from "@playwright/test";

export class HomePage {

    //variables
    readonly page: Page;
    readonly body: Locator;
    readonly TurfProducts: Locator;
    readonly AmendmentsConditionersSubMenu: Locator;

    constructor(page: Page){
        this.page = page
        this.body = page.locator('body').nth(0);
        this.TurfProducts = page.locator('#comp-igauz7ee0label');
        this.AmendmentsConditionersSubMenu = page.locator('#comp-igauz7eemoreContainer6');

    }

    //click on Turf Products link
    async navigateToTurfProducts() {
        await this.TurfProducts.click();
        //Wait for navigation to complete
        await this.page.waitForURL('**/turf-products');
   
    }

    //click on Amendments and Conditioners sub menu link via hover (**not working**)
    // async navigateToAmendmentsConditioners() {
    //     await this.body.hover();
    //     await this.TurfProducts.hover();
    //     //await this.AmendmentsConditioners.waitFor();
    //     await this.AmendmentsConditionersSubMenu.click();
    //     await this.page.waitForURL('**/soil-admendments');
    // }

    }
