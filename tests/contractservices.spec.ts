import { test, expect } from '@playwright/test';
import { ContractServicesPage } from '../pages/contractservices';

/*
Verify that the page title in the hero section "Contract Services"
*/

test('Verify that the page title in the hero section "Contract Services"', async ({ page }) => {  
  const contractServicesPage = new ContractServicesPage(page);
  await page.goto('/contract-services', { waitUntil: 'load' });
  await expect(contractServicesPage.contractServicesTitle).toContainText('CONTRACT SERVICES');  
});

/*
test('Verify that the video plays in the hero when user land on Contract Services page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    await expect(contractServicesPage.contractServicesTitle).toContainText('CONTRACT SERVICES');
    await expect(contractServicesPage.contractServicesVideo).toBeVisible();
    const videoLocator = contractServicesPage.contractServicesVideo;

// Ensure the element is a video before calling play
    await videoLocator.evaluate(el => {
    if (el && el.tagName === 'VIDEO' && typeof (el as HTMLVideoElement).play === 'function') {
        (el as HTMLVideoElement).play();
    }
});
    await expect(contractServicesPage.contractServicesVideo).toHaveJSProperty('paused', false);
    await expect(contractServicesPage.contractServicesVideo).toHaveJSProperty('ended', false);
});
*/
/*Verify that the "Conventional Aerification" link element is clickable and navigates to the correct page*/
test.only('Verify that the "Conventional Aerification" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Go to Contract Services page
    await page.goto('/contract-services', { waitUntil: 'load' });
    //Click on the "Conventional Aerification" link element
    await contractServicesPage.conventionalAerificationelement.scrollIntoViewIfNeeded();
    await contractServicesPage.conventionalAerificationelement.isVisible();
    await contractServicesPage.conventionalAerificationelement.click();
    //Verify that the new page is opened with correct URL
    await expect(page.url()).toContain('/conventional-aerification');
    //Verify that the new page contains the expected content
    const newPageTitle = page.locator('h1'); // Adjust the selector as needed
    await expect(newPageTitle).toContainText('Conventional Aerification'); // Adjust the expected text as needed
});

/*Verify that the "Conventional Aerification" link element is clickable and navigates to the correct page*/

/*Verify that the "Deep Tine Aerification" link element is clickable and navigates to the correct page*/
test('Verify that the "Deep Tine Aerification" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    
});
