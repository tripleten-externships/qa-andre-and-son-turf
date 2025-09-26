import { Locator, Page} from "@playwright/test";

export class IceMeltsPage{

    //variables
    readonly page: Page;
    readonly textOnHeroSection: Locator;

    constructor(page:Page){
        this.page=page;
        this.textOnHeroSection=page.getByText('Ice Melts');
    }
}