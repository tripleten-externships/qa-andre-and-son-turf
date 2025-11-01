import {test, expect} from '@playwright/test';
import { NavigationPage } from '../pages/Locator';

test('Verify you can hover and click Contract Services and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickContractServices()
    const Header = page.locator('h1')
    await expect(Header).toContainText('CONTRACT SERVICES')
});

test('Verify you can hover and click Conventional Areification and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickConventionalAerification()
     const Header = page.locator('h1')
    await expect(Header).toContainText('Conventional Aerification')
});

test('Verify you can hover and click Deep Tine Areification and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickDeepTine()
     const Header = page.locator('h1')
    await expect(Header).toContainText('Deep Tine Aerification')
});

test('Verify you can hover and click Application Services and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickApplicationServices()
     const Header = page.locator('h1')
    await expect(Header).toContainText('Application Services')
});

test('Verify you can hover and click Core Removal and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickCoreRemoval()
     const Header = page.locator('h1')
    await expect(Header).toContainText('Core Removal')
});

test('Verify you can hover and click Topdressing and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickTopDressing()
     const Header = page.locator('h1')
    await expect(Header).toContainText('Topdressing')
});

test('Verify you can hover and click Seeding and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickSeeding()
     const Header = page.locator('h1')
    await expect(Header).toContainText('Seeding')
});

test('Verify you can hover and click Construction & Renovation and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickConstruction()
    const Header = page.locator('h1')
    await expect(Header).toContainText('Construction and Renovation')
});
// end of Contract Services