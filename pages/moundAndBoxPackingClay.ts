import { Locator, Page } from "@playwright/test";

export class MoundAndBoxPackingClay {
   
    readonly page: Page;
    readonly moundAndBoxPackingClayHeader: Locator;

    constructor (page:Page) {
        this.page = page;
        this.moundAndBoxPackingClayHeader = page.getByRole('heading', { name: 'Mound & Box Packing Clay' });
    }

}