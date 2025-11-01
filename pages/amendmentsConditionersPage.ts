import { Locator, Page } from "@playwright/test";

export class AmendmentsConditioners {

    //variables
    readonly page: Page;
    readonly AmendmentsConditionersHeader: Locator;
    readonly C2OSoilBuilderLearnMore: Locator;
    readonly enhancedLimeGyspumLearnMore: Locator;
    readonly fertlSoilLearnMore: Locator;
    readonly turfCondtionersLearnMore: Locator;
    readonly infieldConditionersLearnMore: Locator;
    readonly moundAndBoxPackingClayLearnMore: Locator;

    constructor(page: Page){
        this.page = page;
        this.AmendmentsConditionersHeader = page.getByText('Amendments & Conditioners');
        this.C2OSoilBuilderLearnMore = page.locator('#comp-km1c9qob__item-kvv8iqne').getByTestId('linkElement');
        this.enhancedLimeGyspumLearnMore = page.locator('(//span[@class="wJVzSK wixui-button__label"][normalize-space()="Learn More"])[1]');
        this.fertlSoilLearnMore = page.locator("(//span[@class='wJVzSK wixui-button__label'][normalize-space()='Learn More'])[2]");
        this.turfCondtionersLearnMore = page.locator("(//span[@class='wJVzSK wixui-button__label'][normalize-space()='Learn More'])[3]");
        this.infieldConditionersLearnMore = page.locator("(//span[@class='wJVzSK wixui-button__label'][normalize-space()='Learn More'])[4]");
        this.moundAndBoxPackingClayLearnMore = page.locator("(//span[@class='wJVzSK wixui-button__label'][normalize-space()='Learn More'])[5]");
    }

    //click on Enhanced Lime and Gypsum Learn More
    async navigateToEnhancedLimeGyspum(){
        await this.enhancedLimeGyspumLearnMore.click();
    }

    //click on FertlSoil Learn More
    async navigateToFertlSoil(){
        await this.fertlSoilLearnMore.click();
    }

    //click on Turf Conditioners Learn More
    async navigateToTurfConditioners(){
        await this.turfCondtionersLearnMore.click();
    }

    //cick on Infield Conditioners Learn More
    async navigateToInfieldConditioners(){
        await this.infieldConditionersLearnMore.click();
    }

    //click on Mound and Box Packing Clay Learn More
    async navigateToMoundAndBoxPackingClay(){
        await this.moundAndBoxPackingClayLearnMore.click();
    }

    //click on C2O Soil Builder
    async navigateToC2O() {
        await this.C2OSoilBuilderLearnMore.click();
    }
}