import { Locator, Page } from "@playwright/test";

export class TopDressingPage {

    readonly page: Page;
    readonly topDressingHeader: Locator;

    constructor (page:Page){

        this.page = page;
        this.topDressingHeader = page.getByRole('heading', { name: 'Top Dressing' });
    }

}
