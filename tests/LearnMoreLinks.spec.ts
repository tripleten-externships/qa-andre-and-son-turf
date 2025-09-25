import { test, expect } from '@playwright/test';


/* Verify 'Learn More' links are visible under each sub-title. */

test('Learn More links exist', async ({ page }) => {  
/* visit the website */
    await page.goto('https://www.andreandson.com/turf-king-dry-fertilizer');
/* check that there is a 'Learn More' text under each sub-title */
    await expect(page.getByText('Learn More')).toBeVisible();
})