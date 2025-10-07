import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/turfproduct";
import { TurfKingComboProductsPage } from "../pages/turfkingcomboproducts";

/* Verify the user can navigate to the "turf king + prodiamine" title  "turf king combo products" page by clicking the link in the "turf products" dropdown menu in the header
verify the title "turf king + prodiamine" title is on the left side of the page
verify the title "turf king + prodiamine" has a description under it
verify the title "turf king + prodiamine" has "learn more" button under the description.
verify when clicked the "learn more" button it navigates to the "turf king + prodiamine" page.*/

test("Turf King + Prodiamine", async ({ page }) => {
    const homePage = new HomePage(page);
    // Navigate to the home page by clicking the andre and son logo on the header
    await homePage.goto('/');
    await homePage.waitForLoad();
    // Hover over the "Turf Products" dropdown in the header
    await page.hover('#comp-igauz7ee0 >> text=TURF PRODUCTS');
    // Click on the "Turf King Combo Products" link in the dropdown
    await page.getByRole('link', { name: 'TURF KING COMBO PRODUCTS' }).click();
    // Verify that the Turf King Combo Products page is open
    await expect(page).toHaveURL(/.*turf-king-combo-products/);
    // Verify the page has a title "Turf King + Prodiamine" on it
    await expect(page.locator('h1', { hasText: 'Turf King + Prodiamine' })).toBeVisible();
    // Verify the title "Turf King + Prodiamine" has a description under it.
    await expect(page.locator('p', { hasText: 'Prodiamine is a pre-emergence' })).toBeVisible();
    // Verify the title "Turf King + Prodiamine" has "Learn More" button under the description.
    await expect(page.getByRole('button', { name: 'Learn More' })).toBeVisible();
    // Click on the "Learn More" button to navigate to the "Turf King + Prodiamine" page
    await page.getByRole('button', { name: 'Learn More' }).click();
    // Verify that the "Turf King + Prodiamine" page is open
    await expect(page).toHaveURL(/.*turf-king-prodiamine/);
    // Verify the page has a title "Turf King + Prodiamine" on it
    await expect(page.locator('h1', { hasText: 'Turf King + Prodiamine' })).toBeVisible();
    // Verify the title "Turf King + Prodiamine" has a description under it.
    await expect(page.locator('p', { hasText: 'Prodiamine is a pre-emergence' })).toBeVisible();
    // Verify the page behind the title has an image of wet grass on it has alt text "Wet grass"
    await expect(page.locator('img[alt="Wet grass"]')).toBeVisible();
    // Verify the page has a "Spreader Settings" link on it
    await expect(page.getByRole('link', { name: 'Spreader Settings' })).toBeVisible();
    // Click on the "Spreader Settings" link to navigate to the "Spreader Settings" page
    await page.getByRole('link', { name: 'Spreader Settings' }).click();
    const page1 = await page1Promise;
    // Verify that the "Spreader Settings" page is open
    await expect(page1).toHaveURL(/.*spreader-settings/);
    //verify the combination "Turf King 15-0-3 with .20% Prodiamine" is on the page
    await expect(page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20% Prodiamine' })).toBeVisible();
    // Verify the "Turf King 15-0-3 with .20% Prodiamine" has "Spec Sheet", "SDS", and "Label" links on it
    await expect(page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20%' }).getByLabel('Spec Sheet')).toBeVisible();
    await expect(page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20%' }).getByLabel('SDS')).toBeVisible();
    await expect(page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20%' }).getByLabel('Label')).toBeVisible();
    // Click on the "Spec Sheet", "SDS", and "Label" links to verify they open the respective documents in a new tab
    const page2Promise = page.waitForEvent('popup');
    await page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20%' }).getByLabel('Spec Sheet').click();
    const page2 = await page2Promise;
    const page3Promise = page.waitForEvent('popup');
    await page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20%' }).getByLabel('SDS').click();
    const page3 = await page3Promise;
    const page4Promise = page.waitForEvent('popup');
    await page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3 with .20%' }).getByLabel('Label').click();
    const page4 = await page4Promise;
    // Verify the new tabs are open with the respective documents
    await expect(page2).toHaveURL(/.*Turf_King_15-0-3_with_Prodiamine_Spec_Sheet.pdf/);
    await expect(page3).toHaveURL(/.*Turf_King_15-0-3_with_Prodiamine_SDS.pdf/);
    await expect(page4).toHaveURL(/.*Turf_King_15-0-3_with_Prodiamine_Label.pdf/);
});


