import { test, expect } from '@playwright/test';

/* Verify that clicking on "Learn More" button takes the user to their respective page
*/

test('Verify that clicking on "Learn More" button takes the user to their respective page', async ({ page }) => {
  // Visit the web application
    await page.goto('https://www.andreandson.com/control-agents-2');
    
    await page.pause();
  // click first learn more under Albaugh title
    const firstLearnMore = page.locator('text=Learn More').first();
    await firstLearnMore.click();

      // Verify Albaugh page opened
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL('https://www.andreandson.com/prime-source');

  // Go back to Turf Chemicals page
    await page.goBack();
    await page.waitForLoadState('domcontentloaded');
    page.pause();
    await expect(page).toHaveURL(/control-agents-2/);

  // Click the second Learn More button
    page.pause();
    const secondLearnMore = page.locator('text=Learn More').nth(1);
    await secondLearnMore.click();

  // Verify user is on AMVAC page
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL('https://www.andreandson.com/amvac');

      // Go back to Turf Chemicals page
    await page.goBack();
    await page.waitForLoadState('domcontentloaded');
    page.pause();
    await expect(page).toHaveURL(/control-agents-2/);

      // Click the third Learn More button
    page.pause();
    const thirdLearnMore = page.locator('text=Learn More').nth(2);
    await thirdLearnMore.click();

      // Verify user is on BASF page
    await page.waitForLoadState('domcontentloaded');
    await expect(page).toHaveURL('https://www.andreandson.com/basf');

          // Go back to Turf Chemicals page
    await page.goBack();
    await page.waitForLoadState('domcontentloaded');
    page.pause();
    await expect(page).toHaveURL(/control-agents-2/);

       // Click the fourth Learn More button
    page.pause();
    const FourthLearnMore = page.locator('text=Learn More').nth(3);
    await FourthLearnMore.click();

     // Go back to Turf Chemicals page
    await page.goBack();
    await page.waitForLoadState('domcontentloaded');
    page.pause();
    await expect(page).toHaveURL(/control-agents-2/);

      // Click the fifth Learn More button
    page.pause();
    const FifthLearnMore = page.locator('text=Learn More').nth(4);
    await FifthLearnMore.click();
});

