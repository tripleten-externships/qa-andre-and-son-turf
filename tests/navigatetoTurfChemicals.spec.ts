import { test, expect } from '@playwright/test';

/* Verify clicking on Turf Chemicals from main page header Turf products takes the user to correct page
*/

test('Verify clicking on Turf Chemicals from main page header Turf products takes the user to correct page', async ({ page }) => {
  // Visit the web application
    await page.goto('/');
    await page.pause();
  // Hower mouse over to Turf products
    await page.hover('text=TURF PRODUCTS');
    await page.pause();
  // a list of options is displayed
  // click Turf Chemicals
    await page.getByRole('link', {name: 'TURF CHEMICALS'}).first().click();
  
});

