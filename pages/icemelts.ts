import { Locator, Page} from "@playwright/test";

export class IceMeltsPage{

    //variables
    readonly page: Page;
    readonly textOnHeroSection: Locator;
    readonly turfProductsMenu: Locator;
    readonly iceMeltsMenu: Locator;
    readonly regularMsdsLink: Locator;
    readonly plusMsdsLink: Locator;
    readonly hiVisMsdsLink: Locator;
    readonly letsGetGrowingTextBox: Locator;
    readonly footerSectionTurfProductsMenu: Locator;
    readonly footerSectionIceMeltsMenu: Locator;

    constructor(page:Page){
        this.page=page;
        this.textOnHeroSection = page.locator('h1');
        this.turfProductsMenu = page.locator('a', { hasText: 'Turf Products' });
        this.iceMeltsMenu = page.locator('a', { hasText: 'Ice Melts' });
        this.regularMsdsLink = page.locator('a[href="https://www.andreandson.com/_files/ugd/3bd49b_3f413d0995044470b8cbbaf8a9267e7a.pdf"]', { hasText: 'MSDS' });
        this.plusMsdsLink = page.locator('a[href="https://www.andreandson.com/_files/ugd/3bd49b_3a9ad6b2c254474c976e80ab6b3b5afe.pdf"]', { hasText: 'MSDS' });
        this.hiVisMsdsLink = page.locator('a[href="https://www.andreandson.com/_files/ugd/3bd49b_2888424fe70246cb9dd41427cad1f8a6.pdf"]', { hasText: 'MSDS' });
        this.letsGetGrowingTextBox = page.locator('div').filter({ hasText: 'Let\'s Get Growing' });
        this.footerSectionTurfProductsMenu = page.locator('footer .vertical-menu__item:has(a:has-text("Turf Products"))');
        this.footerSectionIceMeltsMenu = page.getByTestId('linkElement-0-7').filter({ hasText: 'ICE MELTS' });
    }
}
