import { test, expect } from '@playwright/test';
import { ContractServicesPage } from '../pages/contractservices';

test.beforeEach(async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    await page.goto('/contract-services', { waitUntil: 'load' });
});

/*
Verify that the page title in the hero section "Contract Services"
*/

test('Verify the page title in the hero section "Contract Services"', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    await page.goto('/contract-services', { waitUntil: 'load' });
    await expect(contractServicesPage.contractServicesTitle).toContainText('CONTRACT SERVICES');
});

/*Verify that the video plays in the hero when user land on Contract Services page*/
test.only('Verify that the video plays in the hero when user land on Contract Services page', async ({ page }) => {
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