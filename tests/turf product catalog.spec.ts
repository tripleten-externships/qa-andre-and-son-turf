import { test, expect } from '@playwright/test';
import { TurfProductCatalogPage } from '../pages/turf product catalog';

//before each async function to go to the turf product catalog page
test.beforeEach(async ({ page }: { page: import('@playwright/test').Page }) => {
    const turfProductCatalogPage = new TurfProductCatalogPage(page);
    await turfProductCatalogPage.page.goto('/turf-product');
    await turfProductCatalogPage.page.waitForLoadState('networkidle');
});

//beforeEach(async ({ page }) => {
// /go to home page
//click on the "turf products" title to go to the turf product catalog page
//});


/* Verify the turf product catalog page is opened when the user goes to the turf product catalog page 
verify the page has a video running on the page.
verify the hero section has a title "There's a Reason We're the Turf King - See for Yourself" on it.
verify the hero section has a description "See for yourself why we're the best in the business".
verify the page has a title "Turf Product Catalog" heading on the left side of the page.
verify the title"Turf Product catalog" title has a description "Browse our product catalog" under it.
verify the page has a title "combination products" on the right side of the page.
verify the title "combination products" has a description under it.
verify their is a "learn more" button under the description of the "combination products" title.*/


test('turf product catalog page', async ({ page }) => {
    //go to the page
    await page.goto('/turf-product');
    //verify the page is correct
    await expect(page).toHaveURL(/.*turf-product/);
    //verify their is a video playing on the page;
    await expect(page.locator('video')).toBeVisible();
    //verify the hero section has a title "There's a Reason We're the Turf King - See for Yourself" on it
    await expect(page.locator('text=There\'s a Reason We\'re the Turf King - See for Yourself')).toBeVisible();
    //verify the hero section has a description "See for yourself why we're the best in the business."
    await expect(page.locator('text=See for yourself why we\'re the best in the business.')).toBeVisible();
    //verify the page has a title "Turf Product Catalog" heading on the left side of the page
    await expect(page.locator('h1', { hasText: 'Turf Product Catalog' })).toBeVisible();
    //verify the title"Turf Product catalog" title has a description "Browse our product catalog" under it.
    await expect(page.locator('text=Browse our product catalog')).toBeVisible();
    //verify the page has a title "combination products" on the right side of the page.
    await expect(page.locator('text=Combination Products')).toBeVisible();
    //verify the title "combination products" has a description under it.
    await expect(page.locator('text=Our combination products offer the best of both worlds')).toBeVisible();
    //verify their is a "learn more" button under the description of the "combination products" title.
    await expect(page.locator('text=Learn More')).toBeVisible();
});

/*verify the page has a title"Turf king Fertilizer" on the left side of the page.
verify the title "Turf king Fertilizer" has a description under it.
verify their is a "learn more" button under the description of the "Turf king Fertilizer" title.*/

test('verify Turf king Fertilizer on the turf product catalog page', async ({ page }) => {
    //go to the page
    await page.goto('/turf-product');
    //verify the page is correct
    await expect(page).toHaveURL(/.*turf-product/);
    //verify the page has a title"Turf king Fertilizer" on the left side of the page
    await expect(page.locator('text=Turf King Fertilizer')).toBeVisible();
    //verify the title "Turf king Fertilizer" has a description under it.
    await expect(page.locator('text=Our Turf King Fertilizer is specially formulated for optimal growth')).toBeVisible();
    //verify their is a "learn more" button under the description of the "Turf king Fertilizer" title.
    await expect(page.locator('text=Learn More')).toBeVisible();

});

/*verify the page has a title"Control Agents" on the right side of the page
 verify the title "Control Agents" has a description under it.
 verify their is a "learn more" button under the description of the "Control Agents" title.*/

test('verify Control Agents on the turf product catalog page', async ({ page }) => {
    //go to the page
    await page.goto('/turf-product');
    //verify the page is correct
    await expect(page).toHaveURL(/.*turf-product/);
    //verify the page has a title"Control Agents" on the right side of the page
    await expect(page.locator('text=Control Agents')).toBeVisible();
    //verify the title "Control Agents" has a description under it.
    await expect(page.locator('text=Our Control Agents are designed to tackle tough weeds')).toBeVisible();
    //verify their is a "learn more" button under the description of the "Control Agents" title.
    await expect(page.locator('text=Learn More')).toBeVisible();

});

