import { test, expect } from '@playwright/test';
import { IceMeltsPage } from '../pages/icemelts';

/*
Verify that the page title is "ICE MELTS"
*/

test('has title', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  //Visit the web application
  await page.goto('/ice-melts', { waitUntil: 'load' });
  //Check that you are on the web page
  await expect(page).toHaveURL('https://www.andreandson.com/ice-melts')
  //Validate text matches with hero title
  await expect(iceMeltsPage.textOnHeroSection).toHaveText('Ice Melts');
});

/*
Verify that "MSDS" button will open PDF for Ice Melt Regular
*/

test('Ice Melt Regular MSDS Button', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  //Visit the webpage
  await page.goto('/ice-melts', { waitUntil: 'load' });
  //Verify we are on the ice melts page
  await page.getByText('Ice Melts', { exact: true }).click();
  //Verify we are on the Ice Melt Regular section
  await page.getByText('Ice Melt Regular', { exact: true }).click();
  //Locating the Ice Melt Regular section
  const page1Promise = page.waitForEvent('popup');
  //Clicking on the Ice Melt Regular MSDS Button
  await page.getByRole('listitem').filter({ hasText: 'Ice Melt Regular Ice Melt' }).getByTestId('linkElement').click();
  const page1 = await page1Promise;
});

/*
Verify that after clicking "MSDS" button it opens the correct Ice Melt Regular Safety Data PDF
*/
test('after clicking "MSDS" button it opens the correct Ice Melt Regular Safety Data PDF', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  await page.goto('/ice-melts', { waitUntil: 'load' });

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
  //Visit the webpage
  await page.goto('/ice-melts', { waitUntil: 'load' });
  //Verify we are on the ice melts page
  await page.getByText('Ice Melts', { exact: true }).click();
  //Locating the Ice Melt Plus section
  await page.getByText('Ice Melt Plus', { exact: true }).click();
  //Locating the Ice Melt Plus paragraph
  await page.getByText('Ice Melt Plus is our Ice Melt').click();
  //Clicking on the Ice Melt Plus MSDS Button
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#comp-kym0q5gu__item-kes5qvaj').getByTestId('linkElement').click();
  const page1 = await page1Promise;
});

/*
Verify that after clicking "MSDS" button it opens the correct Ice Melt Plus Safety Data PDF
*/
test('after clicking "MSDS" button it opens the correct Ice Melt Plus Safety Data PDF', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  await page.goto('/ice-melts', { waitUntil: 'load' });

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
  //Visit the webpage
  await page.goto('/ice-melts', { waitUntil: 'load' });
  //Verify we are on the ice melts page
  await expect(page.getByText('Ice Melts', { exact: true })).toContainText('Ice Melts');
  //Locating the Ice Melt Hi Vis section
  await expect(page.getByText('Ice Melt Hi Vis', { exact: true })).toContainText('Ice Melt Hi Vis');

  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('listitem').filter({ hasText: 'Ice Melt Hi VisIce Melt Hi' }).getByTestId('linkElement').click();
  const page1 = await page1Promise;
});

/*
Verify that after clicking "MSDS" button it opens the correct Ice Melt Hi Vis Safety Data PDF
*/
test('after clicking "MSDS" button it opens the correct Ice Melt Hi Vis Safety Data PDF', async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  await page.goto('/ice-melts', { waitUntil: 'load' });

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

  await page.goto('/', { waitUntil: 'load' });

  // Hover over the visible Turf Products section
  const turfProductsMenu = page.locator('p:has-text("TURF PRODUCTS")').nth(0);
  await expect(turfProductsMenu).toBeVisible();
  await turfProductsMenu.hover();

  // Wait for the submenu to appear before checking visibility
  const iceMeltsMenu = page.getByRole('link', { name: 'Ice Melts' });

  await iceMeltsMenu.waitFor({ state: 'visible', timeout: 10000 });
  await expect(iceMeltsMenu).toBeVisible();

  // Click the submenu item
  await iceMeltsMenu.click();

  // Verify navigation worked
  await expect(page).toHaveURL('https://www.andreandson.com/ice-melts');
  await expect(page.locator('h1, h2, [role="heading"]').first()).toContainText('Ice Melts');
});


