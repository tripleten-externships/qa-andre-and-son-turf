import { test, expect } from '@playwright/test';
import { TuftProductsPage } from '../pages/turfproducts';

//* Verify that the title "TURF PRODUCT CATALOG" and description under is visible and readable by user
test('verify "TURF PRODUCT CATALOG" description is visible', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    await page.goto('/');
    //click on "Turf Products" title
    await turfProductsPage.clickTurfProductsTitle();
    //assert that "TURF PRODUCT CATALOG" title and description is visible
    await expect(turfProductsPage.turfProductsCatalogText).toBeVisible();
});

test('verify "Combination Products" and description are visible', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    //go to home page
    await page.goto('/');
    //click on "Turf Products" title
    await turfProductsPage.clickTurfProductsTitle();
    //assert that "Combination Products" title and description is visible
    await expect(turfProductsPage.combinationProductsTitle).toBeVisible();
    await expect(turfProductsPage.combinationProductsText).toBeVisible();
});

