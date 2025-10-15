import { test, expect, Page } from '@playwright/test';
import { turfkingprodiaminepage } from '../pages/turf king Prodiamine';

// Configure tests to run in parallel
test.describe.configure({ mode: 'parallel' });

test.describe('Turf King Prodiamine Page Tests - Fixed Parallel', () => {
    let pageInstance: turfkingprodiaminepage;

    test.beforeEach(async ({ page }) => {
        pageInstance = new turfkingprodiaminepage(page);
    });

    // Shared setup function to navigate to the Prodiamine page
    async function navigateToProdiaminePage(page: Page, instance: turfkingprodiaminepage) {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        
        await instance.clickTurfProductsTitle();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        
        await instance.clickCombinationProductLearnMoreButton();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        
        await instance.clickturfkingprodiaminelearnmorebutton();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        
        // Verify we're on the correct page
        await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(3000);
        
        // Verify page elements are visible
        await expect(instance.turfkingprodiamineheading).toBeVisible();
        await expect(instance.turfkingprodiaminepagedescription).toBeVisible();   
        await expect(instance.wetgrassimagealttext).toBeVisible();
        await expect(instance.spreadersettingbutton).toBeVisible();
    }

    test('verify page basic elements and spreader settings', async ({ page }) => {
        test.setTimeout(120000); // 2 minutes
        
        await navigateToProdiaminePage(page, pageInstance);
        
        // Test spreader settings button
        await page.waitForTimeout(2000);
        const [pdfPage] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickSpreadersettingButton()
        ]);
        
        try {
            await pdfPage.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPage).toHaveURL(/.*spreadersettings/i);
        } catch (error) {
            console.log('PDF page URL:', await pdfPage.url());
        }
        await pdfPage.close();
        await expect(page).toHaveURL(/.*prodiamine/);
    });

    test('test Turf King 15-0-3 with .20% Prodiamine buttons', async ({ page }) => {
        test.setTimeout(180000); // 3 minutes
        
        await navigateToProdiaminePage(page, pageInstance);
        
        // Wait before testing product buttons
        await page.waitForTimeout(2000);
        
        // Label button
        await expect(pageInstance.turfking1503withprodiaminelabelbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageLabel] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickTurfKing1503withProdiaminelabelButton()
        ]);
        try {
            await pdfPageLabel.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageLabel).toHaveURL(/.*label/i);
        } catch (error) {
            console.log('Label PDF URL:', await pdfPageLabel.url());
        }
        await pdfPageLabel.close();
        await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(2000);
        
        // SDS button
        await expect(pageInstance.turfking1503withprodiaminesdsbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageSDS] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickTurfKing1503withProdiamineSDSButton()
        ]);
        try {
            await pdfPageSDS.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageSDS).toHaveURL(/.*sds/i);
        } catch (error) {
            console.log('SDS PDF URL:', await pdfPageSDS.url());
        }
        await pdfPageSDS.close();
        await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(2000);
        
        // Spec sheet button
        await expect(pageInstance.turfking1503withprodiaminespecsheetbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageSpec] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickTurfKing1503withProdiamineSpecSheetButton()
        ]);
        try {
            await pdfPageSpec.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageSpec).toHaveURL(/.*spec/i);
        } catch (error) {
            console.log('Spec PDF URL:', await pdfPageSpec.url());
        }
        await pdfPageSpec.close();
        await expect(page).toHaveURL(/.*prodiamine/);
    });

    test('test Turf King 19-0-6 with .29% Prodiamine buttons', async ({ page }) => {
        test.setTimeout(180000); // 3 minutes
        
        await navigateToProdiaminePage(page, pageInstance);
        
        // Wait before testing product buttons
        await page.waitForTimeout(2000);

        // Label button
        await expect(pageInstance.turfking1906withprodiaminelabelbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageLabel19] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickTurfKing1906withProdiaminelabelButton()
        ]);
        try {
            await pdfPageLabel19.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageLabel19).toHaveURL(/.*label/i);
        } catch (error) {
            console.log('Label PDF URL:', await pdfPageLabel19.url());
        }
        await pdfPageLabel19.close();
        await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(2000);

        // SDS button
        await expect(pageInstance.turfking1906withprodiaminesdsbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageSDS19] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickTurfKing1906withProdiamineSDSButton()
        ]);
        try {
            await pdfPageSDS19.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageSDS19).toHaveURL(/.*sds/i);
        } catch (error) {
            console.log('SDS PDF URL:', await pdfPageSDS19.url());
        }
        await pdfPageSDS19.close();
        await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(2000);

        // Spec sheet button
        await expect(pageInstance.turfking1906withprodiaminespecsheetbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageSpec19] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickTurfKing1906withProdiamineSpecSheetButton()
        ]);
        try {
            await pdfPageSpec19.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageSpec19).toHaveURL(/.*spec/i);
        } catch (error) {
            console.log('Spec PDF URL:', await pdfPageSpec19.url());
        }
        await pdfPageSpec19.close();
        await expect(page).toHaveURL(/.*prodiamine/);
    });

    test('test Turf King 0-0-7 with .37% Prodiamine buttons', async ({ page }) => {
        test.setTimeout(180000); // 3 minutes
        
        await navigateToProdiaminePage(page, pageInstance);
        
        // Wait before testing product buttons
        await page.waitForTimeout(2000);

        // Label button
        await expect(pageInstance.turfking007withprodiaminelabelbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageLabel007] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickTurfKing007withProdiaminelabelButton()
        ]);
        try {
            await pdfPageLabel007.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageLabel007).toHaveURL(/.*label/i);
        } catch (error) {
            console.log('Label PDF URL:', await pdfPageLabel007.url());
        }
        await pdfPageLabel007.close();
        await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(2000);

        // SDS button
        await expect(pageInstance.turfking007with58prodiaminesdsbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageSDS007] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickTurfKing007withProdiamineSDSButton()
        ]);
        try {
            await pdfPageSDS007.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageSDS007).toHaveURL(/.*sds/i);
        } catch (error) {
            console.log('SDS PDF URL:', await pdfPageSDS007.url());
        }
        await pdfPageSDS007.close();
        await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(2000);

        // Spec sheet button
        await expect(pageInstance.turfking007with58prodiaminespecsheetbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageSpec007] = await Promise.all([
            page.context().waitForEvent('page'),
            pageInstance.clickTurfKing007withProdiamineSpecSheetButton()
        ]);
        try {
            await pdfPageSpec007.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageSpec007).toHaveURL(/.*spec/i);
        } catch (error) {
            console.log('Spec PDF URL:', await pdfPageSpec007.url());
        }
        await pdfPageSpec007.close();
        await expect(page).toHaveURL(/.*prodiamine/);
    });
});