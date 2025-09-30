import { Locator, Page } from "@playwright/test";

export class TuftProductsPage{
    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly turfProductsHeroTitle: Locator;
    readonly turfProductsHeroText: Locator;
    readonly turfProductsCatalogTitle: Locator;
    readonly turfProductsCatalogText: Locator;
    readonly combinationProductsTitle: Locator;
    readonly combinationProductsText: Locator;
    readonly turfKingFertilizerTitle: Locator;
    readonly turfKingFetilizerText: Locator;
    readonly controlAgentsTitle: Locator;
    readonly controlAgentsText: Locator;
    readonly liquidFertilizerTitle: Locator;
    readonly liquidFertilizerText: Locator;
    readonly seedTitle: Locator;
    readonly seedText: Locator;
    readonly amendmentsConditionersTitle: Locator;
    readonly amendmentsConditionersText: Locator;
    readonly topDressingBunkerSandTitle: Locator;
    readonly topDressingBunkerSandText: Locator;
    readonly iceMeltTitle: Locator;
    readonly iceMeltText: Locator;

    constructor(page: Page){
        this.page=page;
        this.turfProductsTitle=page.getByRole('link', {name: 'Turf Products'}).nth(0);
        this.turfProductsHeroTitle=page.getByText("There's a Reason We're the Turf King");
        this.turfProductsHeroText=page.getByText('')
        this.turfProductsCatalogTitle=page.getByText('TURF PRODUCT CATALOG');
        this.turfProductsCatalogText=page.getByText('Browse our product catalog of');
        this.combinationProductsTitle=page.getByText('Combination Products', { exact: true });
        this.combinationProductsText=page.getByRole('paragraph').filter({ hasText: 'All of our combination' });
        this.turfKingFertilizerTitle=page.getByText('Turf King Fertilizer', { exact: true });
        this.turfKingFetilizerText=page.getByText('Our fertilizers are premium');
        this.controlAgentsTitle=page.getByText('Control Agents');
        this.controlAgentsText=page.getByText('Taking pride in teaming up');
        this.liquidFertilizerTitle=page.getByText('Liquid Fertilizer', { exact: true });
        this.liquidFertilizerText=page.getByText('We\'ve got what you need to');
        this.seedTitle=page.getByText('Seed', { exact: true });
        this.seedText=page.getByText('Turf King seed is blended');
        this.amendmentsConditionersTitle=page.getByText('Amendments & Conditioners');
        this.amendmentsConditionersText=page.getByRole('paragraph').filter({ hasText: 'Golf, athletic sports,' });
        this.topDressingBunkerSandTitle=page.getByText('Top Dressing & Bunker Sand', { exact: true });
        this.topDressingBunkerSandText=page.getByText('Enhance your turf\'s health');
        this.iceMeltTitle=page.getByText('Ice Melt', { exact: true });
        this.iceMeltText=page.getByRole('paragraph').filter({ hasText: 'Ice melt is designed to make' });
        }
    async clickTurfProductsTitle(){
        await this.turfProductsHeroTitle.click();
    }


}