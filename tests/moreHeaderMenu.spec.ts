import { test, Locator, expect } from '@playwright/test';
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
test('More menu in header', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

    

//hover over MORE in the header

    await expect(turfKingFertilizerPage.moreHeaderMenu).toBeVisible();
    await page.getByText('More', {exact: true}).hover();
    

})