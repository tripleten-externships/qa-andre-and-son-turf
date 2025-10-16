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

test('The Andersons title and text are visible', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);


//title is visible
    await expect(turfKingFertilizerPage.theAndersonsTitle).toBeVisible();

//text is visible
    await expect(turfKingFertilizerPage.theAndersonsText).toBeVisible();

})

//learn more link

test('The Andersons learn more link', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);
    

//learn more is visible
    await expect(turfKingFertilizerPage.theAndersonsLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(5).click();

})