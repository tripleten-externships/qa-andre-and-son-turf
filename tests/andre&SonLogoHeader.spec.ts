import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe';


test.beforeEach(async ({ page }) => {
    await navigateToTurfKingFertilizerPage(page);
  
})

test('Andre&Son logo in header is visible and takes you to designated page', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//andre&son logo in header is visible and takes you back to the home page

    await turfKingFertilizerPage.andreAndSonLogoHeader.isVisible();
    await turfKingFertilizerPage.andreAndSonLogoHeader.click();

})

