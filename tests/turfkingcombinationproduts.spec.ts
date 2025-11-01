import { test, expect } from "@playwright/test";
import { turfKingComboProductPage } from "../pages/turfkingcomboproducts";

//before running the test, navigate to the turf product page by clicking on the "turf products" title on the homepage
//then clicking on the "learn more" button under the description of the combination products section
//then wait for the page to load completely



test.beforeEach(async ({ page }) => {
    const turfkingcomboproductsPage = new turfKingComboProductPage(page);
});
/*verify all the products in the combo products page
navigate to the turf product page by clicking on the "turf products" title on the homepage
then clicking on the "learn more" button under the description of the combination products section
then wait for the page to load completely
verify the title "Turf King + Prodiamine" 
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
verify when clicked on the twitter logo in the footer section, it opens the twitter page in a new tab
verify when clicked on the facebook logo in the footer section, it opens the facebook page in a new tab
verify when clicked on the instagram logo in the footer section, it opens the instagram page in a new tab
verify clicking on the "Andre & Son Logo" in the top left corner takes you to the home page.
*/

test('verify all the products in the combo products page', async ({ page }) => {
    const turfKingComboPage = new turfKingComboProductPage(page);
//go to the home page first
await turfKingComboPage.goto();
//click on the "turf products" title to go to the turf product page
await turfKingComboPage.clickTurfProductsTitle();
//click on the combination product learn more button to go to the combo products page
await turfKingComboPage.clickCombinationProductLearnMoreButton();
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
//scroll to the footer section
await turfKingComboPage.scrollToFooterSection();
//verify the turf product title is highlighted in yellow color in the footer section of the page
await turfKingComboPage.verifyTurfKingTitleIsHighlighted();
//verify when clicked on the facebook logo in the footer section, it opens the facebook page in a new tab
await page.waitForTimeout(1000);
await expect(turfKingComboPage.facebooklogofooter).toBeVisible();
const [newPageFacebook] = await Promise.all([
    page.waitForEvent('popup'),
    turfKingComboPage.clickfacebooklogofooter()
]);
await newPageFacebook.waitForLoadState('load');
await expect(newPageFacebook).toHaveURL(/.*facebook.com/);    
await newPageFacebook.close();

//verify when clicked on the instagram logo in the footer section, it opens the instagram page in a new tab
await page.waitForTimeout(1000);
await expect(turfKingComboPage.instagramlogofooter).toBeVisible();
const [newPageInstagram] = await Promise.all([
    page.waitForEvent('popup'),
    turfKingComboPage.clickinstagramlogofooter()
]);
await newPageInstagram.waitForLoadState('load');
await expect(newPageInstagram).toHaveURL(/.*instagram.com/);
await newPageInstagram.close(); 
//verify clicking on the "Andre & Son Logo" in the top left corner takes you to the home page.
await turfKingComboPage.andreandsonlogo.click();
await expect(page).toHaveURL(/.*andreandson/);

});