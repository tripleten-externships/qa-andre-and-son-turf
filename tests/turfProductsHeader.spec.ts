import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe';

test.beforeEach(async ({ page }) => {

await navigateToTurfKingFertilizerPage(page);   
})

test('TURF PRODUCTS in header is visible and takes you to designated page', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

   // await turfKingFertilizerPage.navigate();

//turf products in header is visible and takes you to the designated page when clicked
    await turfKingFertilizerPage.turfProductsMenu.isVisible();
    await turfKingFertilizerPage.turfProductsMenu.click();
})
