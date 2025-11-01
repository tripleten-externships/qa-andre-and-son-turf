import { Locator, Page } from '@playwright/test';

export class TurfKingDithiopyrPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingdithiopyrlearnmorebutton: Locator;
    readonly turfkingdithiopyrheading: Locator;
    readonly turfkingdithiopyrpagedescription: Locator;
    readonly dithiopyrimage: Locator;
    readonly dithiopyrimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking007withdithiopyr: Locator;
    readonly turfking007withdithiopyrlabelbutton: Locator;
    readonly turfking007withdithiopyrSDSbutton: Locator;
    readonly turfking007withdithiopyrspecsheetbutton: Locator;
    readonly turfking1203withdithiopyr: Locator;
    readonly turfking1203withdithiopyrlabelbutton: Locator;
    readonly turfking1203withdithiopyrSDSbutton: Locator;
    readonly turfking1203withdithiopyrspecsheetbutton: Locator;
    readonly turfking1804withdithiopyr: Locator;
    readonly turfking1804withdithiopyrlabelbutton: Locator;
    readonly turfking1804withdithiopyrSDSbutton: Locator;
    readonly turfking1804withdithiopyrspecsheetbutton: Locator;
    readonly turfking2208withdithiopyr: Locator;
    readonly turfking2208withdithiopyrlabelbutton: Locator;
    readonly turfking2208withdithiopyrSDSbutton: Locator;
    readonly turfking2208withdithiopyrspecsheetbutton: Locator;
    readonly turfking1200withdithiopyr: Locator;
    readonly turfking1200withdithiopyrlabelbutton: Locator;
    readonly turfking1200withdithiopyrSDSbutton: Locator;
    readonly turfking1200withdithiopyrspecsheetbutton: Locator;
    readonly turfking1900withdithiopyr: Locator;
    readonly turfking1900withdithiopyrlabelbutton: Locator;
    readonly turfking1900withdithiopyrSDSbutton: Locator;
    readonly turfking1900withdithiopyrspecsheetbutton: Locator;
    readonly turfking007turffertilizerwithdithiopyr: Locator;
    readonly turfking007turffertilizerwithdithiopyrlabelbutton: Locator;
    readonly turfking007turffertilizerwithdithiopyrSDSbutton: Locator;
    readonly turfking007turffertilizerwithdithiopyrspecsheetbutton: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingdithiopyrlearnmorebutton = page.locator('#comp-klsvc7ly__item-m3oimtk1').getByRole('link', { name: 'Learn More' });
        this.turfkingdithiopyrheading = page.getByText('Turf King + Dithiopyr');
        this.turfkingdithiopyrpagedescription = page.getByText('Dithiopyr is a pre-emergent');
        this.dithiopyrimage = page.getByRole('img', { name: 'Wet grass' });
        this.dithiopyrimagealttext = page.getByRole('img', { name: 'Wet grass' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking007withdithiopyr = page.getByText('-0-7 Turf King Fertilizer with 0.13% Dithiopyr');
        this.turfking007withdithiopyrlabelbutton = page.getByRole('listitem').filter({ hasText: '-0-7 Turf King Fertilizer with 0.13% DithiopyrLabelSDSSpec Sheet' }).getByLabel('Label');
        this.turfking007withdithiopyrSDSbutton = page.getByRole('listitem').filter({ hasText: '-0-7 Turf King Fertilizer with 0.13% DithiopyrLabelSDSSpec Sheet' }).getByLabel('SDS');
        this.turfking007withdithiopyrspecsheetbutton = page.getByRole('listitem').filter({ hasText: '-0-7 Turf King Fertilizer with 0.13% DithiopyrLabelSDSSpec Sheet' }).getByLabel('Spec Sheet');
        this.turfking1203withdithiopyr = page.getByText('12-0-3 Turf King Fertilizer');
        this.turfking1203withdithiopyrlabelbutton = page.getByRole('listitem').filter({ hasText: '12-0-3 Turf King Fertilizer' }).getByLabel('Label');
        this.turfking1203withdithiopyrSDSbutton = page.getByRole('listitem').filter({ hasText: '12-0-3 Turf King Fertilizer' }).getByLabel('SDS');
        this.turfking1203withdithiopyrspecsheetbutton = page.getByRole('listitem').filter({ hasText: '12-0-3 Turf King Fertilizer' }).getByLabel('Spec Sheet');
        this.turfking1804withdithiopyr = page.getByText('18-0-4 Turf King Fertilizer');
        this.turfking1804withdithiopyrlabelbutton = page.getByRole('listitem').filter({ hasText: '18-0-4 Turf King Fertilizer' }).getByLabel('Label');
        this.turfking1804withdithiopyrSDSbutton = page.getByRole('listitem').filter({ hasText: '18-0-4 Turf King Fertilizer' }).getByLabel('SDS');
        this.turfking1804withdithiopyrspecsheetbutton = page.getByRole('listitem').filter({ hasText: '18-0-4 Turf King Fertilizer' }).getByLabel('Spec Sheet');
        this.turfking2208withdithiopyr = page.getByText('22-0-8 Turf King Fertilizer');
        this.turfking2208withdithiopyrlabelbutton = page.getByRole('listitem').filter({ hasText: '22-0-8 Turf King Fertilizer' }).getByLabel('Label');
        this.turfking2208withdithiopyrSDSbutton = page.getByRole('listitem').filter({ hasText: '22-0-8 Turf King Fertilizer' }).getByLabel('SDS');
        this.turfking2208withdithiopyrspecsheetbutton = page.getByRole('listitem').filter({ hasText: '22-0-8 Turf King Fertilizer' }).getByLabel('Spec Sheet');
        this.turfking1200withdithiopyr = page.getByText('12-0-0 Turf King Fertilizer');
        this.turfking1200withdithiopyrlabelbutton = page.getByRole('listitem').filter({ hasText: '12-0-0 Turf King Fertilizer' }).getByLabel('Label');
        this.turfking1200withdithiopyrSDSbutton = page.getByRole('listitem').filter({ hasText: '12-0-0 Turf King Fertilizer' }).getByLabel('SDS');
        this.turfking1200withdithiopyrspecsheetbutton = page.getByRole('listitem').filter({ hasText: '12-0-0 Turf King Fertilizer' }).getByLabel('Spec Sheet');
        this.turfking1900withdithiopyr = page.getByText('19-0-0 Turf King Fertilizer');
        this.turfking1900withdithiopyrlabelbutton = page.locator('#comp-m4cux70u1__b1c93eed-9cc8-4115-a3ea-32d1f430ec3b > .uDW_Qe');
        this.turfking1900withdithiopyrSDSbutton = page.locator('#comp-m4cux7111__b1c93eed-9cc8-4115-a3ea-32d1f430ec3b > .uDW_Qe');
        this.turfking1900withdithiopyrspecsheetbutton = page.locator('#comp-m4cux7171__b1c93eed-9cc8-4115-a3ea-32d1f430ec3b > .uDW_Qe');
        this.turfking007turffertilizerwithdithiopyr = page.getByText('-0-7 Turf King Fertilizer with 0.172% Dithiopyr');
        this.turfking007turffertilizerwithdithiopyrlabelbutton = page.getByRole('listitem').filter({ hasText: '-0-7 Turf King Fertilizer with 0.172% Dithiopyr LabelSDSSpec Sheet' }).getByLabel('Label');
        this.turfking007turffertilizerwithdithiopyrSDSbutton = page.getByRole('listitem').filter({ hasText: '-0-7 Turf King Fertilizer with 0.172% Dithiopyr LabelSDSSpec Sheet' }).getByLabel('SDS');
        this.turfking007turffertilizerwithdithiopyrspecsheetbutton = page.getByRole('listitem').filter({ hasText: '-0-7 Turf King Fertilizer with 0.172% Dithiopyr LabelSDSSpec Sheet' }).getByLabel('Spec Sheet');
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
    async clickTurfKing007withDithiopyrLabelButton() {
        await this.turfking007withdithiopyrlabelbutton.click();
    }

    async clickTurfKing007withDithiopyrSDSButton() {
        await this.turfking007withdithiopyrSDSbutton.click();
    }
    async clickTurfKing007withDithiopyrSpecSheetButton() {
        await this.turfking007withdithiopyrspecsheetbutton.click();
    }
    async clickTurfKing1203withDithiopyrLabelButton() {
        await this.turfking1203withdithiopyrlabelbutton.click();
    }
    async clickTurfKing1203withDithiopyrSDSButton() {
        await this.turfking1203withdithiopyrSDSbutton.click();
    }
    async clickTurfKing1203withDithiopyrSpecSheetButton() {
        await this.turfking1203withdithiopyrspecsheetbutton.click();
    }
    async clickTurfKing1804withDithiopyrLabelButton() {
        await this.turfking1804withdithiopyrlabelbutton.click();
    }
    async clickTurfKing1804withDithiopyrSDSButton() {
        await this.turfking1804withdithiopyrSDSbutton.click();
    }
    async clickTurfKing1804withDithiopyrSpecSheetButton() {
        await this.turfking1804withdithiopyrspecsheetbutton.click();
    }
    async clickTurfKing2208withDithiopyrLabelButton() {
        await this.turfking2208withdithiopyrlabelbutton.click();
    }
    async clickTurfKing2208withDithiopyrSDSButton() {
        await this.turfking2208withdithiopyrSDSbutton.click();
    }
    async clickTurfKing2208withDithiopyrSpecSheetButton() {
        await this.turfking2208withdithiopyrspecsheetbutton.click();
    }
    async clickTurfKing1200withDithiopyrLabelButton() {
        await this.turfking1200withdithiopyrlabelbutton.click();
    }
    async clickTurfKing1200withDithiopyrSDSButton() {
        await this.turfking1200withdithiopyrSDSbutton.click();
    }
    async clickTurfKing1200withDithiopyrSpecSheetButton() {
        await this.turfking1200withdithiopyrspecsheetbutton.click();
    }
    async clickTurfKing1900withDithiopyrLabelButton() {
        await this.turfking1900withdithiopyrlabelbutton.click();
    }
    async clickTurfKing1900withDithiopyrSDSButton() {
        await this.turfking1900withdithiopyrSDSbutton.click();
    }
    async clickTurfKing1900withDithiopyrSpecSheetButton() {
        await this.turfking1900withdithiopyrspecsheetbutton.click();
    }
    async clickTurfKing007TurfFertilizerwithDithiopyrLabelButton() {
        await this.turfking007turffertilizerwithdithiopyrlabelbutton.click();
    }
    async clickTurfKing007TurfFertilizerwithDithiopyrSDSButton() {
        await this.turfking007turffertilizerwithdithiopyrSDSbutton.click();
    }
    async clickTurfKing007TurfFertilizerwithDithiopyrSpecSheetButton() {
        await this.turfking007turffertilizerwithdithiopyrspecsheetbutton.click();
    }
}