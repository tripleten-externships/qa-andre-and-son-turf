import { test, expect } from '@playwright/test';
import { ContractServicesPage } from '../pages/contractservices';

/*
Verify that the page title in the hero section "Contract Services"
*/

test('Verify the page title in the hero section "Contract Services"', async ({ page }) => {
    const contractServicesPage = new ContractServicesPage(page);
    await page.goto('/contract-services', { waitUntil: 'load' });
    await expect(contractServicesPage.contractServicesTitle).toContainText('CONTRACT SERVICES');
});