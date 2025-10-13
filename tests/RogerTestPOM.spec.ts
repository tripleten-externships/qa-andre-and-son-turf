import {test, expect} from '@playwright/test';
import { NavigationPage } from '../pages/Locator';




//Rotary Decompaction
test('Verify Rotary Decompaction web page', async ({ page }) => {
    const nav = new NavigationPage(page)
    await nav.verifyRotaryDecompaction()
});

/*
test('Verify you can hover and click and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await nav.
});
*/


// Footer Tests
// start of Turf Prodcuts
test('Verify Truf Product is clickable and correct', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickTurfProducts()
});

test('Verify you can hover and click Turf King Combo Products and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickTurfComboProducts()
});

test('Verify you can hover and click Turf King Fertlizlier and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickTurfFertilizer()
});

test('Verify you can hover and click Turf King Chemicals and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickTurfChemicals()
});

test('Verify you can hover and click Liquid Fertlizer and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickLiquidFertilizer()
});

test('Verify you can hover and click Seed and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickSeed()
});

test('Verify you can hover and click Top Dressing & Bunker Sand and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickDressingandBunkerSand()
});

test('Verify you can hover and click Amendments & Conditioners and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickAmendments()
});

test('Verify you can hover and click Ice Melts and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickMelts()
});
// end of Turf Products tests

// start of Contract Services
test('Verify you can hover and click Contract Services and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickContractServices()
});

test('Verify you can hover and click Conventional Areification and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickConventionalAerification()
});

test('Verify you can hover and click Deep Tine Areification and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickDeepTine()
});

test('Verify you can hover and click Application Services and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickApplicationServices()
});

test('Verify you can hover and click Core Removal and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickCoreRemoval()
});

test('Verify you can hover and click Topdressing and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickTopDressing()
});

test('Verify you can hover and click Seeding and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickSeeding()
});

test('Verify you can hover and click Construction & Renovation and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickConstruction()
});
// end of Contract Services

// start of Equipment
test('Verify you can click Equipment and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickEquipment()
});
// end of Equipment

// start of About
test('Verify you can hover and click Our Story & Team and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.hoverAboutclickStory()
});

test('Verify you can hover and click Sales Team and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.hoverAboutclickSales()
});

test('Verify you can hover and click Photo Gallery and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.hoverAboutclickPhoto()
});

test('Verify you can hover and click Careers and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.hoverAboutclickCareers()
});
// end of About

// start of Contact
test('Verify you can hover and click Contact and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickContact()
});
// end of Contact


// start of Items
test('Verify you can hover and click Items and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.clickItems()
});
// end of Items

// start of Footer tests
test('Verify the footer and other information is visible and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.verifyFooterIsVisible()
});

test('Verify the contact information is correct and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/')
    await nav.verifyContactInfo()
});

test('Verify the Social Media icons and links and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('/') 
    await nav.verifySocialMediaLinks()
});
// end of Footer tests