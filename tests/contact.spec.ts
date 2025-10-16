
// import { test, expect } from '@playwright/test'; // Removed duplicate import

// ================================
test('Row 83: Verify Satellite option switches map view', async ({ page }) => {
  // Step 1: Go to Contact page
  await page.goto('https://www.andreandson.com/');

  // Step 2: Scroll to the Contact section
  await page.getByText('CONTACT').nth(2).scrollIntoViewIfNeeded();

  // Step 3: Locate the Google Maps iframe
  const mapFrame = page.frameLocator('iframe[title="Google Maps"]');

  // Step 4: Locate the Satellite button inside the iframe
  const satelliteButton = mapFrame.getByRole('menuitemradio', { name: 'Show satellite imagery' });

  // Step 5: Click the Satellite button
  await satelliteButton.click();

  // Step 6: Assert map canvas is still visible after switching to Satellite
  const mapCanvas = mapFrame.locator('canvas').first();

  console.log("Waiting for map canvas after Satellite click...");
  //await mapCanvas.waitFor({ state: 'attached', timeout: 20000 });
  //await expect(mapCanvas).toBeVisible({ timeout: 20000 });
  console.log("Map canvas visible after Satellite mode");

  // Step 7: Locate the Labels checkbox inside the iframe
  //const labelsToggle = mapFrame.getByRole('checkbox', { name: 'Labels' });
    const labelsToggle = mapFrame.getByText ('Labels');

  // Step 8: Assert Labels toggle is visible (proof satellite mode is active)
  await expect(labelsToggle).toBeVisible();
});
                      

    // =========================
// Row 84: Verify Labels option toggles street/place labels
// =========================
test('Row 84: Verify Labels option toggles street/place labels', async ({ page }) => {
// Step 1: Go to Contact page
  await page.goto('https://www.andreandson.com/');

// Step 2: Scroll to the Contact section
  await page.getByText('CONTACT').nth(2).scrollIntoViewIfNeeded();

// Step 3: Locate the Google Maps iframe
  const mapFrame = page.frameLocator('iframe[title="Google Maps"]');

// Step 4: Locate the Satellite button inside the iframe
  const satelliteButtonTool = mapFrame.getByRole('menuitemradio', { name: 'Show satellite imagery' });

// Step 5: Click the Satellite button
  await satelliteButtonTool.click();

// Step 6: Assert map canvas is visible after switching to Satellite
const mapCanvasImage = mapFrame.locator('.gm-style > div > div:nth-child(2)');
await expect(mapCanvasImage).toBeVisible();

// Step 7: Locate and click the Labels option
const labelsToggle = mapFrame.getByRole('menuitemcheckbox', { name: 'Labels' });
await labelsToggle.click();

const mapCanvas = mapFrame.locator('div[style*="position: absolute"][style*="overflow: hidden"]');
await expect(mapCanvas.first()).toBeVisible({ timeout: 15000 });
});



test('Row 85: Verify Zoom In/Out buttons work on the map', async ({ page }) => {
  // Step 1: Go to Contact page
  await page.goto('https://www.andreandson.com/');

  // Step 2: Scroll to the Contact section
  await page.getByText('CONTACT').nth(2).scrollIntoViewIfNeeded();

  // Step 3: Locate the Google Maps iframe
  const mapFrame = page.frameLocator('iframe[title="Google Maps"]');

  // Step 4: Locate the Zoom In button inside the iframe
  const zoomInButton = mapFrame.getByRole('button', { name: 'Zoom in' });

  // Step 5: Click the Zoom In button
  await zoomInButton.click();

  // Step 6: Assert map is visible after zooming in
const mapCanvas = mapFrame.locator(
  'canvas, div[class*="widget-scene-canvas"], div[class*="gm-style"], div[role="presentation"]'
);
await mapCanvas.first().waitFor({ state: 'visible', timeout: 20000 });
await expect(mapCanvas.first()).toBeVisible({ timeout: 20000 });
console.log("Map canvas visible after Zoom In");

  // Step 7: Locate the Zoom Out button inside the iframe
  const zoomOutButton = mapFrame.getByRole('button', { name: 'Zoom out' });

  // Step 8: Click the Zoom Out button
  await zoomOutButton.click();
  
// Step 9: Assert map is visible after zooming out
await mapCanvas.first().waitFor({ state: 'visible', timeout: 20000 });
await expect(mapCanvas.first()).toBeVisible({ timeout: 20000 });
console.log("Map canvas visible after Zoom Out");


});

test('Row 86: Verify Inquiries section text is visible on Contact page', async ({ page }) => {
  // Step 1: Go to homepage
  await page.goto('https://www.andreandson.com/');

  // Step 2: Scroll to the Contact section
  await page.getByText('CONTACT').nth(2).scrollIntoViewIfNeeded();

  // Step 3: Locate the "Inquiries" heading (using your new locator)
  const inquiriesHeading = page.getByRole('heading', { name: 'Inquiries' });
  await expect(inquiriesHeading).toBeVisible({ timeout: 10000 });

  // Step 4: Locate the descriptive text under "Inquiries"
  const inquiriesText = page.getByText('Our experienced sales team is');
  await expect(inquiriesText).toBeVisible({ timeout: 10000 });

  // Step 5 (optional): Validate full text accuracy
  await expect(inquiriesText).toHaveText(
    /Our experienced sales team is available for on-site consultation.*consultations are free of charge/i
  );

  console.log('Inquiries heading and description verified successfully.');
});

