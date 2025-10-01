import{ test, expect } from '@playwright/test';
import { HomePage } from '../pages/';

/* verify the "TURF PRODUCTS" heading is present  on the homepage.
 verify a dropdown menu is present when hovering over the "TURF PRODUCTS" heading.
 verify the dropdown menu has "Turf King combo products" on the first position*/

 test('verify the "TURF PRODUCTS" heading is present  on the homepage', async ({ page }) => {
    //go to the webpage
     await HomePage.goto('/')
    //verify the "TURF PRODUCTS" heading is present  on the homepage.
    await expect(HomePage.turfProductsHeading).toBeVisible();
    //hover over the "TURF PRODUCTS" heading.
    await HomePage.turfProductsHeading.hover();
    //verify a dropdown menu is present when hovering over the "TURF PRODUCTS" heading.
    await expect(HomePage.turfProductsDropdown).toBeVisible();
    //verify the dropdown menu has "Turf King combo products" on the first position
    await expect(HomePage.turfProductsDropdownFirstOption).toHaveText('Turf King Combo Products');

    });
