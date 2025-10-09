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

  /*Verify field "First Name" can be filled out
  Verify field "Last Name" can be filled out
  Verify field "Email" can be filled out
  Verify field "Message" can be filled out
  */
test('Verify form fields can be filled out', async ({ page }) => {
  const convAero = new ConvAero(page);
  //visit the home page 
  await page.goto('/');
  //Hover over to CONTRACT SERVICES
  await convAero.hoverContractServices();
  //Click on CONVENTIONAL AERIFICATION
  if (await convAero.isvisibleCONVENTIONALAERIFICIATION()) {
  await convAero.clickCONVENTIONALAERIFICIATION();}
  else {
    await page.goto('https://www.andreandson.com/conventional-aerification');
  }
  //click on the first name field
  //await page.getByLabel('First Name').click();
  await convAero.clickfirstNameField();
  //fill out the first name field
  //await page.getByLabel('First Name').fill('Ignacio');
  await convAero.fillfirstNameField('Ignacio');
  //click on the last name field
  //await page.getByLabel('Last Name').click(); 
  await convAero.clicklastNameField();
  //fill out the last name field
  //await page.getByLabel('Last Name').fill('Robles');
  await convAero.filllastNameField('Robles');
  //click on the email field
  //await page.getByLabel('Email').click();
  await convAero.clickemailField();
  //fill out the email field
  //await page.getByLabel('Email').fill('ignacio@gmail.com)');
  await convAero.fillemailField('ignacio@gmail.com');
  //click on the message field
  //await page.getByLabel('Message').click();
  await convAero.clickmessageField();
  //fill out the message field
  //await page.getByLabel('Message').fill('This is a test message.');
  await convAero.fillmessageField('This is a test message.');

});