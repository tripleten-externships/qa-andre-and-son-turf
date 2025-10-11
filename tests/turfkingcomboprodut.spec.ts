import { test, expect } from "@playwright/test";
import { TurfProductPage } from "../pages/turf product ";
import { turfProductHomePage } from "../pages/turfproduct home";

//before running the test amke sure to go to the turf king combo products page by clicking on the learn more button under the description of the combination products in the turf product page.


test.beforeEach(async ({ page }: { page: import('@playwright/test').Page }) => {
    const turfProductPage = new TurfProductPage(page);
    await turfProductPage.page.goto('/turf-product');
    await turfProductPage.page.waitForLoadState('networkidle');
});



/*verify the title "Turf King + Prodiamine" .
verify the "Turf King + Prodiamine" has a description under it.
verify the title "Turf King + Prodiamine" has "Learn More" button under the description
verify the title "Turf King + Dithiopyr".
verify the title "Turf King + Dithiopyr" has a description under it.
verify the title "Turf King + Dithiopyr" has "Learn More" button under the description
verify the title "Turf King + Escalade".
verify the title "Turf King + Escalade" has a description under it.
verify the title "Turf King + Escalade" has "Learn More" button under the description
verify the title "Turf King + viper's".
verify the title "Turf King + viper's" has a description under it.
verify the title "Turf King + viper's" has "Learn More" button under the description
verify the title "Turf King + Imida lambda".
verify the title "Turf King + Imida lambda" has a description under it.
verify the title "Turf King + Imida lambda" has "Learn More" button under the description
verify the title "Turf King + Mallett".
verify the title "Turf King + Mallett" has a description under it.
verify the title "Turf King + Mallett" has "Learn More" button under the description
verify the title "Turf King + Befenthrin".
verify the title "Turf King + Befenthrin" has a description under it.
verify the title "Turf King + Befenthrin" has "Learn More" button under the description
verify the title "Turf King + Acelepryn".
verify the title "Turf King + Acelepryn" has a description under it.
verify the title "Turf King + Acelepryn" has "Learn More" button under the description
verify the heading "let's get growing" in the bottom of the page
verify the "enter your text here" text box is next to the "let's get growing" heading
verify the "email address" text box is under the "enter your text here" text box
verify the "submit" button is under the "email address" text box
verify the turf product title is highlighted in yellow color in the footer section of the page
verify clicking on the "Andre & Son Logo" in the top left corner takes you to the home page.
*/

test('verify all the products in the combo products page', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);

//go to the home page first
await turfProductPage.page.goto('/');
//click on the learn more button under the description of the turf products in the service section to go to the turf product page
await page.locator('#comp-kjtbzrpx__item-j9wn309i').getByRole('link', { name: 'LEARN MORE' }).click();
//now click on the combination products link to go to the combo products page
await turfProductPage.combinationProductslink.click();
//verify the page is correct
await expect(page).toHaveURL(/.*turf-king-combo-products/);
//verify the title "Turf King + Prodiamine" has a description under it.
await expect(page.locator('text=Turf King + Prodiamine')).toBeVisible();
//verify the title "Turf King + Prodiamine" has "Learn More" button under the description.
await expect(page.locator('text=Learn More').first()).toBeVisible();
//verify the title "Turf King + Dithiopyr" has a description under it.
await expect(page.locator('text=Turf King + Dithiopyr')).toBeVisible();
//verify the title "Turf King + Dithiopyr" has "Learn More" button under the description.
await expect(page.locator('text=Learn More').nth(1)).toBeVisible();
//verify the title "Turf King + Escalade" has a description under it.
await expect(page.locator('text=Turf King + Escalade')).toBeVisible();
//verify the title "Turf King + Escalade" has "Learn More" button under the description.
await expect(page.locator('text=Learn More').nth(2)).toBeVisible();
//verify the title "Turf King + Viper" has a description under it.
await expect(page.locator('text=Turf King + Viper')).toBeVisible();
//verify the title "Turf King + Viper" has "Learn More" button under the description.
await expect(page.locator('text=Learn More').nth(3)).toBeVisible();
//verify the title "Turf King + Imida-Lambda" has a description under it.
await expect(page.locator('text=Turf King + Imida-Lambda')).toBeVisible();
//verify the title "Turf King + Imida-Lambda" has "Learn More" button under the description.
await expect(page.locator('text=Learn More').nth(4)).toBeVisible();
//verify the title "Turf King + Mallet" has a description under it.
await expect(page.locator('text=Turf King + Mallet')).toBeVisible();
//verify the title "Turf King + Mallet" has "Learn More" button under the description.
await expect(page.locator('text=Learn More').nth(5)).toBeVisible();
//verify the title "Turf King + Befenthrin" has a description under it.
await expect(page.locator('text=Turf King + Bifenthrin')).toBeVisible();
//verify the title "Turf King + Befenthrin" has "Learn More" button under the description.
await expect(page.locator('text=Learn More').nth(6)).toBeVisible();
//verify the title "Turf King + Acelepryn" has a description under it.
await expect(page.locator('text=Turf King + Acelepryn')).toBeVisible();
//verify the title "Turf King + Acelepryn" has "Learn More" button under the description.
await expect(page.locator('text=Learn More').nth(7)).toBeVisible();
//verify the heading "let's get growing" in the bottom of the page
await expect(page.locator('text=Let\'s Get Growing')).toBeVisible();
//verify the "enter your text here" text box is next to the "let's get growing" heading
await expect(page.locator('input').first()).toBeVisible();
//verify the "submit" button is under the "email address" text box
await expect(page.locator('button:has-text("Submit")')).toBeVisible();
//click on the "Andre & Son Logo" in the top left corner to go back to the home page.
await turfProductPage.andreandsonlogo.click();
//verify the page is correct
await expect(page).toHaveURL('/');
});