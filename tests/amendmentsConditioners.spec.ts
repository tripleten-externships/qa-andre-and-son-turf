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

//test suite 1
test.describe.only('tests via Amendments & Conditioners page', () => {
    test.beforeEach(async ({ page }) => {

        const homePage = new HomePage(page);
        const turfProducts = new TurfProducts(page);

    await page.goto('/');

        if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
            await homePage.navigateToAmendmentsConditionersViaHover();
        }
        else{
            await homePage.navigateToTurfProducts();
            await turfProducts.navigatetoAmendments();
            }
    });

    //Verify Amendments and Conditioners page and title
    test('Verify that page title includes Ammendments and Conditioners', async ({ page }) => {

        const amendmentsConditionersPage = new AmendmentsConditioners(page);

        //verify page url
        await expect (page).toHaveURL("https://www.andreandson.com/soil-admendments");
        //verify Amendments and Conditioners in header
        await expect(amendmentsConditionersPage.AmendmentsConditionersHeader).toContainText('Amendments & Conditioners');

    });

    //Verify Enhanced Lime and Gypsum Learn More leads to correct page with correct title
    test('Verify Enhanced Lime and Gypsum Learn More leads to correct page with correct title', async ({ page }) => {

        const amendmentsConditionersPage = new AmendmentsConditioners(page);
        const enhancedLimeGypsum = new EnhancedLimeGypsum(page);

        //click on Enhanced Lime and Gypsum Learn More
        await amendmentsConditionersPage.navigateToEnhancedLimeGyspum();

        await expect (page).toHaveURL("https://www.andreandson.com/enhanced-lime-gypsum");
        //verify Enhanced Lime and Gypsum in header
        await expect(enhancedLimeGypsum.enhancedLimeGyspumHeader).toContainText("Enhanced Lime & Gypsum");

    });

    //Verify FertlSoil Learn More leads to correct url and page title
    test('Verify FertlSoil url and page title', async ({ page }) => {

        const amendmentsConditionersPage = new AmendmentsConditioners(page);
        const fertlSoil = new FertlSoil(page);

        //click on FertlSoil Learn More
        await amendmentsConditionersPage.navigateToFertlSoil();

        await expect (page).toHaveURL("https://www.andreandson.com/fertl-soil");
        //verify FertlSoil in header
        await expect(fertlSoil.fertlSoilHeader).toContainText("Fertl Soil");
    });

    //Verify Turf Conditioners Learn more leads to correct url with correct title
    test('Verify Turf Conditioners Learn more leads to correct page with correct title', async ({ page }) => {

        const amendmentsConditionersPage = new AmendmentsConditioners(page);
        const turfConditionersPage = new TurfConditioners(page);

        await amendmentsConditionersPage.navigateToTurfConditioners();

        await expect (page).toHaveURL("https://www.andreandson.com/turf-conidtioners");
        await expect (turfConditionersPage.turfConditionersHeader).toContainText("Turf Conditioners");
    });

    //Verify Infield Conditoners Learn More leads to correct url with correct title
    test('Infield Conditioners Learn More leads to correct page with correct title', async ({ page }) => {

        const amendmentsConditionersPage = new AmendmentsConditioners(page);
        const infieldConditionersPage = new InfieldConditioners(page);

        await amendmentsConditionersPage.navigateToInfieldConditioners();

        await expect (page).toHaveURL("https://www.andreandson.com/infield-conditioners");
        await expect (infieldConditionersPage.infieldConditionersHeader).toContainText("Infield Conditioners");

    });

    //verify Mound and Box Packing clay Learn More leads to correct url with correct title
    test('Mound and Box Packing clay Learn More leads to correct url with correct title', async ({ page }) => {

        const amendmentsConditionersPage = new AmendmentsConditioners(page);
        const moundAndBoxPackingClayPage = new MoundAndBoxPackingClay(page);

        await amendmentsConditionersPage.navigateToMoundAndBoxPackingClay();

        await expect (page).toHaveURL("https://www.andreandson.com/mound-box-packing-clay");
        await expect (moundAndBoxPackingClayPage.moundAndBoxPackingClayHeader).toContainText("Mound & Box Packing Clay");

    });

    //Verify that after clicking "Learn More" button under C20 Soil Builder, new page contains "precisionorganics.com" in address
    test('Verify precisionorganics.com ...', async ({ page }) => {

        const amendmentsConditionersPage = new AmendmentsConditioners(page);

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
});

//test suite 2
test.describe.only('tests via enhanced lime and gypsum page', () => {
    test.beforeEach(async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const amendmentsConditionersPage = new AmendmentsConditioners(page);

    await page.goto('/');

        if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
            await homePage.navigateToAmendmentsConditionersViaHover();
        }
        else{
            await homePage.navigateToTurfProducts();
            await turfProducts.navigatetoAmendments();
            }

    // Go to Enhanced Lime and Gypsum page    
    await amendmentsConditionersPage.navigateToEnhancedLimeGyspum();
    });

    test('Verify Turf King Cal Plus Label opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

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

    test('Verify Turf King Cal Plus SDS opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_47a3ae590f9742ed8b6ea537e0855e8a.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingCalPlusSDS(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_47a3ae590f9742ed8b6ea537e0855e8a.pdf');
    });

    test('Verify Turf King Cal Plus Spec Sheet opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_842bff02d5d04e4593f802452f65481e.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingCalPlusSpecSheet(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_842bff02d5d04e4593f802452f65481e.pdf');
    });

    test('Verify Turf King Cal Plus Mini Label opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);
        
        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_8b427bbc3a984ec49db7c67409a6ed0c.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingCalPlusMiniLabel(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_8b427bbc3a984ec49db7c67409a6ed0c.pdf');
    });

    test('Verify Turf King Cal Plus Mini SDS opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_47a3ae590f9742ed8b6ea537e0855e8a.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingCalPlusMiniSDS(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_47a3ae590f9742ed8b6ea537e0855e8a.pdf');
    });

    test('Verify Turf King Cal Plus Mini Spec Sheet opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_469a97b4dfdd44d18e716ce06ec7e7bd.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingCalPlusMiniSpecSheet(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_469a97b4dfdd44d18e716ce06ec7e7bd.pdf');
    });

    test('Verify Turf King Gypsum Plus Label opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_c2d1911de7f1408bbd226f2ebaf591ca.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingGypsumPlusLabel(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_c2d1911de7f1408bbd226f2ebaf591ca.pdf');
    });

    test('Verify Turf King Gypsum Plus SDS opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_97a7555c1af94563a8741003df2b9f94.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingGypsumPlusSDS(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_97a7555c1af94563a8741003df2b9f94.pdf');
    });

    test('Verify Turf King Gypsum Plus Spec Sheet opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_9feebd7defc34b0292eb670a9b020230.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingGypsumPlusSpecSheet(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_9feebd7defc34b0292eb670a9b020230.pdf');
    });

    test('Verify Turf King Gypsum Plus Mini Label opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_2c6436105d0c4cf8aaee4372cb56e10c.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingGypsumPlusMiniLabel(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_2c6436105d0c4cf8aaee4372cb56e10c.pdf');
    });

    test('Verify Turf King Gypsum Plus Mini SDS opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_97a7555c1af94563a8741003df2b9f94.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingGypsumPlusMiniSDS(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_97a7555c1af94563a8741003df2b9f94.pdf');
    });

    test('Verify Turf King Gypsum Plus Mini Spec Sheet opens correct PDF link', async ({ page }) => {
        
        const enhancedLimeGyspum = new EnhancedLimeGypsum(page);

        // Capture the navigation request to avoid headless failure
        const [request] = await Promise.all([
            page.waitForEvent('request', request => 
                request.url() === 'https://www.andreandson.com/_files/ugd/3bd49b_8cc591c009b94a8b84a9bef941cc9c68.pdf'
            ),
            //click on Turf King Cal Plus Label Button
            enhancedLimeGyspum.clickTurfKingGypsumPlusMiniSpecSheet(),
        ]);

        // Verify the correct PDF URL was requested
        expect(request.url()).toBe('https://www.andreandson.com/_files/ugd/3bd49b_8cc591c009b94a8b84a9bef941cc9c68.pdf');
    });
});