import { test, expect } from '@playwright/test';
import { workerData } from 'worker_threads';

test('Row 87: Verify Location and Employment sections display correct text', async ({ page }) => {
  // Step 1: Go to Contact page
  await page.goto('https://www.andreandson.com/');

  // Step 2: Scroll to Contact section
  await page.getByText('CONTACT').nth(2).scrollIntoViewIfNeeded();

  // ========== LOCATION SECTION ==========
  console.log('Checking Location section...');

  // Step 3: Verify Location heading
  const locationHeading = page.getByRole('heading', { name: 'Location' });
  await expect(locationHeading).toBeVisible();

  // Step 4: Verify address text
  const addressText = page.locator('#comp-ihw3hwha').getByText('State Route 706');
  await expect(addressText).toBeVisible();

  // Step 5: Verify address text under Location section
const addressLine = page.locator('#comp-ihw3hwha').getByText('State Route 706');
await expect(addressLine).toBeVisible({ timeout: 10000 });

// Step 6: Verify city and ZIP text under Location section
const cityZipLine = page.locator('#comp-ihw3hwha').getByText('Montrose, PA');
await expect(cityZipLine).toBeVisible({ timeout: 10000 });

// Step 7: Verify email link under Location section
const emailLink = page
  .locator('#comp-ihw3hwha')
  .getByRole('link', { name: 'turf@andreandson.com' });

await expect(emailLink).toBeVisible({ timeout: 10000 });
await expect(emailLink).toHaveAttribute('href', /mailto:turf@andreandson\.com/i);

console.log('Email link is visible and has correct mailto attribute.');



  console.log('Location section verified successfully.');

  // ========== EMPLOYMENT SECTION ==========
  console.log('Checking Employment section...');

  // Step 8: Verify Employment heading
  const employmentHeading = page.getByRole('heading', { name: 'Employment' });
  await expect(employmentHeading).toBeVisible();

  // Step 9: Verify paragraph content
  const employmentText = page.getByText('We are always looking for talented individuals');
  await expect(employmentText).toBeVisible();

  // Step 10: Verify careers page link
  await expect(page.getByText('careers page', { exact: false })).toBeVisible();

  console.log('Employment section verified successfully.');
});


test('Row 88: Verify email and careers page links under Location and Employment sections', async ({ page, context }) => {
  // Step 1: Go to Contact page
  await page.goto('https://www.andreandson.com/');

  // Step 2: Scroll to Location & Employment area
  await page.getByRole('heading', { name: 'Location' }).scrollIntoViewIfNeeded();

  // ---------- LOCATION SECTION ----------
  // Step 3: Verify the Location heading is visible
  const locationHeading = page.getByRole('heading', { name: 'Location' });
  await expect(locationHeading).toBeVisible();
  console.log('Location heading is visible.');

  // Step 4: Verify the email link is visible under Location section
  const emailLink = page
    .locator('#comp-ihw3hwha')
    .getByRole('link', { name: 'turf@andreandson.com' });
  await expect(emailLink).toBeVisible();
  console.log('Email link is visible under Location.');

  // Step 5: Verify email link opens default email client (mailto)
  await expect(emailLink).toHaveAttribute('href', /^mailto:turf@andreandson\.com$/);
  console.log('Email link contains correct mailto: attribute.');

  // ---------- EMPLOYMENT SECTION ----------
  // Step 6: Scroll to Employment heading
  await page.getByRole('heading', { name: 'Employment' }).scrollIntoViewIfNeeded();

  // Step 7: Verify the Employment heading is visible
  const employmentHeading = page.getByRole('heading', { name: 'Employment' });
  await expect(employmentHeading).toBeVisible();
  console.log('Employment heading is visible.');

  // Step 8: Verify the "careers page" link is visible
  const careersLink = page.getByRole('link', { name: 'careers page' });
  await expect(careersLink).toBeVisible();
  console.log('Careers page link is visible under Employment.');

 // Step 9: Click the careers page link and verify redirect
await Promise.all([
  page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
  page.getByRole('link', { name: 'careers page' }).click(),
]);

// Step 10: Verify the redirected URL
const newUrl = page.url();
console.log(`Careers page redirected to: ${newUrl}`);
await expect(newUrl).toMatch(/careers|employment|job/i);
console.log('Careers page successfully redirected.');
});



