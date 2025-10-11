import { test, expect } from '@playwright/test';
import { TuftProductsPage } from '../pages/turfproducts';
import { LiquidFertilizersPage } from '../pages/liquidfertilizers';
import { PlantFoodPage } from '../pages/plantfood';

test.beforeEach(async ({ page }) => {
    //Go to home page
    await page.goto('/');
    //hover on "Turf Products" title
    const turfProductsPage = new TuftProductsPage(page);
    await turfProductsPage.hoverTurfProductsTitle();
    //click on "LIQUID FERTILIZER" link
    if (await turfProductsPage.liquidFertilizerLink.isVisible()) {
        await turfProductsPage.clickLiquidFertilizerLink();}
    //go directly to Liquid Fertilizer page if the above steps failed
    else { await page.goto('https://www.andreandson.com/liquid-fertilizer'); }
    //click on "Turf King Maxx Phite" Learn More button
    const liquidFertilizersPage = new LiquidFertilizersPage(page);
    await liquidFertilizersPage.clickPFLearnMoreButton();
});

test.describe('Plant Food page and all of it descriptions', () => {
//* Verify that the background in the "Plant Food" page has ALT text in DevTools
//* Verify that the title "Plant Food" and its description is visible and readable by user  
    test('verify "Plant Food" page title, description, and image', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that the backgorund image has ALT test
        await expect(plantFoodPage.plantFoodBackGroundImageAltText).toBeVisible();
        //assert that Plant Food title is visible
        await expect(plantFoodPage.plantFoodTitle).toBeVisible();
        //assert that Plant Food test is visible
        await expect(plantFoodPage.plantFoodText).toBeVisible();
    });
//* Verify that the box with "Plant Food pHUSION Acid" and its description is visible and readable by user
    test('Verify pHUSION Acid title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that pHUSION Acid title is visible
        await expect(plantFoodPage.plantFoodpHUSIONAcidTitle).toBeVisible();
        // assert that pHUSION Acid text is visible
        await expect(plantFoodPage.plantFoodpHUSIONAcidText).toBeVisible();
    });
//* Verify that the box with "Plant Food pHuson Gypsum Mini" and its description is visible and readable by user
    test('Verify pHuson Gypsum Mini title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that pHuson Gypsum Mini title is visible
        await expect(plantFoodPage.plantFoodpHusonGypsumMiniTitle).toBeVisible();
        //assert that pHuson Gypsum Mini text is visible
        await expect(plantFoodPage.plantFoodpHusonGypsumMiniText).toBeVisible();
    });
//* Verify that the box with "Plant Food Sili-K" and its description is visible and readable by user
    test('Verify Sili-K title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Sili-K title is visible
        await expect(plantFoodPage.plantFoodSiliKTitle).toBeVisible();
        //assert that Sili-K text is visible
        await expect(plantFoodPage.plantFoodSiliKText).toBeVisible();
    });

//* Verify that the box with "Plant Food Sugar Cal" and its description is visible and readable by user
    test('Verify Sugar Cal title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Sugar Cal title is visible
        await expect(plantFoodPage.plantFoodSugarCalTitle).toBeVisible();
        //assert that Sugar Cal text is visible
        await expect(plantFoodPage.plantFoodSugarCalText).toBeVisible();
    });
//* Verify that the box with "Plant Food Zinc 7%" and its description is visible and readable by user
    test('Verify Zinc 7% title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Zinc 7% title is visible
        await expect(plantFoodPage.plantFoodZinc7Title).toBeVisible();
        //assert that Zinc 7% text is visible
        await expect(plantFoodPage.plantFoodZinc7Text).toBeVisible();
    });
//* Verify that the box with "Plant Food Tote Hose Meter Unit" and its description is visible and readable by user
    test('Verify Tote Hose Meter Unit title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Tote Hose Meter Unit title is visible
        await expect(plantFoodPage.plantFoodToteHoseMeterUnitTitle).toBeVisible();
        //assert that Tote Hose Meter Unit text is visible
        await expect(plantFoodPage.plantFoodToteHoseMeterUnitText).toBeVisible();
    });
