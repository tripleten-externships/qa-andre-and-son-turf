import { Locator, Page } from '@playwright/test';

export class TurfKingDithiopyrPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingdithiopyrlearnmorebutton: Locator;
    readonly turfkingdithiopyrheading: Locator;
    readonly turfkingdithiopyrpagedescription: Locator;
    readonly dithiopyrimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking1503withdithiopyrtitle: Locator;
    readonly turfking1503withdithiopyrlabelbutton: Locator;
    readonly turfking1503withdithiopyrSDSbutton: Locator;
    readonly turfking1503withdithiopyrspecsheetbutton: Locator;
    readonly turfking1906withdithiopyrtitle: Locator;
    readonly turfking1906withdithiopyrlabelbutton: Locator;
    readonly turfking1906withdithiopyrSDSbutton: Locator;
    readonly turfking1906withdithiopyrspecsheetbutton: Locator;
    readonly turfking007withdithiopyrtitle: Locator;
    readonly turfking007withdithiopyrlabelbutton: Locator;
    readonly turfking007withdithiopyrSDSbutton: Locator;
    readonly turfking007withdithiopyrspecsheetbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingdithiopyrlearnmorebutton = page.locator('#comp-klsvc7ly__item-keuwv4tc').getByRole('link', { name: 'Learn More' });
        this.turfkingdithiopyrheading = page.getByText('Turf King + Dithiopyr');
        this.turfkingdithiopyrpagedescription = page.getByText('Dithiopyr is a pre-emergent');
        this.dithiopyrimagealttext = page.getByRole('img', { name: 'Dithiopyr product' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking1503withdithiopyrtitle = page.getByText('Turf King 15-0-3 with Dithiopyr');
        this.turfking1503withdithiopyrlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Dithiopyr' }).getByLabel('Label');
        this.turfking1503withdithiopyrSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Dithiopyr' }).getByLabel('SDS');
        this.turfking1503withdithiopyrspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Dithiopyr' }).getByLabel('Spec Sheet');
        this.turfking1906withdithiopyrtitle = page.getByText('Turf King 19-0-6 with Dithiopyr');
        this.turfking1906withdithiopyrlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Dithiopyr' }).getByLabel('Label');
        this.turfking1906withdithiopyrSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Dithiopyr' }).getByLabel('SDS');
        this.turfking1906withdithiopyrspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Dithiopyr' }).getByLabel('Spec Sheet');
        this.turfking007withdithiopyrtitle = page.getByText('Turf King 0-0-7 with Dithiopyr');
        this.turfking007withdithiopyrlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Dithiopyr' }).getByLabel('Label');
        this.turfking007withdithiopyrSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Dithiopyr' }).getByLabel('SDS');
        this.turfking007withdithiopyrspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Dithiopyr' }).getByLabel('Spec Sheet');
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

    async clickTurfKingDithiopyrLearnMoreButton() {
        await this.turfkingdithiopyrlearnmorebutton.click();
    }

    async verifyTurfKingDithiopyrHeading() {
        await this.turfkingdithiopyrheading.isVisible();
    }

    async verifyTurfKingDithiopyrPageDescription() {
        await this.turfkingdithiopyrpagedescription.isVisible();
    }

    async verifyDithiopyrImageAltText() {
        await this.dithiopyrimagealttext.isVisible();
    }

    async clickSpreadersettingButton() {
        await this.spreadersettingbutton.click();
    }

    async clickTurfKing1503withDithiopyrLabelButton() {
        await this.turfking1503withdithiopyrlabelbutton.click();
    }

    async clickTurfKing1503withDithiopyrSDSButton() {
        await this.turfking1503withdithiopyrSDSbutton.click();
    }

    async clickTurfKing1503withDithiopyrSpecSheetButton() {
        await this.turfking1503withdithiopyrspecsheetbutton.click();
    }

    async clickTurfKing1906withDithiopyrLabelButton() {
        await this.turfking1906withdithiopyrlabelbutton.click();
    }

    async clickTurfKing1906withDithiopyrSDSButton() {
        await this.turfking1906withdithiopyrSDSbutton.click();
    }

    async clickTurfKing1906withDithiopyrSpecSheetButton() {
        await this.turfking1906withdithiopyrspecsheetbutton.click();
    }

    async clickTurfKing007withDithiopyrLabelButton() {
        await this.turfking007withdithiopyrlabelbutton.click();
    }

    async clickTurfKing007withDithiopyrSDSButton() {
        await this.turfking007withdithiopyrSDSbutton.click();
    }

    async clickTurfKing007withDithiopyrSpecSheetButton() {
        await this.turfking007withdithiopyrspecsheetbutton.click();
    }

    async goBackToTurfKingDithiopyrPage() {
        await this.page.goto('/turf-king-dithiopyr/');
    }

    async goBackToPreviousPage() {
        await this.page.goBack();
        await this.page.waitForLoadState('networkidle');
    }
}
