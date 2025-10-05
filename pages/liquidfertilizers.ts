import { Locator, Page } from "@playwright/test";

export class LiquidFertilizersPage{
    readonly page: Page;
    readonly liquidFertilizersProducts: Locator;
    readonly liquidFertilizersProductsText: Locator;
    readonly liquidFertilizersProductsTKAltText: Locator;
    readonly liquidFertilizersProductsTKBagAltText: Locator;
    readonly turfKingMaxxPhiteTitle: Locator;
    readonly turfKingMaxxPhiteText: Locator;
    readonly tkmpLearnMoreButton: Locator;
    readonly plantFoodTitle: Locator;
    readonly plantFoodText: Locator;
    readonly pfLearnMoreButton: Locator;
    readonly aquaAidTitle: Locator;
    readonly aquaAidText: Locator;
    readonly aaLearnMoreButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.liquidFertilizersProducts = page.getByText('Liquid Fertilizer Products');
        this.liquidFertilizersProductsText = page.getByText('We got what you need to make');
        this.liquidFertilizersProductsTKAltText = page.getByAltText('turf_king_fert.png');
        this.liquidFertilizersProductsTKBagAltText = page.getByAltText('New Bag Template.jpg');
        this.turfKingMaxxPhiteTitle = page.getByText('Turf King Maxx Phite');
        this.turfKingMaxxPhiteText = page.getByText('Treatment for summer stress');
        this.tkmpLearnMoreButton = page.getByRole('link', { name: 'Learn More' }).nth(0);
        this.plantFoodTitle = page.getByText('Plant Food', { exact: true });
        this.plantFoodText = page.getByText('Achieve superior turfgrass');
        this.pfLearnMoreButton = page.getByRole('link', { name: 'Learn More' }).nth(1);
        this.aquaAidTitle = page.getByText('Aqua-Aid', { exact: true });
        this.aquaAidText = page.getByText('Hot, dry, and windy weather');
        this.aaLearnMoreButton = page.getByRole('link', { name: 'Learn More' }).nth(2);
    }

    async clickTKMPLearnMoreButton(){
        await this.tkmpLearnMoreButton.click();
    }
    async clickPFLearnMoreButton(){
        await this.pfLearnMoreButton.click();
    }
    async clickAALearnMoreButton(){
        await this.aaLearnMoreButton.click();
    }
}