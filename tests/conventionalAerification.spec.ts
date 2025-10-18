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
  await convAero.hoverContractServices();
  //Click on CONVENTIONAL AERIFICATION
  if (await convAero.isvisibleCONVENTIONALAERIFICIATION()) {
  await convAero.clickCONVENTIONALAERIFICIATION();
  //Verify page loaded successfully
  await expect(page).toHaveURL(/.*conventional-aerification/);
  //Verify that at least one image exists in the "main content" region
  expect(convAero.verifymaincontentimage());
  //Verify specific images by their accessible names
  expect(convAero.verifyfairwaysAerificationImage());
  expect(convAero.verifyconventionalAercoreGreensImage());
  //Verify page description text displays correctly
  expect(convAero.verifypagedescriptiontext()); 

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
  await convAero.clickfirstNameField();
  //fill out the first name field
  await convAero.fillfirstNameField('Ignacio');
  expect (convAero.fillfirstName).toHaveValue('Ignacio');
  //click on the last name field
  await convAero.clicklastNameField();
  //fill out the last name field
  await convAero.filllastNameField('Robles');
  expect (convAero.filllastname).toHaveValue('Robles');
  //click on the email field
  await convAero.clickemailField();
  //fill out the email field
  await convAero.fillemailField('ignacio@gmail.com');
  expect (convAero.fillemail).toHaveValue('ignacio@gmail.com');
  //click on the message field
  await convAero.clickmessageField();
  //fill out the message field
  await convAero.fillmessageField('This is a test message.');
  expect (convAero.fillmessage).toHaveValue('This is a test message.');


});