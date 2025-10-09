import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';

test.beforeEach(async ({ page }) => {

// visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();

// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();
})

test('TURF PRODUCTS in header is visible and takes you to designated page', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

   // await turfKingFertilizerPage.navigate();

//turf products in header is visible and takes you to the designated page when clicked
    await turfKingFertilizerPage.turfProductsMenu.isVisible();
    await turfKingFertilizerPage.turfProductsMenu.click();
})
