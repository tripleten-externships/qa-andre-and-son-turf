import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe';

test.beforeEach(async ({ page }) => {

await navigateToTurfKingFertilizerPage(page);
  
})

test('Turf King Micro SGN 90 title and text are visible', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);


//title is visible
    await expect(turfKingFertilizerPage.turfKingMicro90Title).toBeVisible();

//text is visible
    await expect(turfKingFertilizerPage.turfKingMicro90Text).toBeVisible();

})

//learn more link

test('Turf King Micro SGN 90 learn more link', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);
    
//learn more is visible
    await expect(turfKingFertilizerPage.turfKingMicro90LearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await turfKingFertilizerPage.turfKingMicro90LearnMoreLink.click();

})