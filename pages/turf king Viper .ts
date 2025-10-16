import { Locator, Page } from '@playwright/test';

export class TurfKingViperPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingviperlearnmorebutton: Locator;
    readonly turfkingviperheading: Locator;
    readonly turfkingviperpagedescription: Locator;
    readonly viperimage: Locator;
    readonly viperimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking1503withvipertitle: Locator;
    readonly turfking1503withviperlabelbutton: Locator;
    readonly turfking1503withviperSDSbutton: Locator;
    readonly turfking1503withviperspecsheetbutton: Locator;
    readonly turfking2409withvipertitle: Locator;
    readonly turfking2409withviperlabelbutton: Locator;
    readonly turfking2409withviperSDSbutton: Locator;
    readonly turfking2409withviperspecsheetbutton: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingviperlearnmorebutton = page.locator('#comp-klsvc7ly__item-klpofhis').getByRole('link', { name: 'Learn More' });
        this.turfkingviperheading = page.getByText('Turf King + Viper');
        this.turfkingviperpagedescription = page.getByText('Viper is a post-emergent');
        this.viperimage = page.getByRole('img', { name: 'Wet grass' });
        this.viperimagealttext = page.getByAltText('Wet grass');
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking1503withvipertitle = page.getByText('Turf King 15-0-3 with Viper');
        this.turfking1503withviperlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Viper' }).getByLabel('Label');
        this.turfking1503withviperSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Viper' }).getByLabel('SDS');
        this.turfking1503withviperspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Viper' }).getByLabel('Spec Sheet');
        this.turfking2409withvipertitle = page.getByText('Turf King 24-0-9 with Viper');
        this.turfking2409withviperlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 24-0-9 with Viper' }).getByLabel('Label');
        this.turfking2409withviperSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 24-0-9 with Viper' }).getByLabel('SDS');
        this.turfking2409withviperspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 24-0-9 with Viper' }).getByLabel('Spec Sheet');
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
    async clickTurfKingViperLearnMoreButton() {
        await this.turfkingviperlearnmorebutton.click();
    }
    async clickSpreadersettingButton() {
        await this.spreadersettingbutton.click();
    }
    async clickTurfKing1503withViperLabelButton() {
        await this.turfking1503withviperlabelbutton.click();
    }
    async clickTurfKing1503withViperSDSButton() {
        await this.turfking1503withviperSDSbutton.click();      
    }
    async clickTurfKing1503withViperSpecSheetButton() {
        await this.turfking1503withviperspecsheetbutton.click();
    }
    async clickTurfKing2409withViperLabelButton() {
        await this.turfking2409withviperlabelbutton.click();
    }
    async clickTurfKing2409withViperSDSButton() {
        await this.turfking2409withviperSDSbutton.click();
    }
    async clickTurfKing2409withViperSpecSheetButton() {
        await this.turfking2409withviperspecsheetbutton.click();
    }
}
