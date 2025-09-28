import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
	await page.goto('https://www.andreandson.com/');
	await expect(page).toHaveTitle(/andre and son|andreandson/i, { timeout: 10000 });
});

