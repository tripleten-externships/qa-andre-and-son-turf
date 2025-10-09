import { test, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';

test('when hovering over ABOUT in the header, it shows menu', async ({ page }) => { 
    const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

    // Visit the website 
    await page.goto('/');

    //hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();
 
    // click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

    // Hover over 'About' in the header
    
    await expect(turfKingFertilizerPage.aboutHeader).toBeVisible();
    await page.getByRole('link', { name: 'ABOUT' }).nth(0).hover();
    

    //click to confirm visibility/menu interaction
    await page.getByRole('button', { name: 'ABOUT', exact: true }).click();

})

