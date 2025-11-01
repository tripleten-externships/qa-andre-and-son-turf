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

test.describe('Plant food page Learn More buttons', () => {
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "pHUSION Acid"
    test('verify pHUSION Acid Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
            page.waitForEvent('popup'),
    //click on pHUSION Acid Learn More button
            plantFoodPage.pfPHALearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2373/wt-phusion-organic-acid-17.pdf');
    });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "pHuson Gypsum Mini"
    test('verify pHuson Gypsum Mini Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on pHuson Gypsum Mini Learn More button
        await plantFoodPage.plantFoodpHusonGypsumMiniText.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2351/sa-phusion-calcium-sulfate-gypsum-17.pdf');
    });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Sili-K"
    test('verify Sili-K Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Sili-K Learn More button
        await plantFoodPage.pfSKLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2348/mn-sili-k-17.pdf');
    });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Sugar Cal"
    test('verify Sugar Cal Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Sugar Cal Learn More button
        await plantFoodPage.pfSCLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2358/sn-sugar-cal-17.pdf');
    });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Zinc 7%"
    test('verify Zinc 7% Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Zinc 7% Learn More button
        await plantFoodPage.pfZ7LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2343/mn-zinc-7-17.pdf');
    });
//* Verify that when clicked, the "Learn More" button opens a new webpage with the information on the pump
    test('verify Tote Hose Meter Unit Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Tote Hose Meter Unit Learn More button
        await plantFoodPage.pfTHMULearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/golf-professional-turf/products/accessories/flow-meter/');
    });