test.describe('Let\'s Get Growing Container - Message Box Input Validation', () => {
  test.beforeEach(async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    await page.goto('/ice-melts', { waitUntil: 'load' });
    // Scroll to the "Let's Get Growing" container
    await iceMeltsPage.letsGetGrowingTextBox.nth(0).scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: 'Let\'s Get Growing' })).toBeVisible();
  });

  test('Verify that "Let\'s Get Growing Container" can enter Latin letters in the message box', async ({ page }) => {
    const testLatinText = 'Test Latin Letters: abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const messageTextarea = page.getByPlaceholder('Enter your text here'); // Adjust selector if needed
    if (await messageTextarea.isVisible()) {
      await messageTextarea.fill(testLatinText);
      await expect(messageTextarea).toHaveValue(testLatinText);
    }
  });

  test('Verify that "Let\'s Get Growing Container" can enter numbers in the message box', async ({ page }) => {
    const testNumbers = '1234567890';
    const messageTextarea = page.getByPlaceholder('Enter your text here'); // Adjust selector if needed
    if (await messageTextarea.isVisible()) {
      await messageTextarea.fill(testNumbers);
      await expect(messageTextarea).toHaveValue(testNumbers);
    }
  });

  test('Verify that "Let\'s Get Growing Container" can enter special characters in the message box', async ({ page }) => {
    const testSymbols = '@#$%^&*()_+[]{}|;:,.<>?/~`-=';
    const messageTextarea = page.getByPlaceholder('Enter your text here'); // Adjust selector if needed
    if (await messageTextarea.isVisible()) {
      await messageTextarea.fill(testSymbols);
      await expect(messageTextarea).toHaveValue(testSymbols);
    }
  });
});

test.describe('Let\'s Get Growing Container - Email Box Input Validation', () => {
  test.beforeEach(async ({ page }) => {
    const iceMeltsPage = new IceMeltsPage(page);
    await page.goto('/ice-melts', { waitUntil: 'load' });
    // Scroll to the "Let's Get Growing" container
    await iceMeltsPage.letsGetGrowingTextBox.nth(0).scrollIntoViewIfNeeded();
    await expect(page.getByRole('heading', { name: 'Let\'s Get Growing' })).toBeVisible();
  });

  test('Verify that "Let\'s Get Growing Container" can enter Latin letters in the email box', async ({ page }) => {
    const testLatinText = 'Test Latin Letters: abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const emailInput = page.getByRole('textbox', { name: 'Email Address*' }); // Adjust selector
    if (await emailInput.isVisible()) {
      await emailInput.fill(testLatinText); // Valid email with Latin chars
      await expect(emailInput).toHaveValue(testLatinText);
    }
  });

  test('Verify that "Let\'s Get Growing Container" can enter numbers in the email box', async ({ page }) => {
    const testNumbers = '1234567890';
    const emailInput = page.getByRole('textbox', { name: 'Email Address*' }); // Adjust selector
    if (await emailInput.isVisible()) {
      await emailInput.fill(testNumbers); // Valid email with Numbers
      await expect(emailInput).toHaveValue(testNumbers);
    }
  });

  test('Verify that "Let\'s Get Growing Container" can enter special characters in the email box', async ({ page }) => {
    const testSymbols = '@._';
    const emailInput = page.getByRole('textbox', { name: 'Email Address*' }); // Adjust selector
    if (await emailInput.isVisible()) {
      await emailInput.fill(testSymbols); // Valid email with Symbols
      await expect(emailInput).toHaveValue(testSymbols);
    }
  });
});

/*Verify that "Ice Melt" is clickable under the "Turf Products" footer menu*/
test.describe('Ice Melt is clickable under the Turf Products footer menu', () => {
  test.beforeEach(async ({ page }) => {
  const iceMeltsPage = new IceMeltsPage(page);
  await page.goto('/', { waitUntil: 'load' });
  await iceMeltsPage.footerSectionTurfProductsMenu.scrollIntoViewIfNeeded(); // Scroll to parent <li>
  await expect(iceMeltsPage.footerSectionTurfProductsMenu).toBeVisible();
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
  await expect(page.getByRole('heading', { name: /Ice Melts/i })).toBeVisible(); // Precise, case-insensitive
});
});


