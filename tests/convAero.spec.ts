import { test, expect } from '@playwright/test';
import { ConvAero } from '../pages/convAeroPage';


/*Verify page loads successfully
*/
test.describe('Test', () => {
test('page loads', async ({ page }) => {
  const convAero = new ConvAero(page);
  //visit the home page
  await page.goto('/');
  //hover over to CONTRACT SERVICES
  //await page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0).hover();
  await convAero.hoverContractServices();
  //Click on CONVENTIONAL AERIFICATION
  if (await page.getByRole('link', { name: 'CONVENTIONAL AERIFICIATION' }).isVisible()) {
  await page.getByRole('link', { name: 'CONVENTIONAL AERIFICIATION' }).click();
    //Verify page loaded successfully
  await expect(page).toHaveURL(/.*conventional-aerification/);
  // Verify that at least one image exists in the "main content" region
  const mainRegionImg = page
    .getByRole('region', { name: 'main content' })
    .locator('img');
  await expect(mainRegionImg.first()).toBeVisible();
  // Verify specific images by their accessible names
  await expect(
    page.getByRole('img', { name: 'Fairways Aerification 3.jpg' })
  ).toBeVisible();
  await expect(
    page.getByRole('img', { name: 'Conventional Aercore Greens 2' })
  ).toBeVisible();

  }
});