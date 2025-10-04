import { test, expect } from '@playwright/test';

// Test Case 1: Verify Homepage Banner
test('Verify homepage banner is visible', async ({ page }) => {
  await page.goto('https://www.andreandson.com/');
  // Adjust selector after inspecting actual homepage
  const banner = page.locator('h1');
  await expect(banner).toContainText(/Andre/i);
});

// Test Case 2: Verify navigation link to Our Story
test('Verify About → Our Story navigation', async ({ page }) => {
  await page.goto('https://www.andreandson.com/');
  await page.click('nav >> text=About');
  await page.click('nav >> text=Our Story');

  await expect(page).toHaveURL(/.*our-story/);
  await expect(page.locator('h1')).toContainText(/Our Story/i);
});
