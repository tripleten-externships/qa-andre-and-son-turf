import { Locator, Page } from "@playwright/test";

export class InfieldConditioners {
   
    readonly page: Page;
    readonly infieldConditionersHeader: Locator;

    constructor (page:Page) {
        this.page = page;
        this.infieldConditionersHeader = page.getByRole('heading', { name: 'Infield Conditioners' });
    }

}