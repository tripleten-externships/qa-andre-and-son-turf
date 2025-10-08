import { Locator, Page } from "@playwright/test";

export class AquaAidPage {
    readonly page: Page;
    readonly aquaaidBackGroundImageAltText: Locator;
    readonly aquaaidTitle: Locator;
    readonly aquaaidText: Locator;
    readonly aquaaidExcaliburTitle: Locator;
    readonly aquaaidExcaliburText: Locator;
    readonly aaExcaliburSalesSheetButton: Locator;
    readonly aquaaidAquaAidTitle: Locator;
    readonly aquaaidAquaAidText: Locator;
    readonly aaAquaAidSalesSheetButton: Locator;
    readonly aquaaidAquiferTitle: Locator;
    readonly aquaaidAquiferText: Locator;
    readonly aaAquiferSalesSheetButton: Locator;
    readonly aquaaidAquaRootTitle: Locator;
    readonly aquaaidAquaRootText: Locator;
    readonly aaAquaRootSalesSheetButton: Locator;
    readonly aquaaidOarsTitle: Locator;
    readonly aquaaidOarsText: Locator;
    readonly aaOarsSalesSheetButton: Locator;
    readonly aquaaidAQMTitle: Locator;
    readonly aquaaidAQMText: Locator;
    readonly aaAQMSalesSheetButton: Locator;
    readonly aquaaidAQAACTitle: Locator;
    readonly aquaaidAQAACText: Locator;
    readonly aaAQAACSalesSheetButton: Locator;
    readonly aquaaidConduit90Title: Locator;
    readonly aquaaidConduit90Text: Locator;
    readonly aaConduit90SalesSheetButton: Locator;
    readonly aquaaidFWYISPTitle: Locator;
    readonly aquaaidFWYISPText: Locator;
    readonly aaFWYISPSalesSheetButton: Locator;
    readonly aquaaidOARSPsTitle: Locator;
    readonly aquaaidOARSPsText: Locator;
    readonly aaOARSPsSalesSheetButton: Locator;
    readonly aquaaidOARSHsTitle: Locator;
    readonly aquaaidOARSHsText: Locator;
    readonly aaOARSHsSalesSheetButton: Locator;
    readonly aquaaidAquaRoot2Title: Locator;
    readonly aquaaidAquaRoot2Text: Locator;
    readonly aaAquaRoot2SalesSheetButton: Locator;
    readonly aquaaidRecoverTitle: Locator;
    readonly aquaaidRecoverText: Locator;
    readonly aaRecoverSalesSheetButton: Locator;
    readonly aquaaidHydra30PlusTitle: Locator;
    readonly aquaaidHydra30PlusText: Locator;
    readonly aaHydra30PlusSalesSheetButton: Locator;
    readonly aquaaidPBS150Title: Locator;
    readonly aquaaidPBS150Text: Locator;
    readonly aaPBS150SalesSheetButton: Locator;
    readonly aquaaidReDEWceTitle: Locator;
    readonly aquaaidReDEWceText: Locator;
    readonly aaReDEWceSalesSheetButton: Locator;

