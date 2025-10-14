import {test, expect, Locator, Page} from '@playwright/test';
import {turfProducthomePage} from '../pages/turfproduct home';

/*
verify a video is running on the homepage
verify the text EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT is present on the homepage
verify the arrow down icon is present on the homepage
verify the services title is present on the service section of the homepage
verify andreandson logo is present on the top left corner of the homepage.
verify "ANDRE & SON" text is present next to the logo on the top left corner of the homepage.
verify "TURF DIVISION" text is present next to the "ANDRE & SON" text on the top left corner of the homepage.
verify the turf products heading is present under the services title.
verify a short description is present under the turf products heading.
verify learn more button is present under the description of the turf products heading.
verify when clicked on the learn more button, it navigates to the turf product page.
verify when clicked on andreandson logo, it navigates to the top of the homepage
verify  the "turf products" title on the homepage
verify when clicked on the "turf products" title, it navigates to the turf product page
*/

test('verify the content and functionality of the elements on homepage', async ({ page }) => {
    const turfproducthomepage = new turfProducthomePage(page);
    //go to the webpage
    await turfproducthomepage.goto();
    //verify andreandson logo is present on the top left corner of the homepage.
    await expect(turfproducthomepage.andreandsonlogo).toBeVisible();
    //verify "ANDRE & SON" text is present next to the logo on the top left corner of the homepage.
    await expect(turfproducthomepage.andreandsontext).toBeVisible();
    //verify "TURF DIVISION" text is present next to the "ANDRE & SON" text on the top left corner of the homepage.
    await expect(turfproducthomepage.turfdivisiontext).toBeVisible();
    //verify the video is running on the homepage
    await expect(turfproducthomepage.videoonHerosection).toBeVisible();
    //verify the text EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT is present on the homepage
    await expect(turfproducthomepage.textonHerosection).toBeVisible();
    //verify the arrow down icon is present on the homepage
    await expect(turfproducthomepage.scroolldownicon).toBeVisible();
    //verify the services title is present on the service section of the homepage
    await expect(turfproducthomepage.servicestitle).toBeVisible();
    //click on the arrow down icon to scroll down to the services title.
    await turfproducthomepage.clickarrowdownicon();
    //verify the turf products heading is present under the services title.
    await expect(turfproducthomepage.turfproductstitle).toBeVisible();
    //verify a short description is present under the turf products heading.
    await expect(turfproducthomepage.turfproductsdescription).toBeVisible();
    //verify learn more button is present under the description of the turf products heading.
    await expect(turfproducthomepage.turfproductslearnmorebutton).toBeVisible();
    //clcik on the learn more button to go to the turf product page.
    await turfproducthomepage.turfproductslearnmorebutton.click();
    //verify the page is navigated to the turf product page
    await expect(page).toHaveURL(/.*turf-product/);
    //click on the andreandson logo on the turf product page to go back to the home page
    await turfproducthomepage.clickandreandsonlogo();
    //verify you are navigated to the home page
    await expect(page).toHaveURL('/');
    //click on thr "turf products" title to navigate to the turf product page
    await turfproducthomepage.clickturfproductstitle();
    //verify the page is navigated to the turf product page
    await expect(page).toHaveURL(/.*turf-product/);
});
