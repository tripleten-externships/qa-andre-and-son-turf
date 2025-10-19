import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe';

test.beforeEach(async ({ page }) => {

    await navigateToTurfKingFertilizerPage(page);
  
})

test('Turf King Enhanced SGN 220 title and text are visible', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);


// turf king enhanced title to be visible
    await expect(turfKingFertilizerPage.turfKingEnhancedSGN220Title).toBeVisible();

//verify 'Turf King Enhanced SGN 220' text is visible and matches
    await expect(turfKingFertilizerPage.turfKingEnhancedSGN220Text).toBeVisible();
 
})

test('Turf King Enhanced SGN 220 learn more link', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);


//learn more link is visible
    await expect(turfKingFertilizerPage.turfKingEnhancedLearnMoreLink).toBeVisible();


//click on learn more, verify it takes you to the proper page
    await turfKingFertilizerPage.turfKingEnhancedLearnMoreLink.click();
    

})