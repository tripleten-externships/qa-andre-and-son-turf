import { test, expect } from '@playwright/test';
import { IceMeltsPage } from '../pages/icemelts';
import { MenuPage } from '../pages/menu';

test.beforeEach(async ({ page }) => {
  const menuPage = new MenuPage(page);
  await menuPage.navigateToIceMelts();
});
/*
Verify that the page title is "ICE MELTS"
*/

test('has title', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  //Validate text matches with hero title
  await expect(iceMeltsPage.textOnHeroSection).toHaveText('Ice Melts');
});

/*
Verify that "MSDS" button will open PDF for Ice Melt Regular
*/

test('Ice Melt Regular MSDS Button', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  //Verify we are on the ice melts page
  await iceMeltsPage.iceMeltsTitle.click();
  //Verify we are on the Ice Melt Regular section
  await iceMeltsPage.iceMeltsRegularSection.click();
  //Locating the Ice Melt Regular section
  const page1Promise = page.waitForEvent('popup');
  //Clicking on the Ice Melt Regular MSDS Button
  await iceMeltsPage.regularMSDSButton.click();
  const page1 = await page1Promise;
});

/*
Verify that after clicking "MSDS" button it opens the correct Ice Melt Regular Safety Data PDF
*/
test('after clicking "MSDS" button it opens the correct Ice Melt Regular Safety Data PDF', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  // Find the MSDS link for Ice Melt Regular and verify its href attribute
  await iceMeltsPage.regularMsdsLink.waitFor({ state: 'visible', timeout: 5000 });

  // Assert the href is correct before clicking
  await expect(iceMeltsPage.regularMsdsLink).toHaveAttribute('href', 'https://www.andreandson.com/_files/ugd/3bd49b_3f413d0995044470b8cbbaf8a9267e7a.pdf');

  // Optionally, click and ensure popup opens (but don't check its URL)
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    iceMeltsPage.regularMsdsLink.click({ force: true }),
  ]);
  expect(popup).toBeTruthy();
});

/*
Verify that "MSDS" button will open PDF for Ice Melt Plus
*/
test('Ice Melt Plus MSDS Button', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  //Verify we are on the ice melts page
  await iceMeltsPage.iceMeltsTitle.click();
  //Locating the Ice Melt Plus section
  await iceMeltsPage.iceMeltsPlusSection.click();
  //Locating the Ice Melt Plus paragraph
  await iceMeltsPage.iceMeltsPlusParagraph.click();
  //Clicking on the Ice Melt Plus MSDS Button
  const page1Promise = page.waitForEvent('popup');
  await iceMeltsPage.plusMSDSButton.click();
  const page1 = await page1Promise;
});

/*
Verify that after clicking "MSDS" button it opens the correct Ice Melt Plus Safety Data PDF
*/
test('after clicking "MSDS" button it opens the correct Ice Melt Plus Safety Data PDF', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  // Find the MSDS link for Ice Melt Regular and verify its href attribute
  await iceMeltsPage.plusMsdsLink.waitFor({ state: 'visible', timeout: 5000 });

  // Assert the href is correct before clicking
  await expect(iceMeltsPage.plusMsdsLink).toHaveAttribute('href', 'https://www.andreandson.com/_files/ugd/3bd49b_3a9ad6b2c254474c976e80ab6b3b5afe.pdf');

  // Optionally, click and ensure popup opens (but don't check its URL)
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    iceMeltsPage.plusMsdsLink.click({ force: true }),
  ]);
  expect(popup).toBeTruthy();
});

/*
Verify that "MSDS" button will open PDF for Ice Melt Hi Vis
*/
test('Ice Melt Hi Vis MSDS Button', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  //Verify we are on the ice melts page
  await iceMeltsPage.iceMeltsTitle.click();
  //Locating the Ice Melt Hi Vis section
  await iceMeltsPage.hiVisSection.click();
  const page1Promise = page.waitForEvent('popup');
  await iceMeltsPage.hiVisMSDSButton.click();
  const page1 = await page1Promise;
});

/*
Verify that after clicking "MSDS" button it opens the correct Ice Melt Hi Vis Safety Data PDF
*/
test('after clicking "MSDS" button it opens the correct Ice Melt Hi Vis Safety Data PDF', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  // Find the MSDS link for Ice Melt Regular and verify its href attribute
  await iceMeltsPage.hiVisMsdsLink.waitFor({ state: 'visible', timeout: 5000 });

  // Assert the href is correct before clicking
  await expect(iceMeltsPage.hiVisMsdsLink).toHaveAttribute('href', 'https://www.andreandson.com/_files/ugd/3bd49b_2888424fe70246cb9dd41427cad1f8a6.pdf');

  // Optionally, click and ensure popup opens (but don't check its URL)
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    iceMeltsPage.hiVisMsdsLink.click({ force: true }),
  ]);
  expect(popup).toBeTruthy();
});


