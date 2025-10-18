import { test, expect } from '@playwright/test';
import { DeepTineAerification } from '../pages/DeepTineAerification';

/*Verify page loads successfully
  Verify that at least one image exists in the "main content" region
  Verify specific images by their accessible names
  Verify page description text displays correctly
*/

test.describe('Verify page loads successfully', () => {
test('Verify page loads successfully', async ({ page }) => {
    const deepTineAerification = new DeepTineAerification(page);
  //visit the home page
  await page.goto('/');
  //Hover over to CONTRACT SERVICES
  await deepTineAerification.hoverContractServices();
  //Click on DEEP TINE AERIFICATION
   await deepTineAerification.DEEPTINEAERIFICATION();
  //Verify page loaded successfully
  await expect(page).toHaveURL('https://www.andreandson.com/deep-tine-aerificiation');
  //Verify that at least one image exists in the "main content" region
  await deepTineAerification.verifymaincontentimage();
  //Verify specific images by their accessible names
  await deepTineAerification.verifyGreenDT1Image();
  await deepTineAerification.verifyDeepTineGreens2Image();
  await deepTineAerification.verifyFairwaysDeepTine1Image();
  //Verify page description text displays correctly
    await deepTineAerification.verifypagedescriptiontext();
  }

)});

    /*Verify field "First Name" can be filled out
    Verify field "Last Name" can be filled out
    Verify field "Email" can be filled out
    Verify field "Message" can be filled out
    */
test('Verify form fields can be filled out', async ({ page }) => {
    const deepTineAerification = new DeepTineAerification(page);
    //visit the home page
    await page.goto('/');
    //Hover over to CONTRACT SERVICES
    await deepTineAerification.hoverContractServices();
    //Click on DEEP TINE AERIFICATION
    await deepTineAerification.DEEPTINEAERIFICATION();
    //click on the first name field
    await deepTineAerification.clickfirstNameField();
    //fill out the first name field
    await deepTineAerification.fillfirstNameField('Ignacio');
    //click on the last name field
    await deepTineAerification.lastnamefield.click();
    //fill out the last name field
    await deepTineAerification.lastname('Robles');
    //click on the email field
    await deepTineAerification.emailfield.click();
    //fill out the email field
    await deepTineAerification.fillemailField('ignacio@gmail.com');
    //click on the message field
    await deepTineAerification.messagefield.click();
    //fill out the message field
    await deepTineAerification.fillmessageField('This is a test message.');

    
});