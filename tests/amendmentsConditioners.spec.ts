import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { AmendmentsConditioners } from '../pages/amendmentsConditionersPage'
import { TurfProducts } from '../pages/turfProductsPage';
import { TurfConditioners } from '../pages/turfConditionersPage';
import { InfieldConditioners } from '../pages/infieldConditionersPage';
import { EnhancedLimeGypsum } from '../pages/enhancedLimeGypsumPage';
import { FertlSoil } from '../pages/fertlSoilPage';
import { MoundAndBoxPackingClay } from '../pages/moundAndBoxPackingClay';
import { C2OSoilBuilder } from '../pages/c2oSoilBuilderPage';

//Verify Amendments and Conditioners page and title
test('Verify that page title includes Ammendments and Conditioners', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const amendmentsConditionersPage = new AmendmentsConditioners(page);

    await page.goto('/');

    //if Turf Products sub menu is visible 
    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        // click Amendments and Conditioners in sub menu
        await homePage.navigateToAmendmentsConditionersViaHover();
    }
    else{
        //click Turf Products
        await homePage.navigateToTurfProducts();
        //Click Amendments and Conditioners Learn More
        await turfProducts.navigatetoAmendments();
        }
    
    //verify page url
    await expect (page).toHaveURL("https://www.andreandson.com/soil-admendments");
    //verify Amendments and Conditioners in header
    await expect(amendmentsConditionersPage.AmendmentsConditionersHeader).toContainText('Amendments & Conditioners');

});

//Verify Enhanced Lime and Gypsum Learn More leads to correct page with correct title
test('Verify Enhanced Lime and Gypsum Learn More leads to correct page with correct title', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const amendmentsConditionersPage = new AmendmentsConditioners(page);
    const enhancedLimeGypsum = new EnhancedLimeGypsum(page);

    //go to home page
    await page.goto('/');

    //if Turf Products sub menu is visible 
    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        // click Amendments and Conditioners in sub menu
        await homePage.navigateToAmendmentsConditionersViaHover();
    }
    //else
    else{
        //click Turf Products
        await homePage.navigateToTurfProducts();
        //Click Amendments and Conditioners Learn More
        await turfProducts.navigatetoAmendments();
        }

    //click on Enhanced Lime and Gypsum Learn More
    await amendmentsConditionersPage.navigateToEnhancedLimeGyspum();

    await expect (page).toHaveURL("https://www.andreandson.com/enhanced-lime-gypsum");
    //verify Enhanced Lime and Gypsum in header
    await expect(enhancedLimeGypsum.enhancedLimeGyspumHeader).toContainText("Enhanced Lime & Gypsum");

});

//Verify FertlSoil Learn More leads to correct url and page title
test('Verify FertlSoil url and page title', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const amendmentsConditionersPage = new AmendmentsConditioners(page);
    const enhancedLimeGypsum = new EnhancedLimeGypsum(page);
    const fertlSoil = new FertlSoil(page);

    //go to home page
    await page.goto('/');

    //if Turf Products sub menu is visible 
    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        // click Amendments and Conditioners in sub menu
        await homePage.navigateToAmendmentsConditionersViaHover();
    }
    //else
    else{
        //click Turf Products
        await homePage.navigateToTurfProducts();
        //Click Amendments and Conditioners Learn More
        await turfProducts.navigatetoAmendments();
        }

    //click on FertlSoil Learn More
    await amendmentsConditionersPage.navigateToFertlSoil();

    await expect (page).toHaveURL("https://www.andreandson.com/fertl-soil");
    //verify FertlSoil in header
    await expect(fertlSoil.fertlSoilHeader).toContainText("Fertl Soil");
});

