import { Locator, Page } from "@playwright/test";

export class SandPage {

    readonly page: Page;
    readonly sandHeader: Locator;

    constructor (page:Page){

        this.page = page;
        this.sandHeader = page.getByRole('heading', { name: 'Sand', exact: true });
    }

}
