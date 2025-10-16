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

test('Andre&Son logo in header is visible and takes you to designated page', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//andre&son logo in header is visible and takes you back to the home page

    await turfKingFertilizerPage.andreAndSonLogoHeader.isVisible();
    await turfKingFertilizerPage.andreAndSonLogoHeader.click();

})

