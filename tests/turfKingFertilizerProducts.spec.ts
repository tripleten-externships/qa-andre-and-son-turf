import { test, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe'; 

/* Verify text title 'Turf King Fertilizer Products' is visible and matches. */

test.beforeEach(async ({ page }) => {

    await navigateToTurfKingFertilizerPage(page);
  
})

test('Turf King Fertilizer Products text matches', async ({ page }) => {  
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

// verify that text 'Turf King Fertilizer Products' is visible 
    await turfKingFertilizerPage.turfKingFertilizerProductsTitle.isVisible();

});



/*verify subtext exists and matches*/

test('verify subtext exists and matches', async ({ page }) => { 
  const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

  // Verify the hero subtext element is visible
  await expect(turfKingFertilizerPage.heroSubtitleText).toBeVisible();

  // Verify it matches the expected text
  await expect(turfKingFertilizerPage.heroSubtitleText).toContainText('We are the Turf King for a reason.');
});

/* verify 'Turf King Fertilizer' image is visible */
test('verify Turf King Fertilizer image is visible', async ({ page })=>{
  
//instance of page object
    const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

//verify image is visible//
    await expect(turfKingFertilizerPage.turfKingFertImg).toBeVisible();
    
})


/* verify 'Turf King Fertilizer' bag image is visible */
test('verify Turf King Fertilizer bag image is visible', async ({ page })=>{

//instance of page object
    const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

  // verify image is visible

  // verify image is visible
    await expect(turfKingFertilizerPage.turfKingFertImgBag).toBeVisible();

})