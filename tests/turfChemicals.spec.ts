import { test, expect } from '@playwright/test';
import { TurfChemicalsPage } from '../pages/turfChemicalsPage';

test('Verify that clicking on "Learn More" buttons takes the user to respective pages', async ({ page }) => {
  const turfPage = new TurfChemicalsPage(page);

  // Navigate to Turf Chemicals page
  await turfPage.goto();

  // 1st Learn More -> Albaugh
  await turfPage.clickLearnMore(0);
  await expect(page).toHaveURL('https://www.andreandson.com/prime-source');
  await turfPage.goBackToTurfChemicals();

  // 2nd Learn More -> AMVAC
  await turfPage.clickLearnMore(1);
  await expect(page).toHaveURL('https://www.andreandson.com/amvac');
  await turfPage.goBackToTurfChemicals();

  // 3rd Learn More -> BASF
  await turfPage.clickLearnMore(2);
  await expect(page).toHaveURL('https://www.andreandson.com/basf');
  await turfPage.goBackToTurfChemicals();

  // 4th Learn More -> BAYER
  await turfPage.clickLearnMore(3);
  await expect(page).toHaveURL('https://www.andreandson.com/bayer');
  await turfPage.goBackToTurfChemicals();

  // 5th Learn More -> ENVU
  await turfPage.clickLearnMore(4);
  await expect(page).toHaveURL('https://www.andreandson.com/fmc');
  await turfPage.goBackToTurfChemicals();

  // 6th Learn More -> NUFARM
  await turfPage.clickLearnMore(5);
  await expect(page).toHaveURL('https://www.andreandson.com/nufarm');
  await turfPage.goBackToTurfChemicals();

  // 7th Learn More -> PBI Gordon
  await turfPage.clickLearnMore(6);
  await expect(page).toHaveURL('https://www.andreandson.com/turf-screen');
  await turfPage.goBackToTurfChemicals();

  // 8th Learn More -> Quali Pro
  await turfPage.clickLearnMore(7);
  await expect(page).toHaveURL('https://www.andreandson.com/quali-pro');
  await turfPage.goBackToTurfChemicals();

  // 9th Learn More -> SePro
  await turfPage.clickLearnMore(8);
  await expect(page).toHaveURL('https://www.andreandson.com/sepro');
  await turfPage.goBackToTurfChemicals();

  // 10th Learn More -> Sipcam Agro
  await turfPage.clickLearnMore(9);
  await expect(page).toHaveURL('https://www.andreandson.com/sipcam-agro');
  await turfPage.goBackToTurfChemicals();

  // 11th Learn More -> Sipcam Agro
  await turfPage.clickLearnMore(10);
  await expect(page).toHaveURL('https://www.andreandson.com/syngenta-products');
  await turfPage.goBackToTurfChemicals();
});
