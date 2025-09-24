import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/example';

/*
Verify that the page title in the hero section "EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT"
*/
test('has title', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');
    //Check that you are on the web page 
    //await (page.url()).toHaveUrl();
    //validate text matches with the hero section 
    await expect(homePage.textOnHeroSection).toHaveText('Demo IN TURF PRODUCTS AND MANAGEMENT');
   

});

