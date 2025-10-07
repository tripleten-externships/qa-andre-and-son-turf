import{ test, expect } from '@playwright/test';
import {  TurfKingComboProductsPage } from '../pages/turfkingcomboproducts';
import { HomePage } from '../pages/turfproduct';


/*verify when the user hover over the "Turf Products" title in the header dropdown menu appear has "turf king combo products" on the top of the menu
verify when clicked it navigates to the turf king combo products page*/

test('Turf King Combo Products Page opens when the user hover over "turf  product"title and click on"turf king combo product"in the menu ', async ({ page }) => {
    const turfProductCatalogPage = new TurfKingComboProductsPage(page);
    const turfKingComboProductsPage = new TurfKingComboProductsPage(page);
    const homePage = new HomePage(page);
    //go to the home page
    await homePage.goto('/');
    await homePage.waitForLoad();
    // Hover over the "Turf Products" dropdown in the header 
    await page.hover('#comp-igauz7ee0 >> text=TURF PRODUCTS');
    // Verify that the dropdown menu appears with "Turf King Combo Products" on the top of the menu
    await expect(page.getByRole('link', { name: 'TURF KING COMBO PRODUCTS' })).toBeVisible();
    // Click on the "Turf King Combo Products" link in the dropdown
    await page.getByRole('link', { name: 'TURF KING COMBO PRODUCTS' }).click();
    // Verify that the Turf King Combo Products page is open
    await expect(page).toHaveURL(/.*turf-king-combo-products/);
    //verify the new page is correct
    await expect(page.locator('p', { hasText: 'Turf King Combination Products' })).toBeVisible();

});

/*verify the "turf king combo products" page has a title "Turf King Combination" on it
verify the title "Turf King Combination" has a description under it.
verify the page has an image of the "turf king combo products" on it.*/

test('Turf King Combo Products Page content verification', async ({ page }) => {
    const turfKingComboProductsPage = new TurfKingComboProductsPage(page);
    // Verify the page has a title "Turf King Combination" on it
    await expect(page.locator('h1', { hasText: 'Turf King Combination' })).toBeVisible();
    // Verify the title "Turf King Combination" has a description under it.
    await expect(page.locator('p', { hasText: 'Turf King Combination Products' })).toBeVisible();
    // Verify the page has an image of the "turf king combo products" on it.
    await expect(page.locator('img[alt="Turf King Combination Products"]')).toBeVisible();
});
