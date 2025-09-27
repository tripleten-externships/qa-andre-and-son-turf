import { test, expect } from '@playwright/test';

/* Test case 113: Verify that the description under title "Turf Chemicals" 
    is visible and readable by user
*/

test('has title', async ({ page }) => {
  // Visit the web application
    await page.goto('/');
    await page.pause();
  // Hower mouse over to Turf products
    await page.hover('text=TURF PRODUCTS');
    await page.pause();
  // a list of options is displayed
  // click Turf Chemicals
    await page.click('text=TURF CHEMICALS'); 
});

