import { test, expect } from '@playwright/test';
import { TurfKingProdiaminePage } from '../pages/turf king Prodiamine';
import { turfKingComboProductPage } from '../pages/turf king combo products';

//before running the test click on the learn more button under the description of the "Turf King + Prodiamine" title in the combo products page


//go to home page
    //await page.goto('/');
    //await turfKingComboPage.clickTurfProductsTitle();
    //await turfkingcombopage.clickCombinationProductLearnMoreButton();
    //click on the learn more button under the description of the "Turf King + Prodiamine" title to go to the turf king prodiamine page
    //await turfProductsPage.clickTurfKingProdiamineLearnMoreButton();
  
test.describe('Turf King Prodiamine Page Tests', async () => {
    const turfKingProdiaminePage = new TurfKingProdiaminePage();
    const turfkingcomboproductsPage = new turfKingComboProductPage();

    test.beforeEach(async ({ page }) => {
        // Use the exact working navigation from turfkingcomboprodut.spec.ts
        await page.goto('/');
        
        // click "turf products" title to go to turf product page
        await turfkingcomboproductsPage.clickTurfProductsTitle();
        await page.waitForLoadState('networkidle');

        // Click combination products link to go to combo products page
        await turfkingcomboproductsPage.clickCombinationProductLearnMoreButton();
        await page.waitForLoadState('networkidle');
        
        // Verify we're on combo products page
        await expect(page).toHaveURL(/.*turf-king-combo-products/);
        
        // Click on Turf King + Prodiamine Learn More button
        await turfkingcomboproductsPage.clickTurfKingProdiamineLearnMoreButton();
        await page.waitForLoadState('networkidle');
    });

    test('verify the "turf king prodiamine" page content', async ({ page }) => {
        //await turfkingcomboproductsPage.page.goto('/turf-king-combo-products');
        //go to Turf King Prodiamine page by clicking the Learn More button
        await turfkingcomboproductsPage.clickTurfKingProdiamineLearnMoreButton();
        //verify the page is correct
        await expect(turfkingcomboproductsPage.page).toHaveURL(/.*turf-king-prodiamine/);
        // verify the page title
        await expect(turfkingcomboproductsPage.page.getByRole('heading', { name: 'Turf King + Prodiamine' })).toBeVisible();
        // verify the description
        await expect(turfkingcomboproductsPage.page.getByText('Prodiamine is a pre-emergence')).toBeVisible();
        //verify the image in the background has an Alt text in developer tools
        await expect(turfkingcomboproductsPage.page.locator('img[alt="turf king prodiamine.jpg"]')).toBeVisible();
        //verify the spreader settings button exists
        await expect(turfkingcomboproductsPage.page.getByRole('link', { name: 'Spreader Settings' })).toBeVisible();
    });
    test('verify the spreader settings functionality', async ({ page }) => {
        //verify the page is correct
        await expect(turfkingcomboproductsPage.page).toHaveURL(/.*turf-king-prodiamine/);
        //verify when clicking on the spreader settings button it opens a pdf in a new tab
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('link', { name: 'Spreader Settings' }).click(),
        ]);
        //verify the new tab opened with pdf
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/.*pdf/);
        await newPage.close();
    });
    test('verify the other product variants in turf king prodiamine category', async ({ page }) => {
        //verify the page is correct
        await expect(turfkingcomboproductsPage.page).toHaveURL(/.*turf-king-prodiamine/);
        //verify the other Turf King products are listed
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 15-0-3 with .20% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 19-0-6 with .29% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 0-0-7 with .37% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 13-0-0 with .37% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 18-0-4 with .37% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 0-0-7 with .42% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 15-0-0 with .42% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 18-0-3 with .42% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 0-0-7 with .58% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 15-0-0 with .58% Prodiamine')).toBeVisible();
        await expect(TurfKingProdiaminePage.page.getByText('Turf King 18-0-0 with .58% Prodiamine')).toBeVisible();
    });

    test('verify the product buttons functionality for Turf King 15-0-3', async ({ page }) => {
        //go to Turf King Prodiamine page by clicking the Learn More button
        await turfkingcomboproductsPage.clickTurfKingProdiamineLearnMoreButton();
        //verify the page is correct
        expect(/.*turf-king-prodiamine/);
        //verify the "Turf King 15-0-3 with .20% Prodiamine" section exists
        await expect(TurfKingProdiaminePage.getByRole('heading', { name: 'Turf King 15-0-3 with .20%' })).toBeVisible();
        //test Label button
        const [labelPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3' }).getByRole('link', { name: 'Label' }).click(),
        ]);
        await labelPage.waitForLoadState();
        await expect(labelPage).toHaveURL(/.*pdf/);
        await labelPage.close();
        //test SDS button
        const [sdsPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3' }).getByRole('link', { name: 'SDS' }).click(),
        ]);
        await sdsPage.waitForLoadState();
        await expect(sdsPage).toHaveURL(/.*pdf/);
        await sdsPage.close();
        //test Spec Sheet button
        const [specPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3' }).getByRole('link', { name: 'Spec Sheet' }).click(),
        ]);
        await specPage.waitForLoadState();
        await expect(specPage).toHaveURL(/.*pdf/);
        await specPage.close();
    });
    test('verify the button functionality for Turf King 19-0-6', async ({ page }) => {
        //verify the page is correct
        await expect(turfkingcomboproductsPage.page).toHaveURL(/.*turf-king-prodiamine/);
        //verify the "Turf King 19-0-6 with .29% Prodiamine" section exists
        await expect(turfkingcomboproductsPage.page.getByRole('heading', { name: 'Turf King 19-0-6 with .29%' })).toBeVisible();
        //test Label button
        const [labelPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6' }).getByRole('link', { name: 'Label' }).click(),
        ]);
        await labelPage.waitForLoadState();
        await expect(labelPage).toHaveURL(/.*pdf/);
        await labelPage.close();
        //test SDS button
        const [sdsPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6' }).getByRole('link', { name: 'SDS' }).click(),
        ]);
        await sdsPage.waitForLoadState();
        await expect(sdsPage).toHaveURL(/.*pdf/);
        await sdsPage.close();
        //test Spec Sheet button
        const [specPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('listitem').filter({ hasText: 'Turf King 19-0-6' }).getByRole('link', { name: 'Spec Sheet' }).click(),
        ]);
        await specPage.waitForLoadState();
        await expect(specPage).toHaveURL(/.*pdf/);
        await specPage.close();
    });
    test('verify the other product variants exist', async ({ page }) => {
        //verify the page is correct
        await expect(turfkingcomboproductsPage.page).toHaveURL(/.*turf-king-prodiamine/);
        //verify the other Turf King products are listed
        await expect(turfkingcomboproductsPage.page.getByText('Turf King 0-0-7 with .37% Prodiamine')).toBeVisible();
        await expect(turfkingcomboproductsPage.page.getByText('Turf King 13-0-0 with .37% Prodiamine')).toBeVisible();
        await expect(turfkingcomboproductsPage.page.getByText('Turf King 18-0-4 with .37% Prodiamine')).toBeVisible();
    });
    test.beforeEach(async ({ page }) => {
        // Use the same navigation approach as the working tests
        await page.goto('/');
        // click "turf products" title to go to turf product page
        turfkingcomboporductspage.clickTurfProductsTitle();
        await page.waitForLoadState('networkidle');
        //click combinatio products learn more button to go to combo products page
        turfkingcomboporductspage.clickCombinationProductLearnMoreButton();
        await page.waitForLoadState('networkidle');
        // Verify we're on combo products page
        await expect(page).toHaveURL(/.*turf-king-combo-products/);
        await expect(page.getByRole('heading', { name: 'Turf King Combo Products' })).toBeVisible();


        // Click on Turf King + Prodiamine Learn More button
        await page.locator('text=Turf King + Prodiamine').getByRole('link', { name: 'Learn More' }).click();
        await page.waitForLoadState('networkidle');

    });
        
    test('verify page content and spreader settings functionality', async ({ page }) => {
        // Verify correct page URL
        await expect(page).toHaveURL(/.*turf-king-prodiamine/);
        
        // Verify page title
        await expect(page.getByRole('heading', { name: 'Turf King + Prodiamine' })).toBeVisible();
        
        // Verify description
        await expect(page.getByText('Prodiamine is a pre-emergence')).toBeVisible();
        
        // Verify spreader settings button exists
        await expect(page.getByRole('link', { name: 'Spreader Settings' })).toBeVisible();
        
        // Test spreader settings button opens PDF in new tab
        const [newPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('link', { name: 'Spreader Settings' }).click(),
        ]);
        
        // Verify new tab opened with PDF
        await newPage.waitForLoadState();
        await expect(newPage).toHaveURL(/.*pdf/);
        await newPage.close();
    });

    test('verify product buttons functionality - Turf King 15-0-3', async ({ page }) => {
        // Verify Turf King 15-0-3 with .20% Prodiamine buttons
        await expect(page.getByRole('heading', { name: 'Turf King 15-0-3 with .20%' })).toBeVisible();
        
        // Test Label button
        const [labelPage] = await Promise.all([ 
            page.waitForEvent('popup'),
            await TurfKingProdiaminePage.clickTurfKing153LabelButton(),
        ]);
        await labelPage.waitForLoadState();
        await expect(labelPage).toHaveURL(/.*pdf/);
        await labelPage.close();
        
        // Test SDS button
        const [sdsPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3' }).getByRole('link', { name: 'SDS' }).click(),
        ]);
        await sdsPage.waitForLoadState();
        await expect(sdsPage).toHaveURL(/.*pdf/);
        await sdsPage.close();
        
        // Test Spec Sheet button
        const [specPage] = await Promise.all([
            page.waitForEvent('popup'),
            page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-3' }).getByRole('link', { name: 'Spec Sheet' }).click(),
        ]);
        await specPage.waitForLoadState();
        await expect(specPage).toHaveURL(/.*pdf/);
        await specPage.close();
    });
    
   
    });