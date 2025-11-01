import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe';

test.beforeEach(async ({ page }) => {
    await navigateToTurfKingFertilizerPage(page);
})

test('More menu in header', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

    

//hover over MORE in the header

    await expect(turfKingFertilizerPage.moreHeaderMenu).toBeVisible();
    await turfKingFertilizerPage.moreHeaderMenu.hover();
    

})