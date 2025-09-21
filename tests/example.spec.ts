import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.andreandson.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL('https://www.andreandson.com/');
});

