import { test, expect } from '@playwright/test';
import { TuftProductsPage } from '../pages/turfproducts';

test.beforeEach(async ({ page }) => {
    //Go to home page
    await page.goto('/');
    //click on "Turf Products" title
    const turfProductsPage = new TuftProductsPage(page);
    await turfProductsPage.clickTurfProductsTitle();
});
//* Verify that the description under title "There's a Reason We're the Turf King" is visible and readable by user
//* Verify that the "Tuft Products" is highlighted in the header
//* Verify that the "Tuft Products" is highlighted in the footer
//* Verify that the user can enter text in the "Enter your text here" space in the "Have a question about our products?" box
//* Verify that the user can enter email in the "Email address" space
//* Verify that "Submit" button is clickable
//* Verify that the info Request background image has ALT text in DevTools
//* Verify that clicking the logo "Andre & Son" would take the user back to the homepage
test('verify TuftProducts Hero text, logo, and info Request', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //assert that Turf Products is highlighted in the header
    const isCurrent = await turfProductsPage.isElementAriaCurrent();
    console.log(isCurrent);
    expect(isCurrent).toBe(true);
    //assert that the hero title and description is visible
    await expect(turfProductsPage.turfProductsHeroTitle).toBeVisible();
    await expect(turfProductsPage.turfProductsHeroText1).toBeVisible();
    await expect(turfProductsPage.turfProductsHeroText2).toBeVisible();
    await expect(turfProductsPage.turfProductsHeroText3).toBeVisible();
    //assert that the backgorund has a video
    //await expect(turfProductsPage.backGroundVideo).toBeVisible
    const isVideoActive =await turfProductsPage.isBackgroundVideoActive();
    console.log(isVideoActive);
    expect(isVideoActive).toBe(true);
    // assert that the info Request field background image has ALT text in DevTools
    await expect(turfProductsPage.infoRequestAltText).toBeVisible();
    // assert that Text field can be filled
    await turfProductsPage.fillText('demo text');
    // assert that email field can be filled
    await turfProductsPage.fillEmail('yuliyafarber@mail.com')
    // assert that the Submit button is clickable
    expect(turfProductsPage.infoRequestSubmitButton).toBeVisible;
    //assert that Turf Products is highlighted in footer
    const isCurrent1 = await turfProductsPage.isElementAriaCurrent1();
    console.log(isCurrent);
    expect(isCurrent1).toBe(true);
    //click on "Andre & Son" logo
    await turfProductsPage.clickLogoAndreSon();
    //assert that the url is correct
    await expect(page).toHaveURL('https://www.andreandson.com/');
});


//* Verify that the title "TURF PRODUCT CATALOG" and description under is visible and readable by user
//* Verify that clicking on "tuft products" hyperlink in the "TURF PRODUCT CATALOG" description opens the company's website "Turf Products" in another tab.
//* Verify that "Turf King Fertilizer" logo has Alt text in Devtools
test('verify "TURF PRODUCT CATALOG"', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //await turfProductsPage.clickTurfProductsTitle();
    //assert that "TURF PRODUCT CATALOG" title and description is visible
    await expect(turfProductsPage.turfProductsCatalogTitle).toBeVisible();
    await expect(turfProductsPage.turfProductsCatalogText1).toBeVisible();
    await expect(turfProductsPage.turfProductsCatalogText2).toBeVisible();
     //assert that the "turf king" logo has alt text
    await expect(turfProductsPage.turfProductsCatalogAltText).toBeVisible();
    //click on "tuft products" link in the text
    await turfProductsPage.clickTurfProductsCatalogLink();
    //assert that the url is correct
    await expect(page).toHaveURL("https://www.andreandson.com/turf-products");
});

//* Verify that the title "Combination Products" and description under is visible and readable by user
//* Verify the image under "Combination Products" has Alt text in Devtools. 
//* Verify that clicking on "combination products" hyperlink in the "Combination Products" description takes the user to "Turf King Combination Products" page
//* Verify that clicking on "Learn More" button under "Combination Products" takes the user to "Turf King Combination Products" page
test('verify "Combination Products"', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //await turfProductsPage.clickTurfProductsTitle();
    //assert that "Combination Products" title and description is visible
    await expect(turfProductsPage.combinationProductsTitle).toBeVisible();
    await expect(turfProductsPage.combinationProductsText).toBeVisible();
    //assert that the "Combination Products" image has alt text
    await expect(turfProductsPage.combinationProductsImageAltText).toBeVisible();
    const [newTab]= await Promise.all([
        page.waitForEvent('popup'),
    //click on "combination products" link in the text
        await turfProductsPage.combinationProductsLink.click()]);
    console.log(newTab.url());
    await newTab.waitForLoadState();
    //assert that the url is correct
    expect(await newTab).toHaveURL("https://www.andreandson.com/turf-king-combo-products");
    //click on "Learn More" button under "Combination Products"
    await turfProductsPage.clickCPLearnMoreButton();
    //assert that the url is correct
    await expect(page).toHaveURL("https://www.andreandson.com/turf-king-combo-products");
});

