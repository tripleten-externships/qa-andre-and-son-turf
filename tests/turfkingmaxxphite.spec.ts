import { test, expect } from '@playwright/test';
import { TuftProductsPage } from '../pages/turfproducts';
import { LiquidFertilizersPage } from '../pages/liquidfertilizers';
import { TurfKingMaxxPhitePage } from '../pages/turfkingmaxxphite';

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
    await liquidFertilizersPage.clickTKMPLearnMoreButton();
});

//* Verify that the title "Turf King Maxx Phite" and its description is visible and readable by user
//* Verify that the back ground image in "Turf King Maxx Phite" page has an ALT text in DevTools
//* Verify that the box with "Turf King Maxx Phite" and its description is visible and readable by user
//* Verify that when clicked, the "Label" button opens a new page with a correct URL
//* Verify that when clicked, the "SDS" button opens a new page with a correct URL
//* Verify that when clicked, the "Spec Sheet" button opens a new page with a correct URL
test('verify "Turf King Maxx Phite" text, image, and buttons', async ({ page }) => {
    const turfKingMaxxPhitePage = new TurfKingMaxxPhitePage(page);
    //assert that back ground image has an ALT text and is visible
    await expect(turfKingMaxxPhitePage.turfKingMaxxPhiteBackGroundImageAltText).toBeVisible();
    //assert that "Turf King Maxx Phite" title is visible
    await expect(turfKingMaxxPhitePage.turfKingMaxxPhiteTitle1).toBeVisible();
    await expect(turfKingMaxxPhitePage.turfKingMaxxPhiteTitle2).toBeVisible();
    //assert that "Turf King Maxx Phite" description is visible
    await expect(turfKingMaxxPhitePage.turfKingMaxxPhiteText).toBeVisible();
    //assert that box with "Turf King Maxx Phite" and its description is visible
    //await expect(turfKingMaxxPhitePage.turfKingMaxxPhiteBoxTitle).toBeVisible();
    await expect(turfKingMaxxPhitePage.turfKingMaxxPhiteBoxText).toBeVisible();
    const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on "Label" button
        await turfKingMaxxPhitePage.tkmpLabelButton.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    expect(await newTab).toHaveURL("https://www.andreandson.com/_files/ugd/3bd49b_ac2b3963467344a2ba8d1e47ab4f58b2.pdf");
    const [newTab1]= await Promise.all([
        page.waitForEvent('popup'),
    //click on "SDS" button
        await turfKingMaxxPhitePage.tkmpSDSButton.click()]);
    console.log(newTab1.url());
    await newTab1.waitForLoadState();
    //assert that the url is correct
    expect(await newTab1).toHaveURL("https://www.andreandson.com/_files/ugd/3bd49b_b99d6f64e9da4e3e8f16816e8857c6e1.pdf");
    const [newTab2]= await Promise.all([
        page.waitForEvent('popup'),
    //click on "Specs" button
        await turfKingMaxxPhitePage.tkmpSpecsButton.click()]);
    console.log(newTab2.url());
    await newTab2.waitForLoadState();   
    //assert that the url is correct
    expect(await newTab2).toHaveURL("https://www.andreandson.com/_files/ugd/3bd49b_7732c72512f44cd9a91ba791c13f958a.pdf");
});