import {test, expect} from '@playwright/test';
import { NavigationPage } from '../pages/Locator';


//Rotary Decompaction
test('Verify Rotary Decompaction web page', async ({ page }) => {
    const nav = new NavigationPage(page);
      //go to andre and son website 
    await page.goto('https://www.andreandson.com');
    //hover over contract services
    //click on rotary decompaction
    await nav.verifyRotaryDecompaction();
    //verify the page title
    const Header = page.locator('(//span[@style="font-size:56px;"])');
    await expect(Header).toBeVisible(); 
});

test('Verify picture is visible', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com/rotary-decompaction');
    await expect(nav.rotarytest.turfimage).toBeVisible();
})

test('Verify paragraph is visible', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com/rotary-decompaction');
    await expect(nav.rotarytest.rotaryparagraph).toBeVisible();
})

test('Verify input boxes are visible', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com/rotary-decompaction');
    await expect(nav.rotarytest.firstnamebox).toBeVisible();
    await expect(nav.rotarytest.lastnamebox).toBeVisible();
    await expect(nav.rotarytest.emailbox).toBeVisible();
    await expect(nav.rotarytest.messagebox).toBeVisible();
    await expect(nav.rotarytest.sendbutton).toBeVisible();
})

test('Verify company info is visible', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com/rotary-decompaction');
    await expect(nav.rotarytest.rotarydivision).toBeVisible();
    await expect(nav.rotarytest.rotaryaddress).toBeVisible();
    await expect(nav.rotarytest.rotartystate).toBeVisible();
    await expect(nav.rotarytest.rotaryemail).toBeVisible();
    await expect(nav.rotarytest.rotaryphone).toBeVisible();
});

// about 12 tests or so on the page
// need to test the image
// test that a all the boxes to fill infomration are visable
// page.goto directly to the rotary page
// contact information is correct