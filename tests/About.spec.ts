import {test, expect} from '@playwright/test';
import { NavigationPage } from '../pages/Locator';

test('Verify you can hover and click Our Story & Team and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com')
    await nav.hoverAboutclickStory();
    const Header = page.locator('h3');
    await expect(Header).toContainText("Let's go way back");
});

test('Verify you can hover and click Sales Team and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.hoverAboutclickSales();
       const Header = page.locator('//span[.="And the guys who bring our office to you..."]');
    await expect(Header).toContainText("And the guys who bring our office to you...");
});

test('Verify you can hover and click Photo Gallery and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.hoverAboutclickPhoto();
    const Header = page.locator('h1');
    await expect(Header).toContainText("See us in Action");
});

test('Verify you can hover and click Careers and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.hoverAboutclickCareers();
    const Header = page.locator('h1');
    await expect(Header).toContainText("Careers");
});
// end of About