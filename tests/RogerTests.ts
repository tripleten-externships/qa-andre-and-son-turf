// practice writing notes
import {test, expect} from '@playwright/test';
import { HomePage } from '../pages/Locator';


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

// page.locator('a[href="/target-page"]') backup

// locators for footer links and sublinks
const Turf = page.getByTestId('linkElement-0')
// sub links for Turf Products tsublink1-8  

/* All URLS before I switched to the POM and used different locators
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

// Deep tine Aerification
const CSsublink2 = page.goto('https://www.andreandson.com/deep-tine-aerificiation')

// Rotary Decompaction
const CSsublink3 = page.goto('https://www.andreandson.com/rotary-decompaction')

// Application Services
const CSsublink4 = page.goto('https://www.andreandson.com/application-services')

// Core Removal
const CSsublink5 = page.goto('https://www.andreandson.com/core-removal')

// Top Dressing
const CSsublink6 = page.goto('https://www.andreandson.com/topdressing')

// Seeding
const CSsublink7 = page.goto('https://www.andreandson.com/seeding')

// Construction & Renovation
const CSsublink8 = page.goto('https://www.andreandson.com/construction-renovation')

// end of Contract Services Sub Links

const Equipment = page.getByTestId('linkElement-2')

const About = page.getByTestId('linkElement-3')
// sub links for About Asublink1-4

// Our Story
const Asublink1 = page.goto('https://www.andreandson.com/about-1')

// Sales Team
const Asublink2 = page.goto('https://www.andreandson.com/sales-team')

// Photo Gallery
const Asublink3 = page.goto('https://www.andreandson.com/photo-gallery')

// Careers
const Asublink4 = page.goto('https://www.andreandson.com/careers')

const Contact = page.getByTestId('linkElement-4')

const Items = page.getByTestId('linkElement-5')
*/



// Click on Turf Products
await Turf.click()

// verify that url matches expected outcome
await expect(page).toHaveURL('https://www.andreandson.com/turf-products') 

// verify that key info is displayed, TURF PRODUCT CATALOG

const heading = page.locator('h1')
await expect(heading).toHaveText('TURF PRODUCT CATALOG')

});

// need to add a Turf.hover and then a click() for the sublink tests

test('Turf hover and click sublink Turf King Combination Products', async ({page}) => {
    // Hover Turf Products
    // Wondering if error is because my locators are within with page and not being imported like in a POM
    await Turf.hover()

    // click sublink 1
    await Tsublink1.click()

    // Locator for h1 heading with Turf King Combination Products
    const Header = page.locator('h1')

    // verify text Turf King Combination Products after clicking sublink
    await expect(Header).toContainText('Turf King Combination Products')
})

test('Turf hover and click Turf King Fertilizer', async ({page}) => {

    await Truf.hover()


    await Tsublink2.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Turf King Fertilizer Products')
    

})

test('Turf hover and click Turf Chemicals', async ({page}) => {

    await Truf.hover()


    await Tsublink3.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Turf Chemicals')
    

})

test('Turf hover and click Liquid Fertlizer', async ({page}) => {

    await Truf.hover()


    await Tsublink4.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Liquid Fertilizer Products')
    

})

test('Turf hover and click Seed', async ({page}) => {

    await Truf.hover()


    await Tsublink5.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Seed')
    

})

test('Turf hover and click Top Dressing & Bunker Sand', async ({page}) => {

    await Truf.hover()


    await Tsublink6.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Top Dressing & Bunker Sand')
    

})

test('Turf hover and click Amendments & Conditioners', async ({page}) => {

    await Truf.hover()


    await Tsublink7.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Amendments & Conditioners')
    

})

test('Turf hover and click Ice Melts', async ({page}) => {

    await Truf.hover()


    await Tsublink8.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Ice Melts')
    

})

// Sublink tests for Contract Services
test('Contract hover and click Conventional Aerification', async ({page}) => {

    await Contract.hover()


    await CSsublink1.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Conventional Aerification')
})

test('Contract hover and click Deep Tine Aerification', async ({page}) => {

    await Contract.hover()


    await CSsublink2.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Deep Tine Aerification')
})

test('Contract hover and click Rotary Decompation', async ({page}) => {

    await Contract.hover()


    await CSsublink3.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Rotary Decompaction')
})

test('Contract hover and click Application Services', async ({page}) => {

    await Contract.hover()


    await CSsublink4.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Application Services')
})

test('Contract hover and click Core Removal', async ({page}) => {

    await Contract.hover()


    await CSsublink5.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Core Removal')
})

test('Contract hover and click Topdressing', async ({page}) => {

    await Contract.hover()


    await CSsublink6.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Topdressing')
})

test('Contract hover and click Seeding', async ({page}) => {

    await Contract.hover()


    await CSsublink7.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Seeding')
})

test('Contract hover and click Construction and Renovation', async ({page}) => {

    await Contract.hover()


    await CSsublink8.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText('Construction and Renovation')
})

// Sublink tests for About
test('About hover and click Our Story & Team', async ({page}) => {

    await About.hover()


    await Asublink1.click()


    const Header = page.locator('h3')

    
    await expect(Header).toContainText("Let's go way back")
})

test('About hover and click Sales Team', async ({page}) => {

    await About.hover()


    await Asublink2.click()


    const Header = page.locator('h2')

    
    await expect(Header).toContainText("And the guys who bring our office to you...")
})

test('About hover and click Photo Gallery', async ({page}) => {

    await About.hover()


    await Asublink3.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText("See us in Action")
})

test('About hover and click Careers', async ({page}) => {

    await About.hover()


    await Asublink4.click()


    const Header = page.locator('h1')

    
    await expect(Header).toContainText("Careers")
})