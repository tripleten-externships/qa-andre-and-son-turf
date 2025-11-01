import { test, expect } from '@playwright/test';
import { TurfChemicalsPage } from '../pages/turfChemicalsPage';
import { AlbaughPage } from '../pages/albaughPage';
import { AmvacPage } from '../pages/amvacPage';
import { BasfPage } from '../pages/basfPage';
import { BayerPage } from '../pages/bayerPage';
import { EnvuPage } from '../pages/envuPage';
import { NufarmPage } from '../pages/nufarmPage';
import { PbigordonPage } from '../pages/pbigordonPage';
import { QualiproPage } from '../pages/qualiproPage';
import { SeproPage } from '../pages/seproPage';
import { SipcamagroPage } from '../pages/sipcamagroPage';
import { SyngentaPage } from '../pages/syngentaPage';

test('Checking description on TURF CHEMICALS page, verifying all learn more buttons take the user to their respective page and checking their browse products buttons are working', async ({ page }) => {
  const turfPage = new TurfChemicalsPage(page);
  const albaughPage = new AlbaughPage(page);
  const amvacPage = new AmvacPage(page);
  const basfPage = new BasfPage(page);
  const bayerPage = new BayerPage(page);
  const envuPage = new EnvuPage(page);
  const nufarmPage = new NufarmPage(page);
  const pbigordonPage = new PbigordonPage(page);
  const qualiproPage = new QualiproPage(page);
  const seproPage = new SeproPage(page);
  const sipcamagroPage = new SipcamagroPage(page);
  const syngentaPage = new SyngentaPage(page);

  // Navigate to Turf Chemicals page
  await turfPage.goto();

  // TC 117: First check TURF CHEMICAL title is visible on the page
  const turfHeading = page.locator('h1:has-text("Turf Chemicals")');
  await expect(turfHeading).toBeVisible();    

  // TC 118: Verify the description under turf chemicals is visible and readable by users
  const description = page.getByText(
  'Taking pride in teaming up with many other manufacturers',
  { exact: false });                                             // when using locator page.locator('[data-testid="richTextElement"]') it matches to 28 different elements so just matching the text to avoid error
  await expect(description).toBeVisible();

  // TC 119: Verify title and description of Albaugh is visible to user
  await turfPage.verifyAlbaughHeading();
  await turfPage.verifyAlbaughDescription();

  // TC 120: Verify title and description of Amvac is visible to user
  await turfPage.verifyAmvacHeading();
  await turfPage.verifyAmvacDescription();

  // TC 121: Verify title and description of Basf is visible to user
  await turfPage.verifyBasfHeading();
  await turfPage.verifyBasfDescription();

  // TC 122: Verify title and description of Bayer is visible to user
  await turfPage.verifyBayerHeading();
  await turfPage.verifyBayerDescription();

  // TC 123: Verify title and description of Envu is visible to user
  await turfPage.verifyEnvuHeading();
  await turfPage.verifyEnvuDescription();

  // TC 124: Verify title and description of Nufarm is visible to user
  await turfPage.verifyNufarmHeading();
  await turfPage.verifyNufarmDescription();

  // TC 125: Verify title and description of PBI Gordon is visible to user
  await turfPage.verifyPbigordonHeading();
  await turfPage.verifyPbigordonDescription();

  // TC 126: Verify title and description of Quali pro is visible to user
  await turfPage.verifyQualiproHeading();
  await turfPage.verifyQualiproDescription();

  // TC 127: Verify title and description of Sepro is visible to user
  await turfPage.verifySeproHeading();
  await turfPage.verifySeproDescription();

  // TC 128: Verify title and description of Sipcam Agro is visible to user
  await turfPage.verifySipcamagroHeading();
  await turfPage.verifySipcamagroDescription();

  // TC 129: Verify title and description of Syngenta is visible to user
  await turfPage.verifySyngentaHeading();
  await turfPage.verifySyngentaDescription();

 // TC 130: 1st Learn More -> Albaugh
  await turfPage.clickLearnMore(0);
  await expect(page).toHaveURL('https://www.andreandson.com/prime-source');
  
  // TC 133, 134, 135 Click each Browse button 
  await albaughPage.verifyAlbaughPageContent();
  await albaughPage.clickBrowseProductButton(0);
  await page.pause();
  // put assert here for fungicides link and then close this window
  await albaughPage.clickBrowseProductButton(1);
  await albaughPage.clickBrowseProductButton(2);
  
  // After checking all Browse products buttons go back to turf Chemicals
  await turfPage.goBackToTurfChemicals();

  // TC 136 : 2nd Learn More -> AMVAC
  await turfPage.clickLearnMore(1);
  await expect(page).toHaveURL('https://www.andreandson.com/amvac');
  await amvacPage.clickBrowseProductButton(0);
  await amvacPage.clickBrowseProductButton(1);
  await amvacPage.clickBrowseProductButton(2);
  await amvacPage.clickBrowseProductButton(3);
  await turfPage.goBackToTurfChemicals();

  // 3rd Learn More -> BASF
  await turfPage.clickLearnMore(2);
  await expect(page).toHaveURL('https://www.andreandson.com/basf');
  await basfPage.clickBrowseProductButton(0);
  await basfPage.clickBrowseProductButton(1);
  await basfPage.clickBrowseProductButton(2);
  await turfPage.goBackToTurfChemicals();

  // 4th Learn More -> BAYER
  await turfPage.clickLearnMore(3);
  await expect(page).toHaveURL('https://www.andreandson.com/bayer');
  console.log("Skipping Bayer Browse Products — navigation not available");
  await page.waitForTimeout(1000);
  await turfPage.goBackToTurfChemicals();

  // 5th Learn More -> ENVU
  await turfPage.clickLearnMore(4);
  await expect(page).toHaveURL('https://www.andreandson.com/fmc');
  console.log("Skipping Envu Browse Products — navigation not available");
  await page.waitForTimeout(1000);
  await turfPage.goBackToTurfChemicals();

  // 6th Learn More -> NUFARM
  await turfPage.clickLearnMore(5);
  await expect(page).toHaveURL('https://www.andreandson.com/nufarm');
  await nufarmPage.clickBrowseProductButton(0);
  await nufarmPage.clickBrowseProductButton(1);
  await nufarmPage.clickBrowseProductButton(2);
  await nufarmPage.clickBrowseProductButton(3);
  await turfPage.goBackToTurfChemicals();

  // 7th Learn More -> PBI Gordon
  await turfPage.clickLearnMore(6);
  await expect(page).toHaveURL('https://www.andreandson.com/turf-screen');
  await pbigordonPage.clickBrowseProductButton(0);
  await pbigordonPage.clickBrowseProductButton(1);
  await pbigordonPage.clickBrowseProductButton(2);
  await pbigordonPage.clickBrowseProductButton(3);
  await turfPage.goBackToTurfChemicals();

  // 8th Learn More -> Quali Pro
  await turfPage.clickLearnMore(7);
  await expect(page).toHaveURL('https://www.andreandson.com/quali-pro');
  await qualiproPage.clickBrowseProductButton(0);
  await qualiproPage.clickBrowseProductButton(1);
  await qualiproPage.clickBrowseProductButton(2);
  await qualiproPage.clickBrowseProductButton(3);
  await turfPage.goBackToTurfChemicals();

 // 9th Learn More -> SePro
  await turfPage.clickLearnMore(8);
  await expect(page).toHaveURL('https://www.andreandson.com/sepro');
  console.log("Skipping Sepro Browse Products — navigation not available");
  await page.waitForTimeout(1000);
  await turfPage.goBackToTurfChemicals();

  // 10th Learn More -> Sipcam Agro
  await turfPage.clickLearnMore(9);
  await expect(page).toHaveURL('https://www.andreandson.com/sipcam-agro');
  await sipcamagroPage.clickBrowseProductButton(0);
  await sipcamagroPage.clickBrowseProductButton(1);
  await sipcamagroPage.clickBrowseProductButton(2);
  await turfPage.goBackToTurfChemicals();

  // 11th Learn More -> Syngenta
  await turfPage.clickLearnMore(10);
  await expect(page).toHaveURL('https://www.andreandson.com/syngenta-products');
  await envuPage.clickBrowseProductButton(0);
  await envuPage.clickBrowseProductButton(1);
  await envuPage.clickBrowseProductButton(2);
  await envuPage.clickBrowseProductButton(3);
  await turfPage.goBackToTurfChemicals(); 
});
