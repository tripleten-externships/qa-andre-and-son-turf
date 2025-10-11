import { test, expect } from "@playwright/test";
import { TurfProductCatalogPage } from "../pages/turf product catalog";


//before each async function to go to the turf product catalog page
test.beforeEach(async ({ page }: { page: import('@playwright/test').Page }) => {
    const turfProductCatalogPage = new TurfProductCatalogPage(page);
    await turfProductCatalogPage.page.goto('/turf-product');
    await turfProductCatalogPage.page.waitForLoadState('networkidle');
});


//beforeEach(async ({ page }) => {
//go to home page
//click on the "turf products" title to go to the turf product catalog page
//click on the "learn more" button under the "combination products" title to go to the "turf king combo products" page

//});

/*verify the title "Turf King + Prodiamine" .
verify the "Turf King + Prodiamine" has a description under it.
verify the title "Turf King + Prodiamine" has "Learn More" button under the description*/

test('Turf King + Prodiamine Page content verification', async ({ page }) => {
    const turfProductCatalogPage = new TurfProductCatalogPage(page);

//go to the page
await turfProductCatalogPage.page.goto('/turf-product');
//click on the "learn more" button under the "combination products" title to go to the "turf king combo products" page
await turfProductCatalogPage.clickLearnMoreButton();
//verify the page is correct
await expect(page).toHaveURL(/.*turf-king-combo-products/);
//verify the title "Turf King + Prodiamine" has a description under it.
await expect(page.locator('text=Turf King + Prodiamine')).toBeVisible();
//verify the title "Turf King + Prodiamine" has "Learn More" button under the description.
await expect(page.locator('text=Learn More')).toBeVisible();
//click on the "Learn More" button to navigate to the "Turf King + Prodiamine" page
await page.locator('text=Learn More').click();

});

/*verify the title "Turf King + Dimension" title has a description under it.
verify the title "Turf King + Dimension" has "Learn More" button under the description*/

test('Turf King + Dimension Page content verification', async ({ page }) => {
    const turfProductCatalogPage = new TurfProductCatalogPage(page);
//go to the page
await turfProductCatalogPage.page.goto('/turf-product');
//click on the "learn more" button under the "combination products" title to go to the "turf king combo products" page
await turfProductCatalogPage.clickLearnMoreButton();

});

/*verify the title "Turf King + Dimension" title has a description under it.
verify the title "Turf King + Dimension" has "Learn More" button under the description*/







    

