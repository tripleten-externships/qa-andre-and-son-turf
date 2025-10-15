import { Locator, Page } from '@playwright/test';

export class TurfKingViperPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingviperlearnmorebutton: Locator;
    readonly turfkingviperheading: Locator;
    readonly turfkingviperpagedescription: Locator;
    readonly viperimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking1503withvipertitle: Locator;
    readonly turfking1503withviperlabelbutton: Locator;
    readonly turfking1503withviperSDSbutton: Locator;
    readonly turfking1503withviperspecsheetbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingviperlearnmorebutton = page.locator('#comp-klsvc7ly__item-keuwv4tg').getByRole('link', { name: 'Learn More' });
        this.turfkingviperheading = page.getByText('Turf King + Viper');
        this.turfkingviperpagedescription = page.getByText('Viper is a post-emergent');
        this.viperimagealttext = page.getByRole('img', { name: 'Viper product' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking1503withvipertitle = page.getByText('Turf King 15-0-3 with Viper');
        this.turfking1503withviperlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Viper' }).getByLabel('Label');
        this.turfking1503withviperSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Viper' }).getByLabel('SDS');
        this.turfking1503withviperspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Viper' }).getByLabel('Spec Sheet');
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

    async goBackToPreviousPage() {
        await this.page.goBack();
        await this.page.waitForLoadState('networkidle');
    }
}
