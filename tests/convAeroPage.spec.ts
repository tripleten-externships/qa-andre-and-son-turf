import { test, expect } from '@playwright/test';



/*Verify page loads successfully
*/
test('page loads', async ({ page }) => {
  //visit the home page
  await page.goto('/');
  //hover over to CONTRACT SERVICES
  await page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0).hover();
  //Click on CONVENTIONAL AERIFICATION
  if (await page.getByRole('link', { name: 'CONVENTIONAL AERIFICIATION' }).isVisible()) {
  await page.getByRole('link', { name: 'CONVENTIONAL AERIFICIATION' }).click();
    //Verify page loaded successfully
  await expect(page).toHaveURL(/.*conventional-aerification/);
  }
});

/* Verify images are displayed correctly
*/
//test('images display correctly', async ({ page }) => {

//});