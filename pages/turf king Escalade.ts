import { Locator, Page } from '@playwright/test';

export class TurfKingEscaladePage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingescaladelearnmorebutton: Locator;
    readonly turfkingescaladeheading: Locator;
    readonly turfkingescaladepagedescription: Locator;
    readonly escaladeimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking1503withescaladetitle: Locator;
    readonly turfking1503withescaladelabelbutton: Locator;
    readonly turfking1503withescaladeSDSbutton: Locator;
    readonly turfking1503withescaladespecsheetbutton: Locator;
    readonly turfking1906withescaladetitle: Locator;
    readonly turfking1906withescaladelabelbutton: Locator;
    readonly turfking1906withescaladeSDSbutton: Locator;
    readonly turfking1906withescaladespecsheetbutton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingescaladelearnmorebutton = page.locator('#comp-klsvc7ly__item-keuwv4td').getByRole('link', { name: 'Learn More' });
        this.turfkingescaladeheading = page.getByText('Turf King + Escalade');
        this.turfkingescaladepagedescription = page.getByText('Escalade is an effective');
        this.escaladeimagealttext = page.getByRole('img', { name: 'Escalade product' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking1503withescaladetitle = page.getByText('Turf King 15-0-3 with Escalade');
        this.turfking1503withescaladelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Escalade' }).getByLabel('Label');
        this.turfking1503withescaladeSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Escalade' }).getByLabel('SDS');
        this.turfking1503withescaladespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with Escalade' }).getByLabel('Spec Sheet');
        this.turfking1906withescaladetitle = page.getByText('Turf King 19-0-6 with Escalade');
        this.turfking1906withescaladelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Escalade' }).getByLabel('Label');
        this.turfking1906withescaladeSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Escalade' }).getByLabel('SDS');
        this.turfking1906withescaladespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with Escalade' }).getByLabel('Spec Sheet');
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

    async clickTurfKingEscaladeLearnMoreButton() {
        await this.turfkingescaladelearnmorebutton.click();
    }

    async clickSpreadersettingButton() {
        await this.spreadersettingbutton.click();
    }

    async clickTurfKing1503withEscaladeLabelButton() {
        await this.turfking1503withescaladelabelbutton.click();
    }

    async clickTurfKing1503withEscaladeSDSButton() {
        await this.turfking1503withescaladeSDSbutton.click();
    }

    async clickTurfKing1503withEscaladeSpecSheetButton() {
        await this.turfking1503withescaladespecsheetbutton.click();
    }

    async goBackToPreviousPage() {
        await this.page.goBack();
        await this.page.waitForLoadState('networkidle');
    }
}
