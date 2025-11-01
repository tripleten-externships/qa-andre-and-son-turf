import { test, expect } from '@playwright/test';
import { TuftProductsPage } from '../pages/turfproducts';
import { LiquidFertilizersPage } from '../pages/liquidfertilizers';
import { AquaAidPage } from '../pages/aquaaid';

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
    await liquidFertilizersPage.clickAALearnMoreButton();
});

test.describe('Aqua Aid page and all of it descriptions', () => {
//* Verify that the background in the "Aqua-Aid" page has ALT text in DevTools
//* Verify that the title "Aqua-Aid" and its description is visible and readable by user
    test('verify "Aqua Aid" page title, description, and image', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that back ground image has an ALT text and is visible
        await expect(aquaaidPage.aquaaidBackGroundImageAltText).toBeVisible();
        //assert that "Aqua Aid" title is visible
        await expect(aquaaidPage.aquaaidTitle).toBeVisible();
        //assert that "Aqua Aid" description is visible
        await expect(aquaaidPage.aquaaidText).toBeVisible();
    });
//* Verify that the box with "Excalibur" and its description is visible and readable by user
    test('verify Excalibur', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "Excalibur" title is visible
        await expect(aquaaidPage.aquaaidExcaliburTitle).toBeVisible();
        //assert that "Excalibur" description is visible
        await expect(aquaaidPage.aquaaidExcaliburText).toBeVisible();
    });
//* Verify that the box with "Aqua-Aid" and its description is visible and readable by user
    test('verify Aqua Aid', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "Aqua Aid" title is visible
        await expect(aquaaidPage.aquaaidAquaAidTitle).toBeVisible();
        //assert that "Aqua Aid" description is visible
        await expect(aquaaidPage.aquaaidAquaAidText).toBeVisible();
    });
//* Verify that the box with "Aquifer" and its description is visible and readable by user
    test('verify Aquifer', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "Aquifer" title is visible
        await expect(aquaaidPage.aquaaidAquiferTitle).toBeVisible();
        //assert that "Aquifer" description is visible
        await expect(aquaaidPage.aquaaidAquiferText).toBeVisible();
    });
//* Verify that the box with "Aqua-Root" and its description is visible and readable by user
    test('verify Aqua Root', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page); 
        //assert that "Aqua Root" title is visible
        await expect(aquaaidPage.aquaaidAquaRootTitle).toBeVisible();
        //assert that "Aqua Root" description is visible
        await expect(aquaaidPage.aquaaidAquaRootText).toBeVisible();
    });
//* Verify that the box with "Oars" and its description is visible and readable by user
    test('verify OARS', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "OARS" title is visible
        await expect(aquaaidPage.aquaaidOarsTitle).toBeVisible();
        //assert that "OARS" description is visible
        await expect(aquaaidPage.aquaaidOarsText).toBeVisible();
    });
//* Verify that the box with "AQM" and its description is visible and readable by user
    test('verify AQM', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "AQM" title is visible
        await expect(aquaaidPage.aquaaidAQMTitle).toBeVisible();
        //assert that "AQM" description is visible
        await expect(aquaaidPage.aquaaidAQMText).toBeVisible();
    });
//* Verify that the box with "AQAAC" and its description is visible and readable by user
    test('verify AQAAC', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "AQAAC" title is visible
        await expect(aquaaidPage.aquaaidAQAACTitle).toBeVisible();
        //assert that "AQAAC" description is visible
        await expect(aquaaidPage.aquaaidAQAACText).toBeVisible();
    });
//* Verify that the box with "Conduit 90" and its description is visible and readable by user
    test('verify Conduit 90', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "Conduit 90" title is visible
        await expect(aquaaidPage.aquaaidConduit90Title).toBeVisible();
        //assert that "Conduit 90" description is visible
        await expect(aquaaidPage.aquaaidConduit90Text).toBeVisible();
    });
//* Verify that the box with "FWY-ISP" and its description is visible and readable by user
    test('verify FWY ISP', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "FWY ISP" title is visible
        await expect(aquaaidPage.aquaaidFWYISPTitle).toBeVisible();
        //assert that "FWY ISP" description is visible
        await expect(aquaaidPage.aquaaidFWYISPText).toBeVisible();
    });
//* Verify that the box with "OARS-Ps" and its description is visible and readable by user
    test('verify OARS-Ps', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page); 
        //assert that "OARS-Ps" title is visible
        await expect(aquaaidPage.aquaaidOARSPsTitle).toBeVisible();
        //assert that "OARS-Ps" description is visible
        await expect(aquaaidPage.aquaaidOARSPsText).toBeVisible();
    });
//* Verify that the box with "OARS-Hs" and its description is visible and readable by user
    test('verify OARS-Hs', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "OARS-Hs" title is visible
        await expect(aquaaidPage.aquaaidOARSHsTitle).toBeVisible();
        //assert that "OARS-Hs" description is visible
        await expect(aquaaidPage.aquaaidOARSHsText).toBeVisible();
    });