//Verify Turf Conditioners Learn more leads to correct url with correct title
test('Verify Turf Conditioners Learn more leads to correct page with correct title', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const amendmentsConditionersPage = new AmendmentsConditioners(page);
    const turfConditionersPage = new TurfConditioners(page);

    await page.goto('/');

    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        await homePage.navigateToAmendmentsConditionersViaHover();
    }

    else{
        await homePage.navigateToTurfProducts();
        await turfProducts.navigatetoAmendments();
        }

    await amendmentsConditionersPage.navigateToTurfConditioners();

    await expect (page).toHaveURL("https://www.andreandson.com/turf-conidtioners");
    await expect (turfConditionersPage.turfConditionersHeader).toContainText("Turf Conditioners");
});

//Verify Infield Conditoners Learn More leads to correct url with correct title
test('Infield Conditioners Learn More leads to correct page with correct title', async ({ page }) => {
    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const amendmentsConditionersPage = new AmendmentsConditioners(page);
    const infieldConditionersPage = new InfieldConditioners(page);

    await page.goto('/');

    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        await homePage.navigateToAmendmentsConditionersViaHover();
    }
    else{
        await homePage.navigateToTurfProducts();
        await turfProducts.navigatetoAmendments();
        }

    await amendmentsConditionersPage.navigateToInfieldConditioners();

    await expect (page).toHaveURL("https://www.andreandson.com/infield-conditioners");
    await expect (infieldConditionersPage.infieldConditionersHeader).toContainText("Infield Conditioners");

});

//verify Mound and Box Packing clay Learn More leads to correct url with correct title
test('Mound and Box Packing clay Learn More leads to correct url with correct title', async ({ page }) => {
    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const amendmentsConditionersPage = new AmendmentsConditioners(page);
    const moundAndBoxPackingClayPage = new MoundAndBoxPackingClay(page);

    await page.goto('/');

    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        await homePage.navigateToAmendmentsConditionersViaHover();
    }
    else{
        await homePage.navigateToTurfProducts();
        await turfProducts.navigatetoAmendments();
        }

    await amendmentsConditionersPage.navigateToMoundAndBoxPackingClay();

    await expect (page).toHaveURL("https://www.andreandson.com/mound-box-packing-clay");
    await expect (moundAndBoxPackingClayPage.moundAndBoxPackingClayHeader).toContainText("Mound & Box Packing Clay");

});

//Verify that after clicking "Learn More" button under C20 Soil Builder, 
//new page contains "precisionorganics.com" in address
test('Verify precisionorganics.com ...', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const amendmentsConditionersPage = new AmendmentsConditioners(page);
    const c2oSoilBuilderPage = new C2OSoilBuilder(page);

    //go to homepage
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    //if Turf Products sub menu is visible 
    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        // click Amendments and Conditioners in sub menu
        await homePage.navigateToAmendmentsConditionersViaHover();
    }
    //else
    else{
        //click Turf Products
        await homePage.navigateToTurfProducts();
        //Click Amendments and Conditioners Learn More
        await turfProducts.navigatetoAmendments();
        }

    //click on C2O Soil Builders Learn More link
    await amendmentsConditionersPage.navigateToC2O();

    //const for new tab event
    const newTabPromise = page.waitForEvent('popup');
    const newTab = await newTabPromise;

    //wait for new tab load
    await newTab.waitForLoadState();

    //verify precisionorganics.com url
    await expect(newTab).toHaveURL('https://www.precisionorganics.com/');

});

test('Verify Turf King Cal Plus Label opens correct PDF link', async ({ page }) => {
    
    const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

    // Go to Enhanced Lime and Gypsum page
    await page.goto('/enhanced-lime-gypsum');

    // Capture the navigation request to avoid headless failure
    const [request] = await Promise.all([
        page.waitForEvent('request', request => 
            request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_a66c9ab8ecd84a98bc76c7feaf17d78e.pdf'
        ),
        //click on Turf King Cal Plus Label Button
        enhancedLimeGyspum.clickTurfKingCalPlusLabel(),
    ]);

    // Verify the correct PDF URL was requested
    expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_a66c9ab8ecd84a98bc76c7feaf17d78e.pdf');
});