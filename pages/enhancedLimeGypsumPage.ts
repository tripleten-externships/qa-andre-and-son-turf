import { Locator, Page } from "@playwright/test";

export class EnhancedLimeGypsum {

    readonly page: Page;
    readonly enhancedLimeGyspumHeader: Locator;
    readonly turfKingCalPlusLabel: Locator;
    readonly turfKingCalPlusSDS: Locator;
    readonly turfKingCalPlusSpecSheet: Locator;
    readonly turfKingCalPlusMiniLabel: Locator;
    readonly turfKingCalPlusMiniSDS: Locator;
    readonly turfKingCalPlusMiniSpecSheet: Locator;
    readonly turfKingGypsumPlusLabel: Locator;
    readonly turfKingGypsumPlusSDS: Locator;
    readonly turfKingGypsumPlusSpecSheet: Locator;
    readonly turfKingGypsumPlusMiniLabel: Locator;
    readonly turfKingGypsumPlusMiniSDS: Locator;
    readonly turfKingGypsumPlusMiniSpecSheet: Locator;

    constructor(page: Page){
        this.page = page
        this.enhancedLimeGyspumHeader = page.locator('(//span[normalize-space()="Turf King Enhanced Lime & Gypsum"])[1]');
        this.turfKingCalPlusLabel = page.getByRole('listitem').filter({ hasText: 'Turf King Cal PlusEnhanced' }).getByLabel('Label');
        this.turfKingCalPlusSDS = page.getByRole('listitem').filter({ hasText: 'Turf King Cal PlusEnhanced' }).getByLabel('SDS');
        this.turfKingCalPlusSpecSheet = page.getByRole('listitem').filter({ hasText: 'Turf King Cal PlusEnhanced' }).getByLabel('Spec Sheet');
        this.turfKingCalPlusMiniLabel = page.getByRole('listitem').filter({ hasText: 'Turf King Cal Plus MiniEnhanced high-calcium reacted with organic acid for' }).getByLabel('Label');
        this.turfKingCalPlusMiniSDS = page.getByRole('listitem').filter({ hasText: 'Turf King Cal Plus MiniEnhanced high-calcium reacted with organic acid for' }).getByLabel('SDS');
        this.turfKingCalPlusMiniSpecSheet = page.getByRole('listitem').filter({ hasText: 'Turf King Cal Plus MiniEnhanced high-calcium reacted with organic acid for' }).getByLabel('Spec Sheet');
        this.turfKingGypsumPlusLabel = page.getByRole('listitem').filter({ hasText: 'Turf King Gypsum PlusHigh' }).getByLabel('Label');
        this.turfKingGypsumPlusSDS = page.getByRole('listitem').filter({ hasText: 'Turf King Gypsum PlusHigh' }).getByLabel('SDS');
        this.turfKingGypsumPlusSpecSheet = page.getByRole('listitem').filter({ hasText: 'Turf King Gypsum PlusHigh' }).getByLabel('Spec Sheet');
        this.turfKingGypsumPlusMiniLabel = page.getByRole('listitem').filter({ hasText: 'Turf King Gypsum Plus MiniHigh quality Gypsum reacted with organic acid for' }).getByLabel('Label');
        this.turfKingGypsumPlusMiniSDS = page.getByRole('listitem').filter({ hasText: 'Turf King Gypsum Plus MiniHigh quality Gypsum reacted with organic acid for' }).getByLabel('SDS');
        this.turfKingGypsumPlusMiniSpecSheet = page.getByRole('listitem').filter({ hasText: 'Turf King Gypsum Plus MiniHigh quality Gypsum reacted with organic acid for' }).getByLabel('Spec Sheet');
    }  
    
    async clickTurfKingCalPlusLabel(){
        this.turfKingCalPlusLabel.click();
    }

    async clickTurfKingCalPlusSDS(){
        this.turfKingCalPlusSDS.click();
    }

    async clickTurfKingCalPlusSpecSheet(){
        this.turfKingCalPlusSpecSheet.click();
    }

    async clickTurfKingCalPlusMiniLabel(){
        this.turfKingCalPlusMiniLabel.click();
    }

    async clickTurfKingCalPlusMiniSDS(){
        this.turfKingCalPlusMiniSDS.click();
    }

    async clickTurfKingCalPlusMiniSpecSheet(){
        this.turfKingCalPlusMiniSpecSheet.click();
    }

    async clickTurfKingGypsumPlusLabel(){
        this.turfKingGypsumPlusLabel.click();
    }    

    async clickTurfKingGypsumPlusSDS(){
        this.turfKingGypsumPlusSDS.click();
    }       

    async clickTurfKingGypsumPlusSpecSheet(){
        this.turfKingGypsumPlusSpecSheet.click();
    }  

    async clickTurfKingGypsumPlusMiniLabel(){
        this.turfKingGypsumPlusMiniLabel.click();
    }

    async clickTurfKingGypsumPlusMiniSDS(){
        this.turfKingGypsumPlusMiniSDS.click();
    }

    async clickTurfKingGypsumPlusMiniSpecSheet(){
        this.turfKingGypsumPlusMiniSpecSheet.click();
    }
};
