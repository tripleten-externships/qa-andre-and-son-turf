/* DO NOT EDIT — saved copy of working test
   Our Story and Team Test Case 53: Verify that Our Story & Team link is visible in the About drop-down menu without needing to hover over an invisible area.
*/

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.andreandson.com/about-1');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Find and hover over the linkElement-3 to reveal hidden links
  const linkElement = page.getByTestId('linkElement-3');
  await expect(linkElement).toBeVisible();
  await linkElement.hover();
  
  // Wait a moment for the hover effect to take place
  await page.waitForTimeout(1000);
  
  // Wait for the target element to become visible after hovering
  await expect(page.getByTestId('linkElement-3-0')).toBeVisible({ timeout: 10000 });
  
  // Wait 10 seconds so the tester can see the results
  await page.waitForTimeout(10000);
});