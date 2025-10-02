import { test, expect } from '@playwright/test';
import { ConvAero } from '../pages/convAeriPage';


/*Verify page loads successfully
  Verify that at least one image exists in the "main content" region
  Verify specific images by their accessible names
  Verify page description text displays correctly
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
  //Verify page description text displays correctly
  await expect(
    page.getByText(
      'Conventional aerification is the process of removing small cores of soil from the turf and soil profile to reduce compaction, improve water infiltration, and enhance overall turf health. This method is commonly used on golf courses, sports fields, and other high-traffic turf areas.'
    )
  ).toBeVisible();  

  }});});

  /*
Verify top navigation menu links work (andreandson logo)
Verify top navigation menu links work correctly
Verify top navigation menu links work (Turf Products)
Verify top navigation menu links work (Equiment)
Verify top navigation menu links work (About)
Verify top navigation menu links work (More)
Verify top navigation menu links work (True Value)
  */
  test.describe('Test', () => {
    test('top navigation menu links work', async ({ page }) => {
      const convAero = new ConvAero(page);
      //visit the home page
      await page.goto('/');
      //hover over to CONTRACT SERVICES
      await convAero.hoverContractServices();
      //click on CONVENTIONAL AERIFICATION
      //click on andreandson logo
      //click on Turf Products
      //click on Equiment
      //click on About
      //click on More
      //click on True Value

  