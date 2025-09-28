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
});
