import { Locator, Page } from '@playwright/test';


export class turfkingprodiaminepage {
    static turfking1503withprodiaminelabelbutton(turfking1503withprodiaminelabelbutton: any) {
        throw new Error('Method not implemented.');
    }
    static clickTurfKing1906withProdiamineSpecSheetButton(): any {
        throw new Error('Method not implemented.');
    }
    readonly page: Page;
    readonly turfProductsTitle: Locator;
    readonly combinationProductLearnMoreButton: Locator;
    readonly turfkingprodiaminelearnmorebutton: Locator;
    readonly turfkingprodiamineheading: Locator;
    readonly turfkingprodiaminepagedescription: Locator;
    readonly wetgrassimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    readonly turfking1503withprodiaminetitle: Locator;
    readonly turfking1503withprodiaminelabelbutton: Locator;
    readonly turfking1503withprodiaminesdsbutton: Locator;
    readonly turfking1503withprodiaminespecsheetbutton: Locator;
    readonly turfking1906withprodiaminetitle: Locator;
    readonly turfking1906withprodiaminelabelbutton: Locator;
    readonly turfking1906withprodiaminesdsbutton: Locator;
    readonly turfking1906withprodiaminespecsheetbutton: Locator;
    readonly turfking007withprodiaminetitle: Locator;
    readonly turfking007withprodiaminelabelbutton: Locator;
    readonly turfking007withprodiaminesdsbutton: Locator;
    readonly turfking007withprodiaminespecsheetbutton: Locator;
    readonly turfking1300withprodiaminetitle: Locator;
    readonly turfking1300withprodiaminelabelbutton: Locator;
    readonly turfking1300withprodiaminesdsbutton: Locator;
    readonly turfking1300withprodiaminespecsheetbutton: Locator;
    readonly turfking1804withprodiaminetitle: Locator;
    readonly turfking1804withprodiaminelabelbutton: Locator;
    readonly turfking1804withprodiaminesdsbutton: Locator;
    readonly turfking1804withprodiaminespecsheetbutton: Locator;
    readonly turfking007with42prodiaminetitle: Locator;
    readonly turfking007with42prodiaminelabelbutton: Locator;
    readonly turfking007with42prodiaminesdsbutton: Locator;
    readonly turfking007with42prodiaminespecsheetbutton: Locator;
    readonly turfking1500with42prodiaminetitle: Locator;
    readonly turfking1500with42prodiaminelabelbutton: Locator;
    readonly turfking1500with42prodiaminesdsbutton: Locator;
    readonly turfking1500with42prodiaminespecsheetbutton: Locator;
    readonly turfking1803with42prodiaminetitle: Locator;
    readonly turfking1803with42prodiaminelabelbutton: Locator;
    readonly turfking1803with42prodiaminesdsbutton: Locator;
    readonly turfking1803with42prodiaminespecsheetbutton: Locator;
    readonly turfking007with58prodiaminetitle: Locator;
    readonly turfking007with58prodiaminelabelbutton: Locator;
    readonly turfking007with58prodiaminesdsbutton: Locator;
    readonly turfking007with58prodiaminespecsheetbutton: Locator;       
    readonly turfking1500with58prodiaminetitle: Locator;
    readonly turfking1500with58prodiaminelabelbutton: Locator
    readonly turfking1500with58prodiaminesdsbutton: Locator;
    readonly turfking1500with58prodiaminespecsheetbutton: Locator;
    readonly turfking1800with58prodiaminetitle: Locator;
    readonly turfking1800with58prodiaminelabelbutton: Locator
    readonly turfking1800with58prodiaminesdsbutton: Locator;
    readonly turfking1800with58prodiaminespecsheetbutton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.turfkingprodiaminelearnmorebutton = page.locator('#comp-klsvc7ly__item-kes5qvaj').getByRole('link', { name: 'Learn More' });
        this.turfkingprodiamineheading = page.getByText('Turf King + Prodiamine');
        this.turfkingprodiaminepagedescription = page.getByText('Prodiamine is a pre-emergence');
        this.wetgrassimagealttext = page.getByRole('img', { name: 'Wet grass' });
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        this.turfking1503withprodiaminetitle = page.getByText('Turf King 15-0-3 with .20% Prodiamine');
        this.turfking1503withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20%' }).getByLabel('Label');
        this.turfking1503withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20%' }).getByLabel('SDS');
        this.turfking1503withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20%' }).getByLabel('Spec Sheet');
        this.turfking1906withprodiaminetitle = page.getByText('Turf King 19-0-6 with .29%');
        this.turfking1906withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with .29%' }).getByLabel('Label');
        this.turfking1906withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with .29%' }).getByLabel('SDS');
        this.turfking1906withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6 with .29%' }).getByLabel('Spec Sheet');
        this.turfking007withprodiaminetitle = page.getByText('Turf King 0-0-7 with .37%');
        this.turfking007withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with .37%' }).getByLabel('Label');
        this.turfking007withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with .37%' }).getByLabel('SDS');
        this.turfking007withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with .37%' }).getByLabel('Spec Sheet');
        this.turfking1300withprodiaminetitle = page.getByText('Turf King 13-0-0 with .37%');
        this.turfking1300withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 13-0-0 with .37%' }).getByLabel('Label');
        this.turfking1300withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 13-0-0 with .37%' }).getByLabel('SDS');
        this.turfking1300withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 13-0-0 with .37%' }).getByLabel('Spec Sheet');
        this.turfking1804withprodiaminetitle = page.getByText('Turf King 18-0-4 with .37%');
        this.turfking1804withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-4 with .37%' }).getByLabel('Label');
        this.turfking1804withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-4 with .37%' }).getByLabel('SDS');
        this.turfking1804withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-4 with .37%' }).getByLabel('Spec Sheet');
        this.turfking007with42prodiaminetitle = page.getByText('Turf King 0-0-7 with .42%');
        this.turfking007with42prodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with .42%' }).getByLabel('Label');
        this.turfking007with42prodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with .42%' }).getByLabel('SDS');
        this.turfking007with42prodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7 with .42%' }).getByLabel('Spec Sheet');
        this.turfking1500with42prodiaminetitle = page.getByText('Turf King 15-0-0 with .42%');
        this.turfking1500with42prodiaminelabelbutton = page.locator('#comp-kmpbyt3c__20e19126-7889-4d46-ab0c-49d24200ab46 > .uDW_Qe');
        this.turfking1500with42prodiaminesdsbutton = page.locator('#comp-kmpbyt3g3__20e19126-7889-4d46-ab0c-49d24200ab46 > .uDW_Qe');
        this.turfking1500with42prodiaminespecsheetbutton = page.locator('#comp-kni8moqa__20e19126-7889-4d46-ab0c-49d24200ab46 > .uDW_Qe');
        this.turfking1803with42prodiaminetitle = page.getByText('Turf King 18-0-3 with .42%');
        this.turfking1803with42prodiaminelabelbutton = page.locator('#comp-kmpbyt3c__4ea93c19-e8b7-4be8-a538-63a4f4e0b1d2 > .uDW_Qe');
        this.turfking1803with42prodiaminesdsbutton = page.locator('#comp-kmpbyt3g3__4ea93c19-e8b7-4be8-a538-63a4f4e0b1d2 > .uDW_Qe');
        this.turfking1803with42prodiaminespecsheetbutton = page.locator('#comp-kni8moqa__4ea93c19-e8b7-4be8-a538-63a4f4e0b1d2 > .uDW_Qe');
        this.turfking007with58prodiaminetitle = page.getByText('Turf King 0-0-7 with .58%');
        this.turfking007with58prodiaminelabelbutton = page.locator('#comp-kmpbyt3c__3398cc41-043e-4ffa-b14e-92aeeb641edc > .uDW_Qe');
        this.turfking007with58prodiaminesdsbutton = page.locator('#comp-kmpbyt3g3__3398cc41-043e-4ffa-b14e-92aeeb641edc > .uDW_Qe');
        this.turfking007with58prodiaminespecsheetbutton = page.locator('#comp-kni8moqa__3398cc41-043e-4ffa-b14e-92aeeb641edc > .uDW_Qe');
        this.turfking1500with58prodiaminetitle = page.getByText('Turf King 15-0-0 with .58%');
        this.turfking1500with58prodiaminelabelbutton = page.locator('#comp-kmpbyt3c__34ae3d43-1d56-4e33-83bc-52455cc80303 > .uDW_Qe');
        this.turfking1500with58prodiaminesdsbutton = page.locator('#comp-kmpbyt3g3__34ae3d43-1d56-4e33-83bc-52455cc80303 > .uDW_Qe');
        this.turfking1500with58prodiaminespecsheetbutton = page.locator('#comp-kni8moqa__34ae3d43-1d56-4e33-83bc-52455cc80303 > .uDW_Qe');
        this.turfking1800with58prodiaminetitle = page.getByText('Turf King 18-0-0 with .58%');
        this.turfking1800with58prodiaminelabelbutton = page.locator('#comp-kmpbyt3c__232ac3df-1363-4b40-84a2-f83dc6d948d9 > .uDW_Qe');
        this.turfking1800with58prodiaminesdsbutton = page.locator('#comp-kmpbyt3g3__232ac3df-1363-4b40-84a2-f83dc6d948d9 > .uDW_Qe');
        this.turfking1800with58prodiaminespecsheetbutton = page.locator('#comp-kni8moqa__232ac3df-1363-4b40-84a2-f83dc6d948d9 > .uDW_Qe');

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
    async clickturfkingprodiaminelearnmorebutton() {
        await this.turfkingprodiaminelearnmorebutton.click();
    }
    async verifyTurfKingProdiamineHeading() {
        await this.turfkingprodiamineheading.isVisible();
    }
    async verifyTurfKingProdiaminePageDescription() {
        await this.turfkingprodiaminepagedescription.isVisible();
    }
    async verifyWetGrassImageAltText() {
        await this.wetgrassimagealttext.isVisible();                                                     
    }
    
