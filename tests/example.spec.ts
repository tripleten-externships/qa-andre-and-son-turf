import { test, expect } from '@playwright/test';
import { IceMeltsPage } from '../pages/example';

/*
Verify that the page title is "ICE MELTS"
*/

test('has title', async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
　//Visit the web application
  await page.goto('https://www.andreandson.com/ice-melts');
  //Check that you are on the web page
  await expect(page).toHaveURL('https://www.andreandson.com/ice-melts')
  //Validate text matches with hero title
  await expect(iceMeltsPage.textOnHeroSection).toHaveText('Ice Melts');
});

