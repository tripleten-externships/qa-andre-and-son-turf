import {test, expect} from '@playwright/test';
import { NavigationPage } from '../pages/Locator';


test('Verify Truf Product is clickable and correct', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickTurfProducts();
    const Header = page.locator("(//span[contains(normalize-space(.), 'TURF PRODUCT CATALOG')])")
    await expect(Header).toBeVisible();
});

test('Verify you can hover and click Turf King Combo Products and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com');
    await nav.clickTurfComboProducts();
    const Header = page.locator('//span[.="Turf King Combination"]');
    await expect(Header).toContainText('Turf King Combination');
});

/*
attempt at making the dropdown visible that didnt work
test('Verify Dropdown Menu Appears', async ({page}) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.verifyDropdownMenu();
    const rotarydropdown = page.locator("(//p[contains(@id,'comp-igauz7eemoreContainer2label')])")
    await rotarydropdown.isVisible();
});
*/
test('Verify you can hover and click Turf King Fertlizlier and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickTurfFertilizer();
    const Header = page.locator('h1');
    await expect(Header).toContainText('Turf King Fertilizer Products');
    
});

test('Verify you can hover and click Turf King Chemicals and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickTurfChemicals();
    const Header = page.locator('h1');
    await expect(Header).toContainText('Turf Chemicals');
});

test('Verify you can hover and click Liquid Fertlizer and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickLiquidFertilizer();
    const Header = page.locator('h1');
    await expect(Header).toContainText('Liquid Fertilizer Products');
});

test('Verify you can hover and click Seed and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickSeed();
    const Header = page.locator('h1');
    await expect(Header).toContainText('Seed');
});

test('Verify you can hover and click Top Dressing & Bunker Sand and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickDressingandBunkerSand();
     const Header = page.locator('h1');
    await expect(Header).toContainText('Top Dressing & Bunker Sand');
});

test('Verify you can hover and click Amendments & Conditioners and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickAmendments();
    const Header = page.locator('h1');
    await expect(Header).toContainText('Amendments & Conditioners');
});

test('Verify you can hover and click Ice Melts and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickMelts();
      const Header = page.locator('h1');
    await expect(Header).toContainText('Ice Melts');
});
// end of Turf Products tests