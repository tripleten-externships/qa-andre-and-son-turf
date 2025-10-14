import {test, expect} from '@playwright/test';
import { NavigationPage } from '../pages/Locator';


test('Verify you can hover and click Contact and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickContact();
    const Header = page.locator('(//span[.="CONTACT"])[3]');
    await expect(Header).toContainText("CONTACT");
});