//* Verify that the box with "Plant Food Tote Hose Unit" and its description is visible and readable by user
    test('Verify Tote Hose Unit title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Tote Hose Unit title is visible
        await expect(plantFoodPage.plantFoodToteHoseUnitTitle).toBeVisible();
        //assert that Tote Hose Unit text is visible
        await expect(plantFoodPage.plantFoodToteHoseUnitText).toBeVisible();
    });
//* Verify that the box with "Plant Food Alpha Mat" and its description is visible and readable by user
    test('Verify Alpha Mat title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Alpha Mat title is visible
        await expect(plantFoodPage.plantFoodAlphaMatTitle).toBeVisible();
        //assert that Alpha Mat text is visible
        await expect(plantFoodPage.plantFoodAlphaMatText).toBeVisible();
    });
//* Verify that the box with "Plant Food 0-0-25" and its description is visible and readable by user
    test('Verify 0-0-25 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 0-0-25 title is visible
        await expect(plantFoodPage.plantFood0025Title).toBeVisible();
        //assert that 0-0-25 text is visible
        await expect(plantFoodPage.plantFood0025Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 10-10-10" and its description is visible and readable by user
    test('Verify 10-10-10 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 10-10-10 title is visible
        await expect(plantFoodPage.plantFood101010Title).toBeVisible();
        //assert that 10-10-10 text is visible
        await expect(plantFoodPage.plantFood101010Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 10-34-0" and its description is visible and readable by user
    test('Verify  title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 10-34-0 title is visible
        await expect(plantFoodPage.plantFood10340Title).toBeVisible();
        //assert that 10-34-0 text is visible
        await expect(plantFoodPage.plantFood10340Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 10-4-6" and its description is visible and readable by user
    test('Verify 10-4-6 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 10-4-6 title is visible
        await expect(plantFoodPage.plantFood1046Title).toBeVisible();
        //assert that 10-4-6 text is visible
        await expect(plantFoodPage.plantFood1046Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 12-0-12" and its description is visible and readable by user
    test('Verify 12-0-12 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 12-0-12 title is visible
        await expect(plantFoodPage.plantFood12012Title).toBeVisible();
        //assert that 12-0-12 text is visible
        await expect(plantFoodPage.plantFood12012Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 12-3-12" and its description is visible and readable by user
    test('Verify 12-3-12 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 12-3-12 title is visible
        await expect(plantFoodPage.plantFood12312Title).toBeVisible();
        //assert that 12-3-12 text is visible
        await expect(plantFoodPage.plantFood12312Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 16-0-7 25% SRN" and its description is visible and readable by user
    test('Verify 16-0-7 25% SRN title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 16-0-7 25% SRN title is visible
        await expect(plantFoodPage.plantFood160725SRNTitle).toBeVisible();
        //assert that 16-0-7 25% SRN text is visible
        await expect(plantFoodPage.plantFood160725SRNText).toBeVisible();
    });
//* Verify that the box with "Plant Food 16-0-8 50% SRN" and its description is visible and readable by user
    test('Verify 16-0-8 50% SRN title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 16-0-8 50% SRN title is visible
        await expect(plantFoodPage.plantFood160850SRNTitle).toBeVisible();
        //assert that 16-0-8 50% SRN text is visible
        await expect(plantFoodPage.plantFood160850SRNText).toBeVisible();
    });
//* Verify that the box with "Plant Food 16-2-7 25% SRN" and its description is visible and readable by user
    test('Verify 16-2-7 25% SRN title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 16-2-7 25% SRN title is visible
        await expect(plantFoodPage.plantFood162725SRNTitle).toBeVisible();
        //assert that 16-2-7 25% SRN text is visible
        await expect(plantFoodPage.plantFood162725SRNText).toBeVisible();
    });
//* Verify that the box with "Plant Food 16-2-8" and its description is visible and readable by user
    test('Verify 16-2-8 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 16-2-8 title is visible
        await expect(plantFoodPage.plantFood1628Title).toBeVisible();
        //assert that 16-2-8 text is visible
        await expect(plantFoodPage.plantFood1628Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 16-4-5" and its description is visible and readable by user
    test('Verify 16-4-5 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 16-4-5 title is visible
        await expect(plantFoodPage.plantFood1645Title).toBeVisible();
        //assert that 16-4-5 text is visible
        await expect(plantFoodPage.plantFood1645Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 18-3-3" and its description is visible and readable by user
    test('Verify 18-3-3 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 18-3-3 title is visible
        await expect(plantFoodPage.plantFood1833Title).toBeVisible();
        //assert that 18-3-3 text is visible
        await expect(plantFoodPage.plantFood1833Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 18-3-4 Super" and its description is visible and readable by user
    test('Verify 18-3-4 Super title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 18-3-4 Super title is visible
        await expect(plantFoodPage.plantFood1834SuperTitle).toBeVisible();
        //assert that 18-3-4 Super text is visible
        await expect(plantFoodPage.plantFood1834SuperText).toBeVisible();
    });
//* Verify that the box with "Plant Food 18-3-6 50% SRN" and its description is visible and readable by user
    test('Verify 18-3-6 50% SRN title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 18-3-6 50% SRN title is visible
        await expect(plantFoodPage.plantFood183650SRNTitle).toBeVisible();
        //assert that 18-3-6 50% SRN text is visible
        await expect(plantFoodPage.plantFood183650SRNText).toBeVisible();
    });
//* Verify that the box with "Plant Food 20-0-0" and its description is visible and readable by user
    test('Verify 20-0-0 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 20-0-0 title is visible
        await expect(plantFoodPage.plantFood2000Title).toBeVisible();
        //assert that 20-0-0 text is visible
        await expect(plantFoodPage.plantFood2000Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 20-0-3 Lawn" and its description is visible and readable by user
    test('Verify 20-0-3 Lawn title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 20-0-3 Lawn title is visible
        await expect(plantFoodPage.plantFood2003LawnTitle).toBeVisible();
        //assert that 20-0-3 Lawn text is visible
        await expect(plantFoodPage.plantFood2003LawnText).toBeVisible();
    });
//* Verify that the box with "Plant Food 20-3-3 SRN & FE" and its description is visible and readable by user
    test('Verify 20-3-3 SRN & FE title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 20-3-3 SRN & FE title is visible
        await expect(plantFoodPage.plantFood2033SRNFETitle).toBeVisible();
        //assert that 20-3-3 SRN & FE text is visible
        await expect(plantFoodPage.plantFood2033SRNFEText).toBeVisible();
    });
//* Verify that the box with "Plant Food 28-0-0" and its description is visible and readable by user
    test('Verify 28-0-0 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 28-0-0 title is visible
        await expect(plantFoodPage.plantFood2800Title).toBeVisible();
        //assert that 28-0-0 text is visible
        await expect(plantFoodPage.plantFood2800Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 29-0-0" and its description is visible and readable by user
    test('Verify 29-0-0 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 29-0-0 title is visible
        await expect(plantFoodPage.plantFood2900Title).toBeVisible();
        //assert that 29-0-0 text is visible
        await expect(plantFoodPage.plantFood2900Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 30-0-0 60 SRN" and its description is visible and readable by user
    test('Verify 30-0-0 60 SRN title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 30-0-0 60 SRN title is visible
        await expect(plantFoodPage.plantFood300060SRNTitle).toBeVisible();
        //assert that 30-0-0 60 SRN text is visible
        await expect(plantFoodPage.plantFood300060SRNText).toBeVisible();
    });
//* Verify that the box with "Plant Food 30-0-0 90% MU" and its description is visible and readable by user
    test('Verify 30-0-0 90% MU title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 30-0-0 90% MU title is visible
        await expect(plantFoodPage.plantFood300090MUTitle).toBeVisible();
        //assert that 30-0-0 90% MU text is visible
        await expect(plantFoodPage.plantFood300090MUText).toBeVisible();
    });
//* Verify that the box with "Plant Food 30-0-0 UAN" and its description is visible and readable by user
    test('Verify 30-0-0 UAN title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 30-0-0 UAN title is visible
        await expect(plantFoodPage.plantFood3000UANTitle).toBeVisible();
        //assert that 30-0-0 UAN text is visible
        await expect(plantFoodPage.plantFood3000UANText).toBeVisible();
    });
//* Verify that the box with "Plant Food 4-20-22 DKP X" and its description is visible and readable by user
    test('Verify 4-20-22 DKP X title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 4-20-22 DKP X title is visible
        await expect(plantFoodPage.plantFood42022DKPXTitle).toBeVisible();
        //assert that 4-20-22 DKP X text is visible
        await expect(plantFoodPage.plantFood42022DKPXText).toBeVisible();
    });
//* Verify that the box with "Plant Food 5% Iron" and its description is visible and readable by user
    test('Verify 5% Iron title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 5% Iron title is visible
        await expect(plantFoodPage.plantFood5IronTitle).toBeVisible();
        //assert that 5% Iron text is visible
        await expect(plantFoodPage.plantFood5IronText).toBeVisible();
    });
//* Verify that the box with "Plant Food 6 Iron" and its description is visible and readable by user
    test('Verify 6 Iron title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 6 Iron title is visible
        await expect(plantFoodPage.plantFood6IronTitle).toBeVisible();
        //assert that 6 Iron text is visible
        await expect(plantFoodPage.plantFood6IronText).toBeVisible();
    });
//* Verify that the box with "Plant Food 7-0-0 Sulfur" and its description is visible and readable by user
    test('Verify 7-0-0 Sulfur title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 7-0-0 Sulfur title is visible
        await expect(plantFoodPage.plantFood700SulfurTitle).toBeVisible();
        //assert that 7-0-0 Sulfur text is visible
        await expect(plantFoodPage.plantFood700SulfurText).toBeVisible();
    });
//* Verify that the box with "Plant Food 7-0-7" and its description is visible and readable by user
    test('Verify 7-0-7 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 7-0-7 title is visible
        await expect(plantFoodPage.plantFood707Title).toBeVisible();
        //assert that 7-0-7 text is visible
        await expect(plantFoodPage.plantFood707Text).toBeVisible();
    });
//* Verify that the box with "Plant Food 8-27-5" and its description is visible and readable by user
    test('Verify 8-27-5 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that 8-27-5 title is visible
        await expect(plantFoodPage.plantFood8275Title).toBeVisible();
        //assert that 8-27-5 text is visible
        await expect(plantFoodPage.plantFood8275Text).toBeVisible();
    });
//* Verify that the box with "Plant Food Adam's Earth" and its description is visible and readable by user
    test('Verify Adams Earth title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Adam's Earth title is visible
        await expect(plantFoodPage.plantFoodAdamsEarthTitle).toBeVisible();
        //assert that Adam's Earth text is visible
        await expect(plantFoodPage.plantFoodAdamsEarthText).toBeVisible();
    });
//* Verify that the box with "Plant Food Ammonium Thiosulfate" and its description is visible and readable by user
    test('Verify Ammonium Thiosulfate title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Ammonium Thiosulfate title is visible
        await expect(plantFoodPage.plantFoodAmmoniumThiosulfateTitle).toBeVisible();
        //assert that Ammonium Thiosulfate text is visible
        await expect(plantFoodPage.plantFoodAmmoniumThiosulfateText).toBeVisible();
    });
//* Verify that the box with "Plant Food Blackstrap Molass" and its description is visible and readable by user
    test('Verify Blackstrap Molass title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Blackstrap Molass title is visible
        await expect(plantFoodPage.plantFoodBlackstrapMolassTitle).toBeVisible();
        //assert that Blackstrap Molass text is visible
        await expect(plantFoodPage.plantFoodBlackstrapMolassText).toBeVisible();
    });
//* Verify that the box with "Plant Food Boron 10%" and its description is visible and readable by user
    test('Verify Boron 10% title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Boron 10% title is visible
        await expect(plantFoodPage.plantFoodBoron10Title).toBeVisible();
        //assert that Boron 10% text is visible
        await expect(plantFoodPage.plantFoodBoron10Text).toBeVisible();
    });
//*Verify that the box with "Plant Food Calcium Nitrate" and its description is visible and readable by user
    test('Verify Calcium Nitrate title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Calcium Nitrate title is visible
        await expect(plantFoodPage.plantFoodCalciumNitrateTitle).toBeVisible();
        //assert that Calcium Nitrate text is visible
        await expect(plantFoodPage.plantFoodCalciumNitrateText).toBeVisible();
    });
//* Verify that the box with "Plant Food Flo Thru A-PLUS" and its description is visible and readable by user
    test('Verify Flo Thru A-PLUS title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Flo Thru A-PLUS title is visible
        await expect(plantFoodPage.plantFoodFloThruAPLUSTitle).toBeVisible();
        //assert that Flo Thru A-PLUS text is visible
        await expect(plantFoodPage.plantFoodFloThruAPLUSText).toBeVisible();
    });
//* Verify that the box with "Plant Food Hand Pump" and its description is visible and readable by user
    test('Verify Hand Pump title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Hand Pump title is visible
        await expect(plantFoodPage.plantFoodHandPumpTitle).toBeVisible();
        //assert that Hand Pump text is visible
        await expect(plantFoodPage.plantFoodHandPumpText).toBeVisible();
    });
//* Verify that the box with "Plant Food Humic Acid 70%" and its description is visible and readable by user
    test('Verify Humic Acid 70% title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Humic Acid 70% title is visible
        await expect(plantFoodPage.plantFoodHumicAcid70Title).toBeVisible();
        //assert that Humic Acid 70% text is visible
        await expect(plantFoodPage.plantFoodHumicAcid70Text).toBeVisible();
    });
