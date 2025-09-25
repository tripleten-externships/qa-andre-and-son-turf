import { test, expect } from '@playwright/test';

/* Verify text title 'Turf King Fertilizer Products' is visible and matches. */

test('Turf King Fertilizer Products text matches', async ({ page }) => {  
 /* visit the website */
    await page.goto('https://www.andreandson.com/turf-king-dry-fertilizer');
/* verify that text 'Turf King Fertilizer Products' exists */
    await expect(page.getByText('Turf King Fertilizer Products')).toHaveText('Turf King Fertilizer Products');

});




