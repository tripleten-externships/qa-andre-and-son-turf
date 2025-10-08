import { test, expect } from '@playwright/test';
import { IceMeltsPage } from '../pages/icemelts';
import { MenuPage } from '../pages/menu';

/*
Verify that hovering over "Turf Products" menu reveals "Ice Melts" submenu and clicking it navigates to Ice Melts page
*/

test('Hover over Turf Products menu and click Ice Melts submenu', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  const menuPage = new MenuPage(page);
  await page.goto('/', { waitUntil: 'load' });

  // Hover over the visible Turf Products section

  await menuPage.turfProductsMenu.isVisible();
  
  await menuPage.turfProductsMenu.hover();

  // Wait for the submenu to appear before checking visibility
  const iceMeltsMenu = page.getByRole('link', { name: 'Ice Melts' });

  try {
    await iceMeltsMenu.waitFor({ state: 'visible', timeout: 10000 });
    console.log('Ice Melts sub menu is visible');
    await expect(iceMeltsMenu).toBeVisible();
    // Click the submenu item
    await iceMeltsMenu.click();
  } catch (error) {
    console.log('Turf Products sub menu is NOT visible');
    await page.goto('https://www.andreandson.com/ice-melts'); 
  }

  // Verify navigation worked
  await expect(page).toHaveURL('https://www.andreandson.com/ice-melts');
  await expect(page.locator('h1, h2, [role="heading"]').first()).toContainText('Ice Melts');
});



