import { Locator, Page } from "@playwright/test";

export class TurfKingMaxxPhitePage{ 
    readonly page: Page;
    readonly turfKingMaxxPhiteBackGroundImageAltText: Locator;
    readonly turfKingMaxxPhiteTitle1: Locator;
    readonly turfKingMaxxPhiteTitle2: Locator;
    readonly turfKingMaxxPhiteText: Locator;
    readonly turfKingMaxxPhiteBoxTitle: Locator;
    readonly turfKingMaxxPhiteBoxText: Locator;
    readonly tkmpLabelButton: Locator;
    readonly tkmpSDSButton: Locator;
    readonly tkmpSpecsButton: Locator;

    constructor(page: Page){
        this.page=page;
        this.turfKingMaxxPhiteBackGroundImageAltText=page.getByAltText('Wet grass');
        this.turfKingMaxxPhiteTitle1=page.getByText('Turf King', { exact: true });
        this.turfKingMaxxPhiteTitle2=page.getByText('Maxx-Phite');
        this.turfKingMaxxPhiteText=page.getByText('Turf King Maxx Phite focuses');
        this.turfKingMaxxPhiteBoxTitle=page.getByText('');
        this.turfKingMaxxPhiteBoxText=page.getByText('Foliar Treatment');
        this.tkmpLabelButton=page.getByRole('link', { name: 'Label' });
        this.tkmpSDSButton=page.getByRole('link', { name: 'SDS' });
        this.tkmpSpecsButton=page.getByRole('link', {name: 'Spec Sheet'});
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