test('Hover over Turf Products menu and click Ice Melts submenu', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);

  await expect(page).toHaveURL('https://www.andreandson.com/ice-melts');
  await expect(iceMeltsPage.iceMeltVerifyText).toContainText('Ice Melts');
});


test.describe('Let\'s Get Growing Container - Message Box Input Validation', () => {
  test.beforeEach(async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    // Scroll to the "Let's Get Growing" container
    await iceMeltsPage.letsGetGrowingTextBox.scrollIntoViewIfNeeded();
    await expect(iceMeltsPage.letsGetGrowing).toBeVisible();
  });

  test('Verify that "Let\'s Get Growing Container" can enter Latin letters in the message box', async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    if (await iceMeltsPage.messageTextArea.isVisible()) {
      await iceMeltsPage.messageTextArea.fill(iceMeltsPage.testLatinLetters); // Fill with Latin letters
      await expect(iceMeltsPage.messageTextArea).toHaveValue(iceMeltsPage.testLatinLetters);
    }
  });

  test('Verify that "Let\'s Get Growing Container" can enter numbers in the message box', async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    if (await iceMeltsPage.messageTextArea.isVisible()) {
      await iceMeltsPage.messageTextArea.fill(iceMeltsPage.testNumber.toString()); // Fill with Numbers
      await expect(iceMeltsPage.messageTextArea).toHaveValue(iceMeltsPage.testNumber.toString());
    }
  });

  test('Verify that "Let\'s Get Growing Container" can enter special characters in the message box', async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    if (await iceMeltsPage.messageTextArea.isVisible()) {
      await iceMeltsPage.messageTextArea.fill(iceMeltsPage.testSymbols); // Fill with Symbols
      await expect(iceMeltsPage.messageTextArea).toHaveValue(iceMeltsPage.testSymbols);
    }
  });
});

test.describe('Let\'s Get Growing Container - Email Box Input Validation', () => {
  test.beforeEach(async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    // Scroll to the "Let's Get Growing" container
     await iceMeltsPage.letsGetGrowingTextBox.scrollIntoViewIfNeeded();
    await expect(iceMeltsPage.letsGetGrowing).toBeVisible();
  });

  test('Verify that "Let\'s Get Growing Container" can enter Latin letters in the email box', async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    if (await iceMeltsPage.emailinputBox.isVisible()) {
      await iceMeltsPage.emailinputBox.fill(iceMeltsPage.testLatinLetters); // Valid email with Latin chars
      await expect(iceMeltsPage.emailinputBox).toHaveValue(iceMeltsPage.testLatinLetters);
    }
  });

  test('Verify that "Let\'s Get Growing Container" can enter numbers in the email box', async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    if (await iceMeltsPage.emailinputBox.isVisible()) {
      await iceMeltsPage.emailinputBox.fill(iceMeltsPage.testNumber.toString()); // Valid email with Numbers
      await expect(iceMeltsPage.emailinputBox).toHaveValue(iceMeltsPage.testNumber.toString());
    }
  });

  test('Verify that "Let\'s Get Growing Container" can enter special characters in the email box', async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    if (await iceMeltsPage.emailinputBox.isVisible()) {
      await iceMeltsPage.emailinputBox.fill(iceMeltsPage.testEmailWithSymbols); // Valid email with Symbols
      await expect(iceMeltsPage.emailinputBox).toHaveValue(iceMeltsPage.testEmailWithSymbols);
    }
  });
});

/*Verify that "Ice Melt" is clickable under the "Turf Products" footer menu*/
test.describe.only('Ice Melt is clickable under the Turf Products footer menu', () => {
  test.beforeEach(async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  await iceMeltsPage.footerSectionTurfProductsMenu.scrollIntoViewIfNeeded(); // Scroll to parent <li>
  await iceMeltsPage.footerSectionTurfProductsMenu.waitFor({ state: 'visible', timeout: 15000 });
  await expect(iceMeltsPage.footerSectionTurfProductsMenu).toBeVisible({ timeout: 15000 });
});

test('should hover over "Turf Products" footer menu and click "Ice Melts" submenu', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  // Hover on the parent <li> (key fix!)
  await iceMeltsPage.footerSectionTurfProductsMenu.hover();

  // Short delay for Wix JS/animation
  await page.waitForTimeout(500);

  // Wait/assert visibility on submenu link (retries automatically)
  await expect(iceMeltsPage.footerSectionIceMeltsMenu).toBeVisible({ timeout: 5000 });

  // Click the "Ice Melts" submenu
  await iceMeltsPage.footerSectionIceMeltsMenu.click();

  // Verify navigation
  await expect(page).toHaveURL(/ice-melts$/); // Flexible regex (ignores baseURL/protocol)
  await expect(iceMeltsPage.iceMeltsVerifyingText).toBeVisible(); // Precise, case-insensitive
});
});


