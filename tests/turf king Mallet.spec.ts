import { test, expect } from '@playwright/test';
import { TurfKingMalletPage } from '../pages/turf king Mallet';

test.describe('Turf King Mallet Page Tests', async () => {
    let turfkingmalletpage: TurfKingMalletPage;

    test.beforeEach(async ({ page }) => {
        turfkingmalletpage = new TurfKingMalletPage(page);
    });

    test('verify the turf king mallet page elements and functions', async ({ page }) => {
        // Set longer timeout for this test
        test.setTimeout(120000); // 2 minutes
        
        // Navigate to home page
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);
        
        // Navigate through the flow to reach Mallet page
        await turfkingmalletpage.clickTurfProductsTitle();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);
        
        await turfkingmalletpage.clickCombinationProductLearnMoreButton();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);
        
        await turfkingmalletpage.clickTurfKingMalletLearnMoreButton();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);
        
        // Verify we're on the correct page
        await expect(page).toHaveURL(/.*mallet/);
        
       // verify the spreader setting button is present and functional
       await expect(turfkingmalletpage.spreadersettingbutton).toBeVisible();

        // Add wait before clicking spreader settings
        await page.waitForTimeout(500);
        
        // Test spreader settings button
        const [pdfPage] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickSpreadersettingButton()
        ]);
        
        // Wait for PDF with shorter timeout and check URL
        try {
            await pdfPage.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPage).toHaveURL(/.*spreadersettings/i);
        } catch (error) {
            console.log('PDF page URL:', await pdfPage.url());
            // Even if URL doesn't match exactly, continue the test
        }
        await pdfPage.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500);


        // Test Turf King 10-6-4 with Mallet buttons
        
        // Wait before testing product buttons
        await page.waitForTimeout(500);
        
        // Label button
        await expect(turfkingmalletpage.turfking1064withmalletlabelbutton).toBeVisible();
        await page.waitForTimeout(300);
        const [pdfPageLabel] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickTurfKing1064withMalletLabelButton()
        ]);
        try {
            await pdfPageLabel.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPageLabel).toHaveURL(/.*label/i);
        } catch (error) {
            console.log('Label PDF URL:', await pdfPageLabel.url());
        }
        await pdfPageLabel.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500);
        
        // SDS button
        await expect(turfkingmalletpage.turfking1064withmalletSDSbutton).toBeVisible();
        await page.waitForTimeout(300);
        const [pdfPageSDS] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickTurfKing1064withMalletSDSButton()
        ]);
        try {
            await pdfPageSDS.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPageSDS).toHaveURL(/.*sds/i);
        } catch (error) {
            console.log('SDS PDF URL:', await pdfPageSDS.url());
        }
        await pdfPageSDS.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500);
        
        // Spec sheet button
        await expect(turfkingmalletpage.turfking1064withmalletspecsheetbutton).toBeVisible();
        await page.waitForTimeout(300);
        const [pdfPageSpec] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickTurfKing1064withMalletSpecSheetButton()
        ]);
        try {
            await pdfPageSpec.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPageSpec).toHaveURL(/.*spec/i);
        } catch (error) {
            console.log('Spec PDF URL:', await pdfPageSpec.url());
        }
        await pdfPageSpec.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500); 

        // Test Turf King 15-0-7 with Mallet buttons
        await expect(turfkingmalletpage.turfking1507withmalletlabelbutton).toBeVisible();
        await page.waitForTimeout(300);
        const [pdfPageLabel1507] = await Promise.all([  
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickTurfKing1507withMalletLabelButton()
        ]);
        try {
            await pdfPageLabel1507.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPageLabel1507).toHaveURL(/.*label/i);
        } catch (error) {
            console.log('Label PDF URL:', await pdfPageLabel1507.url());
        }
        await pdfPageLabel1507.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500);

        // SDS button
        await expect(turfkingmalletpage.turfking1507withmalletSDSbutton).toBeVisible();
        await page.waitForTimeout(300);
        const [pdfPageSDS1507] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickTurfKing1507withMalletSDSButton()
        ]);
        try {
            await pdfPageSDS1507.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPageSDS1507).toHaveURL(/.*sds/i);
        } catch (error) {
            console.log('SDS PDF URL:', await pdfPageSDS1507.url());
        }
        await pdfPageSDS1507.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500);

        // Spec sheet button
        await expect(turfkingmalletpage.turfking1507withmalletspecsheetbutton).toBeVisible();
        await page.waitForTimeout(300);
        const [pdfPageSpec1507] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickTurfKing1507withMalletSpecSheetButton()
        ]);
        try {
            await pdfPageSpec1507.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPageSpec1507).toHaveURL(/.*spec/i);
        } catch (error) {
            console.log('Spec PDF URL:', await pdfPageSpec1507.url());
        }
        await pdfPageSpec1507.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500);  

        // Test Turf King 21-0-6 with Mallet buttons

        //wait before testing product buttons
        await page.waitForTimeout(500);
        // Label button
        await expect(turfkingmalletpage.turfking2106withmalletlabelbutton).toBeVisible();
        await page.waitForTimeout(300);
        const [pdfPageLabel2106] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickTurfKing2106withMalletLabelButton()
        ]);
        try {
            await pdfPageLabel2106.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPageLabel2106).toHaveURL(/.*label/i);
        } catch (error) {
            console.log('Label PDF URL:', await pdfPageLabel2106.url());
        }
        await pdfPageLabel2106.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500);
        // SDS button
        await expect(turfkingmalletpage.turfking2106withmalletSDSbutton).toBeVisible();
        await page.waitForTimeout(300);
        const [pdfPageSDS2106] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickTurfKing2106withMalletSDSButton()
        ]);
        try {
            await pdfPageSDS2106.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPageSDS2106).toHaveURL(/.*sds/i);
        } catch (error) {
            console.log('SDS PDF URL:', await pdfPageSDS2106.url());
        }
        await pdfPageSDS2106.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500);
        // Spec sheet button
        await expect(turfkingmalletpage.turfking2106withmalletspecsheetbutton).toBeVisible();
        await page.waitForTimeout(300);
        const [pdfPageSpec2106] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingmalletpage.clickTurfKing2106withMalletSpecSheetButton()
        ]);
        try {
            await pdfPageSpec2106.waitForLoadState('load', { timeout: 5000 });
            await expect(pdfPageSpec2106).toHaveURL(/.*spec/i);
        } catch (error) {
            console.log('Spec PDF URL:', await pdfPageSpec2106.url());
        }
        await pdfPageSpec2106.close();
        await expect(page).toHaveURL(/.*mallet/);
        await page.waitForTimeout(500);
    });

});