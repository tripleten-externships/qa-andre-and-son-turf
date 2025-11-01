import { Locator, Page } from "@playwright/test";

export class TuftProductsPage{
    readonly page: Page;
    readonly logoAndreSon: Locator;
    readonly logoAndreSonlink: Locator;
    readonly backGroundVideo: Locator;
    readonly turfProductsTitle: Locator;
    readonly turfProductsHeroTitle: Locator;
    readonly turfProductsHeroText1: Locator;
    readonly turfProductsHeroText2: Locator;
    readonly turfProductsHeroText3: Locator;
    readonly turfProductsCatalogTitle: Locator;
    readonly turfProductsCatalogText1: Locator;
    readonly turfProductsCatalogText2: Locator;
    readonly turfProductsCatalogLink: Locator;
    readonly turfProductsCatalogAltText: Locator;
    readonly combinationProductsTitle: Locator;
    readonly combinationProductsText: Locator;
    readonly combinationProductsImageAltText: Locator;
    readonly combinationProductsLink: Locator;
    readonly cplearnMoreButton: Locator;
    readonly turfKingFertilizerTitle: Locator;
    readonly turfKingFetilizerText: Locator;
    readonly turfKingFetilizerAltText: Locator;
    readonly kfLearnMoreButton: Locator;
    readonly controlAgentsTitle: Locator;
    readonly controlAgentsText: Locator;
    readonly controlAgentsImageAltText: Locator;
    readonly caLearnMoreButton: Locator;
    readonly liquidFertilizerTitle: Locator;
    readonly liquidFertilizerText: Locator;
    readonly liquidFertilizerAltText: Locator;
    readonly lfLearnMoreButton: Locator;
    readonly seedTitle: Locator;
    readonly seedText: Locator;
    readonly seedAltText: Locator;
    readonly seedLearnMoreButton: Locator;
    readonly amendmentsConditionersTitle: Locator;
    readonly amendmentsConditionersText: Locator;
    readonly amendmentsConditionersImageAltText: Locator;
    readonly acLearnMoreButton: Locator;
    readonly topDressingBunkerSandTitle: Locator;
    readonly topDressingBunkerSandText: Locator;
    readonly topDressingBunkerSandImageAltText: Locator;
    readonly tdbsLearnMoreButton: Locator;
    readonly iceMeltTitle: Locator;
    readonly iceMeltText: Locator;
    readonly iceMeltImageAltText: Locator;
    readonly imLearnMoreButton: Locator;
    readonly liquidFertilizerLink: Locator;
    readonly infoRequestAltText: Locator;
    readonly infoRequestTitle: Locator;
    readonly infoRequestText: Locator;
    readonly infoRequestEmail: Locator;
    readonly infoRequestSubmitButton: Locator;
    readonly turfProductsFooter: Locator;

