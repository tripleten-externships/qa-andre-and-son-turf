import { test, expect } from '@playwright/test';
import { ContractServicesPage } from '../pages/contractservices';
import { MenuPage } from '../pages/menu';

test.beforeEach(async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.navigateToContractServices();
});
/*
Verify that the page title in the hero section "Contract Services"
*/

test('Verify that the page title in the hero section "Contract Services"', async ({ page }) => {  
  const contractServicesPage = new ContractServicesPage(page);
  await expect(contractServicesPage.contractServicesTitle).toContainText('CONTRACT SERVICES');  
});

/*Verify that the "Conventional Aerification" link element is clickable and navigates to the correct page*/
test('Verify that the "Conventional Aerification" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Click on the "Conventional Aerification" link element
    await contractServicesPage.conventionalAerificationElement.scrollIntoViewIfNeeded();
    await contractServicesPage.conventionalAerificationElement.isVisible();
    await contractServicesPage.conventionalAerificationElement.hover();
    await contractServicesPage.conventionalAerificationElement.click();
    //Verify that the new page is opened with correct URL
    await page.waitForURL(/conventional-aerification/, { timeout: 10000 });
    await expect(page.url()).toContain('/conventional-aerification');
    //Verify that the new page contains the expected content
    await expect(contractServicesPage.conventionalNewPageTitle).toContainText('Conventional Aerification'); // Adjust the expected text as needed
});

/*Verify that the "Deep Tine Aerification" link element is clickable and navigates to the correct page*/
test('Verify that the "Deep Tine Aerification" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Click on the "Deep Tine Aerification" link element
    await contractServicesPage.deepTineAerificationElement.scrollIntoViewIfNeeded();
    await contractServicesPage.deepTineAerificationElement.isVisible();
    await contractServicesPage.deepTineAerificationElement.hover();
    await contractServicesPage.deepTineAerificationElement.click();
    //Verify that the new page is opened with correct URL
    await page.waitForURL(/deep-tine-aerificiation/, { timeout: 10000 });
    await expect(page.url()).toContain('/deep-tine-aerificiation');
    //Verify that the new page contains the expected content
    await expect(contractServicesPage.deepTineNewPageTitle).toContainText('Deep Tine Aerification'); // Adjust the expected text as needed
});

/*Verify that the "Rotary Decompaction" link element is clickable and navigates to the correct page*/
test('Verify that the "Rotary Decompaction" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Click on the "Rotary Decompaction" link element
    await contractServicesPage.rotaryDecompactionElement.scrollIntoViewIfNeeded();
    await contractServicesPage.rotaryDecompactionElement.isVisible();
    await contractServicesPage.rotaryDecompactionElement.hover();
    await contractServicesPage.rotaryDecompactionElement.click();
    //Verify that the new page is opened with correct URL
    await page.waitForURL(/rotary-decompaction/, { timeout: 10000 });
    await expect(page.url()).toContain('/rotary-decompaction');
    //Verify that the new page contains the expected content
    await expect(contractServicesPage.rotaryNewPageTitle).toContainText('Rotary Decompaction'); // Adjust the expected text as needed

});

/*Verify that the "Core Removal" link element is clickable and navigates to the correct page*/
test('Verify that the "Core Removal" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Click on the "Core Removal" link element
    await contractServicesPage.coreRemovalElement.scrollIntoViewIfNeeded();
    await contractServicesPage.coreRemovalElement.isVisible();
    await contractServicesPage.coreRemovalElement.hover();
    await contractServicesPage.coreRemovalElement.click();
    //Verify that the new page is opened with correct URL
    await page.waitForURL(/core-removal/, { timeout: 10000 });
    await expect(page.url()).toContain('/core-removal');
    //Verify that the new page contains the expected content
    await expect(contractServicesPage.coreRemovalNewPageTitle).toContainText('Core Removal'); // Adjust the expected text as needed
});

/*Verify that the "Application Services" link element is clickable and navigates to the correct page*/
test('Verify that the "Application Services" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Click on the "Application Services" link element
    await contractServicesPage.applicationServicesElement.scrollIntoViewIfNeeded();
    await contractServicesPage.applicationServicesElement.isVisible();
    await contractServicesPage.applicationServicesElement.hover();
    await contractServicesPage.applicationServicesElement.click();
    //Verify that the new page is opened with correct URL
    await page.waitForURL(/application-services/, { timeout: 10000 });
    await expect(page.url()).toContain('/application-services');
    //Verify that the new page contains the expected content
    await expect(contractServicesPage.applicationNewPageTitle).toContainText('Application Services'); // Adjust the expected text as needed
});

