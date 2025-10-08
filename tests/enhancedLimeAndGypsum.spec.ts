import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { AmendmentsConditioners } from '../pages/amendmentsConditionersPage'
import { TurfProducts } from '../pages/turfProductsPage';
import { EnhancedLimeGypsum } from '../pages/enhancedLimeGypsumPage';
import { FertlSoil } from '../pages/fertlSoilPage';

//Verify that page title includes "Enhanced Lime & Gypsum"
test('Verify that page title includes "Enhanced Lime & Gypsum"', async ({ page }) => {

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

    //verify Enhanced Lime and Gypsum in header
    await expect(enhancedLimeGypsum.enhancedLimeGyspumHeader).toContainText("Enhanced Lime & Gypsum");

});

//Verify that Vefify that after clicking "Learn More" button under FertlSoil, page contains "FerlSoil" in title
test('Verify that page title includes FertlSoil', async ({ page }) => {

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

    //click on Enhanced Lime and Gypsum Learn More
    await amendmentsConditionersPage.navigateToEnhancedLimeGyspum();

    //click on FertlSoil Learn More
    await enhancedLimeGypsum.navigateToFertlSoil();

    //verify FertlSoil in header
    await expect(fertlSoil.fertlSoilHeader).toContainText("Fertl Soil");
})