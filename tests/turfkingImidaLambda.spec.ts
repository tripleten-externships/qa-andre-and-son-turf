import { test, expect } from '@playwright/test';
import { TurfKingImidaLambdaPage } from '../pages/turfkingImidaLambda';

test.describe('Turf King Imida-Lambda Page Tests', () => {
    let turfkingimidaLambdapage: TurfKingImidaLambdaPage;

    test.beforeEach(async ({ page }) => {
        turfkingimidaLambdapage = new TurfKingImidaLambdaPage(page);
    });

    test('verify the contents of the turf king imida-lambda page', async ({ page }) => {
        // Navigate to home page
        await page.goto('/');
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(1000);
        // Navigate through the flow to reach Imida-Lambda page
        await turfkingimidaLambdapage.clickTurfProductsTitle();
        await page.waitForLoadState('networkidle');
        await turfkingimidaLambdapage.clickCombinationProductLearnMoreButton();
        await page.waitForLoadState('networkidle');
        await turfkingimidaLambdapage.clickTurfKingImidaLambdaLearnMoreButton();
        await page.waitForLoadState('networkidle');
        // Verify we're on the correct page
        await expect(page).toHaveURL(/.*imida-lambda/);
        // Wait for page elements to load
        await page.waitForTimeout(1000);

        //verify the turfking 0-0-7 with imida-lambda product buttons

        //label button functionality
        await turfkingimidaLambdapage.clickTurfking007();
        await page.waitForTimeout(2000); // Wait longer for potential PDF to load
        const pages = page.context().pages();
        if (pages.length > 1) {
            await pages[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //SDS button functionality
        await turfkingimidaLambdapage.clickTurfKing007withImidaLambdaSDSButton();
        await page.waitForTimeout(2000); // Wait longer for potential PDF to load
        const pages1 = page.context().pages();
        if (pages1.length > 1) {
            await pages1[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //spec sheet button functionality
        await turfkingimidaLambdapage.clickTurfKing007withImidaLambdaSpecSheetButton();
        await page.waitForTimeout(2000); // Wait longer for potential PDF to load
        const pages2 = page.context().pages();
        if (pages2.length > 1) {
            await pages2[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //verify the turfking 12-0-0 with imida-lambda product buttons
        //label button functionality
        await turfkingimidaLambdapage.clickTurfKing1200withImidaLambdaLabelButton();
        await page.waitForTimeout(2000);
        const pages3 = page.context().pages();
        if (pages3.length > 1) {
            await pages3[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //SDS button functionality
        await turfkingimidaLambdapage.clickTurfKing1200withImidaLambdaSDSButton();
        await page.waitForTimeout(2000);
        const pages4 = page.context().pages();
        if (pages4.length > 1) {
            await pages4[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //spec sheet button functionality
        await turfkingimidaLambdapage.clickTurfKing1200withImidaLambdaSpecSheetButton();
        await page.waitForTimeout(2000);
        const pages5 = page.context().pages();
        if (pages5.length > 1) {
            await pages5[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //verify the turfking 17-0-3 with imida-lambda product buttons
        //label button functionality
        await turfkingimidaLambdapage.clickTurfKing1703withImidaLambdaLabelButton();
        await page.waitForTimeout(2000);
        const pages6 = page.context().pages();
        if (pages6.length > 1) {
            await pages6[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //SDS button functionality
        await turfkingimidaLambdapage.clickTurfKing1703withImidaLambdaSDSButton();
        await page.waitForTimeout(2000);
        const pages7 = page.context().pages();
        if (pages7.length > 1) {
            await pages7[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //spec sheet button functionality
        await turfkingimidaLambdapage.clickTurfKing1703withImidaLambdaSpecSheetButton();
        await page.waitForTimeout(2000);
        const pages8 = page.context().pages();
        if (pages8.length > 1) {
            await pages8[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //verify the turfking 21-0-7 with imida-lambda product buttons
        //label button functionality
        await turfkingimidaLambdapage.clickTurfKing2107withImidaLambdaLabelButton();
        await page.waitForTimeout(2000);
        const pages9 = page.context().pages();
        if (pages9.length > 1) {
            await pages9[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //SDS button functionality
        await turfkingimidaLambdapage.clickTurfKing2107withImidaLambdaSDSButton();
        await page.waitForTimeout(2000);
        const pages10 = page.context().pages();
        if (pages10.length > 1) {
            await pages10[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        //spec sheet button functionality
        await turfkingimidaLambdapage.clickTurfKing2107withImidaLambdaSpecSheetButton();
        await page.waitForTimeout(2000);
        const pages11 = page.context().pages();
        if (pages11.length > 1) {
            await pages11[1].close();
            await page.bringToFront();
        }
        await page.waitForTimeout(1000);
        
        //verify the integrated video player presence
        await expect(page.locator('iframe[title*="Imida"]')).toBeVisible();
        console.log('Integrated video player iframe is present and visible');
        
        await page.waitForTimeout(1000);
    });

});
