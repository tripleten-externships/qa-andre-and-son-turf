import { Locator, Page } from '@playwright/test';

export class TurfKingMalletPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingmalletlearnmorebutton: Locator;
    readonly turfkingmalletheading: Locator;
    readonly turfkingmalletpagedescription: Locator;
    readonly malletimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking1503withmallettitle: Locator;
    readonly turfking1503withmalletlabelbutton: Locator;
    readonly turfking1503withmalletSDSbutton: Locator;
    readonly turfking1503withmalletspecsheetbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingmalletlearnmorebutton = page.locator('#comp-klsvc7ly__item-keuwv4tf').getByRole('link', { name: 'Learn More' });
        this.turfkingmalletheading = page.getByText('Turf King + Mallet');
        this.turfkingmalletpagedescription = page.getByText('Mallet is a pre-emergent');
        this.malletimagealttext = page.getByRole('img', { name: 'Mallet product' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking1503withmallettitle = page.getByText('Turf King 15-0-3 with Mallet');
        this.turfking1503withmalletlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Mallet' }).getByLabel('Label');
        this.turfking1503withmalletSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Mallet' }).getByLabel('SDS');
        this.turfking1503withmalletspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Mallet' }).getByLabel('Spec Sheet');
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

    async clickTurfKingMalletLearnMoreButton() {
        await this.turfkingmalletlearnmorebutton.click();
    }

    async clickSpreadersettingButton() {
        await this.spreadersettingbutton.click();
    }

    async clickTurfKing1503withMalletLabelButton() {
        await this.turfking1503withmalletlabelbutton.click();
    }

    async clickTurfKing1503withMalletSDSButton() {
        await this.turfking1503withmalletSDSbutton.click();
    }

    async clickTurfKing1503withMalletSpecSheetButton() {
        await this.turfking1503withmalletspecsheetbutton.click();
    }

    async goBackToPreviousPage() {
        await this.page.goBack();
        await this.page.waitForLoadState('networkidle');
    }
}