    constructor(page: Page){
        this.page=page;
        this.aquaaidBackGroundImageAltText=page.getByAltText('Wet grass');
        this.aquaaidTitle=page.getByText('AQUA-AID', { exact: true });
        this.aquaaidText=page.getByText('Hot, dry, and windy weather');
        this.aquaaidExcaliburTitle=page.getByText('Excalibur');
        this.aquaaidExcaliburText=page.locator('//p[normalize-space()="Soil Surfactant"]');   
        this.aaExcaliburSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(0);
        this.aquaaidAquaAidTitle=page.getByText('Aqua-Aid', { exact: true });
        this.aquaaidAquaAidText=page.locator('(//p[normalize-space()="Penetration"])[1]');
        this.aaAquaAidSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(1);
        this.aquaaidAquiferTitle=page.getByText('Aquifer');
        this.aquaaidAquiferText=page.locator('(//p[normalize-space()="Hydration"])[1]');
        this.aaAquiferSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(2);
        this.aquaaidAquaRootTitle=page.getByText('Aqua-Root').first();
        this.aquaaidAquaRootText=page.locator('//p[normalize-space()="Humic Acid Nutrient Chelation pellet"]');
        this.aaAquaRootSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(3);
        this.aquaaidOarsTitle=page.getByText('Oars', { exact: true });
        this.aquaaidOarsText=page.locator('(//p[normalize-space()="Hydration"])[2]');
        this.aaOarsSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(4);
        this.aquaaidAQMTitle=page.getByText('AQM');
        this.aquaaidAQMText=page.locator('//p[normalize-space()="Root producing enhanced kelp pellet"]');
        this.aaAQMSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(5);
        this.aquaaidAQAACTitle=page.getByText('AQAAC');
        this.aquaaidAQAACText=page.locator('(//p[normalize-space()="Hydration"])[3]');
        this.aaAQAACSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(6);
        this.aquaaidConduit90Title=page.getByText('Conduit 90', { exact: true });
        this.aquaaidConduit90Text=page.locator('(//p[normalize-space()="Hydration"])[4]');
        this.aaConduit90SalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(7);
        this.aquaaidFWYISPTitle=page.getByText('FWY-ISP', { exact: true });
        this.aquaaidFWYISPText=page.locator('(//p[normalize-space()="Penetration"])[2]');
        this.aaFWYISPSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(8);
        this.aquaaidOARSPsTitle=page.getByText('OARS-Ps', { exact: true });
        this.aquaaidOARSPsText=page.locator('(//p[normalize-space()="Branched Corrective"])[1]');
        this.aaOARSPsSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(9);
        this.aquaaidOARSHsTitle=page.getByText('OARS -Hs', { exact: true });
        this.aquaaidOARSHsText=page.locator('(//p[normalize-space()="Branched Corrective"])[2]');
        this.aaOARSHsSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(10);
        this.aquaaidAquaRoot2Title=page.getByText('Aqua-Root').nth(1);
        this.aquaaidAquaRoot2Text=page.locator('(//p[normalize-space()="Repair & Root"])[1]');
        this.aaAquaRoot2SalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(11);
        this.aquaaidRecoverTitle=page.getByText('Recover', { exact: true });
        this.aquaaidRecoverText=page.locator('(//p[normalize-space()="Repair & Root"])[2]');
        this.aaRecoverSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(12);
        this.aquaaidHydra30PlusTitle=page.getByText('Hydra-30 Plus', { exact: true });
        this.aquaaidHydra30PlusText=page.locator('(//p[normalize-space()="Branched Hydration"])[1]');
        this.aaHydra30PlusSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(13);
        this.aquaaidPBS150Title=page.getByText('PBS 150', { exact: true });
        this.aquaaidPBS150Text=page.locator('(//p[normalize-space()="Branched Hydration"])[2]');
        this.aaPBS150SalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(14);
        this.aquaaidReDEWceTitle=page.getByText('ReDEWce', { exact: true });
        this.aquaaidReDEWceText=page.locator('//p[normalize-space()="Specialty"]');
        this.aaReDEWceSalesSheetButton=page.getByRole('link', { name: 'Sales Sheet' }).nth(15);
    }

    async clickAAExcaliburSalesSheetButton(){
        await this.aaExcaliburSalesSheetButton.click();
    }
    async clickAAAquaAidSalesSheetButton(){
        await this.aaAquaAidSalesSheetButton.click();
    }
    async clickAAAquiferSalesSheetButton(){
        await this.aaAquiferSalesSheetButton.click();
    }
    async clickAAAquaRootSalesSheetButton(){
        await this.aaAquaRootSalesSheetButton.click();
    }
    async clickAAOarsSalesSheetButton(){
        await this.aaOarsSalesSheetButton.click();
    }
    async clickAAAQMSalesSheetButton(){
        await this.aaAQMSalesSheetButton.click();
    }
    async clickAAAAQAACSalesSheetButton(){
        await this.aaAQAACSalesSheetButton.click();
    }
    async clickAAConduit90SalesSheetButton(){
        await this.aaConduit90SalesSheetButton.click();
    }
    async clickAAFWYISPSalesSheetButton(){
        await this.aaFWYISPSalesSheetButton.click();
    }
    async clickAAOARSPsSalesSheetButton(){
        await this.aaOARSPsSalesSheetButton.click();
    }
    async clickAAOARSHsSalesSheetButton(){
        await this.aaOARSHsSalesSheetButton.click();
    }
    async clickAAAquaRoot2SalesSheetButton(){
        await this.aaAquaRoot2SalesSheetButton.click();
    }
    async clickAARecoverSalesSheetButton(){
        await this.aaRecoverSalesSheetButton.click();
    }
    async clickAAHydra30PlusSalesSheetButton(){
        await this.aaHydra30PlusSalesSheetButton.click();
    }
    async clickAAPBS150SalesSheetButton(){
        await this.aaPBS150SalesSheetButton.click();
    }
    async clickAAReDEWceSalesSheetButton(){
        await this.aaReDEWceSalesSheetButton.click();
    }
}