import { Locator, Page } from "@playwright/test";

export class PlantFoodPage{ 
    readonly page: Page;
    readonly plantFoodBackGroundImageAltText: Locator;
    readonly plantFoodTitle: Locator;
    readonly plantFoodText: Locator;
    readonly plantFoodpHUSIONAcidTitle: Locator;
    readonly plantFoodpHUSIONAcidText: Locator;
    readonly pfPHALearnMoreButton: Locator;
    readonly plantFoodpHusonGypsumMiniTitle: Locator;
    readonly plantFoodpHusonGypsumMiniText: Locator;
    readonly pfPHGMLearnMoreButton: Locator;
    readonly plantFoodSiliKTitle: Locator;
    readonly plantFoodSiliKText: Locator;
    readonly pfSKLearnMoreButton: Locator;
    readonly plantFoodSugarCalTitle: Locator;
    readonly plantFoodSugarCalText: Locator;
    readonly pfSCLearnMoreButton: Locator;
    readonly plantFoodZinc7Title: Locator;
    readonly plantFoodZinc7Text: Locator;
    readonly pfZ7LearnMoreButton: Locator; 
    readonly plantFoodToteHoseMeterUnitTitle: Locator;
    readonly plantFoodToteHoseMeterUnitText: Locator;
    readonly pfTHMULearnMoreButton: Locator;
    readonly plantFoodToteHoseUnitTitle: Locator;
    readonly plantFoodToteHoseUnitText: Locator;
    readonly pfTHULearnMoreButton: Locator;
    readonly plantFoodAlphaMatTitle: Locator;
    readonly plantFoodAlphaMatText: Locator;
    readonly pfAMLearnMoreButton: Locator;
    readonly plantFood0025Title: Locator;
    readonly plantFood0025Text: Locator;
    readonly pf0025LearnMoreButton: Locator;
    readonly plantFood101010Title: Locator;
    readonly plantFood101010Text: Locator;
    readonly pf101010LearnMoreButton: Locator;
    readonly plantFood10340Title: Locator;
    readonly plantFood10340Text: Locator;
    readonly pf10340LearnMoreButton: Locator;
    readonly plantFood1046Title: Locator;
    readonly plantFood1046Text: Locator;
    readonly pf1046LearnMoreButton: Locator;
    readonly plantFood12012Title: Locator;
    readonly plantFood12012Text: Locator;
    readonly pf12012LearnMoreButton: Locator;
    readonly plantFood12312Title: Locator;
    readonly plantFood12312Text: Locator;
    readonly pf12312LearnMoreButton: Locator;
    readonly plantFood160725SRNTitle: Locator;
    readonly plantFood160725SRNText: Locator;
    readonly pf160725SRNLearnMoreButton: Locator;
    readonly plantFood160850SRNTitle: Locator;
    readonly plantFood160850SRNText: Locator;
    readonly pf160850SRNLearnMoreButton: Locator
    readonly plantFood162725SRNTitle: Locator;
    readonly plantFood162725SRNText: Locator;
    readonly pf162725SRNLearnMoreButton: Locator;
    readonly plantFood1628Title: Locator;
    readonly plantFood1628Text: Locator;
    readonly pf1628LearnMoreButton: Locator
    readonly plantFood1645Title: Locator;
    readonly plantFood1645Text: Locator;
    readonly pf1645LearnMoreButton: Locator;
    readonly plantFood1833Title: Locator;
    readonly plantFood1833Text: Locator;
    readonly pf1833LearnMoreButton: Locator;
    readonly plantFood1834SuperTitle: Locator;
    readonly plantFood1834SuperText: Locator;
    readonly pf1834SuperLearnMoreButton: Locator;
    readonly plantFood183650SRNTitle: Locator;
    readonly plantFood183650SRNText: Locator;
    readonly pf183650SRNLearnMoreButton: Locator
    readonly plantFood2000Title: Locator;
    readonly plantFood2000Text: Locator;
    readonly pf2000LearnMoreButton: Locator;
    readonly plantFood2003LawnTitle: Locator;
    readonly plantFood2003LawnText: Locator;
    readonly pf2003LawnLearnMoreButton: Locator;
    readonly plantFood2033SRNFETitle: Locator;
    readonly plantFood2033SRNFEText: Locator;
    readonly pf2033SRNFELearnMoreButton: Locator;
    readonly plantFood2800Title: Locator;
    readonly plantFood2800Text: Locator;
    readonly pf2800LearnMoreButton: Locator;
    readonly plantFood2900Title: Locator;
    readonly plantFood2900Text: Locator;
    readonly pf2900LearnMoreButton: Locator;
    readonly plantFood300060SRNTitle: Locator;
    readonly plantFood300060SRNText: Locator;
    readonly pf300060SRNLearnMoreButton: Locator
    readonly plantFood300090MUTitle: Locator;
    readonly plantFood300090MUText: Locator;
    readonly pf300090MULearnMoreButton: Locator;
    readonly plantFood3000UANTitle: Locator;
    readonly plantFood3000UANText: Locator;
    readonly pf3000UALearnMoreButton: Locator
    readonly plantFood42022DKPXTitle: Locator;
    readonly plantFood42022DKPXText: Locator;
    readonly pf42022DKPXLearnMoreButton: Locator
    readonly plantFood5IronTitle: Locator;
    readonly plantFood5IronText: Locator;
    readonly pf5ILearnMoreButton: Locator;
    readonly plantFood6IronTitle: Locator;
    readonly plantFood6IronText: Locator;
    readonly pf6ILearnMoreButton: Locator
    readonly plantFood700SulfurTitle: Locator;
    readonly plantFood700SulfurText: Locator;
    readonly pf700SLearnMoreButton: Locator
    readonly plantFood707Title: Locator;
    readonly plantFood707Text: Locator;
    readonly pf707LearnMoreButton: Locator;
    readonly plantFood8275Title: Locator;
    readonly plantFood8275Text: Locator;
    readonly pf8275LearnMoreButton: Locator;
    readonly plantFoodAdamsEarthTitle: Locator;
    readonly plantFoodAdamsEarthText: Locator;
    readonly pfAELearnMoreButton: Locator;
    readonly plantFoodAmmoniumThiosulfateTitle: Locator;
    readonly plantFoodAmmoniumThiosulfateText: Locator;
    readonly pfATLearnMoreButton: Locator;
    readonly plantFoodBlackstrapMolassTitle: Locator;
    readonly plantFoodBlackstrapMolassText: Locator;
    readonly pfBMLearnMoreButton: Locator;
    readonly plantFoodBoron10Title: Locator;
    readonly plantFoodBoron10Text: Locator;
    readonly pfB10LearnMoreButton: Locator;
    readonly plantFoodCalciumNitrateTitle: Locator;
    readonly plantFoodCalciumNitrateText: Locator;
    readonly pfCNLearnMoreButton: Locator;
    readonly plantFoodFloThruAPLUSTitle: Locator;
    readonly plantFoodFloThruAPLUSText: Locator;
    readonly pfFTALearnMoreButton: Locator;
    readonly plantFoodHandPumpTitle: Locator;
    readonly plantFoodHandPumpText: Locator;
    readonly pfHPLearnMoreButton: Locator;
    readonly plantFoodHumicAcid70Title: Locator;
    readonly plantFoodHumicAcid70Text: Locator;
    readonly pfHA70LearnMoreButton: Locator;
    readonly plantFoodHydrationAPLUSTitle: Locator;
    readonly plantFoodHydrationAPLUSText: Locator;
    readonly pfHAPLearnMoreButton: Locator;
    readonly plantFoodImpulseTitle: Locator;
    readonly plantFoodImpulseText: Locator;
    readonly pfILearnMoreButton: Locator;
    readonly plantFoodInfiltrateKTitle: Locator;
    readonly plantFoodInfiltrateKText: Locator;
    readonly pfIKLearnMoreButton: Locator;
    readonly plantFoodKCSPlus0018Title: Locator;
    readonly plantFoodKCSPlus0018Text: Locator;
    readonly pfKCSP0018LearnMoreButton: Locator;
    readonly plantFoodKelpIronTitle: Locator;
    readonly plantFoodKelpIronText: Locator;
    readonly pfKILearnMoreButton: Locator;
    readonly plantFoodKelPlant101Title: Locator;
    readonly plantFoodKelPlant101Text: Locator;
    readonly pfKP101LearnMoreButton: Locator;

