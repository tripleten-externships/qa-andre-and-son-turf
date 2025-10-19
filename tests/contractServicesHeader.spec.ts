import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe';

test.beforeEach(async ({ page }) => {
    await navigateToTurfKingFertilizerPage(page);
  
})

test('when hovering over contract services in the header, it shows menu, and when clicked it takes you to the designated page', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);


//hover over 'Contract Services' in the header
    await turfKingFertilizerPage.contractServicesHeader.hover();


//verify that when clicked, it takes you to the designated page

    await turfKingFertilizerPage.contractServicesHeader.click();
})
