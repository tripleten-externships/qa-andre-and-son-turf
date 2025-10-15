import { expect, Locator, Page } from '@playwright/test';

export class turfKingComboProductPage {
 
    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfKingProdiamineTitle: Locator;
    readonly turfKingProdiamineDescription: Locator;
    readonly turfKingProdiamineLearnMoreButton: Locator;
    readonly turfKingDithiopyrTitle: Locator;
    readonly turfKingDithiopyrDescription: Locator;
    readonly turfKingDithiopyrLearnMoreButton: Locator;
    readonly turfKingEscaladeTitle: Locator;
    readonly turfKingEscaladeDescription: Locator;
    readonly turfKingEscaladeLearnMoreButton: Locator;
    readonly turfKingViperTitle: Locator;
    readonly turfKingViperDescription: Locator;
    readonly turfKingViperLearnMoreButton: Locator;
    readonly turfKingImidaLambdaTitle: Locator;
    readonly turfKingImidaLambdaDescription: Locator;
    readonly turfKingImidaLambdaLearnMoreButton: Locator;
    readonly turfKingMallettTitle: Locator;
    readonly turfKingMallettDescription: Locator;
    readonly turfKingMallettLearnMoreButton: Locator;
    readonly turfKingBefenthrinTitle: Locator;
    readonly turfKingBefenthrinDescription: Locator;
    readonly turfKingBefenthrinLearnMoreButton: Locator;
    readonly turfKingAceleprynTitle: Locator;
    readonly turfKingAceleprynDescription: Locator;
    readonly turfKingAceleprynLearnMoreButton: Locator;
    readonly letsGetGrowingHeading: Locator;
    readonly enterYourTextHereTextBox: Locator;
    readonly emailAddressTextBox: Locator;
    readonly submitButton: Locator;
    readonly andreandsonlogo: Locator;
    readonly turfProductsTitleInFooter: Locator;
        readonly footerSection: Locator;
        readonly scrollToFooterButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.getByRole('link', {name: 'Turf Products'}).nth(0);
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfKingProdiamineTitle = page.locator('h1:has-text("Turf King + Prodiamine")');
        this.turfKingProdiamineDescription = page.locator('p:has-text("Turf King + Prodiamine description")');
        this.turfKingProdiamineLearnMoreButton = page.locator('text=Turf King + Prodiamine').locator('..').getByRole('link', { name: 'Learn More' });
        this.turfKingDithiopyrTitle = page.locator('h1:has-text("Turf King + Dithiopyr")');
        this.turfKingDithiopyrDescription = page.locator('p:has-text("Turf King + Dithiopyr description")');
        this.turfKingDithiopyrLearnMoreButton = page.locator('button:has-text("Learn More")');
        this.turfKingEscaladeTitle = page.locator('h1:has-text("Turf King + Escalade")');
        this.turfKingEscaladeDescription = page.locator('p:has-text("Turf King + Escalade description")');
        this.turfKingEscaladeLearnMoreButton = page.locator('button:has-text("Learn More")');
        this.turfKingViperTitle = page.locator('h1:has-text("Turf King + Viper\'s")');
        this.turfKingViperDescription = page.locator('p:has-text("Turf King + Viper\'s description")');
        this.turfKingViperLearnMoreButton = page.locator('button:has-text("Learn More")');
        this.turfKingImidaLambdaTitle = page.locator('h1:has-text("Turf King + Imida Lambda")');
        this.turfKingImidaLambdaDescription = page.locator('p:has-text("Turf King + Imida Lambda description")');
        this.turfKingImidaLambdaLearnMoreButton = page.locator('button:has-text("Learn More")');
        this.turfKingMallettTitle = page.locator('h1:has-text("Turf King + Mallett")');
        this.turfKingMallettDescription = page.locator('p:has-text("Turf King + Mallett description")');
        this.turfKingMallettLearnMoreButton = page.locator('button:has-text("Learn More")');
        this.turfKingBefenthrinTitle = page.locator('h1:has-text("Turf King + Befenthrin")');
        this.turfKingBefenthrinDescription = page.locator('p:has-text("Turf King + Befenthrin description")');
        this.turfKingBefenthrinLearnMoreButton = page.locator('button:has-text("Learn More")');
        this.turfKingAceleprynTitle = page.locator('h1:has-text("Turf King + Acelepryn")');
        this.turfKingAceleprynDescription = page.locator('p:has-text("Turf King + Acelepryn description")');
        this.turfKingAceleprynLearnMoreButton = page.locator('button:has-text("Learn More")');
        this.letsGetGrowingHeading = page.locator('h2:has-text("let\'s get growing")');
        this.enterYourTextHereTextBox = page.locator('input[placeholder="Enter your text here"]');
        this.emailAddressTextBox = page.locator('input[placeholder="Email address"]');
        this.submitButton = page.locator('button:has-text("Submit")');
        this.andreandsonlogo = page.getByRole('link', { name: 'logo_edited_edited.png' });
        this.turfProductsTitleInFooter = page.getByTestId('linkElement-0');
            this.footerSection = page.locator('footer');
            this.scrollToFooterButton = page.locator('button[aria-label="Scroll to footer"]');

    
    }
    async goto() {
        await this.page.goto('/');
    }
    async clickTurfProductsTitle() {
        await this.turfProductsTitle.click();
    }
    async clickCombinationProductLearnMoreButton() {
        await this.combinationProductLearnMoreButton.click();
    }
    async scrollToFooterSection() {
        await this.footerSection.scrollIntoViewIfNeeded();
    }
    async verifyTurfKingTitleIsHighlighted() {
        const color = await this.turfProductsTitleInFooter.evaluate((el) => {
            return window.getComputedStyle(el).color;
        });
        expect(color).toBe('rgb(255, 255, 0)'); // Yellow color in RGB format
    }
    
}