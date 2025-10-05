import { Locator, Page } from "@playwright/test";

export class TurfKingMaxxPhitePage{ 
    readonly page: Page;
    readonly turfKingMaxxPhiteBackGroundImageAltText: Locator;
    readonly turfKingMaxxPhiteTitle: Locator;
    readonly turfKingMaxxPhiteText: Locator;
    readonly turfKingMaxxPhiteBoxText: Locator;
    readonly tkmpLabelButton: Locator;
    readonly tkmpSDSButton: Locator;
    readonly tkmpSpecsButton: Locator;

    constructor(page: Page){
        this.page=page;
        this.turfKingMaxxPhiteBackGroundImageAltText=page.getByAltText('Wet grass');
        this.turfKingMaxxPhiteTitle=page.getByRole('heading', {name: 'Turf King Maxx Phite'});
        this.turfKingMaxxPhiteText=page.getByText('Turf King Maxx Phite focuses');
        this.turfKingMaxxPhiteBoxText=page.getByText('');
        this.tkmpLabelButton=page.getByRole('link', { name: 'Label' });
        this.tkmpSDSButton=page.getByRole('link', { name: 'SDS' });
        this.tkmpSpecsButton=page.getByRole('link', {name: 'Specs'});
    }

    async clickTKMPLabelButton(){
        await this.tkmpLabelButton.click();
    }
    async clickTKMPSDSButton(){
        await this.tkmpSDSButton.click();
    }
    async clickTKMPSpecsButton(){
        await this.tkmpSpecsButton.click();
    }
}