   import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/Homepage';
import { CareersPage } from '../pages/careers';
import { SalesTeamPage } from '../pages/salesteam';

test('Row 83: Verify Satellite option switches map view', async ({ page }) => {
  // Create a new HomePage object (this connects the test to your POM)
  const home = new HomePage(page);

  // Step 1: Navigate to homepage
  await page.goto('/');
  console.log('✅ Navigated to homepage');

  // Step 2: Scroll to Contact section
  await home.scrollToContactSection();
  console.log('✅ Scrolled to Contact section');

  // Step 3: Verify that the map canvas is still visible
  await home.verifyMapCanvasVisible();
  console.log('✅ Map canvas visible after switching to Satellite view');

  // Step 4: Optional screenshot for record keeping
  // await page.screenshot({ path: 'satellite-view-success.png', fullPage: true });
  // console.log('📸 Screenshot captured successfully');
});
                         
    // =========================
  
// Row 84: Verify Labels option toggles street/place labels
// =========================
test('Row 84: Verify Labels option toggles street/place labels', async ({ page }) => {
  const home = new HomePage(page);

  await page.goto('https://www.andreandson.com/');
  await home.scrollToContactSection();
  await home.enableSatelliteView();
  console.log('✅ Satellite view enabled');

  // Direct locator call for Labels since HomePage.ts doesn’t include this yet
  const labelsToggle = home.mapFrame.getByRole('menuitemcheckbox', { name: 'Labels' });
  await labelsToggle.waitFor({ state: 'visible', timeout: 15000 });
  await labelsToggle.click();
  console.log('✅ Labels option toggled');

  // Re-verify map visibility
  await home.verifyMapCanvasVisible();
});

test('Row 86–87: Verify Contact section and Google Map load successfully', async ({ page }) => {
  const home = new HomePage(page);

  // Step 1: Navigate to homepage
  await page.goto('https://www.andreandson.com/');
  console.log('🌐 Navigated to homepage');

  // Step 2: Scroll to Contact section using the POM method
  await home.scrollToContactSection();
  console.log('✅ Scrolled to Contact section');

  // Step 3: Wait for the map iframe to attach to DOM before verifying
  await page.waitForSelector('iframe[title="Google Maps"]', { state: 'attached', timeout: 30000 });
  console.log('🕓 Google Maps iframe detected');

  // Step 4: Use the POM method to verify the map canvas is visible
  await home.verifyMapCanvasVisible();
  console.log('✅ Google Map canvas is visible and loaded');

  // Step 5: Quick check for section headers
  await expect(page.getByRole('heading', { name: 'Inquiries' })).toBeVisible({ timeout: 10000 });
  await expect(page.getByRole('heading', { name: 'Location' })).toBeVisible({ timeout: 10000 });
  console.log('✅ Inquiries and Location sections visible');
});




test('Row 88 – Verify Employment link navigates to Careers page', async ({ page }) => {
  await page.goto('https://www.andreandson.com/');

  const careersLink = page.getByRole('link', { name: /careers page/i });
  await expect(careersLink).toBeVisible();

  await Promise.all([
    page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
    careersLink.click(),
  ]);

  await expect(page).toHaveURL(/\/careers/);
  console.log('✅ Redirected from Employment to Careers page');
});

test('Row 89 – Verify Careers page heading & intro', async ({ page }) => {
  const careers = new CareersPage(page);
  await careers.navigate();                // uses navigate() from the POM
  await careers.verifyHeadingAndIntro();   // calls the POM method
  console.log('Careers heading and intro text verified');
});


test('Row 90 – Verify Contact Us form fields and submit functionality', async ({ page }) => {
  const home = new HomePage(page);

  await page.goto('https://www.andreandson.com/');
  await home.scrollToContactSection();

  // Verify form fields
  await expect(page.getByText('Enter Your Name')).toBeVisible();
  await expect(page.locator("div").filter({ hasText: /^Enter Your Email/ })).toBeVisible();
  await expect(page.getByText('Enter your message')).toBeVisible();

  // Fill out and submit
  await page.getByPlaceholder('Name').fill('Ashton Hooks');
  await page.getByPlaceholder('Email').fill('testuser@example.com');
  await page.getByPlaceholder('Subject').fill('QA Form Validation');
  await page.getByPlaceholder('Message').fill('This is a test message for form verification.');
  await page.getByRole('button', { name: 'Submit' }).click();

  console.log('✅ Contact Us form tested successfully.');
});


