import { test, expect } from '@playwright/test';

/*
    Test to verify that the "Conventional Aerification" page loads successfully.
*/
test('Page loads successfully', async ({ page }) => {
    // Visit the web application
    await page.goto('/');
     // Drag mouse to CONTRACT SERVICES
    await page.getByText('CONTRACT SERVICES').first().hover();
    //Click on Conventional Aerification 
    await page.getByRole('button', { name: 'CONVENTIONAL AERIFICIATION' }).click();
    //Verify that page loads successfully 
    expect(await page.url()).toEqual('https://www.andreandson.com/conventional-aerification');
    
});