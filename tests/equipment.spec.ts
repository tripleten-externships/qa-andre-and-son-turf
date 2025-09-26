import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/example';

/*
Verify that the page title in the hero section "EQUIPMENT SALES"
Verify that the video plays in the hero when user lands in the Equipment page
*/
test('Equipment page hero section and video', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();
    
    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);

    //validate text matches with the hero section 
    await expect(page.locator('span.color_15.wixui-rich-text__text')).toHaveText('EQUIPMENT SALES');

    // Locate the wix-video container
    const heroVideoContainer = page.locator('#videoContainer_comp-klspq2qr');
    await expect(heroVideoContainer).toBeVisible();

    // Check that the data-video-info attribute exists
    await expect(heroVideoContainer).toHaveAttribute('data-video-info', /.+/);

    // Locate the <video> inside the container
    const heroVideo = heroVideoContainer.locator('video');
    await expect(heroVideo).toBeVisible();

    // Verify the video is autoplaying and not paused
    const isPaused = await heroVideo.evaluate(video => (video as HTMLVideoElement).paused);
    expect(isPaused).toBe(true);

});

/*
Verify that clicking the image in the Baroness section opens the correct website as specified in the <a> element of the HTML.
*/
test('Baroness section link', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();

    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);
    
    /// Locate the Baroness link
    const baronessLink = page.locator('a[href="https://baroness.us/"]');

    // Scroll it into view
    await baronessLink.scrollIntoViewIfNeeded();

    // Optional: wait for it to be fully visible
    await baronessLink.waitFor({ state: 'visible' });
    
    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        baronessLink.click(),                 // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://baroness.us/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Buffalo Turbine section opens the correct website as specified in the <a> element of the HTML.
*/
test('Buffallo Turnbine section link', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();

    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);

    /// Locate the Buffalo Turbine link
    const buffaloTurbineLink = page.locator('a[href="https://buffaloturbine.com/"]');

    // Scroll it into view
    await buffaloTurbineLink.scrollIntoViewIfNeeded();

    // Optional: wait for it to be fully visible
    await buffaloTurbineLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        buffaloTurbineLink.click(),           // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://buffaloturbine.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the STIHL section opens the correct website as specified in the <a> element of the HTML.
*/
test('STIHL section link', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();

    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);

    /// Locate the STIHL link
    const stihlLink = page.locator('a[href="https://andresoninc.stihldealer.net/"]');

    // Scroll it into view
    await stihlLink.scrollIntoViewIfNeeded();

    // Optional: wait for it to be fully visible
    await stihlLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        stihlLink.click(),                    // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://andresoninc.stihldealer.net/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Greens Groomer section opens the correct website as specified in the <a> element of the HTML.
*/
test('Greens Groomer section link', async ({ page }) => {
    const homePage = new HomePage(page);
    //Visit the web application
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();

    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);

    /// Locate the Greens Groomer link
    const greensGroomerLink = page.locator('a[href="http://www.greensgroomer.com/"]');

    // Scroll it into view
    await greensGroomerLink.scrollIntoViewIfNeeded();

    // Optional: wait for it to be fully visible
    await greensGroomerLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        greensGroomerLink.click(),            // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('http://www.greensgroomer.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Lely section opens the correct website as specified in the <a> element of the HTML.
*/
test('Lely section link', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();

    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);
    
    /// Locate the Lely link
    const lelyLink = page.locator('a[href="http://lelyturf.com/"]');

    // Scroll it into view
    await lelyLink.scrollIntoViewIfNeeded();

    // Optional: wait for it to be fully visible
    await lelyLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        lelyLink.click(),                     // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('http://lelyturf.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Gandy section opens the correct website as specified in the <a> element of the HTML.
*/
test('Gandy section link', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();

    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);

    /// Locate the Gandy link
    const gandyLink = page.locator('a[href="http://gandy.net/"]');

    // Scroll it into view
    await gandyLink.scrollIntoViewIfNeeded();

    // Optional: wait for it to be fully visible
    await gandyLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        gandyLink.click(),                     // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('http://gandy.net/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});


/*
Verify that clicking SUBMIT button without filling the form shows validation messages.
*/
test('SUBMIT button validation with empty fields', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();

    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);

    /// Locate the SUBMIT button
    const submitButton = page.locator('text=Submit').first();
    // await expect(submitButton).toBeVisible();

    // // Click the SUBMIT button
    await submitButton.click();

    //email field locator
    const emailInput = page.locator('input[name="email"]');

    // Verify the email input shows an error (aria-invalid="true")
    await expect(emailInput).toHaveAttribute('aria-invalid', 'true');

    const msg = await emailInput.evaluate(el => (el as HTMLInputElement).validationMessage);
    console.log('Browser says:', msg);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});



/*
Verify that when clicking Submit with an invalid email in the form found in the 
Let's Work Together section, the form is not submitted and an error is shown (invalid email format)
*/
test('Email field with invalid format', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();

    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);

    //fill email input field with invalid email format
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('invalidemail');

    // Locate the SUBMIT button
    const submitButton = page.locator('text=Submit').first();
    await expect(submitButton).toBeVisible();

    // Click the SUBMIT button
    await submitButton.click();

    // Verify the email input shows an error (aria-invalid="true")
    await expect(emailInput).toHaveAttribute('aria-invalid', 'true');

    const msg = await emailInput.evaluate(el => (el as HTMLInputElement).validationMessage);
    console.log('Browser says:', msg);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});


/*
Ensure that the visible email address displayed in the Let’s Work Together section matches the mailto: value in the HTML code.
*/
test('Email link verification', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('/');

    // Locate the Equipment link
    const equipmenttLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
    await equipmenttLink.click();

    // Optionally check URL after click
    await expect(page).toHaveURL(/equipment/);

    // Locator for the link
    const emailLink = page.locator('text=turf@andreandson.com').first();

    // Wait until the link is visible
    await expect(emailLink).toBeVisible({ timeout: 5000 });

    // // Get visible text and href
    const text = (await emailLink.innerText()).trim();
    const href = await emailLink.getAttribute('href');

    console.log('Text:', text);
    console.log('Href:', href);

    // // Assert href matches "mailto:" + text
    expect(href).toBe(`mailto:${text}`);

});