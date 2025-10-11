import { Locator, Page, expect } from "@playwright/test";



export default class TurfKingComboProductPage {
    readonly page: Page;
    readonly turfKingCombinationProductsHeading: Locator;
    readonly turfKingCombinationProductsDescription: Locator;
    readonly turfKingCombinationProductsImage: Locator;
    readonly turfKingProdiamineHeading: Locator;
    readonly turfKingProdiamineDescription: Locator;
    readonly turfKingProdiamineLearnMoreButton: Locator;
    readonly turfkingDithiopyrHeading: Locator;
    readonly turfkingDithiopyrDescription: Locator;
    readonly turfkingDithiopyrLearnMoreButton: Locator;
    readonly turfkingEscaladeHeading: Locator;
    readonly turfkingEscaladeDescription: Locator;
    readonly turfkingEscaladeLearnMoreButton: Locator;
    readonly turfkingviperHeading: Locator;
    readonly turfkingviperDescription: Locator;
    readonly turfkingviperLearnMoreButton: Locator;
    readonly turfkingImidaLambdaHeading: Locator;
    readonly turfkingImidaLambdaDescription: Locator;
    readonly turfkingImidaLambdaLearnMoreButton: Locator;
    readonly turfkingMallettHeading: Locator;
    readonly turfkingMallettDescription: Locator;
    readonly turfkingMallettLearnMoreButton: Locator;
    readonly turfkingBifenthrinHeading: Locator;
    readonly turfkingBifenthrinDescription: Locator;
    readonly turfkingBifenthrinLearnMoreButton: Locator;
    readonly turfkingAceleprynHeading: Locator;
    readonly turfkingAceleprynDescription: Locator;
    readonly turfkingAceleprynLearnMoreButton: Locator;
    readonly letsgetgrowingHeading: Locator;
    readonly enteryourtexthereInput: Locator;
    readonly emailaddressInput: Locator;
    readonly submitButton: Locator;
    readonly turfproducttitlefooter: Locator;
    readonly andreandsonlogofooter: Locator;
    readonly twitterlogofooter: Locator;
    readonly facebooklogofooter: Locator;
    readonly instagramlogofooter: Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.turfKingCombinationProductsHeading = page.locator('h1:has-text("Turf King Combination Products")');
        this.turfKingCombinationProductsDescription = page.locator('p:has-text("Turf King Combination Products")');
        this.turfKingCombinationProductsImage = page.locator('img:has-text("Turf King Combination Products")');
        this.turfKingProdiamineHeading = page.locator('h2:has-text("Turf King + Prodiamine")');
        this.turfKingProdiamineDescription = page.locator('p:has-text("Turf King + Prodiamine")');
        this.turfKingProdiamineLearnMoreButton = page.locator('text=Turf King + Prodiamine Learn More');
        this.turfkingDithiopyrHeading = page.locator('h2:has-text("Turf King + Dimension")');
        this.turfkingDithiopyrDescription = page.locator('p:has-text("Turf King + Dimension")');
        this.turfkingDithiopyrLearnMoreButton = page.locator('text=Turf King + Dimension Learn More');
        this.turfkingEscaladeHeading = page.locator('h2:has-text("Turf King + Escalade")');
        this.turfkingEscaladeDescription = page.locator('p:has-text("Turf King + Escalade")');
        this.turfkingEscaladeLearnMoreButton = page.locator('text=Turf King + Escalade Learn More');
        this.turfkingviperHeading = page.locator('h2:has-text("Turf King + Viper")');
        this.turfkingviperDescription = page.locator('p:has-text("Turf King + Viper")');
        this.turfkingviperLearnMoreButton = page.locator('text=Turf King + Viper Learn More');
        this.turfkingImidaLambdaHeading = page.locator('h2:has-text("Turf King + Imida Lambda")');
        this.turfkingImidaLambdaDescription = page.locator('p:has-text("Turf King + Imida Lambda")');
        this.turfkingImidaLambdaLearnMoreButton = page.locator('text=Turf King + Imida Lambda Learn More');
        this.turfkingMallettHeading = page.locator('h2:has-text("Turf King + Mallett")');
        this.turfkingMallettDescription = page.locator('p:has-text("Turf King + Mallett")');
        this.turfkingMallettLearnMoreButton = page.locator('text=Turf King + Mallett Learn More');
        this.turfkingBifenthrinHeading = page.locator('h2:has-text("Turf King + Bifenthrin")');
        this.turfkingBifenthrinDescription = page.locator('p:has-text("Turf King + Bifenthrin")');
        this.turfkingBifenthrinLearnMoreButton = page.locator('text=Turf King + Bifenthrin Learn More');
        this.turfkingAceleprynHeading = page.locator('h2:has-text("Turf King + Acelepryn")');
        this.turfkingAceleprynDescription = page.locator('p:has-text("Turf King + Acelepryn")');
        this.turfkingAceleprynLearnMoreButton = page.locator('text=Turf King + Acelepryn Learn More');
        this.letsgetgrowingHeading = page.locator('h2:has-text("Let\'s Get Growing")');
        this.enteryourtexthereInput = page.locator('input[placeholder="Enter your text here"]');
        this.emailaddressInput = page.locator('input[placeholder="Email Address"]');
        this.submitButton = page.locator('button:has-text("Submit")');
        this.turfproducttitlefooter = page.locator('text=Turf Products');
        this.andreandsonlogofooter = page.locator('img[alt="Andre and Son Logo"]');
        this.twitterlogofooter = page.locator('img[alt="Twitter Logo"]');
        this.facebooklogofooter = page.locator('img[alt="Facebook Logo"]');
        this.instagramlogofooter = page.locator('img[alt="Instagram Logo"]');

    }

    async verifyTurfKingCombinationProductsHeading() {
        await expect(this.turfKingCombinationProductsHeading).toBeVisible();
        await expect(this.turfKingCombinationProductsHeading).toHaveText('Turf King Combination Products');
    }

    async verifyTurfKingCombinationProductsDescription() {
        await expect(this.turfKingCombinationProductsDescription).toBeVisible();
        await expect(this.turfKingCombinationProductsDescription).toHaveText(/Turf King Combination Products/);
    }
    async verifyTurfKingCombinationProductsImage() {
        await expect(this.turfKingCombinationProductsImage).toBeVisible();
        await expect(this.turfKingCombinationProductsImage).toHaveAttribute('src', /turf-king-combination-products/);
    }   
    async verifyTurfKingProdiamineHeading() {
        await expect(this.turfKingProdiamineHeading).toBeVisible();
        await expect(this.turfKingProdiamineHeading).toHaveText('Turf King + Prodiamine');
    }

    async verifyTurfKingProdiamineDescription() {
        await expect(this.turfKingProdiamineDescription).toBeVisible();
        await expect(this.turfKingProdiamineDescription).toHaveText(/Turf King + Prodiamine/);
    }   
    async verifyTurfKingProdiamineLearnMoreButton() {
        await expect(this.turfKingProdiamineLearnMoreButton).toBeVisible();
        await expect(this.turfKingProdiamineLearnMoreButton).toHaveText('Turf King + Prodiamine Learn More');
      
    }
    async verifyTurfkingDithiopyrHeading() {
        await expect(this.turfkingDithiopyrHeading).toBeVisible();
        await expect(this.turfkingDithiopyrHeading).toHaveText('Turf King + Dimension');
    }
    async verifyTurfkingDithiopyrDescription() {
        await expect(this.turfkingDithiopyrDescription).toBeVisible();
        await expect(this.turfkingDithiopyrDescription).toHaveText(/Turf King + Dimension/);
    }   
    async verifyTurfkingDithiopyrLearnMoreButton() {
        await expect(this.turfkingDithiopyrLearnMoreButton).toBeVisible();
        await expect(this.turfkingDithiopyrLearnMoreButton).toHaveText('Turf King + Dimension Learn More');
    }
    async verifyTurfkingEscaladeHeading() {
        await expect(this.turfkingEscaladeHeading).toBeVisible();
        await expect(this.turfkingEscaladeHeading).toHaveText('Turf King + Escalade');
    }
    async verifyTurfkingEscaladeDescription() {
        await expect(this.turfkingEscaladeDescription).toBeVisible();
        await expect(this.turfkingEscaladeDescription).toHaveText(/Turf King + Escalade/);
    }
    async verifyTurfkingEscaladeLearnMoreButton() {
        await expect(this.turfkingEscaladeLearnMoreButton).toBeVisible();
        await expect(this.turfkingEscaladeLearnMoreButton).toHaveText('Turf King + Escalade Learn More');
    }
    async verifyTurfkingviperHeading() {
        await expect(this.turfkingviperHeading).toBeVisible();
        await expect(this.turfkingviperHeading).toHaveText('Turf King + Viper');
    }
    async verifyTurfkingviperDescription() {
        await expect(this.turfkingviperDescription).toBeVisible();
        await expect(this.turfkingviperDescription).toHaveText(/Turf King + Viper/);

        
    
    