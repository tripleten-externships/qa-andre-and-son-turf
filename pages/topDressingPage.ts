import { Locator, Page } from "@playwright/test";

export class TopDressingBunkerSand {

    //variables
    readonly page: Page;
    readonly pageHeaderText: Locator;

    constructor(page: Page){
        this.page = page
        this.pageHeaderText = page.getByText('Top Dressing & Bunker Sand').nth(1);

    }

    }



