import { test, expect } from '@playwright/test';

/* Verify the turf product catalog page is opened when the user goes to the turf product catalog page 
verify the page has a video running on the page
verify the hero section has a title "There's a Reason We're the Turf King - See for Yourself" on it
verify the hero section has a description "See for yourself why we're the best in the business."
verify the page has a title "Turf Product Catalog" heading on the left side of the page
verify the title"Turf Product catalog" title has a description "Browse our product catalog" under it.
verify the page has a title "combination products" on the right side of the page.
verify the title "combination products" has a description under it.
verify their is a "learn more" button under the description of the "combination products" title.
verify the "learn more" button is clickable and when clicked it opens a new page with more information about the combination products.*/


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
    const learnMoreButton = page.locator('text=Learn More');
    await expect(learnMoreButton).toBeVisible();
    //verify the "learn more" button is clickable and when clicked it opens a new page with more information about the combination products.
    await learnMoreButton.click();
    await expect(page).toHaveURL(/.*turf-king-combo-products/);
    //verify the new page is correct
    await expect(page.locator('h1', { hasText: 'Turf King Combination' })).toBeVisible();
    
  });


