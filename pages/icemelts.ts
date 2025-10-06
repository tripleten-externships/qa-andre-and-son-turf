import { Locator, Page} from "@playwright/test";

export class IceMeltsPage{

    //variables
    readonly page: Page;
    readonly textOnHeroSection: Locator;
    readonly turfProductsMenu: Locator;
    readonly iceMeltsMenu: Locator;

    constructor(page:Page){
        this.page=page;
        this.textOnHeroSection = page.locator('h1');
        this.turfProductsMenu = page.locator('a', { hasText: 'Turf Products' });
        this.iceMeltsMenu = page.locator('a', { hasText: 'Ice Melts' });
    }

    async goto(p0: { waitUntil: string; }) {
        await this.page.goto('https://www.andreandson.com/ice-melts');
    }
}
