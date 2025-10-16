import { test, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';

test.beforeEach(async ({ page }) => {

// visit the website 
    await page.goto('/');
    
//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();

    if (await page.getByText('Turf King Fertilizer').nth(1).isVisible()){
        
    // click on 'Turf King Fertilizer'
        await page.getByText('Turf King Fertilizer').nth(1).click();    
    }
    else {await page.goto('https://www.andreandson.com/turf-king-dry-fertilizer');}
  
})

test('when hovering over ABOUT in the header, it shows menu', async ({ page }) => { 
    const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

    // Hover over 'About' in the header
    
    await expect(turfKingFertilizerPage.aboutHeader).toBeVisible();
    await turfKingFertilizerPage.aboutHeader.hover();
    await page.waitForTimeout(1000);
   

    const aboutDropdownItem = page.getByText('Our Story', { exact: true });
    
})