/*verify the page has a title"Liquid fertilizer" on the left side of the page
verify the title "Liquid fertilizer" has a description under it.
verify their is a "learn more" button under the description of the "Liquid fertilizer" title*/

test('verify Liquid fertilizer on the turf product catalog page', async ({ page }) => {
    //go to the page
    await page.goto('/turf-product');
    //verify the page is correct
    await expect(page).toHaveURL(/.*turf-product/);
    //verify the page has a title"Liquid fertilizer" on the left side of the page
    await expect(page.locator('text=Liquid Fertilizer')).toBeVisible();
    //verify the title "Liquid fertilizer" has a description under it.
    await expect(page.locator('text=Our Liquid Fertilizers provide quick nutrient uptake')).toBeVisible();
    //verify their is a "learn more" button under the description of the "Liquid fertilizer" title.
    await expect(page.locator('text=Learn More')).toBeVisible();
});

/*verify the page has a title"Seed" on the right side of the page
verify the title "Seed" has a description under it.
verify their is a "learn more" button under the description of the "Seed" title.*/

test('verify Seed on the turf product catalog page', async ({ page }) => {
    //go to the page
    await page.goto('/turf-product');
    //verify the page is correct
    await expect(page).toHaveURL(/.*turf-product/);
    //verify the page has a title"Seed" on the right side of the page
    await expect(page.locator('text=Seed')).toBeVisible();
    //verify the title "Seed" has a description under it.
    await expect(page.locator('text=Our Seed products are designed for optimal growth')).toBeVisible();
    //verify their is a "learn more" button under the description of the "Seed" title.
    await expect(page.locator('text=Learn More')).toBeVisible();
});

/*verify the page has a title"Amendments & Conditioners" on the left side of the page
 verify the title "Amendments & Conditioners" has a description under it.
 verify their is a "learn more" button under the description of the "Amendments & Conditioners" title.*/

test('verify Amendments & Conditioners on the turf product catalog page', async ({ page }) => {
    //go to the page
    await page.goto('/turf-product');
    //verify the page is correct
    await expect(page).toHaveURL(/.*turf-product/);
    //verify the page has a title"Amendments & Conditioners" on the left side of the page
    await expect(page.locator('text=Amendments & Conditioners')).toBeVisible();
    //verify the title "Amendments & Conditioners" has a description under it.
    await expect(page.locator('text=Our Amendments & Conditioners are designed to improve soil health')).toBeVisible();
    //verify their is a "learn more" button under the description of the "Amendments & Conditioners" title.
    await expect(page.locator('text=Learn More')).toBeVisible();
}); 

/*verify the page has a title"Top Dressing & Bunker Sand" on the right side of the page
 verify the title "Top Dressing & Bunker Sand" has a description under it.
 verify their is a "learn more" button under the description of the "Top Dressing & Bunker Sand" title.*/

test('verify Top Dressing & Bunker Sand on the turf product catalog page', async ({ page }) => {
    //go to the page
    await page.goto('/turf-product');
    //verify the page is correct
    await expect(page).toHaveURL(/.*turf-product/);
    //verify the page has a title"Top Dressing & Bunker Sand" on the right side of the page
    await expect(page.locator('text=Top Dressing & Bunker Sand')).toBeVisible();
    //verify the title "Top Dressing & Bunker Sand" has a description under it.
    await expect(page.locator('text=Our Top Dressing & Bunker Sand is perfect for golf courses')).toBeVisible();
    //verify their is a "learn more" button under the description of the "Top Dressing & Bunker Sand" title.
    await expect(page.locator('text=Learn More')).toBeVisible();

});

/*verify the page has a title"Ice Melt" on the left side of the page
 verify the title "Ice Melt" has a description under it.
 verify their is a "learn more" button under the description of the "Ice Melt" title.*/

test('verify Ice Melt on the turf product catalog page', async ({ page }) => {
    //go to the page
    await page.goto('/turf-product');
    //verify the page is correct
    await expect(page).toHaveURL(/.*turf-product/);
    //verify the page has a title"Ice Melt" on the left side of the page
    await expect(page.locator('text=Ice Melt')).toBeVisible();
    //verify the title "Ice Melt" has a description under it.
    await expect(page.locator('text=Our Ice Melt products are designed to keep your surfaces safe')).toBeVisible();
    //verify their is a "learn more" button under the description of the "Ice Melt" title.
    await expect(page.locator('text=Learn More')).toBeVisible();

});    