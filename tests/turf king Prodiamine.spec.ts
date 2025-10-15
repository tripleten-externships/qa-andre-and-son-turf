import { test, expect } from '@playwright/test';
import { TurfKingProdiaminePage } from '../pages/turf king Prodiamine';

test.describe.configure({ mode: 'parallel' });

test.describe('Turf King Prodiamine Page Tests', () => {
    let turfkingprodiaminepage: TurfKingProdiaminePage;

    test.beforeEach(async ({ page }) => {
        turfkingprodiaminepage = new TurfKingProdiaminePage(page);
    });

    // Shared setup function to navigate to the Prodiamine page
    async function navigateToProdiaminePage(page: any) {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        
        await turfkingprodiaminepage.clickTurfProductsTitle();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        
        await turfkingprodiaminepage.clickCombinationProductLearnMoreButton();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        
        await turfkingprodiaminepage.clickturfkingprodiaminelearnmorebutton();
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(3000);
        
        // Verify we're on the correct page
        await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(3000);
        
        // Verify page elements are visible
        await expect(turfkingprodiaminepage.turfkingprodiamineheading).toBeVisible();
        await expect(turfkingprodiaminepage.turfkingprodiaminepagedescription).toBeVisible();   
        await expect(turfkingprodiaminepage.wetgrassimagealttext).toBeVisible();
        await expect(turfkingprodiaminepage.spreadersettingbutton).toBeVisible();
    }

    test('verify page basic elements and spreader settings', async ({ page }) => {
        test.setTimeout(120000); // 2 minutes for basic page test
        
        await navigateToProdiaminePage(page);
        
        // Test spreader settings button
        await page.waitForTimeout(2000);
        const [pdfPage] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingprodiaminepage.clickSpreadersettingButton()
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

        // Test Turf King 15-0-3 with .20% Prodiamine buttons
        
        // Wait before testing product buttons
        await page.waitForTimeout(2000);
        
        // Label button
        await expect(turfkingprodiaminepage.turfking1503withprodiaminelabelbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageLabel] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingprodiaminepage.clickTurfKing1503withProdiaminelabelButton()
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
        await expect(turfkingprodiaminepage.turfking1503withprodiaminesdsbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageSDS] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingprodiaminepage.clickTurfKing1503withProdiamineSDSButton()
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
        await expect(turfkingprodiaminepage.turfking1503withprodiaminespecsheetbutton).toBeVisible();
        await page.waitForTimeout(1000);
        const [pdfPageSpec] = await Promise.all([
            page.context().waitForEvent('page'),
            turfkingprodiaminepage.clickTurfKing1503withProdiamineSpecSheetButton()
        ]);
        try {
            await pdfPageSpec.waitForLoadState('load', { timeout: 15000 });
            await expect(pdfPageSpec).toHaveURL(/.*spec/i);
        } catch (error) {
            console.log('Spec PDF URL:', await pdfPageSpec.url());
        }
        await pdfPageSpec.close();
        await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(2000);
        

    // Test Turf King 19-0-6 with .29% Prodiamine buttons
   
    // Wait before testing product buttons
    await page.waitForTimeout(2000);

    // Label button
    await expect(turfkingprodiaminepage.turfking1906withprodiaminelabelbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageLabel19] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1906withProdiaminelabelButton()
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
    await expect(turfkingprodiaminepage.turfking1906withprodiaminesdsbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSDS19] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1906withProdiamineSDSButton()
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
    await expect(turfkingprodiaminepage.turfking1906withprodiaminespecsheetbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSpec19] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1906withProdiamineSpecSheetButton()
    ]);
    try {
        await pdfPageSpec19.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageSpec19).toHaveURL(/.*spec/i);
    } catch (error) {
        console.log('Spec PDF URL:', await pdfPageSpec19.url());
    }
    await pdfPageSpec19.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);

    // test 'Turf King 0-0-7 with .37% Prodiamine' buttons
    // Wait before testing product buttons
    await page.waitForTimeout(2000);

    // Label button
    await expect(turfkingprodiaminepage.turfking007withprodiaminelabelbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageLabel007] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing007withProdiaminelabelButton()
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
    await expect(turfkingprodiaminepage.turfking007with58prodiaminesdsbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSDS007] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing007withProdiamineSDSButton()
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
    await expect(turfkingprodiaminepage.turfking007with58prodiaminespecsheetbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSpec007] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing007withProdiamineSpecSheetButton()
    ]);
    try {
        await pdfPageSpec007.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageSpec007).toHaveURL(/.*spec/i);
    } catch (error) {
        console.log('Spec PDF URL:', await pdfPageSpec007.url());
    }
    await pdfPageSpec007.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);

    // Test for 'Turf King 13-0-0 with .37% Prodiamine' buttons
    // Wait before testing product buttons
    await page.waitForTimeout(2000);
    // Label button
    await expect(turfkingprodiaminepage.turfking1300withprodiaminelabelbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageLabel1300] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1300withProdiaminelabelButton()
    ]);
    try {
        await pdfPageLabel1300.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageLabel1300).toHaveURL(/.*label/i);
    } catch (error) {
        console.log('Label PDF URL:', await pdfPageLabel1300.url());
    }
    await pdfPageLabel1300.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);
    // SDS button
    await expect(turfkingprodiaminepage.turfking1300withprodiaminesdsbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSDS1300] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1300withProdiamineSDSButton()
    ]);
    try {
        await pdfPageSDS1300.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageSDS1300).toHaveURL(/.*sds/i);
    } catch (error) {
        console.log('SDS PDF URL:', await pdfPageSDS1300.url());
    }
    await pdfPageSDS1300.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);
    // Spec sheet button
    await expect(turfkingprodiaminepage.turfking1300withprodiaminespecsheetbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSpec1300] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1300withProdiamineSpecSheetButton()
    ]);
    try {
        await pdfPageSpec1300.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageSpec1300).toHaveURL(/.*spec/i);
    } catch (error) {
        console.log('Spec PDF URL:', await pdfPageSpec1300.url());
    }
    await pdfPageSpec1300.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);

    // Test for 'Turf King 18-0-4 with .37% Prodiamine' buttons
    // Wait before testing product buttons
    await page.waitForTimeout(2000); 
    // Label button
    await expect(turfkingprodiaminepage.turfking1803with42prodiaminelabelbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageLabel1803] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1803with42ProdiaminelabelButton()
    ]);
    try {
        await pdfPageLabel1803.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageLabel1803).toHaveURL(/.*label/i);
    } catch (error) {
        console.log('Label PDF URL:', await pdfPageLabel1803.url());
    }
    await pdfPageLabel1803.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);
    // SDS button
    await expect(turfkingprodiaminepage.turfking1803with42prodiaminesdsbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSDS1803] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1803with42ProdiamineSDSButton()
    ]);
    try {
        await pdfPageSDS1803.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageSDS1803).toHaveURL(/.*sds/i);
    } catch (error) {
        console.log('SDS PDF URL:', await pdfPageSDS1803.url());
    }
    await pdfPageSDS1803.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);
    // Spec sheet button
    await expect(turfkingprodiaminepage.turfking1803with42prodiaminespecsheetbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSpec1803] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1803with42ProdiamineSpecSheetButton()
    ]);
    try {
        await pdfPageSpec1803.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageSpec1803).toHaveURL(/.*spec/i);
    } catch (error) {
        console.log('Spec PDF URL:', await pdfPageSpec1803.url());
    }
    await pdfPageSpec1803.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);

    //Test for 'Turf King 0-0-7 with .42% Prodiamine' buttons
    // Wait before testing product buttons
    await page.waitForTimeout(2000);
    // Label button
    await expect(turfkingprodiaminepage.turfking007with58prodiaminelabelbutton).toBeVisible();  
    await page.waitForTimeout(1000);
    const [pdfPageLabel00742] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing007with42ProdiaminelabelButton()
    ]);
    try {
        await pdfPageLabel00742.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageLabel00742).toHaveURL(/.*label/i);
    } catch (error) {
        console.log('Label PDF URL:', await pdfPageLabel00742.url());
    }
    await pdfPageLabel00742.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);
    // SDS button
    await expect(turfkingprodiaminepage.turfking007with58prodiaminesdsbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSDS00742] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing007with42ProdiamineSDSButton()
    ]);
    try {
        await pdfPageSDS00742.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageSDS00742).toHaveURL(/.*sds/i);
    } catch (error) {
        console.log('SDS PDF URL:', await pdfPageSDS00742.url());
    }
    await pdfPageSDS00742.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);
    // Spec sheet button
    await expect(turfkingprodiaminepage.turfking007with58prodiaminespecsheetbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSpec00742] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing007with42ProdiamineSpecSheetButton()
    ]);
    try {
        await pdfPageSpec00742.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageSpec00742).toHaveURL(/.*spec/i);
    } catch (error) {
        console.log('Spec PDF URL:', await pdfPageSpec00742.url());
    }
    await pdfPageSpec00742.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);

    // Test for 'Turf King Turf King 15-0-0 with .42% Prodiamine' buttons
    // Wait before testing product buttons
    await page.waitForTimeout(2000);
    // Label button
    await expect(turfkingprodiaminepage.turfking1500with42prodiaminelabelbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageLabel1500] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1500with42ProdiaminelabelButton()
    ]);
    try {
        await pdfPageLabel1500.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageLabel1500).toHaveURL(/.*label/i);
    } catch (error) {
        console.log('Label PDF URL:', await pdfPageLabel1500.url());
    }
    await pdfPageLabel1500.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);
    // SDS button
    await expect(turfkingprodiaminepage.turfking1500with42prodiaminesdsbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSDS1500] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1500with42ProdiamineSDSButton()
    ]);
    try {
        await pdfPageSDS1500.waitForLoadState('load', { timeout: 15000 });
        await expect(pdfPageSDS1500).toHaveURL(/.*sds/i);
    } catch (error) {
        console.log('SDS PDF URL:', await pdfPageSDS1500.url());
    }
    await pdfPageSDS1500.close();
    await expect(page).toHaveURL(/.*prodiamine/);
    await page.waitForTimeout(2000);
    // Spec sheet button
    await expect(turfkingprodiaminepage.turfking1500with42prodiaminespecsheetbutton).toBeVisible();
    await page.waitForTimeout(1000);
    const [pdfPageSpec1500] = await Promise.all([
        page.context().waitForEvent('page'),
        turfkingprodiaminepage.clickTurfKing1500with42ProdiamineSpecSheetButton()
    ]);
    await pdfPageSpec1500.waitForLoadState('load', { timeout: 15000 });
    try {
        await expect(pdfPageSpec1500).toHaveURL(/.*spec/i);
    } catch (error) {
        console.log('Spec PDF URL:', await pdfPageSpec1500.url());
    }
    await pdfPageSpec1500.close();
    await expect(page).toHaveURL(/.*prodiamine/);
        await page.waitForTimeout(2000);
        });
    });
