import { Locator, Page} from "@playwright/test";

export class MenuPage{

     //variables
    readonly page: Page;
    readonly turfProductsMenu: Locator;
    readonly iceMeltsMenu: Locator;
    readonly contractServicesMenu: Locator;
    readonly conventionalAerificiationSubMenu: Locator;
    readonly equipmentMenu: Locator;
    readonly aboutMenu: Locator;
    readonly ourStorySubMenu: Locator;

    constructor(page:Page){
        this.page=page;
        this.turfProductsMenu = page.locator('p:has-text("TURF PRODUCTS")').nth(0);
        this.iceMeltsMenu = page.locator('a', { hasText: 'Ice Melts' });
        this.contractServicesMenu = page.locator('p:has-text("CONTRACT SERVICES")').nth(0);
        this.conventionalAerificiationSubMenu = page.getByRole('link', { name: 'CONVENTIONAL AERIFICIATION' });
        this.equipmentMenu = page.locator('p:has-text("EQUIPMENT")').nth(0);
        this.aboutMenu = page.locator('p:has-text("ABOUT")').nth(0);
        this.ourStorySubMenu = page.getByRole('link', { name: 'OUR HISTORY & TEAM' });
    }


}

