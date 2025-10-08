import { Locator, Page} from "@playwright/test";

export class MenuPage{

     //variables
    readonly page: Page;
    readonly turfProductsMenu: Locator;
    readonly iceMeltsMenu: Locator;
    readonly contractServicesMenu: Locator;
 

    constructor(page:Page){
        this.page=page;
        this.turfProductsMenu = page.locator('p:has-text("TURF PRODUCTS")').nth(0);
        this.iceMeltsMenu = page.locator('a', { hasText: 'Ice Melts' });
        this.contractServicesMenu = page.locator('p:has-text("CONTRACT SERVICES")').nth(0);
    }


}

