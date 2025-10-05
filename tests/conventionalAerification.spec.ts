import { test, expect } from '@playwright/test';
import { ConvAero } from '../pages/conventionalAerification';


/*Verify page loads successfully
  Verify that at least one image exists in the "main content" region
  Verify specific images by their accessible names
  Verify page description text displays correctly
*/
test.describe('Verify page loads successfully', () => {
test('Verify page loads successfully', async ({ page }) => {
  const convAero = new ConvAero(page);
  //visit the home page
  await page.goto('/');
  //Hover over to CONTRACT SERVICES
    //await page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0).hover();
  await convAero.hoverContractServices();
  //Click on CONVENTIONAL AERIFICATION
    //if (await page.getByRole('link', { name: 'CONVENTIONAL AERIFICIATION' }).isVisible()) {
  if (await convAero.isvisibleCONVENTIONALAERIFICIATION()) {
    //await page.getByRole('link', { name: 'CONVENTIONAL AERIFICIATION' }).click();
  await convAero.clickCONVENTIONALAERIFICIATION();
  //Verify page loaded successfully
  await expect(page).toHaveURL(/.*conventional-aerification/);
  //Verify that at least one image exists in the "main content" region
    //const mainRegionImg = page
    // .getByRole('region', { name: 'main content' }).locator('img');
    //await expect(mainRegionImg.first()).toBeVisible();
  await convAero.verifymaincontentimage();
  //Verify specific images by their accessible names
    //await expect(page.getByRole('img', { name: 'Fairways Aerification 3.jpg' })).toBeVisible();
  await convAero.verifyfairwaysAerificationImage();
    //await expect(page.getByRole('img', { name: 'Conventional Aercore Greens 2' })).toBeVisible();
  await convAero.verifyconventionalAercoreGreensImage();
  //Verify page description text displays correctly
    //await expect(page.getByText('Conventional aerification is the process of removing small cores of soil from the turf and soil profile to reduce compaction, improve water infiltration, and enhance overall turf health. This method is commonly used on golf courses, sports fields, and other high-traffic turf areas.'
    // )).toBeVisible(); 
  await convAero.verifypagedescriptiontext(); 

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
  test.describe('Top navigation menu links work', () => {
    test('Top navigation menu links work', async ({ page }) => {
      const convAero = new ConvAero(page);
      //visit the home page
      await page.goto('/');
      //hover over to CONTRACT SERVICES
      await convAero.hoverContractServices();
      //click on CONVENTIONAL AERIFICATION
      if (await convAero.isvisibleCONVENTIONALAERIFICIATION()) 
        {await convAero.clickCONVENTIONALAERIFICIATION();}
      //click on andreandson logo
      await page.getByRole('link', { name: 'andreandson' }).click();
      await expect(page).toHaveURL(/.*andreandson/);
      //click on Turf Products
      await page.getByRole('link', { name: 'TURF PRODUCTS' }).click();
      await expect(page).toHaveURL(/.*turf-products/);
      //click on Equiment
      await page.getByRole('link', { name: 'EQUIPMENT' }).click();
      await expect(page).toHaveURL(/.*equipment/);
      //click on About
      await page.getByRole('link', { name: 'ABOUT' }).click();
      await expect(page).toHaveURL(/.*about/);
      //click on More
      await page.getByRole('link', { name: 'MORE' }).click();
      await expect(page).toHaveURL(/.*more/);
      //click on True Value
      await page.getByRole('link', { name: 'TRUE VALUE' }).click();
        await expect(page).toHaveURL(/.*true-value/);
      });
    });