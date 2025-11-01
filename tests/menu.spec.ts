import { test, expect } from '@playwright/test';
import { IceMeltsPage } from '../pages/icemelts';
import { MenuPage } from '../pages/menu';

/*
Verify that hovering over "Turf Products" menu reveals "Ice Melts" submenu and clicking it navigates to Ice Melts page
*/

test('Hover over Turf Products menu and click Ice Melts submenu', async ({ page }) => {
 const menuPage = new MenuPage(page);
 const iceMeltsPage = new IceMeltsPage(page);
 await menuPage.navigateToIceMelts();

 await expect(page).toHaveURL('https://www.andreandson.com/ice-melts');
 await expect(iceMeltsPage.iceMeltVerifyText).toContainText('Ice Melts');

});


test('Click Contract Services menu and verify navigation to Contract Services page', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.navigateToContractServices();
  // Verify navigation to Contract Services page
  await expect(page).toHaveURL('https://www.andreandson.com/contract-services');  
  // Verify the presence of key elements on the Contract Services page
  await expect(menuPage.contractServicesTitle).toHaveText('CONTRACT SERVICES');

});
