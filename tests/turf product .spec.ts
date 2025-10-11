import { test, expect } from '@playwright/test';
import { TurfProductPage } from '../pages/turf product ';
import { turfProductHomePage } from '../pages/turfproduct home';

//before running the test make sure to go to the turf product page by clicking on the learn more button under the description of the turf products in the service section of the homepage.


/*verify the content on turf product page
verify the page url is correct
verify their is a video playing on the page;
verify the hero section has a title "There's a Reason We're the Turf King - See for Yourself" on it
verify the hero section has a description "See for yourself why we're the best in the business."
verify the page has a title "Turf Product Catalog" heading on the left side of the page
verify the title"Turf Product catalog" title has a description "Browse our product catalog" under it.
verify the page has a title "combination products" on the right side of the page.
verify the title "combination products" has a description under it.
verify the combination products link is working correctly.
verify clicking on the "TURF PRODUCT" link in the header takes you back to the turf product page.
verify the page url is correct
verify their is a "learn more" button under the description of the "combination products" title.
verify the "learn more" button is working correctly.
verify clicking on the "Andre & Son Logo" takes you to the home page.*/


test('verify the content on turf product page', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProductHomePage(page);
    //go to the home page
    await turfProductHome.goto();
    //click on the learn more button under the description of the turf products in the service section to go to the turf product page
    await page.locator('#comp-kjtbzrpx__item-j9wn309i').getByRole('link', { name: 'LEARN MORE' }).click();
    //verify the page is correct by checking the url
    await expect(page).toHaveURL(/.*turf-product/);
    //verify their is a video playing on the page;
    await expect(turfProductPage.video).toBeVisible();
    //verify the hero section has a title "There's a Reason We're the Turf King - See for Yourself" on it
    await expect(turfProductPage.herosectionTitletext).toBeVisible();
    //verify the hero section has a description "See for yourself why we're the best in the business."
    await expect(turfProductPage.herosectionDescriptiontext).toBeVisible();
    //verify the page has a title "Turf Product Catalog" heading is present
    await expect(turfProductPage.turfProductCatalogheading).toBeVisible();
    //verify the title"Turf Product catalog" title has a description "Browse our product catalog" under it.
    await expect(turfProductPage.turfProductCatalogDescription).toBeVisible();
    //verify the page has a title "combination products" on the right side of the page.
    await expect(turfProductPage.combinationProductsTitle).toBeVisible();
    //verify the title "combination products" has a description under it.
    await expect(turfProductPage.combinationProductsDescription).toBeVisible();
    //verify the combination products link is working correctly.
    await turfProductPage.combinationProductslink.click();
    //verify the page is correct by checking the url
    await expect(page).toHaveURL(/.*turf-king-combo-products/);
    //click on the "Andre & Son Logo" to go back to the home page.
    await turfProductPage.andreandsonlogo.click();
    //verify the page is correct
    await expect(page).toHaveURL('/');
});