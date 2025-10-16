import { Locator, Page } from '@playwright/test';

export class turfkingEscalade {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingescaladelearnmorebutton: Locator;
    readonly turfkingescalade: Locator;
    readonly turfkingescaladepagedescription: Locator;
    readonly turfkingescaladeimage: Locator;
    readonly turfkingescaladealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking007withescalade: Locator;
    readonly turfking007withescaladelabelbutton: Locator;
    readonly turfking007withescaladeSDSbutton: Locator;
    readonly turfking007withescaladespecsheetbutton: Locator;
    readonly turfking1505withescalade: Locator;
    readonly turfking1505withescaladelabelbutton: Locator;
    readonly turfking1505withescaladeSDSbutton: Locator;
    readonly turfking1505withescaladespecsheetbutton: Locator;
    readonly turfking1906withescalade: Locator;
    readonly turfking1906withescaladelabelbutton: Locator;
    readonly turfking1906withescaladeSDSbutton: Locator;
    readonly turfking1906withescaladespecsheetbutton: Locator;
    readonly turfkingwithescaladeintegratedvideoplayer: Locator;
    readonly turfkingwithescaladeyoutubevideolink: Locator;
    readonly escaladeandturfkingvideoplaybutton: Locator;
    readonly escaladeandturfkingvideopausebutton: Locator;
    readonly turfkingwithescaladevideosharebutton: Locator;
    readonly turfkingwithescaladenextbutton: Locator;
    readonly turfkingwithescaladepreviousbutton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingescaladelearnmorebutton = page.locator('#comp-klsvc7ly__item-kes5qvil').getByRole('link', { name: 'Learn More' });
        this.turfkingescalade = page.getByText('Turf King + Escalade');
        this.turfkingescaladepagedescription = page.getByText('Escalade is a post-emergent');
        this.turfkingescaladeimage = page.getByRole('img', { name: 'Wet grass' });
        this.turfkingescaladealttext = page.getByAltText('Escalade product');
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking007withescalade = page.getByText('Turf King 0-0-7 with Escalade');
        this.turfking007withescaladelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with' }).getByLabel('Label');
        this.turfking007withescaladeSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with' }).getByLabel('SDS');
        this.turfking007withescaladespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with' }).getByLabel('Spec Sheet');
        this.turfking1505withescalade = page.getByText('Turf King 15-0-5 with Escalade');
        this.turfking1505withescaladelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-5 with' }).getByLabel('Label');
        this.turfking1505withescaladeSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-5 with' }).getByLabel('SDS');
        this.turfking1505withescaladespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-5 with' }).getByLabel('Spec Sheet');
        this.turfking1906withescalade = page.getByText('Turf King 19-0-6 with Escalade');
        this.turfking1906withescaladelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with' }).getByLabel('Label');
        this.turfking1906withescaladeSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with' }).getByLabel('SDS');
        this.turfking1906withescaladespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with' }).getByLabel('Spec Sheet');
        this.turfkingwithescaladeintegratedvideoplayer = page.locator('iframe[title="Escalade & Turf King Fertilizer"]').contentFrame().locator('video');
        this.turfkingwithescaladeyoutubevideolink = page.locator('iframe[title="Escalade & Turf King Fertilizer"]').contentFrame().getByRole('link', { name: 'Escalade & Turf King' });
        this.escaladeandturfkingvideoplaybutton = page.locator('iframe[title="Escalade & Turf King Fertilizer"]').contentFrame().locator('button[aria-label="Play (k)"]');
        this.escaladeandturfkingvideopausebutton = page.locator('iframe[title="Escalade & Turf King Fertilizer"]').contentFrame().locator('button[aria-label="Pause (k)"]');
        this.turfkingwithescaladevideosharebutton = page.locator('iframe[title="Escalade & Turf King Fertilizer"]').contentFrame().getByRole('button', { name: 'Share' });
        this.turfkingwithescaladenextbutton = page.locator('iframe[title="Escalade & Turf King Fertilizer"]').contentFrame().locator('button[aria-label="Next (→)"]');
        this.turfkingwithescaladepreviousbutton = page.locator('iframe[title="Escalade & Turf King Fertilizer"]').contentFrame().getByRole('button', { name: 'Previous' })

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
    async clickTurfKing007withEscaladeLabelButton() {
        await this.turfking007withescaladelabelbutton.click();
    }
    async clickTurfKing007withEscaladeSDSButton() {
        await this.turfking007withescaladeSDSbutton.click();
    }
    async clickTurfKing007withEscaladeSpecSheetButton() {
        await this.turfking007withescaladespecsheetbutton.click();
    }
    async clickTurfKing1505withEscaladeLabelButton() {
        await this.turfking1505withescaladelabelbutton.click();
    }
    async clickTurfKing1505withEscaladeSDSButton() {
        await this.turfking1505withescaladeSDSbutton.click();
    }
    async clickTurfKing1505withEscaladeSpecSheetButton() {
        await this.turfking1505withescaladespecsheetbutton.click();
    }
    async clickTurfKing1906withEscaladeLabelButton() {
        await this.turfking1906withescaladelabelbutton.click();
    }
    async clickTurfKing1906withEscaladeSDSButton() {
        await this.turfking1906withescaladeSDSbutton.click();
    }
    async clickTurfKing1906withEscaladeSpecSheetButton() {
        await this.turfking1906withescaladespecsheetbutton.click();
    }
    async clickTurfKingwithEscaladeYouTubeVideoLink() {
        await this.turfkingwithescaladeyoutubevideolink.click();
    }
    async clickEscaladeandTurfKingVideoPlayButton() {
        await this.escaladeandturfkingvideoplaybutton.click();
    }
    async clickEscaladeandTurfKingVideoPauseButton() {
        await this.escaladeandturfkingvideopausebutton.click();
    }
    async clickTurfKingwithEscaladeVideoShareButton() {
        await this.turfkingwithescaladevideosharebutton.click();
    }
    async clickTurfKingwithEscaladeNextButton() {
        await this.turfkingwithescaladenextbutton.click();
    }
    async clickTurfKingwithEscaladePreviousButton() {
        await this.turfkingwithescaladepreviousbutton.click();
    }
}