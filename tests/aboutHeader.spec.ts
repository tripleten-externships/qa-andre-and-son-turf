import { test, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage } from '../pages/natureSafe';

test.beforeEach(async ({ page }) => {
await navigateToTurfKingFertilizerPage(page);

});

test('when hovering over ABOUT in the header, it shows menu', async ({ page }) => { 
    const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

    // Hover over 'About' in the header
    
    await expect(turfKingFertilizerPage.aboutHeader).toBeVisible();
    await turfKingFertilizerPage.aboutHeader.hover();
    await page.waitForTimeout(1000);
   

    const aboutDropdownItem = page.getByText('Our Story', { exact: true });
    
})

