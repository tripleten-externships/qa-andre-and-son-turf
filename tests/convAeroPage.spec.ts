import { test, expect } from '@playwright/test';

/*
    Test to verify that the "Conventional Aerification" page loads successfully.
*/
test('Page loads successfully', async ({ page }) => {
    // Visit the web application
    await page.goto('/');
     // Drag mouse to CONTRACT SERVICES
    await page.getByText('Contract Services').hover();
    //Click on Conventional Aerification 
    await page.getByText('CONVENTIONAL AERIFICATION').click();
    //Verify that page loads successfully 
    await expect(page.url()).toEqual('https://www.andreandson.com/conventional-aerification');

});