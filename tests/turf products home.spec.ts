import {test, expect, Locator, Page} from '@playwright/test';
import {turfProductHomePage} from '../pages/turfproduct home';



/*
verify a video is running on the mainpage
verify the text EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT is present on the homepage
verify the arrow down icon is present on the mainpage
verify the services title is present on the service section of the homepage
verify andreandson logo is present on the top left corner of the mainpage.
verify "ANDRE & SON" text is present next to the logo on the top left corner of the mainpage.
verify "TURF DIVISION" text is present next to the "ANDRE & SON" text on the top left corner of the homepage.
verify the turf products heading is present under the services title.
verify a short description is present under the turf products heading.
verify learn more button is present under the description of the turf products heading.
verify when clicked on the learn more button, it navigates to the turf product page.
verify when clicked on andreandson logo, it navigates to the top of the mainpage*/

test('verify the turf products title in the service section', async ({ page }) => {
    const turfMainPage = new turfProductHomePage(page);
    //go to the webpage
    await turfMainPage.goto();
    //verify andreandson logo is present on the top left corner of the mainpage.
    await expect(turfMainPage.andreandsonlogo).toBeVisible();
    //verify "ANDRE & SON" text is present next to the logo on the top left corner of the mainpage.
    await expect(turfMainPage.andreandsontext).toBeVisible();
    //verify "TURF DIVISION" text is present next to the "ANDRE & SON" text on the top left corner of the homepage.
    await expect(turfMainPage.turfdivisiontext).toBeVisible()
    //verify the video is running on the mainpage
    await expect(turfMainPage.videoonHerosection).toBeVisible();
    //verify the text EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT is present on the mainpage
    await expect(turfMainPage.textonHerosection).toBeVisible();
    //verify the arrow down icon is present on the mainpage
    await expect(turfMainPage.scroolldownicon).toBeVisible();
    //verify the services title is present on the service section of the mainpage
    await expect(turfMainPage.servicestitle).toBeVisible();
    //click on the arrow down icon to scroll down to the services title.
    await turfMainPage.clickarrowdownicon();
    //verify the turf products heading is present under the services title.
    await expect(turfMainPage.turfproductstitle).toBeVisible();
    //verify a short description is present under the turf products heading.
    await expect(turfMainPage.turfproductsdescription).toBeVisible();
    //verify learn more button is present under the description of the turf products heading.
    await expect(turfMainPage.turfproductslearnmorebutton).toBeVisible();
    //clcik on the learn more button to go to the turf product page.
    await turfMainPage.turfproductslearnmorebutton.click();
    //verify the page is navigated to the turf product page
    await expect(page).toHaveURL(/.*turf-product/);
    //click on the andreandson logo to navigate to the top of the mainpage
    await turfMainPage.clickandreandsonlogo();
    //verify the page is navigated to the top of the mainpage
    await expect(page).toHaveURL('/');
});