//* Verify that the box with "Plant Food Hydration A-PLUS" and its description is visible and readable by user
    test('Verify Hydration A-PLUS title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Hydration A-PLUS title is visible
        await expect(plantFoodPage.plantFoodHydrationAPLUSTitle).toBeVisible();
        //assert that Hydration A-PLUS text is visible
        await expect(plantFoodPage.plantFoodHydrationAPLUSText).toBeVisible();
    });
//* Verify that the box with "Plant Food Impulse" and its description is visible and readable by user
    test('Verify Impulse title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Impulse title is visible
        await expect(plantFoodPage.plantFoodImpulseTitle).toBeVisible();
        //assert that Impulse text is visible
        await expect(plantFoodPage.plantFoodImpulseText).toBeVisible();
    });
//* Verify that the box with "Plant Food Infiltrate-K" and its description is visible and readable by user
    test('Verify Infiltrate-K title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Infiltrate-K title is visible
        await expect(plantFoodPage.plantFoodInfiltrateKTitle).toBeVisible();
        //assert that Infiltrate-K text is visible
        await expect(plantFoodPage.plantFoodInfiltrateKText).toBeVisible();
    });
//* Verify that the box with "Plant Food KCS Plus 0-0-18" and its description is visible and readable by user
    test('Verify KCS Plus 0-0-18 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that KCS Plus 0-0-18 title is visible
        await expect(plantFoodPage.plantFoodKCSPlus0018Title).toBeVisible();
        //assert that KCS Plus 0-0-18 text is visible
        await expect(plantFoodPage.plantFoodKCSPlus0018Text).toBeVisible();
    });
//* Verify that the box with "Plant Food Kelp Iron" and its description is visible and readable by user
    test('Verify Kelp Iron title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that Kelp Iron title is visible
        await expect(plantFoodPage.plantFoodKelpIronTitle).toBeVisible();
        //assert that Kelp Iron text is visible
        await expect(plantFoodPage.plantFoodKelpIronText).toBeVisible();
    });
//* Verify that the box with "Plant Food KelPlant 1-0-1" and its description is visible and readable by user
    test('Verify KelPlant 1-0-1 title and text', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        //assert that KelPlant 1-0-1 title is visible
        await expect(plantFoodPage.plantFoodKelPlant101Title).toBeVisible();
    //assert that KelPlant 1-0-1 text is visible
    await expect(plantFoodPage.plantFoodKelPlant101Text).toBeVisible();
    });
});