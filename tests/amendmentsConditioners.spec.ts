import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/homePage'
import { AmendmentsConditioners } from '../pages/amendmentsConditionersPage'
import { TurfProducts } from '../pages/turfProductsPage';

//Verify that page title includes "Ammendments and Conditioners"
test('Verify that page title includes Ammendments and Conditioners', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const amendmentsConditionersPage = new AmendmentsConditioners(page);

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
    
    //verify Amendments and Conditioners in header
    await expect(amendmentsConditionersPage.AmendmentsConditionersHeader).toContainText('Amendments & Conditioners');

});