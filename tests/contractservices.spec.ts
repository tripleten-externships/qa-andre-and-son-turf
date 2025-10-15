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
test('Verify that the "Conventional Aerification" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Go to Contract Services page
    await page.goto('/contract-services', { waitUntil: 'load' });
    //Click on the "Conventional Aerification" link element
    await contractServicesPage.conventionalAerificationElement.scrollIntoViewIfNeeded();
    await contractServicesPage.conventionalAerificationElement.isVisible();
    await contractServicesPage.conventionalAerificationElement.click();
    //Verify that the new page is opened with correct URL
    await expect(page.url()).toContain('/conventional-aerification');
    //Verify that the new page contains the expected content
    const newPageTitle = page.locator('h1'); // Adjust the selector as needed
    await expect(newPageTitle).toContainText('Conventional Aerification'); // Adjust the expected text as needed
});

/*Verify that the "Deep Tine Aerification" link element is clickable and navigates to the correct page*/
test('Verify that the "Deep Tine Aerification" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Go to Contract Services page
    await page.goto('/contract-services', { waitUntil: 'load' });
    //Click on the "Deep Tine Aerification" link element
    await contractServicesPage.deepTineAerificationElement.scrollIntoViewIfNeeded();
    await contractServicesPage.deepTineAerificationElement.isVisible();
    await contractServicesPage.deepTineAerificationElement.click();
    //Verify that the new page is opened with correct URL
    await expect(page.url()).toContain('/deep-tine-aerificiation');
    //Verify that the new page contains the expected content
    const newPageTitle = page.locator('h1'); // Adjust the selector as needed
    await expect(newPageTitle).toContainText('Deep Tine Aerification'); // Adjust the expected text as needed
    
});

/*Verify that the "Rotary Decompaction" link element is clickable and navigates to the correct page*/
test('Verify that the "Rotary Decompaction" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Go to Contract Services page
    await page.goto('/contract-services', { waitUntil: 'load' });
    //Click on the "Rotary Decompaction" link element
    await contractServicesPage.rotaryDecompactionElement.scrollIntoViewIfNeeded();
    await contractServicesPage.rotaryDecompactionElement.isVisible();
    await contractServicesPage.rotaryDecompactionElement.click();
    //Verify that the new page is opened with correct URL
    await expect(page.url()).toContain('/rotary-decompaction');
    //Verify that the new page contains the expected content
    const newPageTitle = page.locator('h1'); // Adjust the selector as needed
    await expect(newPageTitle).toContainText('Rotary Decompaction'); // Adjust the expected text as needed

});

/*Verify that the "Core Removal" link element is clickable and navigates to the correct page*/
test('Verify that the "Core Removal" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Go to Contract Services page
    await page.goto('/contract-services', { waitUntil: 'load' });
    //Click on the "Core Removal" link element
    await contractServicesPage.coreRemovalElement.scrollIntoViewIfNeeded();
    await contractServicesPage.coreRemovalElement.isVisible();
    await contractServicesPage.coreRemovalElement.click();
    //Verify that the new page is opened with correct URL
    await expect(page.url()).toContain('/core-removal');
    //Verify that the new page contains the expected content
    const newPageTitle = page.locator('h1'); // Adjust the selector as needed
    await expect(newPageTitle).toContainText('Core Removal'); // Adjust the expected text as needed

});

/*Verify that the "Application Services" link element in the footer is clickable and navigates to the correct page*/
test('Verify that the "Application Services" link element in the footer is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Go to Contract Services page
    await page.goto('/contract-services', { waitUntil: 'load' });
    //Click on the "Application Services" link element
    await contractServicesPage.applicationServicesElement.scrollIntoViewIfNeeded();
    await contractServicesPage.applicationServicesElement.isVisible();
    await contractServicesPage.applicationServicesElement.click();
    //Verify that the new page is opened with correct URL
    await expect(page.url()).toContain('/application-services');
    //Verify that the new page contains the expected content
    const newPageTitle = page.locator('h1'); // Adjust the selector as needed
    await expect(newPageTitle).toContainText('Application Services'); // Adjust the expected text as needed
});

/*Verify that the "Topdressing" link element in the footer is clickable and navigates to the correct page*/
test('Verify that the "Topdressing" link element in the footer is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Go to Contract Services page
    await page.goto('/contract-services', { waitUntil: 'load' });
    //Click on the "Topdressing" link element
    await contractServicesPage.topdressingElement.scrollIntoViewIfNeeded();
    await contractServicesPage.topdressingElement.isVisible();
    await contractServicesPage.topdressingElement.click();
    //Verify that the new page is opened with correct URL
    await expect(page.url()).toContain('/topdressing');
    //Verify that the new page contains the expected content
    const newPageTitle = page.locator('h1'); // Adjust the selector as needed
    await expect(newPageTitle).toContainText('Topdressing'); // Adjust the expected text as needed
});

/*Verify that the "Seeding" link element in the footer is clickable and navigates to the correct page*/
test('Verify that the "Seeding" link element in the footer is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Go to Contract Services page
    await page.goto('/contract-services', { waitUntil: 'load' });
    //Click on the "Seeding" link element
    await contractServicesPage.seedingElement.scrollIntoViewIfNeeded();
    await contractServicesPage.seedingElement.isVisible();
    await contractServicesPage.seedingElement.click();
    //Verify that the new page is opened with correct URL
    await expect(page.url()).toContain('/seeding');
    //Verify that the new page contains the expected content
    const newPageTitle = page.locator('h1'); // Adjust the selector as needed
    await expect(newPageTitle).toContainText('Seeding'); // Adjust the expected text as needed
});

/*Verify that the "Construction & Renovation" link element in the footer is clickable and navigates to the correct page*/
test('Verify that the "Construction & Renovation" link element in the footer is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Go to Contract Services page
    await page.goto('/contract-services', { waitUntil: 'load' });
     //Click on the "Construction & Renovation" link element
    await contractServicesPage.constructionAndRenovationElement.scrollIntoViewIfNeeded();
    await contractServicesPage.constructionAndRenovationElement.isVisible();
    await contractServicesPage.constructionAndRenovationElement.click();
    //Verify that the new page is opened with correct URL
    await expect(page.url()).toContain('/construction-renovation');
    //Verify that the new page contains the expected content
    const newPageTitle = page.locator('h1'); // Adjust the selector as needed
    await expect(newPageTitle).toContainText('Construction and Renovation'); // Adjust the expected text as needed
});