//* Verify that the description under title "Turf King Fertilizer" is visible and readable by user
//* Verify the image under "Turf King Fertilizer" has Alt text in Devtools. 
//* Verify that clicking on "Learn More" button under "Turf King Fertilizer" takes the user to "Turf King Fertilizer Products" page
test('verify "Turf King Fertilizer" section', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //await turfProductsPage.clickTurfProductsTitle();
    //assert that "Turf King Fertilizer" title and description is visible
    await expect(turfProductsPage.turfKingFertilizerTitle).toBeVisible();
    await expect(turfProductsPage.turfKingFetilizerText).toBeVisible();
    //assert that the "Turf King Fertilizer" image has alt text
    await expect(turfProductsPage.turfKingFetilizerAltText).toBeVisible();
    //click on "Learn More" button under "Turf King Fertilizer"
    await turfProductsPage.clickKFLearnMoreButton();
    //assert that the url is correct
    await expect(page).toHaveURL("https://www.andreandson.com/turf-king-dry-fertilizer");
});

//* Verify that the description under title "Control Agents" is visible and readable by user
//* Verify the image under "Control Agents" has Alt text in Devtools. 
//* Verify that clicking on "Learn More" button under "Control Agents" takes the user to "Turf King Control Agents" page
test('verify "Control Agents" section', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //await turfProductsPage.clickTurfProductsTitle();
    //assert that "Control Agents" title and description is visible
    await expect(turfProductsPage.controlAgentsTitle).toBeVisible();
    await expect(turfProductsPage.controlAgentsText).toBeVisible();
    //assert that the "Control Agents" image has alt text
    await expect(turfProductsPage.controlAgentsImageAltText).toBeVisible();
    //click on "Learn More" button under "Control Agents"
    await turfProductsPage.clickCALearnMoreButton();
    //assert that the url is correct
    await expect(page).toHaveURL("https://www.andreandson.com/control-agents-2");
});

//* Verify that the description under title "Liquid Fertilizer" is visible and readable by user
//* Verify the image under "Liquid Fertilizer" has Alt text in Devtools. 
//* Verify that clicking on "Learn More" button under "Liquid Fertilizer" takes the user to "Turf King Liquid Fertilizer" page
test('verify "Liquid Fertilizer" section', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //await turfProductsPage.clickTurfProductsTitle();
    //assert that "Liquid Fertilizer" title and description is visible
    await expect(turfProductsPage.liquidFertilizerTitle).toBeVisible();
    await expect(turfProductsPage.liquidFertilizerText).toBeVisible();
    //assert that the "Liquid Fertilizer" image has alt text
    await expect(turfProductsPage.liquidFertilizerAltText).toBeVisible();
    //click on "Learn More" button under "Liquid Fertilizer"
    await turfProductsPage.clickLFLearnMoreButton();
    //assert that the url is correct
    await expect(page).toHaveURL("https://www.andreandson.com/liquid-fertilizer");
});

test('verify "Seed" section', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //await turfProductsPage.clickTurfProductsTitle();
    //assert that "Seed" title and description is visible
    await expect(turfProductsPage.seedTitle).toBeVisible();
    await expect(turfProductsPage.seedText).toBeVisible();
    //assert that the "Seed" image has alt text
    await expect(turfProductsPage.seedAltText).toBeVisible();
    //click on "Learn More" button under "Seed"
    await turfProductsPage.clickSeedLearnMoreButton();
    //assert that the url is correct
    await expect(page).toHaveURL("https://www.andreandson.com/seed");
});

test('verify "Amendments & Conditioners" section', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //await turfProductsPage.clickTurfProductsTitle();
    //assert that "Amendments & Conditioners" title and description is visible
    await expect(turfProductsPage.amendmentsConditionersTitle).toBeVisible();
    await expect(turfProductsPage.amendmentsConditionersText).toBeVisible();
    //assert that the "Amendments & Conditioners" image has alt text
    await expect(turfProductsPage.amendmentsConditionersImageAltText).toBeVisible();
    //click on "Learn More" button under "Amendments & Conditioners"
    await turfProductsPage.clickACLearnMoreButton();
    //assert that the url is correct
    await expect(page).toHaveURL("https://www.andreandson.com/soil-admendments");
});

test('verify "Top Dressing & Bunker Sand" section', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //await turfProductsPage.clickTurfProductsTitle();
    //assert that "Top Dressing & Bunker Sand" title and description is visible
    await expect(turfProductsPage.topDressingBunkerSandTitle).toBeVisible();
    await expect(turfProductsPage.topDressingBunkerSandText).toBeVisible();
    //assert that the "Top Dressing & Bunker Sand" image has alt text
    await expect(turfProductsPage.topDressingBunkerSandImageAltText).toBeVisible();
    //click on "Learn More" button under "Top Dressing & Bunker Sand"
    await turfProductsPage.clickTDBSLearnMoreButton();
    //assert that the url is correct
    await expect(page).toHaveURL("https://www.andreandson.com/top-dressing-bunker-sand");
});

test('verify "Ice Melt" section', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //await turfProductsPage.clickTurfProductsTitle();
    //assert that "Ice Melt" title and description is visible
    await expect(turfProductsPage.iceMeltTitle).toBeVisible();
    await expect(turfProductsPage.iceMeltText).toBeVisible();
    //assert that the "Ice Melt" image has alt text
    await expect(turfProductsPage.iceMeltImageAltText).toBeVisible();
    //click on "Learn More" button under "Ice Melt"
    await turfProductsPage.clickIMLearnMoreButton();
    //assert that the url is correct
    await expect(page).toHaveURL("https://www.andreandson.com/ice-melts");
});