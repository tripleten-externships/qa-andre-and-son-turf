import { Locator, Page } from "@playwright/test";

export class turfProductHomePage {
    readonly page: Page;
    readonly andreandsonlogo: Locator;
    readonly andreandsontext: Locator;
    readonly turfdivisiontext: Locator;
    readonly turfproductdropdownmenu: Locator;
    readonly videoonHerosection: Locator;
    readonly textonHerosection: Locator;
    readonly scroolldownicon: Locator;
    readonly servicestitle: Locator;
    readonly turfproductstitle: Locator;
    readonly turfproductsdescription: Locator;
    readonly turfproductslearnmorebutton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.andreandsonlogo = page.getByRole('link', { name: 'logo_edited_edited.png' });
        this.andreandsontext = page.getByRole('link', { name: 'ANDRE & SON' });
        this.turfdivisiontext = page.getByRole('link', { name: 'TURF DIVISION' });
        this.turfproductdropdownmenu = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.videoonHerosection = page.locator('#comp-lpk5gl1i_img img');
        this.textonHerosection = page.getByText('EXCELLENCE IN TURF PRODUCTS');
        this.scroolldownicon = page.getByRole('link', { name: 'Arrow Down' });
        this.servicestitle = page.locator('#comp-ig277xvm1').getByText('SERVICES', { exact: true });
        this.turfproductstitle = page.getByRole('heading', { name: 'TURF PRODUCTS', exact: true });
        this.turfproductsdescription = page.getByText('Turf King products are high-');
        this.turfproductslearnmorebutton = page.locator('#comp-kjtbzrpx__item-j9wn309i').getByRole('link', { name: 'LEARN MORE' });

    }
    async goto() {
        await this.page.goto('/');

    }
    
    async hoverOverTurfProductDropdown() {
        await this.turfproductdropdownmenu.hover();
    }
    
    async clickarrowdownicon() {
        await this.scroolldownicon.click();
    }
    async scrollToTurfProductsSection() {
        await this.turfproductsdescription.scrollIntoViewIfNeeded();
    }
    async clickTurfProductsLearnMoreButton() {
        await this.turfproductslearnmorebutton.click();
    }   

    async clickandreandsonlogo() {
        await this.andreandsonlogo.click()
    }
}