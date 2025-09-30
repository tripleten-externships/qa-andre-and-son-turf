import { test, expect } from '@playwright/test';
import { IceMeltsPage } from '../pages/icemelts';

/*
Verify that the page title is "ICE MELTS"
*/

test('has title', async ({ page }) => {

　//Visit the web application
  await page.goto('https://www.andreandson.com/ice-melts', { waitUntil: 'load' });
  //Check that you are on the web page
  await expect(page).toHaveURL('https://www.andreandson.com/ice-melts')
  //Validate text matches with hero title
  await expect(page.locator('h1')).toHaveText('Ice Melts');
});

/*
Verify that "MSDS" button will open PDF for Ice Melt Regular
*/

test('Ice Melt Regular MSDS Button', async ({ page }) => {
  await page.goto('https://www.andreandson.com/ice-melts');
  await page.getByText('Ice Melt Regular', { exact: true }).click();
  await expect(page.getByLabel('main content').getByRole('list')).toContainText('Ice Melt Regular');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('listitem').filter({ hasText: 'Ice Melt Regular Ice Melt' }).getByTestId('linkElement').click();
  const page1 = await page1Promise;
});