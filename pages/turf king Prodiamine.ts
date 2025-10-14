import { Locator, Page } from '@playwright/test';

export class TurfKingProdiaminePage {
    static getByRole(arg0: string, arg1: { name: string; }): any {
    }
    readonly page: Page;

    readonly turfkingprodiaminetitle: Locator;
    readonly turfkingprodiaminedescription: Locator;
    readonly turfkingprodiaminelearnmorebutton: Locator;
    readonly wetgrassimagealttext: Locator;
    readonly spreadersettingbutton: Locator;
    
    // Turf King 15-0-3 with .20% Prodiamine
    readonly turfking1503withprodiamine: Locator;
    readonly turfking1503withprodiaminelabelbutton: Locator;
    readonly turfking1503withprodiaminesdsbutton: Locator;
    readonly turfking1503withprodiaminespecsheetbutton: Locator;
    
    // Turf King 19-0-6 with .29% Prodiamine
    readonly turfking1906withprodiamine: Locator;
    readonly turfking1906withprodiaminelabelbutton: Locator;
    readonly turfking1906withprodiaminesdsbutton: Locator;
    readonly turfking1906withprodiaminespecsheetbutton: Locator;
    
    // Turf King 0-0-7 with .37% Prodiamine
    readonly turfking007withprodiamine: Locator;
    readonly turfking007withprodiaminelabelbutton: Locator;
    readonly turfking007withprodiaminesdsbutton: Locator;
    readonly turfking007withprodiaminespecsheetbutton: Locator;
    
    // Turf King 13-0-0 with .37% Prodiamine
    readonly turfking1300withprodiamine: Locator;
    readonly turfking1300withprodiaminelabelbutton: Locator;
    readonly turfking1300withprodiaminesdsbutton: Locator;
    readonly turfking1300withprodiaminespecsheetbutton: Locator;
    
    // Turf King 18-0-4 with .37% Prodiamine
    readonly turfking1804withprodiamine: Locator;
    readonly turfking1804withprodiaminelabelbutton: Locator;
    readonly turfking1804withprodiaminesdsbutton: Locator;
    readonly turfking1804withprodiaminespecsheetbutton: Locator;

    //Turf King 0-0-7 with .42% Prodiamine
    readonly turfking007with42prodiamine: Locator;
    readonly turfking007with42prodiaminelabelbutton: Locator;
    readonly turfking007with42prodiaminesdsbutton: Locator;
    readonly turfking007with42prodiaminespecsheetbutton: Locator;

    //Turf king 15-0-0 with .42% Prodiamine
    readonly turfking1500with42prodiamine: Locator;
    readonly turfking1500with42prodiaminelabelbutton: Locator;
    readonly turfking1500with42prodiaminesdsbutton: Locator;
    readonly turfking1500with42prodiaminespecsheetbutton: Locator;

    //Turf king 18-0-3 with .42% Prodiamine
    readonly turfking1803with42prodiamine: Locator;
    readonly turfking1803with42prodiaminelabelbutton: Locator
    readonly turfking1803with42prodiaminesdsbutton: Locator;
    readonly turfking1803with42prodiaminespecsheetbutton: Locator;

    //Turf King 0-0-7 with .58% Prodiamine
    readonly turfking007with58prodiamine: Locator
    readonly turfking007with58prodiaminelabelbutton: Locator;
    readonly turfking007with58prodiaminesdsbutton: Locator;
    readonly turfking007with58prodiaminespecsheetbutton: Locator;       

    //Turf King 15-0-0 with .58% Prodiamine
    readonly turfking1500with58prodiamine: Locator;
    readonly turfking1500with58prodiaminelabelbutton: Locator
    readonly turfking1500with58prodiaminesdsbutton: Locator;
    readonly turfking1500with58prodiaminespecsheetbutton: Locator;

    //Turf King 18-0-0 with .58% Prodiamine
    readonly turfking1800with58prodiamine: Locator;
    readonly turfking1800with58prodiaminelabelbutton: Locator
    readonly turfking1800with58prodiaminesdsbutton: Locator;
    readonly turfking1800with58prodiaminespecsheetbutton: Locator;


