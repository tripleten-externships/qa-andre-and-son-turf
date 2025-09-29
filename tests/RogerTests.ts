// practice writing notes
import {test, expect} from '@playwright/test';


// Rotary Deompaction test image
test('image has alt text', async ({ page }) => {
    // naviagte to rotary deompaction page
    await page.goto('https://www.andreandson.com/rotary-decompaction');
    // locate image by selector
    const image = page.locator(img[alt='Cheer Practice'])
    // assert that image has alt test
    await expect(image).toHaveAttribute('alt')
});

// testing footer links
test('Links in footer are correct', async ({page}) => {
// go to home page 
    await page.goto('/')


// locators for footer links
const Turf = page.getByTestId('linkElement-0')
// sub links for Turf Products tsublink1-8  
// page.locator('a[href="/target-page"]') backup

// Turf King Combo Products
const Tsublink1 = page.goto('https://www.andreandson.com/turf-king-combo-products')

// Turf King Fertilizer
const Tsublink2 = page.goto('https://www.andreandson.com/turf-king-dry-fertilizer')

// Turf Chemicals
const Tsublink3 = page.goto('https://www.andreandson.com/control-agents-2')

// Liquid Fertilizer
const Tsublink4 = page.goto('https://www.andreandson.com/liquid-fertilizer')

// Seed
const Tsublink5 = page.goto('https://www.andreandson.com/seed')

// Top Dressing & Bunker Sand
const Tsublink6 = page.goto('https://www.andreandson.com/top-dressing-bunker-sand')

// Adendments & Conditionors
const Tsublink7 = page.goto('https://www.andreandson.com/soil-admendments')

// Ice Melts
const Tsublink8 = page.goto('https://www.andreandson.com/ice-melts')
// end of Turf Product Sub Links

const Contract = page.getByTestId('linkElement-1')
// sub links for Contract Services CSsublink1-8

// Conventional Aerification
const CSsublink1 = page.goto('https://www.andreandson.com/conventional-aerification')

//
const CSsublink2 = page.goto('https://www.andreandson.com/deep-tine-aerificiation')

//
const CSsublink3 = page.goto('https://www.andreandson.com/rotary-decompaction')

//
const CSsublink4 = page.goto('https://www.andreandson.com/application-services')

//
const CSsublink5 = page.goto('https://www.andreandson.com/core-removal')

//
const CSsublink6 = page.goto('https://www.andreandson.com/topdressing')

//
const CSsublink7 = page.goto('https://www.andreandson.com/seeding')

//
const CSsublink8 = page.goto('https://www.andreandson.com/construction-renovation')

// end of Contract Services Sub Links

const Equipment = page.getByTestId('linkElement-2')

const About = page.getByTestId('linkElement-3')
// sub links for About Asublink1-4

const Contact = page.getByTestId('linkElement-4')

const Items = page.getByTestId('linkElement-5')




// Click on Turf Products
await Turf.click()

// verify that url matches expected outcome
await expect(page).toHaveURL('https://www.andreandson.com/turf-products') 

// verify that key info is displayed, TURF PRODUCT CATALOG

const heading = page.locator('h1')
await expect(heading).toHaveText('TURF PRODUCT CATALOG')

});

// need to add a Turf.hover and then a click() for the sublink tests
