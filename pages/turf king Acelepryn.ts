import { Locator, Page } from '@playwright/test';

export class TurfKingAceleprynPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingaceleprynlearnmorebutton: Locator;
    readonly turfkingaceleprynheading: Locator;
    readonly turfkingaceleprynpagedescription: Locator;
    readonly aceleprynimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking1503withacelepryntitle: Locator;
    readonly turfking1503withaceleprynlabelbutton: Locator;
    readonly turfking1503withaceleprynSDSbutton: Locator;
    readonly turfking1503withaceleprynspecsheetbutton: Locator;
    readonly turfking1906withacelepryntitle: Locator;
    readonly turfking1906withaceleprynlabelbutton: Locator;
    readonly turfking1906withaceleprynSDSbutton: Locator;
    readonly turfking1906withaceleprynspecsheetbutton: Locator;
    readonly turfking007withacelepryntitle: Locator;
    readonly turfking007withaceleprynlabelbutton: Locator;
    readonly turfking007withaceleprynSDSbutton: Locator;
    readonly turfking007withaceleprynspecsheetbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingaceleprynlearnmorebutton = page.locator('#comp-klsvc7ly__item1 > .uUxqWY');
        this.turfkingaceleprynheading = page.getByText('Turf King + Acelepryn');
        this.turfkingaceleprynpagedescription = page.getByText('Acelepryn is an effective');
        this.aceleprynimagealttext = page.getByRole('img', { name: 'Acelepryn product' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking1503withacelepryntitle = page.getByText('Turf King 15-0-3 with Acelepryn');
        this.turfking1503withaceleprynlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Acelepryn' }).getByLabel('Label');
        this.turfking1503withaceleprynSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Acelepryn' }).getByLabel('SDS');
        this.turfking1503withaceleprynspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Acelepryn' }).getByLabel('Spec Sheet');
        this.turfking1906withacelepryntitle = page.getByText('Turf King 19-0-6 with Acelepryn');
        this.turfking1906withaceleprynlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Acelepryn' }).getByLabel('Label');
        this.turfking1906withaceleprynSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Acelepryn' }).getByLabel('SDS');
        this.turfking1906withaceleprynspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Acelepryn' }).getByLabel('Spec Sheet');
        this.turfking007withacelepryntitle = page.getByText('Turf King 0-0-7 with Acelepryn');
        this.turfking007withaceleprynlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Acelepryn' }).getByLabel('Label');
        this.turfking007withaceleprynSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Acelepryn' }).getByLabel('SDS');
        this.turfking007withaceleprynspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Acelepryn' }).getByLabel('Spec Sheet');
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

    async clickTurfKingAceleprynLearnMoreButton() {
        await this.turfkingaceleprynlearnmorebutton.click();
    }

    async verifyTurfKingAceleprynHeading() {
        await this.turfkingaceleprynheading.isVisible();
    }

    async verifyTurfKingAceleprynPageDescription() {
        await this.turfkingaceleprynpagedescription.isVisible();
    }

    async verifyAceleprynImageAltText() {
        await this.aceleprynimagealttext.isVisible();
    }

    async clickSpreadersettingButton() {
        await this.spreadersettingbutton.click();
    }

    async clickTurfKing1503withAceleprynLabelButton() {
        await this.turfking1503withaceleprynlabelbutton.click();
    }

    async clickTurfKing1503withAceleprynSDSButton() {
        await this.turfking1503withaceleprynSDSbutton.click();
    }

    async clickTurfKing1503withAceleprynSpecSheetButton() {
        await this.turfking1503withaceleprynspecsheetbutton.click();
    }

    async clickTurfKing1906withAceleprynLabelButton() {
        await this.turfking1906withaceleprynlabelbutton.click();
    }

    async clickTurfKing1906withAceleprynSDSButton() {
        await this.turfking1906withaceleprynSDSbutton.click();
    }

    async clickTurfKing1906withAceleprynSpecSheetButton() {
        await this.turfking1906withaceleprynspecsheetbutton.click();
    }

    async clickTurfKing007withAceleprynLabelButton() {
        await this.turfking007withaceleprynlabelbutton.click();
    }

    async clickTurfKing007withAceleprynSDSButton() {
        await this.turfking007withaceleprynSDSbutton.click();
    }

    async clickTurfKing007withAceleprynSpecSheetButton() {
        await this.turfking007withaceleprynspecsheetbutton.click();
    }

    async goBackToTurfKingAceleprynPage() {
        await this.page.goto('/turf-king-acelepryn/');
    }

    async goBackToPreviousPage() {
        await this.page.goBack();
        await this.page.waitForLoadState('networkidle');
    }
}