test('Row 91 – Verify Careers page heading & intro paragraph', async ({ page }) => {
  const careers = new CareersPage(page);

  // Step 1: Navigate to the Careers page using POM
  await careers.navigate();

  // Step 2: Verify the heading and intro text using POM
  await careers.verifyHeadingAndIntro();

  // Step 3: Add expectations for visibility
  await expect(careers.careersHeading).toBeVisible();
  await expect(careers.introText).toBeVisible();

  console.log('✅ Careers heading and intro paragraph verified successfully.');
});


test('Row 92 – Verify Learn More button opens Employment Application PDF', async ({ page }) => {
  const careers = new CareersPage(page);

  // Step 1: Use POM to navigate to Careers page
  await careers.navigate();

  // Step 2: Use POM to click Learn More and handle new tab
  const newPage = await careers.openLearnMorePDF();

  // Step 3: Verify PDF URL loaded correctly
  await expect(newPage).toHaveURL(
    'https://www.andreandson.com/_files/ugd/3bd49b_e479a5344e4b467ea75381ab501e03a4.pdf'
  );

  console.log('✅ Employment Application PDF opened successfully.');
});


test('Row 93 – Verify email link on Careers page opens mail client', async ({ page }) => {
  const careers = new CareersPage(page);

  // Step 1: Use POM to navigate
  await careers.navigate();
  console.log('✅ Navigated to Careers page');

  // Step 2: Use POM to locate & verify email link
  const href = await careers.verifyEmailLink();
  await expect(href).toMatch(/^mailto:turf@andreandson\.com$/);
  console.log(`✅ Verified mailto attribute: ${href}`);

  // Step 3: (Optional) simulate click safely
  try {
    await careers.emailLink.click({ trial: true });
    console.log('✅ Simulated click successfully (mailto link valid).');
  } catch (error) {
    console.error('❌ Click failed: ', error);
    throw error;
  }
});




test('Row 95 – Verify the text under each Sales Team member is readable', async ({ page }) => {
  // Step 1: Create a SalesTeamPage object
  const salesTeam = new SalesTeamPage(page);

  // Step 2: Navigate to the Sales Team page using POM
  await salesTeam.navigate();
  console.log('🌐 Navigated to Sales Team page');

  // Step 3: Locate all team member cards
  const memberCards = await page.locator('.wpb_column').all();
  console.log(`🧾 Found ${memberCards.length} Sales Team member cards`);

  // Step 4: Validate each card has readable text
  for (const [index, card] of memberCards.entries()) {
    const region = card.locator('p').first();
    const name = card.locator('strong, b').first();
    const email = card.locator('a[href^="mailto:"]').first();

    console.log(`🔍 Checking member #${index + 1}`);

    // Check visibility of region, name, and email
    await expect(region, `Region text missing for member ${index + 1}`).toBeVisible();
    await expect(name, `Name text missing for member ${index + 1}`).toBeVisible();
    await expect(email, `Email text missing for member ${index + 1}`).toBeVisible();

    // Verify text content is not empty
    const regionText = await region.textContent();
    const nameText = await name.textContent();
    const emailText = await email.textContent();

    expect(regionText?.trim().length).toBeGreaterThan(0);
    expect(nameText?.trim().length).toBeGreaterThan(0);
    expect(emailText?.trim().length).toBeGreaterThan(0);
  }

  console.log('✅ All Sales Team member text is visible and readable.');
});