//* Verify that the box with "Aqua-Root2" and its description is visible and readable by user
    test('verify Aqua-Root2', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page); 
        //assert that "Aqua-Root2" title is visible
        await expect(aquaaidPage.aquaaidAquaRoot2Title).toBeVisible();
        //assert that "Aqua-Root2" description is visible
        await expect(aquaaidPage.aquaaidAquaRoot2Text).toBeVisible();
    });
//* Verify that the box with "Recover" and its description is visible and readable by user
    test('verify Recover', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "Recover" title is visible
        await expect(aquaaidPage.aquaaidRecoverTitle).toBeVisible();
        //assert that "Recover" description is visible
        await expect(aquaaidPage.aquaaidRecoverText).toBeVisible();
    });
//* Verify that the box with "Hydra-30 Plus" and its description is visible and readable by user
    test('verify Hydra 30 Plus', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "Hydra 30 Plus" title is visible
        await expect(aquaaidPage.aquaaidHydra30PlusTitle).toBeVisible();
        //assert that "Hydra 30 Plus" description is visible
        await expect(aquaaidPage.aquaaidHydra30PlusText).toBeVisible();
    });
//* Verify that the box with "PBS 150" and its description is visible and readable by user
    test('verify PBS 150', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "PBS 150" title is visible
        await expect(aquaaidPage.aquaaidPBS150Title).toBeVisible();
        //assert that "PBS 150" description is visible
        await expect(aquaaidPage.aquaaidPBS150Text).toBeVisible();
    });
//* Verify that the box with "ReDEWce" and its description is visible and readable by user
    test('verify ReDEWce', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        //assert that "ReDEWce" title is visible
        await expect(aquaaidPage.aquaaidReDEWceTitle).toBeVisible();
        //assert that "ReDEWce" description is visible
        await expect(aquaaidPage.aquaaidReDEWceText).toBeVisible();
    });
});

test.describe('Aqua Aid page Sales Sheet buttons', () => {
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "Excalibur"
    test('verify Excalibur Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Excalibur Sales Sheet button
        await aquaaidPage.aaExcaliburSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://aquaaidsolutions.com/wp-content/uploads/2020/12/Excalibur-ONLY-Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "Aqua-Aid"
    test('verify Aqua-Aid Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Aqua-Aid Sales Sheet button
        await aquaaidPage.aaAquaAidSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/Aqua-Aid_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "Aquifer"
    test('verify Aquifer Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Aquifer Sales Sheet button
        await aquaaidPage.aaAquiferSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/Aquifer_Literature.pdf')
    });
//* Verify that when clicked, the "Aqua-Root" button opens a new page with a URL that says "Aqua-Root"
    test('verify Aqua-Root Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Aqua-Root Sales Sheet button
        await aquaaidPage.aaAquaRootSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/Aqua-Root_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "Oars"
    test('verify Oars Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Oars Sales Sheet button
        await aquaaidPage.aaOarsSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/OARS_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "AQM"
    test('verify AQM Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on AQM Sales Sheet button
        await aquaaidPage.aaAQMSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/AQM_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "AQAAC"
    test('verify AQAAC Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on AQAAC Sales Sheet button
        await aquaaidPage.aaAQAACSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/AQAAC_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "Conduit 90"
    test('verify Conduit 90 Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Conduit 90 Sales Sheet button
        await aquaaidPage.aaConduit90SalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/Conduit-90_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "FWY-ISP"
    test('verify FWY-ISP Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on FWY-ISP Sales Sheet button
        await aquaaidPage.aaFWYISPSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/FWY-ISP_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "OARS-Ps"
    test('verify OARS-Ps Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on OARS-Ps Sales Sheet button
        await aquaaidPage.aaOARSPsSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/OARS-PS_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "OARS-Hs"
    test('verify OARS-Hs Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on OARS-Hs Sales Sheet button
        await aquaaidPage.aaOARSHsSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/OARS-HS_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "Aqua-Root"
    test('verify Aqua-Root2 Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Aqua-Root2 Sales Sheet button
        await aquaaidPage.aaAquaRoot2SalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/PROportioner_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "Recover"
    test('verify Recover Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Recover Sales Sheet button
        await aquaaidPage.aaRecoverSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/Recover_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "Hydra-30 Plus"
    test('verify Hydra-30 Plus Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on Hydra-30 Plus Sales Sheet button
        await aquaaidPage.aaHydra30PlusSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2019/01/Hydra-30_Plus_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "PBS 150"
    test('verify PBS 150 Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on PBS 150 Sales Sheet button
        await aquaaidPage.aaPBS150SalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/PBS150_Literature.pdf')
    });
//* Verify that when clicked, the "Sales Sheet" button opens a new page with a URL that says "ReDEWce"
    test('verify ReDEWce Sales Sheet Button', async ({ page }) => {
        const aquaaidPage = new AquaAidPage(page);
        const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on ReDEWce Sales Sheet button
        await aquaaidPage.aaReDEWceSalesSheetButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    await expect(newTab).toHaveURL('https://www.aquaaidsolutions.com/wp-content/uploads/2018/06/reDEWce_Literature.pdf')
    });
});
