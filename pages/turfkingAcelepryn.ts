import { Locator, Page } from '@playwright/test';

export class TurfKingAceleprynPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingaceleprynlearnmorebutton: Locator;
    readonly turfkingaceleprynheading: Locator;
    readonly turfkingaceleprynpagedescription: Locator;
    readonly aceleprynimage: Locator;
    readonly aceleprynimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking2507acelepryn: Locator;
    readonly turfking2507aceleprynlabelbutton: Locator;
    readonly turfking2507aceleprynSDSbutton: Locator;
    readonly turfking2507aceleprynspecsheetbutton: Locator;
    readonly turfking1705acelepryn: Locator;
    readonly turfking1705aceleprynlabelbutton: Locator;
    readonly turfking1705aceleprynSDSbutton: Locator;
    readonly turfking1705aceleprynspecsheetbutton: Locator;
    readonly turfking1203acelepryn: Locator;
    readonly turfking1203aceleprynlabelbutton: Locator;
    readonly turfking1203aceleprynSDSbutton: Locator;
    readonly turfking1203aceleprynspecsheetbutton: Locator;
    readonly turfking007acelepryn: Locator;
    readonly turfking007aceleprynlabelbutton: Locator;
    readonly turfking007aceleprynSDSbutton: Locator;    
    readonly turfking007aceleprynspecsheetbutton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingaceleprynlearnmorebutton = page.locator('#comp-klsvc7ly__item1 > .uUxqWY');
        this.turfkingaceleprynheading = page.getByText('Turf King + Acelepryn');
        this.turfkingaceleprynpagedescription = page.locator('span').filter({ hasText: 'Acelepryn insecticide offers' }).nth(4);
        this.aceleprynimage = page.getByRole('img', { name: 'Wet grass' });
        this.aceleprynimagealttext = page.locator('img[alt="Wet grass"]');
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking2507acelepryn = page.getByText('25-0-7 with 40% Meth Urea');
        this.turfking2507aceleprynlabelbutton = page.getByRole('listitem').filter({ hasText: '25-0-7 with 40% Meth Urea' }).getByLabel('Label');
        this.turfking2507aceleprynSDSbutton = page.getByRole('listitem').filter({ hasText: '25-0-7 with 40% Meth Urea' }).getByLabel('SDS');
        this.turfking2507aceleprynspecsheetbutton = page.getByRole('listitem').filter({ hasText: '25-0-7 with 40% Meth Urea' }).getByLabel('Spec Sheet');
        this.turfking1705acelepryn = page.getByRole('listitem').filter({ hasText: '17-0-5 with 40% XCU, 2% Fe' }).getByTestId('colorUnderlay');
        this.turfking1705aceleprynlabelbutton = page.getByRole('listitem').filter({ hasText: '17-0-5 with 40% XCU, 2% Fe' }).getByLabel('Label');
        this.turfking1705aceleprynSDSbutton = page.getByRole('listitem').filter({ hasText: '17-0-5 with 40% XCU, 2% Fe' }).getByLabel('SDS');
        this.turfking1705aceleprynspecsheetbutton = page.getByRole('listitem').filter({ hasText: '17-0-5 with 40% XCU, 2% Fe' }).getByLabel('Spec Sheet');
        this.turfking1203acelepryn = page.getByText('12-0-3 with 30% XCU, 2% Fe');
        this.turfking1203aceleprynlabelbutton = page.getByRole('listitem').filter({ hasText: '12-0-3 with 30% XCU, 2% Fe' }).getByLabel('Label')
        this.turfking1203aceleprynSDSbutton = page.getByRole('listitem').filter({ hasText: '12-0-3 with 30% XCU, 2% Fe' }).getByLabel('SDS');
        this.turfking1203aceleprynspecsheetbutton = page.getByRole('listitem').filter({ hasText: '12-0-3 with 30% XCU, 2% Fe' }).getByLabel('Spec Sheet');
        this.turfking007acelepryn = page.getByRole('heading', { name: '-0-7 Turf King Fertilizer' });
        this.turfking007aceleprynlabelbutton = page.getByRole('listitem').filter({ hasText: '0-0-7 Turf King Fertilizer' }).getByLabel('Label');
        this.turfking007aceleprynSDSbutton = page.getByRole('listitem').filter({ hasText: '0-0-7 Turf King Fertilizer' }).getByLabel('SDS');
        this.turfking007aceleprynspecsheetbutton = page.getByRole('listitem').filter({ hasText: '0-0-7 Turf King Fertilizer' }).getByLabel('Spec Sheet');


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

    async clickTurfKing2507AceleprynLabelButton() {
        await this.turfking2507aceleprynlabelbutton.click();
    }

    async clickTurfKing2507AceleprynSDSButton() {
        await this.turfking2507aceleprynSDSbutton.click();
    }
    async clickTurfKing2507AceleprynSpecSheetButton() {
        await this.turfking2507aceleprynspecsheetbutton.click();
    }
    async clickTurfKing1705AceleprynLabelButton() {
        await this.turfking1705aceleprynlabelbutton.click();
    }
    async clickTurfKing1705AceleprynSDSButton() {
        await this.turfking1705aceleprynSDSbutton.click();
    }
    async clickTurfKing1705AceleprynSpecSheetButton() {
        await this.turfking1705aceleprynspecsheetbutton.click();
    }
    async clickTurfKing1203AceleprynLabelButton() {
        await this.turfking1203aceleprynlabelbutton.click();
    }
    async clickTurfKing1203AceleprynSDSButton() {
        await this.turfking1203aceleprynSDSbutton.click();
    }
    async clickTurfKing1203AceleprynSpecSheetButton() {
        await this.turfking1203aceleprynspecsheetbutton.click();
    }
    async clickTurfKing007AceleprynLabelButton() {
        await this.turfking007aceleprynlabelbutton.click();
    }
    async clickTurfKing007AceleprynSDSButton() {
        await this.turfking007aceleprynSDSbutton.click();
    }
    async clickTurfKing007AceleprynSpecSheetButton() {
        await this.turfking007aceleprynspecsheetbutton.click();
    }
}