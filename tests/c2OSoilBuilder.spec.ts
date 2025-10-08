import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { AmendmentsConditioners } from '../pages/amendmentsConditionersPage';
import { C2OSoilBuilder } from '../pages/c2oSoilBuilderPage';
import { TurfProducts } from '../pages/turfProductsPage';

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