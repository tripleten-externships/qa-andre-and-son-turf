import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.andreandson.com/');
  await expect(page.getByText('EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT')).toContainText('EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT');
});

