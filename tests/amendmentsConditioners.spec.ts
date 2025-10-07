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

    //click Turf Products in header
    await homePage.navigateToTurfProducts();

    //Click Learn More under Amendments and Conditioners
    await turfProducts.navigatetoAmendments();

    //verify header
    await expect(amendmentsConditionersPage.AmendmentsConditionersHeader).toContainText('Amendments & Conditioners');

})