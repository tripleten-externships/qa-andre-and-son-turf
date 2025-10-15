import { Locator, Page } from '@playwright/test';

export class TurfKingBifenthrinPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingbifenthrinlearnmorebutton: Locator;
    readonly turfkingbifenthrinheading: Locator;
    readonly turfkingbifenthrinpagedescription: Locator;
    readonly bifenthrinimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking1503withbifenthrinfertilizertitle: Locator;
    readonly turfking1503withbifenthrinfertilizerlabelbutton: Locator;
    readonly turfking1503withbifenthrinfertilizerSDSbutton: Locator;
    readonly turfking1503withbifenthrinfertilizerspecsheetbutton: Locator;
    readonly turfking1906withbifenthrinfertilizertitle: Locator;
    readonly turfking1906withbifenthrinfertilizerlabelbutton: Locator;
    readonly turfking1906withbifenthrinfertilizerSDSbutton: Locator;
    readonly turfking1906withbifenthrinfertilizerspecsheetbutton: Locator;
    readonly turfking007withbifenthrinfertilizertitle: Locator;
    readonly turfking007withbifenthrinfertilizerlabelbutton: Locator;
    readonly turfking007withbifenthrinfertilizerSDSbutton: Locator;
    readonly turfking007withbifenthrinfertilizerspecsheetbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingbifenthrinlearnmorebutton = page.locator('#comp-klsvc7ly__item-keuwv4tb').getByRole('link', { name: 'Learn More' });
        this.turfkingbifenthrinheading = page.getByText('Turf King + Bifenthrin');
        this.turfkingbifenthrinpagedescription = page.getByText('Bifenthrin is a broad-spectrum');
        this.bifenthrinimagealttext = page.getByRole('img', { name: 'Bifenthrin product' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking1503withbifenthrinfertilizertitle = page.getByText('Turf King 15-0-3 with Bifenthrin');
        this.turfking1503withbifenthrinfertilizerlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Bifenthrin' }).getByLabel('Label');
        this.turfking1503withbifenthrinfertilizerSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Bifenthrin' }).getByLabel('SDS');
        this.turfking1503withbifenthrinfertilizerspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Bifenthrin' }).getByLabel('Spec Sheet');
        this.turfking1906withbifenthrinfertilizertitle = page.getByText('Turf King 19-0-6 with Bifenthrin');
        this.turfking1906withbifenthrinfertilizerlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Bifenthrin' }).getByLabel('Label');
        this.turfking1906withbifenthrinfertilizerSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Bifenthrin' }).getByLabel('SDS');
        this.turfking1906withbifenthrinfertilizerspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Bifenthrin' }).getByLabel('Spec Sheet');
        this.turfking007withbifenthrinfertilizertitle = page.getByText('Turf King 0-0-7 with Bifenthrin');
        this.turfking007withbifenthrinfertilizerlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Bifenthrin' }).getByLabel('Label');
        this.turfking007withbifenthrinfertilizerSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Bifenthrin' }).getByLabel('SDS');
        this.turfking007withbifenthrinfertilizerspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Bifenthrin' }).getByLabel('Spec Sheet');
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

    async clickTurfKingBifenthrinLearnMoreButton() {
        await this.turfkingbifenthrinlearnmorebutton.click();
    }

    async verifyTurfKingBifenthrinHeading() {
        await this.turfkingbifenthrinheading.isVisible();
    }

    async verifyTurfKingBifenthrinPageDescription() {
        await this.turfkingbifenthrinpagedescription.isVisible();
    }

    async verifyBifenthrinImageAltText() {
        await this.bifenthrinimagealttext.isVisible();
    }

    async clickSpreadersettingButton() {
        await this.spreadersettingbutton.click();
    }

    async clickTurfKing1503withBifenthrinLabelButton() {
        await this.turfking1503withbifenthrinfertilizerlabelbutton.click();
    }

    async clickTurfKing1503withBifenthrinSDSButton() {
        await this.turfking1503withbifenthrinfertilizerSDSbutton.click();
    }

    async clickTurfKing1503withBifenthrinSpecSheetButton() {
        await this.turfking1503withbifenthrinfertilizerspecsheetbutton.click();
    }

    async clickTurfKing1906withBifenthrinLabelButton() {
        await this.turfking1906withbifenthrinfertilizerlabelbutton.click();
    }

    async clickTurfKing1906withBifenthrinSDSButton() {
        await this.turfking1906withbifenthrinfertilizerSDSbutton.click();
    }

    async clickTurfKing1906withBifenthrinSpecSheetButton() {
        await this.turfking1906withbifenthrinfertilizerspecsheetbutton.click();
    }

    async clickTurfKing007withBifenthrinLabelButton() {
        await this.turfking007withbifenthrinfertilizerlabelbutton.click();
    }

    async clickTurfKing007withBifenthrinSDSButton() {
        await this.turfking007withbifenthrinfertilizerSDSbutton.click();
    }

    async clickTurfKing007withBifenthrinSpecSheetButton() {
        await this.turfking007withbifenthrinfertilizerspecsheetbutton.click();
    }

    async goBackToTurfKingBifenthrinPage() {
        await this.page.goto('/turf-king-bifenthrin/');
    }

    async goBackToPreviousPage() {
        await this.page.goBack();
        await this.page.waitForLoadState('networkidle');
    }
}
