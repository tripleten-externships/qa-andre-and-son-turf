import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';

test('Turf King Standard SGN 220 title and text are visible', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

    
// visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

//Turf King Standard SGN 220 title is visible
    await expect(turfKingFertilizerPage.turfKingStandardSGN220Title).toBeVisible();


//Turf King Standard SGN 220 text is visible
    //await expect(turfKingFertilizerPage.turfKingStandardSGN220Text).toBeVisible();

})

test('Turf King Standard SGN 220 learn more link', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);
// visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

//Learn More is visible
    await expect(turfKingFertilizerPage.turfKingStandardLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(0).click();
}); 
