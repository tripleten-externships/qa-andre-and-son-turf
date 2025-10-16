import { Locator, Page } from '@playwright/test';


export class TurfKingImidaLambdaPage {

    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingimidaLambdalearnmorebutton: Locator;
    readonly turfkingimidaLambdaheading: Locator;
    readonly turfkingimidaLambdapagedescription: Locator;
    readonly imidaLambdaimage: Locator;
    readonly imidaLambdaimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking007withimidaLambdatitle: Locator;
    readonly turfking007withimidaLambdalabelbutton: Locator;
    readonly turfking007withimidaLambdaSDSbutton: Locator;
    readonly turfking007withimidaLambdaspecsheetbutton: Locator;
    readonly turfking1200withimidaLambdatitle: Locator;
    readonly turfking1200withimidaLambdalabelbutton: Locator;
    readonly turfking1200withimidaLambdaSDSbutton: Locator;
    readonly turfking1200withimidaLambdaspecsheetbutton: Locator;
    readonly turfking1703withimidaLambdatitle: Locator;
    readonly turfking1703withimidaLambdalabelbutton: Locator;
    readonly turfking1703withimidaLambdaSDSbutton: Locator;
    readonly turfking1703withimidaLambdaspecsheetbutton: Locator;
    readonly turfking2107withimidaLambdatitle: Locator;
    readonly turfking2107withimidaLambdalabelbutton: Locator;
    readonly turfking2107withimidaLambdaSDSbutton: Locator;
    readonly turfking2107withimidaLambdaspecsheetbutton: Locator;
    readonly integratedvideoplayer: Locator;
    readonly integratedvideoplayeryoutubelink: Locator;
    readonly integratedvideoplayersharebutton : Locator;

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingimidaLambdalearnmorebutton = page.locator('#comp-klsvc7ly__item-klpofgk1').getByRole('link', { name: 'Learn More' });
        this.turfkingimidaLambdaheading = page.getByText('Turf King + Imida-Lambda');
        this.turfkingimidaLambdapagedescription = page.getByText('Imida Lambda is an insecticide');
        this.imidaLambdaimage = page.getByRole('img', { name: 'Wet grass' });
        this.imidaLambdaimagealttext = page.getByAltText('Wet grass');
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking007withimidaLambdatitle = page.getByText('Turf King 0-0-7 with Imida-Lambda');
        this.turfking007withimidaLambdalabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Imida .' }).getByLabel('Label');
        this.turfking007withimidaLambdaSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Imida .' }).getByLabel('SDS');
        this.turfking007withimidaLambdaspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with Imida .' }).getByLabel('Spec Sheet');
        this.turfking1200withimidaLambdatitle = page.getByText('Turf King 12-0-0 with Imida .');
        this.turfking1200withimidaLambdalabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 12-0-0 with Imida .' }).getByLabel('Label');
        this.turfking1200withimidaLambdaSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 12-0-0 with Imida .' }).getByLabel('SDS');
        this.turfking1200withimidaLambdaspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 12-0-0 with Imida .' }).getByLabel('Spec Sheet');
        this.turfking1703withimidaLambdatitle = page.getByText('Turf King 17-0-3 with Imida .');
        this.turfking1703withimidaLambdalabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 17-0-3 with Imida .' }).getByLabel('Label');
        this.turfking1703withimidaLambdaSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 17-0-3 with Imida .' }).getByLabel('SDS');
        this.turfking1703withimidaLambdaspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 17-0-3 with Imida .' }).getByLabel('Spec Sheet');
        this.turfking2107withimidaLambdatitle = page.getByText('Turf King 21-0-7 with Imida .');
        this.turfking2107withimidaLambdalabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 21-0-7 with Imida .' }).getByLabel('Label');
        this.turfking2107withimidaLambdaSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 21-0-7 with Imida .' }).getByLabel('SDS');
        this.turfking2107withimidaLambdaspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 21-0-7 with Imida .' }).getByLabel('Spec Sheet');
        this.integratedvideoplayer = page.locator('iframe[title*="Imida"]').contentFrame().locator('video');
        this.integratedvideoplayeryoutubelink = page.locator('#comp-kmctlbje1').getByRole('link', { name: 'YouTube' });
        this.integratedvideoplayersharebutton = page.locator('#comp-kmctlbje1').getByRole('button', { name: 'Share' });
    }
    async clickTurfProductsLink() {
        await this.turfProductsTitle.click();
        await this.page.waitForLoadState('networkidle');
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

    async clickTurfking007() {
        await this.turfking007withimidaLambdalabelbutton.click();
    }
    async clickTurfKing007withImidaLambdaSDSButton() {
        await this.turfking007withimidaLambdaSDSbutton.click();
    }
    async clickTurfKing007withImidaLambdaSpecSheetButton() {
        await this.turfking007withimidaLambdaspecsheetbutton.click();
    }
    async clickTurfKing1200withImidaLambdaLabelButton() {
        await this.turfking1200withimidaLambdalabelbutton.click();
    }
    async clickTurfKing1200withImidaLambdaSDSButton() {
        await this.turfking1200withimidaLambdaSDSbutton.click();
    }
    async clickTurfKing1200withImidaLambdaSpecSheetButton() {
        await this.turfking1200withimidaLambdaspecsheetbutton.click();  
    }
    async clickTurfKing1703withImidaLambdaLabelButton() {
        await this.turfking1703withimidaLambdalabelbutton.click();
    }
    async clickTurfKing1703withImidaLambdaSDSButton() {
        await this.turfking1703withimidaLambdaSDSbutton.click();
    }
    async clickTurfKing1703withImidaLambdaSpecSheetButton() {
        await this.turfking1703withimidaLambdaspecsheetbutton.click();
    }
    async clickTurfKing2107withImidaLambdaLabelButton() {
        await this.turfking2107withimidaLambdalabelbutton.click();
    }
    async clickTurfKing2107withImidaLambdaSDSButton() {
        await this.turfking2107withimidaLambdaSDSbutton.click();
    }
    async clickTurfKing2107withImidaLambdaSpecSheetButton() {
        await this.turfking2107withimidaLambdaspecsheetbutton.click();
    }
    async clickIntegratedVideoPlayerShareButton() {
        await this.integratedvideoplayersharebutton.click();
    }   
    async playIntegratedVideoPlayer() {
        await this.integratedvideoplayer.click();
    }   
}
