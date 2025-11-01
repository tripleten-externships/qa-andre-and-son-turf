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


test('Verify forms can be filled', async ({ page }) => {
    const nav = new NavigationPage(page);
    await page.goto('https://www.andreandson.com/rotary-decompaction');
    // fill in the form boxes
    await nav.rotarytest.firstnamebox.fill('Roger');
    await nav.rotarytest.lastnamebox.fill('Pearson');
    await nav.rotarytest.emailbox.fill('rmp7350@g.rit.edu')
    await nav.rotarytest.messagebox.fill('Message to be verified')
    // verify the form boxes
    await expect(nav.rotarytest.firstnamebox).toHaveValue('Roger')
    await expect(nav.rotarytest.lastnamebox).toHaveValue('Pearson')
    await expect(nav.rotarytest.emailbox).toHaveValue('rmp7350@g.rit.edu')
    await expect(nav.rotarytest.messagebox).toHaveValue('Message to be verified')
});
// about 12 tests or so on the page
// need to test the image
// test that a all the boxes to fill infomration are visable
// page.goto directly to the rotary page
// contact information is correct