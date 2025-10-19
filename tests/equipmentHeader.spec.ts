import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe';

test.beforeEach(async ({ page }) => {
    await navigateToTurfKingFertilizerPage(page);  
})

test('Equipment in header is visible and takes you to designated page', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

    

//click on 'EQUIPMENT' in the header

    await turfKingFertilizerPage.equipmentHeader.isVisible();
    await turfKingFertilizerPage.equipmentHeader.click();

})