    constructor(page: Page) {
        this.page = page;
        
        // Page content
        this.turfkingprodiaminetitle = page.getByRole('heading', { name: 'Turf King + Prodiamine' });
        this.turfkingprodiaminedescription = page.getByText('Prodiamine is a pre-emergence');
        this.turfkingprodiaminelearnmorebutton = page.locator('text=Turf King + Prodiamine').getByRole('link', { name: 'Learn More' });
        this.wetgrassimagealttext = page.locator('img[alt*="grass"]');
        this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
        
        // Turf King 15-0-3 with .20% Prodiamine
        this.turfking1503withprodiamine = page.getByText('Turf King 15-0-3 with .20% Prodiamine');
        this.turfking1503withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3' }).getByRole('link', { name: 'Label' });
        this.turfking1503withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3' }).getByRole('link', { name: 'SDS' });
        this.turfking1503withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3' }).getByRole('link', { name: 'Spec Sheet' });
        
        // Turf King 19-0-6 with .29% Prodiamine
        this.turfking1906withprodiamine = page.getByText('Turf King 19-0-6 with .29% Prodiamine');
        this.turfking1906withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6' }).getByRole('link', { name: 'Label' });
        this.turfking1906withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6' }).getByRole('link', { name: 'SDS' });
        this.turfking1906withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6' }).getByRole('link', { name: 'Spec Sheet' });
        
        // Turf King 0-0-7 with .37% Prodiamine
        this.turfking007withprodiamine = page.getByText('Turf King 0-0-7 with .37% Prodiamine');
        this.turfking007withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7' }).getByRole('link', { name: 'Label' });
        this.turfking007withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7' }).getByRole('link', { name: 'SDS' });
        this.turfking007withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7' }).getByRole('link', { name: 'Spec Sheet' });
        
        // Turf King 13-0-0 with .37% Prodiamine
        this.turfking1300withprodiamine = page.getByText('Turf King 13-0-0 with .37% Prodiamine');
        this.turfking1300withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 13-0-0' }).getByRole('link', { name: 'Label' });
        this.turfking1300withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 13-0-0' }).getByRole('link', { name: 'SDS' });
        this.turfking1300withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 13-0-0' }).getByRole('link', { name: 'Spec Sheet' });
        
        // Turf King 18-0-4 with .37% Prodiamine
        this.turfking1804withprodiamine = page.getByText('Turf King 18-0-4 with .37% Prodiamine');
        this.turfking1804withprodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-4' }).getByRole('link', { name: 'Label' });
        this.turfking1804withprodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-4' }).getByRole('link', { name: 'SDS' });
        this.turfking1804withprodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-4' }).getByRole('link', { name: 'Spec Sheet' });

        //Turf King 0-0-7 with .42% Prodiamine
        this.turfking007with42prodiamine = page.getByText('Turf King 0-0-7 with .42% Prodiamine');
        this.turfking007with42prodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7' }).getByRole('link', { name: 'Label' });
        this.turfking007with42prodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7' }).getByRole('link', { name: 'SDS' });
        this.turfking007with42prodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7' }).getByRole('link', { name: 'Spec Sheet' });  

        //Turf king 15-0-0 with .42% Prodiamine
        this.turfking1500with42prodiamine = page.getByText('Turf King 15-0-0 with .42% Prodiamine');
        this.turfking1500with42prodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-0' }).getByRole('link', { name: 'Label' });
        this.turfking1500with42prodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-0' }).getByRole('link', { name: 'SDS' });
        this.turfking1500with42prodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-0' }).getByRole('link', { name: 'Spec Sheet' });    

        //Turf king 18-0-3 with .42% Prodiamine
        this.turfking1803with42prodiamine = page.getByText('Turf King 18-0-3 with .42% Prodiamine');
        this.turfking1803with42prodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-3' }).getByRole('link', { name: 'Label' });
        this.turfking1803with42prodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-3' }).getByRole('link', { name: 'SDS' });
        this.turfking1803with42prodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-3' }).getByRole('link', { name: 'Spec Sheet' });    

        //Turf King 0-0-7 with .58% Prodiamine
        this.turfking007with58prodiamine = page.getByText('Turf King 0-0-7 with .58% Prodiamine');
        this.turfking007with58prodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7' }).getByRole('link', { name: 'Label' });
        this.turfking007with58prodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7' }).getByRole('link', { name: 'SDS' });
        this.turfking007with58prodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 0-0-7' }).getByRole('link', { name: 'Spec Sheet' });  

        //Turf King 15-0-0 with .58% Prodiamine
        this.turfking1500with58prodiamine = page.getByText('Turf King 15-0-0 with .58% Prodiamine');
        this.turfking1500with58prodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-0' }).getByRole('link', { name: 'Label' });
        this.turfking1500with58prodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-0' }).getByRole('link', { name: 'SDS' });
        this.turfking1500with58prodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-0' }).getByRole('link', { name: 'Spec Sheet' });

        //Turf King 18-0-0 with .58% Prodiamine
        this.turfking1800with58prodiamine = page.getByText('Turf King 18-0-0 with .58% Prodiamine');
        this.turfking1800with58prodiaminelabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-0' }).getByRole('link', { name: 'Label' });
        this.turfking1800with58prodiaminesdsbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-0' }).getByRole('link', { name: 'SDS' });
        this.turfking1800with58prodiaminespecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 18-0-0' }).getByRole('link', { name: 'Spec Sheet' });

    }
    async goto(path = '/') {
        await this.page.goto(path);

    }
    async clickTurfKingProdiamineLearnMoreButton() {
        await this.turfkingprodiaminelearnmorebutton.click();
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

}