    async clickSpreadersettingButton() {
        await this.spreadersettingbutton.click();
    }
    async clickTurfKing1503withProdiaminelabelButton() {
        await this.turfking1503withprodiaminelabelbutton.click();
    }
    async clickTurfKing1503withProdiamineSDSButton() {
        await this.turfking1503withprodiaminesdsbutton.click();
    }
    async clickTurfKing1503withProdiamineSpecSheetButton() {
        await this.turfking1503withprodiaminespecsheetbutton.click();
    }
    async clickTurfKing1906withProdiaminelabelButton() {
        await this.turfking1906withprodiaminelabelbutton.click();
    }
    async clickTurfKing1906withProdiamineSDSButton() {
        await this.turfking1906withprodiaminesdsbutton.click();
    }
    async clickTurfKing1906withProdiamineSpecSheetButton() {
        await this.turfking1906withprodiaminespecsheetbutton.click();
    }
    async clickTurfKing007withProdiaminelabelButton() {
        await this.turfking007withprodiaminelabelbutton.click();
    }
    async clickTurfKing007withProdiamineSDSButton() {
        await this.turfking007withprodiaminesdsbutton.click();
    }
    async clickTurfKing007withProdiamineSpecSheetButton() {
        await this.turfking007withprodiaminespecsheetbutton.click();
    }
    async clickTurfKing1300withProdiaminelabelButton() {
        await this.turfking1300withprodiaminelabelbutton.click();
    }
    async clickTurfKing1300withProdiamineSDSButton() {
        await this.turfking1300withprodiaminesdsbutton.click();
    }
    async clickTurfKing1300withProdiamineSpecSheetButton() {
        await this.turfking1300withprodiaminespecsheetbutton.click();
    }
    async clickTurfKing1804withProdiaminelabelButton() {
        await this.turfking1804withprodiaminelabelbutton.click();
    }
    async clickTurfKing1804withProdiamineSDSButton() {
        await this.turfking1804withprodiaminesdsbutton.click();
    }
    async clickTurfKing1804withProdiamineSpecSheetButton() {
        await this.turfking1804withprodiaminespecsheetbutton.click();
    }
    async clickTurfKing007with42ProdiaminelabelButton() {
        await this.turfking007with42prodiaminelabelbutton.click();
    }
    async clickTurfKing007with42ProdiamineSDSButton() {
        await this.turfking007with42prodiaminesdsbutton.click();
    }
    async clickTurfKing007with42ProdiamineSpecSheetButton() {
        await this.turfking007with42prodiaminespecsheetbutton.click();
    }
    async clickTurfKing1500with42ProdiaminelabelButton() {
        await this.turfking1500with42prodiaminelabelbutton.click();
    }
    async clickTurfKing1500with42ProdiamineSDSButton() {
        await this.turfking1500with42prodiaminesdsbutton.click();
    }
    async clickTurfKing1500with42ProdiamineSpecSheetButton() {
        await this.turfking1500with42prodiaminespecsheetbutton.click();
    }
    async clickTurfKing1803with42ProdiaminelabelButton() {
        await this.turfking1803with42prodiaminelabelbutton.click();
    }
    async clickTurfKing1803with42ProdiamineSDSButton() {
        await this.turfking1803with42prodiaminesdsbutton.click();
    }
    async clickTurfKing1803with42ProdiamineSpecSheetButton() {
        await this.turfking1803with42prodiaminespecsheetbutton.click();
    }
    async clickTurfKing007with58ProdiaminelabelButton() {
        await this.turfking007with58prodiaminelabelbutton.click();
    }
    async clickTurfKing007with58ProdiamineSDSButton() {
        await this.turfking007with58prodiaminesdsbutton.click();
    }
    async clickTurfKing007with58ProdiamineSpecSheetButton() {
        await this.turfking007with58prodiaminespecsheetbutton.click();
    }
    async clickTurfKing1500with58ProdiaminelabelButton() {
        await this.turfking1500with58prodiaminelabelbutton.click();
    }
    async clickTurfKing1500with58ProdiamineSDSButton() {
        await this.turfking1500with58prodiaminesdsbutton.click();
    }
    async clickTurfKing1500with58ProdiamineSpecSheetButton() {
        await this.turfking1500with58prodiaminespecsheetbutton.click();
    }
    async clickTurfKing1800with58ProdiaminelabelButton() {
        await this.turfking1800with58prodiaminelabelbutton.click();
    }
    async clickTurfKing1800with58ProdiamineSDSButton() {
        await this.turfking1800with58prodiaminesdsbutton.click();
    }
    async clickTurfKing1800with58ProdiamineSpecSheetButton() {
        await this.turfking1800with58prodiaminespecsheetbutton.click();
    }
    async goBackToTurfKingProdiaminePage() {
        await this.page.goto('/turf-king-prodiamine/');
    }
    async goBackToPreviousPage() {
        await this.page.goBack();
        await this.page.waitForLoadState('networkidle');
    }

}