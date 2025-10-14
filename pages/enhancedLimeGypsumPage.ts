import { Locator, Page } from "@playwright/test";

export class EnhancedLimeGypsum {

    readonly page: Page;
    readonly enhancedLimeGyspumHeader: Locator;
    readonly turfKingCalPlusLabel: Locator;

    constructor(page: Page){
        this.page = page
        this.enhancedLimeGyspumHeader = page.locator('(//span[normalize-space()="Turf King Enhanced Lime & Gypsum"])[1]');
        this.turfKingCalPlusLabel = page.getByRole('listitem').filter({ hasText: 'Turf King Cal PlusEnhanced' }).getByLabel('Label');

    }  
    
    async clickTurfKingCalPlusLabel(){
        this.turfKingCalPlusLabel.click();
    }
};
