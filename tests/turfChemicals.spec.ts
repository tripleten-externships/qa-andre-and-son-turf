import { test, expect } from '@playwright/test';

/* Test case 132:Verify that clicking on "Learn More" button under "Albaugh" takes the user to "Albaugh" page
*/

test('Test case 132:Verify that clicking on "Learn More" button under "Albaugh" takes the user to "Albaugh" page', async ({ page }) => {
  // Visit the web application
    await page.goto('https://www.andreandson.com/control-agents-2');
    
    await page.pause();
  // click first learn more under Albaugh title
    const firstLearnMore = page.locator('text=Learn More').first();
    await firstLearnMore.click();
});