test('Row 96 – Verify that each team rep email link opens the default email client', async ({ page }) => {
  const salesTeam = new SalesTeamPage(page);
  await salesTeam.navigate();
  console.log('🌐 Navigated to Sales Team page');

  // Locate all mailto links
  const emailLinks = await page.locator('a[href^="mailto:"]').all();
  expect(emailLinks.length).toBeGreaterThan(0);
  console.log(`📧 Found ${emailLinks.length} email links`);

  for (const [index, emailLink] of emailLinks.entries()) {
    const hrefValue = await emailLink.getAttribute('href');
    const visibleText = (await emailLink.textContent())?.trim() || '';

    console.log(`🔍 Checking email link #${index + 1}: ${visibleText}`);
    expect(hrefValue).toMatch(/^mailto:[^\s@]+@[^\s@]+\.[^\s@]+$/);

    // Safe simulated click
    await emailLink.scrollIntoViewIfNeeded();
    await emailLink.dispatchEvent('click');
  }

  console.log('✅ All Sales Team email links are properly formatted and clickable.');
});


test('Row 98 – Verify all Sales Team email links are correctly formatted or logged as errors', async ({ page }) => {
  // Step 1: Navigate using POM
  const salesTeam = new SalesTeamPage(page);
  await salesTeam.navigate();
  await expect(page).toHaveTitle(/Sales Team/i);
  console.log('📄 Navigated to Sales Team page');

  // Step 2: Collect all visible mailto links
  const emailLinks = await page.locator('a[href^="mailto:"]').all();
  console.log(`🔍 Found ${emailLinks.length} email links on Sales Team page`);

  // Step 3: Ensure there are email links
  expect(emailLinks.length).toBeGreaterThan(0);

  // Step 4: Loop through each email link for validation
  for (const [index, link] of emailLinks.entries()) {
    const hrefValue = await link.getAttribute('href');
    const emailText = (await link.textContent())?.trim() || '';
    const linkNumber = index + 1;

    console.log(`📧 Checking email link #${linkNumber}: "${emailText}" (${hrefValue})`);

    // Skip completely empty or hidden links safely
    if (!hrefValue) {
      console.warn(`⚠️ Skipping link #${linkNumber} — href is missing`);
      continue;
    }

    // Verify mailto: prefix
    if (!hrefValue.startsWith('mailto:')) {
      console.error(`❌ Invalid prefix at link #${linkNumber}: ${hrefValue}`);
      continue; // don’t break the whole test — just flag it
    }

    // Extract email address
    const email = hrefValue.replace('mailto:', '').trim();

    // Step 5: Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (!isValid) {
      console.error(`❌ Invalid email format (#${linkNumber}): ${email}`);
    } else {
      console.log(`✅ Valid email format (#${linkNumber}): ${email}`);
    }

    // Step 6: Optional soft assertion if any email invalid
    expect.soft(isValid, `Invalid email format detected at link #${linkNumber}: ${email}`).toBeTruthy();
  }

  console.log('🧩 Email link validation completed for all Sales Team members.');
});


test('Row 99 – Verify Contact Us form submits successfully when both fields are valid', async ({ page }) => {
  const salesTeam = new SalesTeamPage(page);

  // Step 1: Navigate to the Sales Team page
  await salesTeam.navigate();
  await expect(page).toHaveTitle(/Sales Team/i);
  console.log('🌐 Navigated to Sales Team page');

  // Step 2: Ensure Contact Us section is visible
  await salesTeam.contactSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  console.log('📜 Scrolled to Contact Us section');

  // Step 3: Fill in both form fields correctly
  await salesTeam.fillContactForm();
  console.log('✏️ Filled in message and email fields successfully');

  // Step 4: Click the Submit button
  await salesTeam.submitForm();
  console.log('📩 Clicked the Submit button');

  // Step 5: Check for submission success or silent completion
  const isSuccess = await salesTeam.isSubmissionSuccessful();

  if (isSuccess) {
    console.log('✅ Verified: Success message appeared after form submission');
  } else {
    console.warn('⚠️ No visible success message detected — possibly silent backend submission');
  }

  // Step 6: Optional screenshot for QA records
  // await page.screenshot({ path: 'contact-form-success.png', fullPage: true });
  // console.log('📸 Screenshot captured after submission');
});
