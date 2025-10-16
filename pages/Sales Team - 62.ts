/* DO NOT EDIT — saved copy of working test
   Photo Gallery Test Case 62:Verify that Photo Gallery link is visible in the About drop-down menu without needing to hover over an invisible area.
*/
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.andreandson.com/photo-gallery');
  
  // Wait for the page to load completely
  await page.waitForLoadState('networkidle');
  
  // Debug: Log all elements with data-testid attributes
  const allTestIds = await page.$$eval('[data-testid]', elements => 
    elements.map(el => el.getAttribute('data-testid'))
  );
  console.log('Available test IDs:', allTestIds);
  
  // Find and hover over the linkElement-3 to reveal hidden links
  const linkElement = page.getByTestId('linkElement-3');
  await expect(linkElement).toBeVisible();
  await linkElement.hover();
  
  // Wait a moment for the hover effect to take place
  await page.waitForTimeout(1000);
  
  // Debug: Check if the element exists but might not be visible
  const hiddenElement = page.getByTestId('linkElement-3-0');
  const elementExists = await hiddenElement.count();
  console.log('linkElement-3-0 count:', elementExists);
  
  if (elementExists > 0) {
    const isVisible = await hiddenElement.isVisible();
    console.log('linkElement-3-0 is visible:', isVisible);
  }
  
  // Wait for the target element to become visible after hovering
  await expect(page.getByTestId('linkElement-3-0')).toBeVisible({ timeout: 10000 });
  
  // Wait 10 seconds so the tester can see the results
  await page.waitForTimeout(10000);
});