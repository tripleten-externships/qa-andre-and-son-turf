import {test, expect} from '@playwright/test';
import { NavigationPage } from '../pages/Locator';




test('Verify Footer is visible', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com');
    await expect(nav.footer).toBeVisible();
    await expect(nav.companyName).toBeVisible();
    await expect(nav.addressLine1).toBeVisible();
    await expect(nav.addressLine2).toBeVisible();
});

test('Verify Compnay info is visible', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com');
    await expect(nav.companyName).toBeVisible();
    await expect(nav.addressLine1).toBeVisible();
    await expect(nav.addressLine2).toBeVisible();
    await expect(nav.email).toBeVisible();
    await expect(nav.phone).toBeVisible();
});

test('Verify Logos are visible ', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await expect(nav.trueValueLogo).toBeVisible();
    await expect(nav.companyLogo).toBeVisible();
});