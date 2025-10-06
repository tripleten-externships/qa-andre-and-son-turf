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

  await expect(menuPage.turfProductsMenu).toBeVisible();
  await menuPage.turfProductsMenu.hover();

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

/*
Verify that hovering over "Contract Services" menu reveals "Snow Removal" submenu and clicking it navigates to Snow Removal page
*/

test('Hover over Contract Services menu and click Conventional Aerificiation submenu', async ({ page }) => {
  const menuPage = new MenuPage(page);
  await page.goto('/', { waitUntil: 'load' });

  // Hover over the visible Contract Services section
  await expect(menuPage.contractServicesMenu).toBeVisible();
  await menuPage.contractServicesMenu.hover();

  // Wait for the submenu to appear before checking visibility
  await menuPage.conventionalAerificiationSubMenu.waitFor({ state: 'visible', timeout: 60000 });
  await expect(menuPage.conventionalAerificiationSubMenu).toBeVisible();

  // Click the submenu item
  await menuPage.conventionalAerificiationSubMenu.click();

  // Verify navigation worked
  await expect(page).toHaveURL('https://www.andreandson.com/conventional-aerification');
  await expect(page.locator('h1, h2, [role="heading"]').first()).toContainText('Conventional Aerification');
});

test('Hover over Equipment menu and verify it will not have a submenu', async ({ page }) => {
    const menuPage = new MenuPage(page);
    await page.goto('/', { waitUntil: 'load' });

    // Hover over the visible Equipment section
    await expect(menuPage.equipmentMenu).toBeVisible();
    await menuPage.equipmentMenu.hover();

    // Verify that no submenu appears
    const equipmentSubMenu = page.getByRole('link', { name: 'STIHL' }).nth(0);
    const isVisible = await equipmentSubMenu.isVisible();
    expect(isVisible).toBeFalsy(); // Expecting no submenu to be visible

});

/*
Verify that you can hover over "About" menu and it reveals "Our History" submenu and clicking it navigates to Our History page
*/
test('Hover over About menu and click Our History submenu', async ({ page }) => {
    const menuPage = new MenuPage(page);

    await page.goto('/', { waitUntil: 'load' });
    
    // Hover over the visible About section
    await expect(menuPage.aboutMenu).toBeVisible();
    await menuPage.aboutMenu.hover();    

    // Wait for the submenu to appear before checking visibility
    await menuPage.ourStorySubMenu.waitFor({ state: 'visible', timeout: 60000 });
    await expect(menuPage.ourStorySubMenu).toBeVisible();     

    // Click the submenu item
    await menuPage.ourStorySubMenu.click();    

    // Verify navigation worked
    await expect(page).toHaveURL('https://www.andreandson.com/about-1');
    await expect(page.locator('h1, h2, [role="heading"]').first()).toContainText('Our History & Team');
});