/*Verify that the "Topdressing" link element is clickable and navigates to the correct page*/
test('Verify that the "Topdressing" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Click on the "Topdressing" link element
    await contractServicesPage.topdressingElement.scrollIntoViewIfNeeded();
    await contractServicesPage.topdressingElement.isVisible();
    await contractServicesPage.topdressingElement.hover();
    await contractServicesPage.topdressingElement.click();
    //Verify that the new page is opened with correct URL
    await page.waitForURL(/topdressing/, { timeout: 10000 });
    await expect(page.url()).toContain('/topdressing');
    //Verify that the new page contains the expected content
    await expect(contractServicesPage.topDressNewPageTitle).toContainText('Topdressing'); // Adjust the expected text as needed
});

/*Verify that the "Seeding" link element is clickable and navigates to the correct page*/
test('Verify that the "Seeding" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    //Click on the "Seeding" link element
    await contractServicesPage.seedingElement.scrollIntoViewIfNeeded();
    await contractServicesPage.seedingElement.isVisible();
    await contractServicesPage.seedingElement.hover();
    await contractServicesPage.seedingElement.click();
    //Verify that the new page is opened with correct URL
    await page.waitForURL(/seeding/, { timeout: 10000 });
    await expect(page.url()).toContain('/seeding');
    //Verify that the new page contains the expected content
    await expect(contractServicesPage.seedingNewPageTitle).toContainText('Seeding'); // Adjust the expected text as needed
});

/*Verify that the "Construction & Renovation" link element is clickable and navigates to the correct page*/
test('Verify that the "Construction & Renovation" link element is clickable and navigates to the correct page', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
     //Click on the "Construction & Renovation" link element
    await contractServicesPage.constructionAndRenovationElement.scrollIntoViewIfNeeded();
    await contractServicesPage.constructionAndRenovationElement.isVisible();
    await contractServicesPage.constructionAndRenovationElement.hover();
    await contractServicesPage.constructionAndRenovationElement.click();
    //Verify that the new page is opened with correct URL
    await page.waitForURL(/construction-renovation/, { timeout: 10000 });
    await expect(page.url()).toContain('/construction-renovation');
    //Verify that the new page contains the expected content
    await expect(contractServicesPage.constructionNewPageTitle).toContainText('Construction and Renovation'); // Adjust the expected text as needed
});

/*Verify Get a Quote Contact Form - Input Validation*/

test.describe('Get a Quote Contact Form - Input Validation', () => {
  let contractServicesPage: ContractServicesPage;

  test.beforeEach(async ({ page }) => {
    contractServicesPage = new ContractServicesPage(page);
    // Scroll to section
    await contractServicesPage.getaQuoteSection.scrollIntoViewIfNeeded();
    await contractServicesPage.verifySectionVisible(); // Ensure heading loads
  });

  test('should fill First Name with Latin letters', async () => {
    await contractServicesPage.fillFirstName(contractServicesPage.testLatinText);
  });

  test('should fill Last Name with Latin letters', async () => {
    await contractServicesPage.fillLastName(contractServicesPage.testLatinText);
  });

  test('should fill Email with Latin letters', async () => {
    await contractServicesPage.fillEmail(contractServicesPage.testLatinText);
  });

  test('should fill Email with numbers', async () => {
    await contractServicesPage.fillEmail(contractServicesPage.testNumber);
  });

  test('should fill Email with symbols', async () => {
    await contractServicesPage.fillEmail(contractServicesPage.testSymbols);
  });
});




/*Verify that the video in the hero section plays correctly
test.describe('Contract Services Page - Hero Video Verification', () => {
  test.setTimeout(120000); // 2min for video loads/polling

  let contractServicesPage: ContractServicesPage;

  test.beforeEach(async ({ page }) => {
    contractServicesPage = new ContractServicesPage(page);
    // Emulate desktop viewport for hero video visibility
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto('https://www.andreandson.com/contract-services', { 
      waitUntil: 'networkidle', 
      timeout: 90000 
    });
  });

  test('should verify the hero video is playing', async () => {
    await contractServicesPage.verifyHeroVideoPlaying();
  });
});*/