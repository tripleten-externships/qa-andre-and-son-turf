import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');
  await page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' }).click();
});