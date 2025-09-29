import { test, expect } from '@playwright/test';

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

//test('Learn More button', async ({ page }) => {  
//click on 'Learn More'
    //await expect(page.getByText('Learn More')).toBeVisible();
    //await page.locator('#comp-klzdqzkr1__item1').getByTestId('linkElement').click();

//});


/* Verify 'Learn More' links are visible under each sub-title. */

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