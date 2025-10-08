import { test, expect } from '@playwright/test';
import { IceMeltsPage } from '../pages/icemelts';


/*
Verify that the page title is "ICE MELTS"
*/

test('has title', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
　//Visit the web application
  await iceMeltsPage.goto({ waitUntil: 'load' });
  //Check that you are on the web page
  await expect(page).toHaveURL('https://www.andreandson.com/ice-melts')
  //Validate text matches with hero title
  await expect(iceMeltsPage.textOnHeroSection).toHaveText('Ice Melts');
});

/*
Verify that "MSDS" button will open PDF for Ice Melt Regular
*/

test('Ice Melt Regular MSDS Button', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  //Visit the webpage
  await iceMeltsPage.goto({ waitUntil: 'load' });
  //Verify we are on the ice melts page
  await page.getByText('Ice Melts', { exact: true }).click();
  //Verify we are on the Ice Melt Regular section
  await page.getByText('Ice Melt Regular', { exact: true }).click();
  //Locating the Ice Melt Regular section
  const page1Promise = page.waitForEvent('popup');
  //Clicking on the Ice Melt Regular MSDS Button
  await page.getByRole('listitem').filter({ hasText: 'Ice Melt Regular Ice Melt' }).getByTestId('linkElement').click();
  const page1 = await page1Promise;
});

/*
Verify that after clicking "MSDS" button it opens the correct Ice Melt Regular Safety Data PDF
*/

test('Ice Melt Regular Safety Data PDF', async ({ page }) => {



});

/*
Verify that "MSDS" button will open PDF for Ice Melt Plus
*/
test('Ice Melt Plus MSDS Button', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  //Visit the webpage
  await iceMeltsPage.goto({ waitUntil: 'load' });
  //Verify we are on the ice melts page
  await page.getByText('Ice Melts', { exact: true }).click();
  //Locating the Ice Melt Plus section
  await page.getByText('Ice Melt Plus', { exact: true }).click();
  //Locating the Ice Melt Plus paragraph
  await page.getByText('Ice Melt Plus is our Ice Melt').click();
  //Clicking on the Ice Melt Plus MSDS Button
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#comp-kym0q5gu__item-kes5qvaj').getByTestId('linkElement').click();
  const page1 = await page1Promise;
});

/*
Verify that after clicking "MSDS" button it opens the correct Ice Melt Plus Safety Data PDF
*/

test('Ice Melt Plus Safety Data PDF', async ({ page }) => {



});

/*
Verify that "MSDS" button will open PDF for Ice Melt Hi Vis
*/
test('Ice Melt Hi Vis MSDS Button', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  //Visit the webpage
  await iceMeltsPage.goto({ waitUntil: 'load' });
  //Verify we are on the ice melts page
  await page.getByText('Ice Melts', { exact: true }).click();
  //Locating the Ice Melt Hi Vis section
  await page.getByText('Ice Melt Hi Vis', { exact: true }).click();
  //Locating the Ice Melt Hi Vis paragraph
  await page.getByText('Ice Melt Hi Vis is specially').click();
  //Clicking on the Ice Melt Hi Vis MSDS Button
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('listitem').filter({ hasText: 'Ice Melt Hi VisIce Melt Hi' }).getByTestId('linkElement').click();
  const page1 = await page1Promise;
});

/*
Verify that after clicking "MSDS" button it opens the correct Ice Melt Hi Vis Safety Data PDF
*/

test('Ice Melt Hi Vis Safety Data PDF', async ({ page }) => {



});


test('Hover over Turf Products menu and click Ice Melts submenu', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);

  await page.goto('/', { waitUntil: 'load' });

  // Hover over the visible Turf Products section
  const turfProductsMenu = page.locator('p:has-text("TURF PRODUCTS")').nth(0);
  await expect(turfProductsMenu).toBeVisible();
  await turfProductsMenu.hover();

  // Wait for the submenu to appear before checking visibility
  const iceMeltsMenu = page.getByRole('link', { name: 'Ice Melts' });

  await iceMeltsMenu.waitFor({ state: 'visible', timeout: 10000 });
  await expect(iceMeltsMenu).toBeVisible();

  // Click the submenu item
  await iceMeltsMenu.click();

  // Verify navigation worked
  await expect(page).toHaveURL('https://www.andreandson.com/ice-melts');
  await expect(page.locator('h1, h2, [role="heading"]').first()).toContainText('Ice Melts');
});