    constructor(page: Page){
        this.page=page;
        this.logoAndreSon=page.getByText('ANDRE & SON ');
        this.logoAndreSonlink=page.getByRole('link', {name: 'Andre & Son'});
        this.turfProductsTitle=page.getByRole('link', {name: 'Turf Products'}).nth(0);
        this.backGroundVideo=page.locator('img[src="https://static.wixstatic.com/media/922587_1b0d8e0c95474ab1a58c0af65c4ea150f000.jpg/v1/fill/w_516,h_432,al_c,lg_1,q_80,usm_0.33_1.00_0.00,enc_avif,quality_auto/922587_1b0d8e0c95474ab1a58c0af65c4ea150f000.jpg"]');
        this.turfProductsHeroTitle=page.getByText("There's a Reason We're the Turf King");
        this.turfProductsHeroText1=page.getByText('Our Turf King line of fertilizers is a top of the line, proven winner.')
        this.turfProductsHeroText2=page.getByText("We're the Turf King because we're the experts.");
        this.turfProductsHeroText3=page.locator('//*[@id="comp-km6svaqf"]/p[3]')
        //this.turfProductsHeroText3=page.getByText("You've got a turf problem? We'll tell you the product to solve it. Between our knowledgeable sales team, and our position as an authorized dealer of hundreds of turf products, our team will work hand-in -hand with you to get you optimal results while sharing knowledge for you to use in the future!");
        this.turfProductsCatalogTitle=page.getByText('TURF PRODUCT CATALOG');
        this.turfProductsCatalogText1=page.getByText('Browse our product catalog of');
        this.turfProductsCatalogText2=page.getByText('. Have a question?');
        this.turfProductsCatalogLink=page.getByRole('link', { name: 'urf products', exact: true });
        this.turfProductsCatalogAltText=page.getByAltText('turf_king_fert.png');
        this.combinationProductsTitle=page.getByText('Combination Products', { exact: true });
        this.combinationProductsText=page.getByRole('paragraph').filter({ hasText: 'All of our combination' });
        this.combinationProductsImageAltText=page.getByAltText('combination products.jpg');
        this.combinationProductsLink=page.getByRole('link', { name: 'combination products' });
        this.cplearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(0);
        this.turfKingFertilizerTitle=page.getByText('Turf King Fertilizer', { exact: true });
        this.turfKingFetilizerText=page.getByText('Our fertilizers are premium');
        this.turfKingFetilizerAltText=page.getByAltText('dry fert.jpg');
        this.kfLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(1);
        this.controlAgentsTitle=page.getByText('Control Agents');
        this.controlAgentsText=page.getByText('Taking pride in teaming up');
        this.controlAgentsImageAltText=page.getByAltText('control agents.jpg');
        this.caLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(2);
        this.liquidFertilizerTitle=page.getByText('Liquid Fertilizer', { exact: true });
        this.liquidFertilizerText=page.getByText('We\'ve got what you need to');
        this.liquidFertilizerAltText=page.getByAltText('liquid fert.jpg');
        this.lfLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(3);
        this.seedTitle=page.getByText('Seed', { exact: true });
        this.seedText=page.getByText('Turf King seed is blended');
        this.seedAltText=page.getByAltText('seed.jpg');
        this.seedLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(4);
        this.amendmentsConditionersTitle=page.getByText('Amendments & Conditioners');
        this.amendmentsConditionersText=page.getByRole('paragraph').filter({ hasText: 'Golf, athletic sports,' });
        this.amendmentsConditionersImageAltText=page.getByAltText('soil amendments.jpg');
        this.acLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(5);
        this.topDressingBunkerSandTitle=page.getByText('Top Dressing & Bunker Sand', { exact: true });
        this.topDressingBunkerSandText=page.getByText('Enhance your turf\'s health');
        this.topDressingBunkerSandImageAltText=page.getByAltText('topdressing.jpg');
        this.tdbsLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(6);
        this.iceMeltTitle=page.getByText('Ice Melt', { exact: true });
        this.iceMeltText=page.getByRole('paragraph').filter({ hasText: 'Ice melt is designed to make' });
        this.iceMeltImageAltText=page.getByAltText('ice melt.jpg');
        this.imLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(7);
        this.liquidFertilizerLink=page.getByRole('link', { name: 'LIQUID FERTILIZER' });
        this.infoRequestAltText = page.getByAltText('RoughPic.jpg');
        this.infoRequestTitle = page.getByText('Have a question about our');
        this.infoRequestText = page.getByPlaceholder('Enter your text here');
        this.infoRequestEmail = page.getByRole('textbox', { name: 'Email Address*' });
        this.infoRequestSubmitButton = page.locator('//button[@aria-label="Submit"]');
        this.turfProductsFooter = page.locator('//a[contains(text(),"TURF PRODUCTS")]')
        }

    async clickTurfProductsTitle(){
        await this.turfProductsTitle.click();
    } 
    async clickTurfProductsCatalogLink(){
        await this.turfProductsCatalogLink.click();
    }
    async clickLogoAndreSon(){
        await this.logoAndreSonlink.click();
    }
    async clickCPLearnMoreButton(){
        await this.cplearnMoreButton.click();
    }
    async clickKFLearnMoreButton(){
        await this.kfLearnMoreButton.click();
    }
    async clickCALearnMoreButton(){
        await this.caLearnMoreButton.click();
    }
    async clickLFLearnMoreButton(){
        await this.lfLearnMoreButton.click();
    }
    async clickSeedLearnMoreButton(){
        await this.seedLearnMoreButton.click();
    }
    async clickACLearnMoreButton(){
        await this.acLearnMoreButton.click();
    }   
    async clickTDBSLearnMoreButton(){
        await this.tdbsLearnMoreButton.click();
    }
    async clickIMLearnMoreButton(){
        await this.imLearnMoreButton.click();
    }
    async hoverTurfProductsTitle(){
        await this.turfProductsTitle.hover();
    }
    async clickLiquidFertilizerLink(){
        await this.liquidFertilizerLink.click();
    }
    async fillText(text: string){
        await this.infoRequestText.fill(text);
    }
    async fillEmail(email: string){
        await this.infoRequestEmail.fill(email);
    }
    async isElementAriaCurrent(expectedValue = 'page') {
        const ariaCurrent = await this.turfProductsTitle.getAttribute('aria-current');
        return ariaCurrent === expectedValue;
    }
    async isElementAriaCurrent1(expectedValue = 'page') {
        const ariaCurrent = await this.turfProductsFooter.getAttribute('aria-current');
        return ariaCurrent === expectedValue;
    }
    async isBackgroundVideoActive() {
        const isVisible = await this.backGroundVideo.isVisible();
        if (!isVisible) {
        return false;
        }
        await this.backGroundVideo.waitFor({ state: 'visible', timeout: 5000 });
    }
}