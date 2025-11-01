import { Locator, Page } from '@playwright/test';

export class TurfKingBifenthrinPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingbifenthrinlearnmorebutton: Locator;
    readonly turfkingbifenthrinheading: Locator;
    readonly turfkingbifenthrinpagedescription: Locator;
    readonly bifenthrinimage: Locator;
    readonly bifenthrinimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking007withbifenthrin: Locator;
    readonly turfking007withbifenthrinlabelbutton: Locator;
    readonly turfking007withbifenthrinSDSbutton: Locator;
    readonly turfking007withbifenthrinspecsheetbutton: Locator;
    readonly turfking1605withbifenthrin: Locator;
    readonly turfking1605withbifenthrinlabelbutton: Locator;
    readonly turfking1605withbifenthrinSDSbutton: Locator;
    readonly turfking1605withbifenthrinspecsheetbutton: Locator;
    



    

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingbifenthrinlearnmorebutton = page.locator('#comp-klsvc7ly__item-klponhaa > .uUxqWY');
        this.turfkingbifenthrinheading = page.getByText('Turf King + Bifenthrin');
        this.turfkingbifenthrinpagedescription = page.getByText('Bifenthrin is an insecticide');
        this.bifenthrinimage = page.getByRole('img', { name: 'Wet grass' });
        this.bifenthrinimagealttext = page.getByRole('img', { name: 'Wet grass' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking007withbifenthrin = page.getByText('Turf King 0-0-7 with .069%');
        this.turfking007withbifenthrinlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with .069%' }).getByLabel('Label');
        this.turfking007withbifenthrinSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with .069%' }).getByLabel('SDS');
        this.turfking007withbifenthrinspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with .069%' }).getByLabel('Spec Sheet');
        this.turfking1605withbifenthrin = page.getByText('Turf King 16-0-5 with .069%');
        this.turfking1605withbifenthrinlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 16-0-5 with .069%' }).getByLabel('Label');
        this.turfking1605withbifenthrinSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 16-0-5 with .069%' }).getByLabel('SDS');
        this.turfking1605withbifenthrinspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 16-0-5 with .069%' }).getByLabel('Spec Sheet');

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
    async clickTurfKing007withBifenthrinLabelButton() {
        await this.turfking007withbifenthrinlabelbutton.click();
    }

    async clickTurfKing007withBifenthrinSDSButton() {
        await this.turfking007withbifenthrinSDSbutton.click();
    }
    async clickTurfKing007withBifenthrinSpecSheetButton() {
        await this.turfking007withbifenthrinspecsheetbutton.click();
    }
    async clickTurfKing1605withBifenthrinLabelButton() {
        await this.turfking1605withbifenthrinlabelbutton.click();
    }
    async clickTurfKing1605withBifenthrinSDSButton() {
        await this.turfking1605withbifenthrinSDSbutton.click();
    }
    async clickTurfKing1605withBifenthrinSpecSheetButton() {
        await this.turfking1605withbifenthrinspecsheetbutton.click();
    }
}