    constructor(page: Page){
        this.page=page;
        this.plantFoodBackGroundImageAltText=page.getByAltText('Wet grass');
        this.plantFoodTitle=page.getByRole('heading', { name: 'Plant Food', exact: true });
        this.plantFoodText=page.getByText('Achieve superior turfgrass');
        this.plantFoodpHUSIONAcidTitle=page.getByText('Plant Food pHUSION Acid');
        this.plantFoodpHUSIONAcidText=page.locator('(//p[normalize-space()="Water Treatment"])[1]');
        this.pfPHALearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(0);
        this.plantFoodpHusonGypsumMiniTitle=page.getByText('Plant Food pHuson Gypsum Mini');
        this.plantFoodpHusonGypsumMiniText=page.locator('(//p[normalize-space()="Soil Amendments"])[1]'); 
        this.pfPHGMLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(1);
        this.plantFoodSiliKTitle=page.getByText('Plant Food Sili-K');
        this.plantFoodSiliKText=page.locator('(//p[normalize-space()="Micronutrient"])[1]');
        this.pfSKLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(2);
        this.plantFoodSugarCalTitle=page.getByText('Plant Food Sugar Cal');
        this.plantFoodSugarCalText=page.locator('(//p[normalize-space()="Secondary Nutrient"])[1]');
        this.pfSCLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(3);
        this.plantFoodZinc7Title=page.getByText('Plant Food Zinc 7%');
        this.plantFoodZinc7Text=page.locator('(//p[normalize-space()="Micronutrient"])[2]');
        this.pfZ7LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(4);
        this.plantFoodToteHoseMeterUnitTitle=page.getByText('Plant Food Tote Hose Meter');
        this.plantFoodToteHoseMeterUnitText=page.locator('//p[normalize-space()="Flow-Meter"]');
        this.pfTHMULearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(5);
        this.plantFoodToteHoseUnitTitle=page.getByText('Plant Food Tote Hose Unit');
        this.plantFoodToteHoseUnitText=page.locator('//p[normalize-space()="Hose Assembly"]');
        this.pfTHULearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(6);
        this.plantFoodAlphaMatTitle=page.getByText('Plant Food - Alpha Mat');
        this.plantFoodAlphaMatText=page.locator('(//p[normalize-space()="Water Treatment"])[2]');
        this.pfAMLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(7);
        this.plantFood0025Title=page.getByRole('heading', {name: '0-0-25'});
        this.plantFood0025Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[1]');
        this.pf0025LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(8);
        this.plantFood101010Title=page.getByRole('heading', {name: '10-10-10'});
        this.plantFood101010Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[2]');
        this.pf101010LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(9);
        this.plantFood10340Title=page.getByRole('heading', {name: '10-34-0'});
        this.plantFood10340Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[3]');
        this.pf10340LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(10);
        this.plantFood1046Title=page.getByRole('heading', {name: '10-4-6'});
        this.plantFood1046Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[4]');
        this.pf1046LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(11);
        this.plantFood12012Title=page.getByRole('heading', {name: '12-0-12'});
        this.plantFood12012Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[5]');
        this.pf12012LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(12);
        this.plantFood12312Title=page.getByRole('heading', {name: '12-3-12'});
        this.plantFood12312Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[6]');
        this.pf12312LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(13);
        this.plantFood160725SRNTitle=page.getByText('Plant Food 16-0-7 25% SRN');
        this.plantFood160725SRNText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[7]');
        this.pf160725SRNLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(14);
        this.plantFood160850SRNTitle=page.getByText('Plant Food 16-0-8 50% SRN');
        this.plantFood160850SRNText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[8]');
        this.pf160850SRNLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(15);
        this.plantFood162725SRNTitle=page.getByText('Plant Food 16-2-7 25% SRN');
        this.plantFood162725SRNText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[9]');
        this.pf162725SRNLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(16);
        this.plantFood1628Title=page.getByRole('heading', {name: '16-2-8'});
        this.plantFood1628Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[10]');
        this.pf1628LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(17);
        this.plantFood1645Title=page.getByRole('heading', {name: '16-4-5'});
        this.plantFood1645Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[11]');
        this.pf1645LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(18);
        this.plantFood1833Title=page.getByRole('heading', {name: '18-3-3'});
        this.plantFood1833Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[12]');
        this.pf1833LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(19);
        this.plantFood1834SuperTitle=page.getByRole('heading', {name: '18-3-4 Super'});
        this.plantFood1834SuperText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[13]');
        this.pf1834SuperLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(20);
        this.plantFood183650SRNTitle=page.getByText('Plant Food 18-3-6 50% SRN');
        this.plantFood183650SRNText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[14]');
        this.pf183650SRNLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(21);
        this.plantFood2000Title=page.getByRole('heading', {name: '20-0-0'});
        this.plantFood2000Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[15]');
        this.pf2000LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(22);
        this.plantFood2003LawnTitle=page.getByRole('heading', {name: '20-0-3 Lawn'});
        this.plantFood2003LawnText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[16]');
        this.pf2003LawnLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(23);
        this.plantFood2033SRNFETitle=page.getByText('Plant Food 20-3-3 SRN & FE');
        this.plantFood2033SRNFEText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[17]');
        this.pf2033SRNFELearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(24);
        this.plantFood2800Title=page.getByRole('heading', {name: '28-0-0'});
        this.plantFood2800Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[18]');
        this.pf2800LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(25);
        this.plantFood2900Title=page.getByRole('heading', {name: '29-0-0'});
        this.plantFood2900Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[19]');
        this.pf2900LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(26);
        this.plantFood300060SRNTitle=page.getByText('Plant Food 30-0-0 60 SRN');
        this.plantFood300060SRNText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[20]');
        this.pf300060SRNLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(27);
        this.plantFood300090MUTitle=page.getByText('Plant Food 30-0-0 90% MU');
        this.plantFood300090MUText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[21]');
        this.pf300090MULearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(28);
        this.plantFood3000UANTitle=page.getByRole('heading', {name: '30-0-0 UAN'});
        //getByText('Plant Food 30-0-0 UAN')
        this.plantFood3000UANText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[22]');
        this.pf3000UALearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(29);
        this.plantFood42022DKPXTitle=page.getByText('Plant Food 4-20-22 DKP X');
        this.plantFood42022DKPXText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[23]');
        this.pf42022DKPXLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(30);
        this.plantFood5IronTitle=page.getByRole('heading', {name: '5% Iron'});
        this.plantFood5IronText=page.locator('(//p[normalize-space()="Micronutrient"])[3]');
        this.pf5ILearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(31);
        this.plantFood6IronTitle=page.getByText('Plant Food 6 Iron');
        this.plantFood6IronText=page.locator('(//p[normalize-space()="Micronutrient"])[4]');
        this.pf6ILearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(32);
        this.plantFood700SulfurTitle=page.getByRole('heading', {name: '7-0-0 Sulfur'});
        this.plantFood700SulfurText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[24]');
        this.pf700SLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(33);
        this.plantFood707Title=page.getByRole('heading', {name: '7-0-7'});
        this.plantFood707Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[25]');
        this.pf707LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(34);
        this.plantFood8275Title=page.getByText("Plant Food 8-27-5");
        this.plantFood8275Text=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[26]');
        this.pf8275LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(35);
        this.plantFoodAdamsEarthTitle=page.getByRole('heading', {name: "Adam's Earth"});
        this.plantFoodAdamsEarthText=page.locator('(//p[normalize-space()="Biostimulants"])[1]');
        this.pfAELearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(36);
        this.plantFoodAmmoniumThiosulfateTitle=page.getByRole('heading', {name: 'Ammonium Thiosulfate'});
        this.plantFoodAmmoniumThiosulfateText=page.locator('(//p[normalize-space()="Secondary Nutrient"])[2]');
        this.pfATLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(37);
        this.plantFoodBlackstrapMolassTitle=page.getByRole('heading', {name: 'Blackstrap Molass'});
        this.plantFoodBlackstrapMolassText=page.locator('(//p[normalize-space()="Biostimulants"])[2]');
        this.pfBMLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(38);
        this.plantFoodBoron10Title=page.getByRole('heading', {name: 'Boron 10'});
        this.plantFoodBoron10Text=page.locator('(//p[normalize-space()="Micronutrient"])[5]');
        this.pfB10LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(39);
        this.plantFoodCalciumNitrateTitle=page.getByRole('heading', {name: 'Calcium Nitrate'});
        this.plantFoodCalciumNitrateText=page.locator('(//p[normalize-space()="Secondary Nutrient"])[3]');
        this.pfCNLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(40);
        this.plantFoodFloThruAPLUSTitle=page.getByText('Plant Food Flo Thru A-PLUS');
        this.plantFoodFloThruAPLUSText=page.locator('(//p[normalize-space()="Wetting Agent"])[1]');
        this.pfFTALearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(41);
        this.plantFoodHandPumpTitle=page.getByRole('heading', {name: 'Hand Pump'});
        this.plantFoodHandPumpText=page.locator('//p[normalize-space()="Drum Pump"]');
        this.pfHPLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(42);
        this.plantFoodHumicAcid70Title=page.getByRole('heading', {name: 'Humic Acid 70'});
        this.plantFoodHumicAcid70Text=page.locator('(//p[normalize-space()="Soil Amendments"])[2]');
        this.pfHA70LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(43);
        this.plantFoodHydrationAPLUSTitle=page.getByRole('heading', {name: 'Hydration A-PLUS'});
        this.plantFoodHydrationAPLUSText=page.locator('(//p[normalize-space()="Wetting Agent"])[2]');
        this.pfHAPLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(44);
        this.plantFoodImpulseTitle=page.getByRole('heading', {name: 'Impulse'});
        this.plantFoodImpulseText=page.locator('(//p[normalize-space()="Biostimulants"])[3]');
        this.pfILearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(45);
        this.plantFoodInfiltrateKTitle=page.getByText('Plant Food Infiltrate-K');
        this.plantFoodInfiltrateKText=page.locator('(//p[normalize-space()="Liquid Fertilizer"])[27]');
        this.pfIKLearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(46);
        this.plantFoodKCSPlus0018Title=page.getByRole('heading', {name: 'KCS Plus 0-0-18'});
        this.plantFoodKCSPlus0018Text=page.locator('(//p[normalize-space()="Soil Amendments"])[3]');
        this.pfKCSP0018LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(47);
        this.plantFoodKelpIronTitle=page.getByRole('heading', {name: 'Kelp Iron'});
        this.plantFoodKelpIronText=page.locator('(//p[normalize-space()="Micronutrient"])[6]');
        this.pfKILearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(48);
        this.plantFoodKelPlant101Title=page.getByText('Plant Food KelPlant 1-0-');
        this.plantFoodKelPlant101Text=page.locator('(//p[normalize-space()="Biostimulants"])[4]');
        this.pfKP101LearnMoreButton=page.getByRole('link', { name: 'Learn More', exact: true }).nth(49);
    }
    async clickPFPHALearnMoreButton(){
        await this.pfPHALearnMoreButton.click();
    }
    async clickPFPHGMLearnMoreButton(){
        await this.pfPHGMLearnMoreButton.click();
    }
    async clickPFSKLearnMoreButton(){
        await this.pfSKLearnMoreButton.click();
    }
    async clickPFSCLearnMoreButton(){
        await this.pfSCLearnMoreButton.click();
    }
    async clickPFZ7LearnMoreButton(){
        await this.pfZ7LearnMoreButton.click();
    }
    async clickPFTHMULearnMoreButton(){
        await this.pfTHMULearnMoreButton.click();
    }
    async clickPFTHULearnMoreButton(){
        await this.pfTHULearnMoreButton.click();
    }
    async clickPFAMLearnMoreButton(){
        await this.pfAMLearnMoreButton.click();
    }
    async clickPF0025LearnMoreButton(){
        await this.pf0025LearnMoreButton.click();
    }
    async clickPF101010LearnMoreButton(){
        await this.pf101010LearnMoreButton.click();
    }
    async clickPF10340LearnMoreButton(){
        await this.pf10340LearnMoreButton.click();
    }
    async clickPF1046LearnMoreButton(){
        await this.pf1046LearnMoreButton.click();
    }
    async clickPF12012LearnMoreButton(){
        await this.pf12012LearnMoreButton.click();
    }
    async clickPF12312LearnMoreButton(){
        await this.pf12312LearnMoreButton.click();
    }
    async clickPF160725SRNLearnMoreButton(){
        await this.pf160725SRNLearnMoreButton.click();
    }
    async clickPF160850SRNLearnMoreButton(){
        await this.pf160850SRNLearnMoreButton.click();
    }
    async clickPF162725SRNLearnMoreButton(){
        await this.pf162725SRNLearnMoreButton.click();
    }
    async clickPF1628LearnMoreButton(){
        await this.pf1628LearnMoreButton.click();
    }
    async clickPF1645LearnMoreButton(){
        await this.pf1645LearnMoreButton.click();
    }
    async clickPF1833LearnMoreButton(){
        await this.pf1833LearnMoreButton.click();
    }
    async clickPF1834SuperLearnMoreButton(){
        await this.pf1834SuperLearnMoreButton.click();
    }
    async clickPF183650SRNLearnMoreButton(){
        await this.pf183650SRNLearnMoreButton.click();
    }
    async clickPF2000LearnMoreButton(){
        await this.pf2000LearnMoreButton.click();
    }
    async clickPF2003LawnLearnMoreButton(){
        await this.pf2003LawnLearnMoreButton.click();
    }
    async clickPF2033SRNFELearnMoreButton(){
        await this.pf2033SRNFELearnMoreButton.click();
    }
    async clickPF2800LearnMoreButton(){
        await this.pf2800LearnMoreButton.click();
    }
    async clickPF2900LearnMoreButton(){
        await this.pf2900LearnMoreButton.click();
    }
    async clickPF300060SRNLearnMoreButton(){
        await this.pf300060SRNLearnMoreButton.click();
    }
    async clickPF300090MULearnMoreButton(){
        await this.pf300090MULearnMoreButton.click();
    }
    async clickPF3000UALearnMoreButton(){
        await this.pf3000UALearnMoreButton.click();
    }
    async clickPF42022DKPXLearnMoreButton(){
        await this.pf42022DKPXLearnMoreButton.click();
    }
    async clickPF5ILearnMoreButton(){
        await this.pf5ILearnMoreButton.click();
    }
    async clickPF6ILearnMoreButton(){
        await this.pf6ILearnMoreButton.click();
    }
    async clickPF700SLearnMoreButton(){
        await this.pf700SLearnMoreButton.click();
    }
    async clickPF707LearnMoreButton(){
        await this.pf707LearnMoreButton.click();
    }
    async clickPF8275LearnMoreButton(){
        await this.pf8275LearnMoreButton.click();
    }
    async clickPFAELearnMoreButton(){
        await this.pfAELearnMoreButton.click();
    }
    async clickPFATLearnMoreButton(){
        await this.pfATLearnMoreButton.click();
    }
    async clickPFBMLearnMoreButton(){
        await this.pfBMLearnMoreButton.click();
    }
    async clickPFB10LearnMoreButton(){
        await this.pfB10LearnMoreButton.click();
    }
    async clickPFCNLearnMoreButton(){
        await this.pfCNLearnMoreButton.click();
    }
    async clickPFFTALearnMoreButton(){
        await this.pfFTALearnMoreButton.click();
    }
    async clickPFHPLearnMoreButton(){
        await this.pfHPLearnMoreButton.click();
    }
    async clickPFHA70LearnMoreButton(){
        await this.pfHA70LearnMoreButton.click();
    }
    async clickPFHAPLearnMoreButton(){
        await this.pfHAPLearnMoreButton.click();
    }
    async clickPFILearnMoreButton(){
        await this.pfILearnMoreButton.click();
    }
    async clickPFIKLearnMoreButton(){
        await this.pfIKLearnMoreButton.click();
    }
    async clickPFKCSP0018LearnMoreButton(){
        await this.pfKCSP0018LearnMoreButton.click();
    }
    async clickPFKILearnMoreButton(){
        await this.pfKILearnMoreButton.click();
    }
    async clickPFKP101LearnMoreButton(){
        await this.pfKP101LearnMoreButton.click();
    }
}
