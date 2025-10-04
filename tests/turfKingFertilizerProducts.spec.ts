import { test, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer.page';

/* Verify text title 'Turf King Fertilizer Products' is visible and matches. */

test('Turf King Fertilizer Products text matches', async ({ page }) => {  
 // visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

// verify that text 'Turf King Fertilizer Products' is visible 
    await expect(page.getByText('Turf King Fertilizer Products')).toHaveText('Turf King Fertilizer Products');

});



/*verify subtext exists and matches*/

test('verify subtext exists and matches', async ({ page }) => { 
     
 // visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

/* verify subtext exists and matches */
    await expect(page.getByText('We are the Turf King for a reason.')).toHaveText('We are the Turf King for a reason.'); 

})

/* verify 'Turf King Fertilizer' image is visible */
test('verify Turf King Fertilizer image is visible', async ({ page })=>{
  
//instance of page object
   const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

// visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).first().hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();
    
//verify image is visible//
    await expect(turfKingFertilizerPage.turfKingFertImg).toBeVisible();
    
})


/* verify 'Turf King Fertilizer' bag image is visible */
test('verify Turf King Fertilizer bag image is visible', async ({ page })=>{

//instance of page object
  const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

// visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).first().hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

// verify image is visible

  // verify image is visible
   await expect(turfKingFertilizerPage.turfKingFertImgBag).toBeVisible();

})