//* Verify that when clicked, the "Learn More" button opens a new webpage with the information on the pump assembly
    test('verify Tote Hose Unit Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Tote Hose Unit Learn More button
        await plantFoodPage.pfTHULearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/golf-professional-turf/products/accessories/hose-assembly/');
    });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Alpha Mat"
    test('verify Alpha Mat Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Alpha Mat Learn More button
        await plantFoodPage.pfAMLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2372/wt-alpha-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "0-0-25"
    test('verify 0-0-25 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 0-0-25 Learn More button
        await plantFoodPage.pf0025LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2304/lf-0-0-25-potassium-plus-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "10-10-10"
    test('verify 10-10-10 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 10-10-10 Learn More button
        await plantFoodPage.pf101010LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2315/lf-10-10-10-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "10-34-0"
    test('verify 10-34-0 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 10-34-0 Learn More button
        await plantFoodPage.pf10340LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2317/lf-10-34-0-ammonium-polyphosphate-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "10-4-6"
    test('verify 10-4-6 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 10-4-6 Learn More button
        await plantFoodPage.pf1046LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2316/lf-10-4-6-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "12-0-12"
    test('verify 12-0-12 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 12-0-12 Learn More button
        await plantFoodPage.pf12012LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2318/lf-12-0-12-50-srn-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "12-3-12"
    test('verify 12-3-12 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 12-3-12 Learn More button
        await plantFoodPage.pf12312LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2321/lf-12-3-12-50-srn-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "16-0-7 25% SRN"
    test('verify 16-0-7 25% SRN Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 16-0-7 25% SRN Learn More button
        await plantFoodPage.pf160725SRNLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('');
    });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "16-0-8 50% SRN"
    test('verify 16-0-8 50% SRN Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 16-0-8 50% SRN Learn More button
        await plantFoodPage.pf160850SRNLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2323/lf-16-0-8-50-srn-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "16-2-7 25% SRN"
    test('verify 16-2-7 25% SRN Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 16-2-7 25% SRN Learn More button
        await plantFoodPage.pf162725SRNLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2322/lf-16-2-7-25-srn-synergy.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "16-2-8"
    test('verify 16-2-8 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 16-2-8 Learn More button
        await plantFoodPage.pf1628LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2324/lf-16-2-8-50-srn-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "16-4-5"
    test('verify 16-4-5 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 16-4-5 Learn More button
        await plantFoodPage.pf1645LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2166/16-4-5-50-srn-lf16.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "18-3-3"
    test('verify 18-3-3 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 18-3-3 Learn More button
        await plantFoodPage.pf1833LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2326/lf-18-3-3-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "18-3-4 Super"
    test('verify 18-3-4 Super Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 18-3-4 Super Learn More button
        await plantFoodPage.pf1834SuperLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2325/lf-18-3-4-super-mk-green-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "18-3-6 50% SRN"
    test('verify 18-3-6 50% SRN Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 18-3-6 50% SRN Learn More button
        await plantFoodPage.pf183650SRNLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2328/lf-18-3-6-50-srn-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "20-0-0"
    test('verify 20-0-0 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 20-0-0 Learn More button
        await plantFoodPage.pf2000LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2329/lf-20-0-0-50-srn-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "20-0-3 Lawn"
    test('verify 20-0-3 Lawn Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 20-0-3 Lawn Learn More button
        await plantFoodPage.pf2003LawnLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2170/20-0-3-25-srn-lf16.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "20-3-3 SRN & FE"
    test('verify 20-3-3 SRN & FE Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 20-3-3 SRN & FE Learn More button
        await plantFoodPage.pf2033SRNFELearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2171/20-3-3-20-srn-lf16.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "28-0-0"
    test('verify 28-0-0 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 28-0-0 Learn More button
        await plantFoodPage.pf2800LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2331/lf-28-0-0-72-srn-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "29-0-0"
    test('verify 29-0-0 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 29-0-0 Learn More button
        await plantFoodPage.pf2900LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2385/29-0-0-50-srn.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "30-0-0 60 SRN"
    test('verify 30-0-0 60 SRN Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 30-0-0 60 SRN Learn More button
        await plantFoodPage.pf300060SRNLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2336/lf-30-0-0-60-srn-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "30-0-0 90% MU"
    test('verify 30-0-0 90% MU Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 30-0-0 90% MU Learn More button
        await plantFoodPage.pf300090MULearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2334/lf-30-0-90-msn-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "30-0-0 UAN"
    test('verify 30-0-0 UAN Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 30-0-0 UAN Learn More button
        await plantFoodPage.pf3000UALearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2335/lf-30-0-0-uan-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "4-20-22 DKP X"
    test('verify 4-20-22 DKP X Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 4-20-22 DKP X Learn More button
        await plantFoodPage.pf42022DKPXLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2306/lf-4-20-22-dkp-xtra-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "5% Iron"
    test('verify 5% Iron Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 5% Iron Learn More button
        await plantFoodPage.pf5ILearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2342/mn-iron-5-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "6 Iron"
    test('verify 6 Iron Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 6 Iron Learn More button
        await plantFoodPage.pf6ILearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2341/mn-6-iron-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "7-0-0 Sulfur"
    test('verify 7-0-0 Sulfur Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 7-0-0 Sulfur Learn More button
        await plantFoodPage.pf700SLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2308/lf-7-0-0-ammoniu-sulfate-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "7-0-7"
    test('verify 7-0-7 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 7-0-7 Learn More button
        await plantFoodPage.pf707LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2309/lf-7-0-7-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "8-27-5"
    test('verify 8-27-5 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on 8-27-5 Learn More button
        await plantFoodPage.pf8275LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2311/lf-8-27-5-healthy-start-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Adam's Earth"
    test('verify Adams Earth Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Adams Earth Learn More button
        await plantFoodPage.pfAELearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2299/bs-adamsearth-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Ammonium Thiosulfate"
    test('verify Ammonium Thiosulfate Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Ammonium Thiosulfate Learn More button
        await plantFoodPage.pfATLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2356/sn-ammonium-thiosulfate-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Blackstrap Molass"
    test('verify Blackstrap Molass Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Blackstrap Molass Learn More button
        await plantFoodPage.pfBMLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2302/bs-blackstrap-molasses17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Boron 10%"
    test('verify Boron 10% Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Boron 10% Learn More button
        await plantFoodPage.pfB10LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2337/mn-boron-10-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Calcium Nitrate"
    test('verify Calcium Nitrate Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Calcium Nitrate Learn More button
        await plantFoodPage.pfCNLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2355/sn-9-0-0-calcium-nitrate-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Flo Thru A-PLUS"
    test('verify Flo Thru A-PLUS Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Flo Thru A-PLUS Learn More button
        await plantFoodPage.pfFTALearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2364/wa-flo-thru-a-plus-17.pdf');
    });
//* Verify that when clicked, the "Learn More" button opens a new webpage with the information on the pump
    test('verify Hand Pump Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Hand Pump Learn More button
        await plantFoodPage.pfHPLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/golf-professional-turf/products/accessories/drum-pump/');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Humic Acid 70%"
    test('verify Humic Acid 70% Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Humic Acid 70% Learn More button
        await plantFoodPage.pfHA70LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2349/sa-humic-acid-70-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Hydration A-PLUS"
    test('verify Hydration A-PLUS Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Hydration A-PLUS Learn More button
        await plantFoodPage.pfHAPLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2380/hydration-a-plus-streamsong-flyer-2018.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Impulse"
    test('verify Impulse Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Impulse Learn More button
        await plantFoodPage.pfILearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2298/bs-impulse-gt-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Infiltrate-K"
    test('verify Infiltrate-K Learn more Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Infiltrate-K Learn more button
        await plantFoodPage.pfIKLearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2307/lf-0-0-29-infiltrate-k-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "KCS Plus 0-0-18"
    test('verify KCS Plus 0-0-18 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on KCS Plus 0-0-18 Learn More button
        await plantFoodPage.pfKCSP0018LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2391/phusion-kcs-plus-tech-sheet.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "Kelp Iron"
    test('verify Kelp Iron Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Kelp Iron Learn More button
        await plantFoodPage.pfKILearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2339/mn-kelp-iron-17.pdf');
        });
//* Verify that when clicked, the "Learn More" button opens a new page with a URL that says "KelPlant 1-0-1"
    test('verify KelPlant 1-0-1 Learn More Button', async ({ page }) => {
        const plantFoodPage = new PlantFoodPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on KelPlant 1-0-1 Learn More button
        await plantFoodPage.pfKP101LearnMoreButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.plantfoodco.com/media/2303/bs-kelplant-1-0-1-17.pdf');
        });
});