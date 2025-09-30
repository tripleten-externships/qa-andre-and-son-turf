import { test, expect } from '@playwright/test';
import { TuftProductsPage } from '../pages/turfproducts';

//* Verify that the title "TURF PRODUCT CATALOG" and description under is visible and readable by user
//* Verify that clicking on "tuft products" hyperlink in the "TURF PRODUCT CATALOG" description opens the company's website "Turf Products" in another tab.
//* Verify that "Turf King Fertilizer" logo has Alt text in Devtools
test('verify "TURF PRODUCT CATALOG"', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    await page.goto('/');
    //click on "Turf Products" title
    await turfProductsPage.clickTurfProductsTitle();
    //assert that "TURF PRODUCT CATALOG" title and description is visible
    await expect(turfProductsPage.turfProductsCatalogTitle).toBeVisible();
    await expect(turfProductsPage.turfProductsCatalogText).toBeVisible();
     //assert that the "turf king" logo has alt text
    await expect(page.getByAltText('turf_king_fert.png')).toBeVisible();
    //click on "tuft products" link in the text
    await page.getByRole('link', { name: 'urf products', exact: true }).click();
    //assert that the url is correct
    await expect(page).toHaveURL('/https://www.andreandson.com/turf-products/');
});

//* Verify that the title "Combination Products" and description under is visible and readable by user
//* Verify the image under "Combination Products" has Alt text in Devtools. 
//* Verify that clicking on "combination products" hyperlink in the "Combination Products" description takes the user to "Turf King Combination Products" page
test('verify "Combination Products" and description are visible', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    await page.goto('/');
    //click on "Turf Products" title
    await turfProductsPage.clickTurfProductsTitle();
    //assert that "Combination Products" title and description is visible
    await expect(turfProductsPage.combinationProductsTitle).toBeVisible();
    await expect(turfProductsPage.combinationProductsText).toBeVisible();
    //assert that the "Combination Products" image has alt text
    await expect(page.getByAltText('combination products.jpg')).toBeVisible();    
    //click on "combination products" link in the text
    await page.getByRole('link', { name: 'combination products' }).click();
    //assert that the url is correct
    await expect(page).toHaveURL('/https://www.andreandson.com/turf-king-combo-products/');
});

//* Verify that clicking on "Learn More" button under "Combination Products" takes the user to "Turf King Combination Products" page
test('has title', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    await page.goto('/');
    //click on "Turf Products" title
    await turfProductsPage.clickTurfProductsTitle();
    //click on "Learn More" button under "Combination Products"
    await page.getByRole('link', { name: 'Learn More', exact: true }).nth(0).click();
    //assert that the url is correct
    await expect(page).toHaveURL('/https://www.andreandson.com/turf-king-combo-products/');
});

