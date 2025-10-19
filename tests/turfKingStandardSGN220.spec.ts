import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe';

test.beforeEach(async ({ page }) => {

await navigateToTurfKingFertilizerPage(page);
  
})

test('Turf King Standard SGN 220 title and text are visible', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);


//Turf King Standard SGN 220 title is visible
    await expect(turfKingFertilizerPage.turfKingStandardSGN220Title).toBeVisible();
    
})

test('Turf King Standard SGN 220 learn more link', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);
    
//Learn More is visible
    await expect(turfKingFertilizerPage.turfKingStandardLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await turfKingFertilizerPage.turfKingStandardLearnMoreLink.click();
}); 
