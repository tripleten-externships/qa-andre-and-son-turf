import { Locator, Page } from '@playwright/test';


export class TurfKingImidaLambdaPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingimidaLambdalearnmorebutton: Locator;
    readonly turfkingimidaLambdaheading: Locator;
    readonly turfkingimidaLambdapagedescription: Locator;
    readonly imidaLambdaimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking1503withimidaLambdatitle: Locator;
    readonly turfking1503withimidaLambdalabelbutton: Locator;
    readonly turfking1503withimidaLambdaSDSbutton: Locator;
    readonly turfking1503withimidaLambdaspecsheetbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingimidaLambdalearnmorebutton = page.locator('#comp-klsvc7ly__item-keuwv4te').getByRole('link', { name: 'Learn More' });
        this.turfkingimidaLambdaheading = page.getByText('Turf King + Imida-Lambda');
        this.turfkingimidaLambdapagedescription = page.getByText('Imida-Lambda is a systemic');
        this.imidaLambdaimagealttext = page.getByRole('img', { name: 'Imida-Lambda product' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking1503withimidaLambdatitle = page.getByText('Turf King 15-0-3 with Imida-Lambda');
        this.turfking1503withimidaLambdalabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Imida-Lambda' }).getByLabel('Label');
        this.turfking1503withimidaLambdaSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Imida-Lambda' }).getByLabel('SDS');
        this.turfking1503withimidaLambdaspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Imida-Lambda' }).getByLabel('Spec Sheet');
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

    async clickTurfKingImidaLambdaLearnMoreButton() {
        await this.turfkingimidaLambdalearnmorebutton.click();
    }

    async clickSpreadersettingButton() {
        await this.spreadersettingbutton.click();
    }

    async clickTurfKing1503withImidaLambdaLabelButton() {
        await this.turfking1503withimidaLambdalabelbutton.click();
    }

    async clickTurfKing1503withImidaLambdaSDSButton() {
        await this.turfking1503withimidaLambdaSDSbutton.click();
    }

    async clickTurfKing1503withImidaLambdaSpecSheetButton() {
        await this.turfking1503withimidaLambdaspecsheetbutton.click();
    }

    async goBackToPreviousPage() {
        await this.page.goBack();
        await this.page.waitForLoadState('networkidle');
    }
}