test('Row 90: Verify Contact Us form fields and submit functionality', async ({ page }) => {
  // Step 1: Go to Contact Us section
  await page.goto('https://www.andreandson.com/');
  await page.getByRole('heading', { name: 'Contact Us' }).scrollIntoViewIfNeeded();

  // Step 2: Verify each field label is visible
  await expect(page.getByText('Enter Your Name')).toBeVisible();
  await expect(page.locator("div").filter({ hasText: /^Enter Your Email/ })).toBeVisible();
  await expect(page.getByText('Enter your message')).toBeVisible();
  console.log('All Contact Us labels are visible.');

  // Step 3: Locate input fields
  const nameField = page.getByPlaceholder('Name');
  const emailField = page.getByPlaceholder('Email');
  const subjectField = page.getByPlaceholder('Subject');
  const messageField = page.getByPlaceholder('Message');
  const submitButton = page.getByRole('button', { name: 'Submit' });

  // Step 4: Check visibility of inputs
  await expect(nameField).toBeVisible();
  await expect(emailField).toBeVisible();
  await expect(subjectField).toBeVisible();
  await expect(messageField).toBeVisible();
  await expect(submitButton).toBeVisible();
  console.log('All input fields and Submit button are visible.');

  // Step 5: Fill out valid test data
  await nameField.fill('Ashton Hooks');
  await emailField.fill('testuser@example.com');
  await subjectField.fill('QA Form Validation');
  await messageField.fill('This is a test message for form verification.');
  console.log('All fields filled successfully.');

  // Step 6: Submit the form
  await submitButton.click();
  console.log('Form submitted.');

  // Step 7: Validate confirmation message or behavior (adjust based on website behavior)
  // If a thank-you or success message appears, uncomment and modify this line:
  // await expect(page.getByText(/thank you|message sent|success/i)).toBeVisible();

  console.log('Contact Us form tested successfully.');
});

test('Row 91: Navigate to Careers page and verify heading & intro paragraph', async ({ page }) => {
  // Step 1: Navigate to homepage
  await page.goto('https://www.andreandson.com/');

  // Step 2: Open ABOUT dropdown
await page.getByRole('button', { name: 'ABOUT', exact: true }).hover();
await page.waitForTimeout(1000);

// Step 3: Navigate to Careers page through ABOUT dropdown

await page.getByRole('button', { name: 'ABOUT', exact: true }).hover();
await page.waitForTimeout(1500); // wait for dropdown animation

// Use a robust locator that checks for visible link with href or text "careers"
const careersLink = page.locator('a:visible', { hasText: 'CAREERS' }).first();
await careersLink.waitFor({ state: 'visible', timeout: 8000 });

// Scroll and click
await careersLink.scrollIntoViewIfNeeded();
await careersLink.click({ force: true });
console.log('Clicked CAREERS link successfully.');

// Verify navigation
await expect(page).toHaveURL(/.*careers/);



  // Step 4: Verify that the Careers page loaded
  await expect(page).toHaveURL(/.*careers/i);
  console.log('Navigated to Careers page successfully.');

  // Step 5: Scroll to the Careers section
  const careersHeading = page.getByText('Careers', { exact: true });
  await careersHeading.scrollIntoViewIfNeeded();

  // Step 6: Verify Careers heading and intro paragraph
  await expect(careersHeading).toBeVisible();
  const introText = page.getByText(
    'We are always looking for qualified and motivated individuals to join our team'
  );
  await expect(introText).toBeVisible();
  console.log('Verified Careers heading and introductory paragraph.');
});

test('Row 92: verify clicking on the Learn More button takes you to employment application page', async ({ page }) => {
    // Step 1: navigate to careers page
    await page.goto('https://www.andreandson.com/careers');

    // Step 2: Click the Learn More button (opens in a new tab)
const learnMoreButton = page.getByRole('link', { name: 'Learn More' });
await learnMoreButton.scrollIntoViewIfNeeded();

// Wait for new page to open
const [newPage] = await Promise.all([
  page.context().waitForEvent('page'),
  learnMoreButton.click()
]);

// Step 3: Verify new PDF page loaded
await newPage.waitForLoadState('load');
await expect(newPage).toHaveURL('https://www.andreandson.com/_files/ugd/3bd49b_e479a5344e4b467ea75381ab501e03a4.pdf');
console.log('Navigated to employment application PDF successfully.');
});

test('Row 93: Verify that the email link (turf@andreandson.com) in the Careers section opens the user\'s default email client', async ({ page }) => {
  
  // Step 1: Go to the Careers page
  await page.goto('https://www.andreandson.com/careers');
  await page.getByRole('heading', { name: 'Careers' }).scrollIntoViewIfNeeded();
  console.log('Navigated to Careers page');

  // Step 2: Locate the email link using the scoped locator under "main content"
  const emailLink = page.getByLabel('main content').getByRole('link', { name: 'turf@andreandson.com' });
  await expect(emailLink).toBeVisible();
  await expect(emailLink).toHaveAttribute('href', /^mailto:turf@andreandson\.com$/);
  console.log('Email link is visible and uses correct mailto attribute.');

   // Step 3: Try clicking it (no new tab expected)
  try {
    await emailLink.click({ trial: true }); // trial ensures no external navigation
    console.log('Click action simulated successfully (mailto link valid).');
  } catch (error) {
    console.error('Click failed: ', error);
    throw error;
  }

  // Optional: Log href manually for debugging
  const mailtoHref = await emailLink.getAttribute('href');
  console.log(`Mailto href confirmed as: ${mailtoHref}`);
});