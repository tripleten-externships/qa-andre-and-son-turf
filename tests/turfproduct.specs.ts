import{ test, expect } from '@playwright/test';

/* verify the "TURF PRODUCTS" heading is present  on the homepage.
 verify a dropdown menu is present when hovering over the "TURF PRODUCTS" heading.
 verify the dropdown menu has "Turf King combo products" on the first position*/

 test('verify the "TURF PRODUCTS" heading is present  on the homepage', async ({ page }) => {
    //go to the webpage
     await page.goto('/')
    //verify the "TURF PRODUCTS" heading is present  on the homepage.
    await expect(page.locator('text=TURF PRODUCTS')).toBeVisible();
    //hover over the "TURF PRODUCTS" heading.
    await page.locator('text=TURF PRODUCTS').hover();
    //verify a dropdown menu is present when hovering over the "TURF PRODUCTS" heading.
    await expect(page.locator('text=Turf King Combo Products')).toBeVisible();
    //verify the dropdown menu has "Turf King combo products" on the first position
    await expect(page.locator('text=Turf King Combo Products')).toHaveText('Turf King Combo Products');

    });
    