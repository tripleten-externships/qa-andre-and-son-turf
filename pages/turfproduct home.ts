import { Locator, Page } from "@playwright/test";

export class turfProducthomePage {
    readonly page: Page;
    readonly andreandsonlogo: Locator;
    readonly andreandsontext: Locator;
    readonly turfdivisiontext: Locator;
    readonly turfproductstitle: Locator;
    readonly turfkingcomboproductslink: Locator;
    readonly videoonHerosection: Locator;
    readonly textonHerosection: Locator;
    readonly scroolldownicon: Locator;
    readonly servicestitle: Locator;
    readonly turfproductsheading: Locator;
    readonly turfproductsdescription: Locator;
    readonly turfproductslearnmorebutton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.andreandsonlogo = page.getByRole('link', { name: 'logo_edited_edited.png' });
        this.andreandsontext = page.getByRole('link', { name: 'ANDRE & SON' });
        this.turfdivisiontext = page.getByRole('link', { name: 'TURF DIVISION' });
        this.turfproductstitle = page.getByRole('link', {name: 'Turf Products'}).nth(0);
        this.turfkingcomboproductslink = page.getByRole('link', { name: 'TURF KING COMBO PRODUCTS' });
        this.videoonHerosection = page.locator('#comp-lpk5gl1i_img img');
        this.textonHerosection = page.getByText('EXCELLENCE IN TURF PRODUCTS');
        this.scroolldownicon = page.getByRole('link', { name: 'Arrow Down' });
        this.servicestitle = page.locator('#comp-ig277xvm1').getByText('SERVICES', { exact: true });
        this.turfproductsheading = page.getByRole('heading', { name: 'TURF PRODUCTS', exact: true });
        this.turfproductsdescription = page.getByText('Turf King products are high-');
        this.turfproductslearnmorebutton = page.locator('#comp-kjtbzrpx__item-j9wn309i').getByRole('link', { name: 'LEARN MORE' });

    }
    async goto() {
        await this.page.goto('/');
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
    async clickturfproductstitle() {
        await this.turfproductstitle.click();
    }
    async hoverturfproductstitle() {
        await this.turfproductstitle.hover();
    }
    async clickturfkingcomboproductslink() {
        await this.turfkingcomboproductslink.click();
    }
}