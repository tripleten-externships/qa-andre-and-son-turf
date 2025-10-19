import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://www.andreandson.com/contract-services');
    await page.getByText('Conventional Aerification').scrollIntoViewIfNeeded();
    await page.getByText('Conventional Aerification').click();
    await expect(page).toHaveURL('https://www.andreandson.com/conventional-aerification');
});
