import {test, expect} from '@playwright/test';
import { NavigationPage } from '../pages/Locator';


// start of Items
test('Verify you can hover and click Items and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com')
    await nav.clickItems();
    const Header = page.locator('(//span[.="EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT"]) [1]');
    await expect(Header).toContainText("EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT");
});
// end of Items