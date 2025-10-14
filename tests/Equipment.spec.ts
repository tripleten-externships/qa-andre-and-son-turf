import {test, expect} from '@playwright/test';
import { NavigationPage } from '../pages/Locator';

test('Verify you can click Equipment and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com');
    await nav.clickEquipment();
    const Header = page.locator('//span[contains(text(),"EQUIPMENT SALES")]');
    await expect(Header).toContainText('EQUIPMENT SALES');
});