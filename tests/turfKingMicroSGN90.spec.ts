import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';

test('Turf King Micro SGN 90 title and text are visible', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

    
// visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

//title is visible
    await expect(turfKingFertilizerPage.turfKingMicro90Title).toBeVisible();

//text is visible
    await expect(turfKingFertilizerPage.turfKingMicro90Text).toBeVisible();

})

//learn more link

test('Turf King Micro SGN 90 learn more link', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);
// visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

//learn more is visible
    await expect(turfKingFertilizerPage.turfKingMicro90LearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(3).click();

})