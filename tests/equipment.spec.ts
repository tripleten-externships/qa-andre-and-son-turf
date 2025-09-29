import { test, expect } from '@playwright/test';
import { EquipmentPage } from '../pages/equipment';

/*
Verify that the page title in the hero section "EQUIPMENT SALES"
Verify that the video plays in the hero when user lands in the Equipment page
*/
test('Equipment page hero section and video', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Verify hero title
    await equipmentPage.verifyHeroTitle('EQUIPMENT SALES');

    // Verify video is visible and check autoplay
    const isPaused = await equipmentPage.verifyHeroVideo();
    expect(isPaused).toBe(true); // change to false if you expect autoplay
});

/*
Verify that the video plays correctly in the Feature section (FS900 Riding Sweeper /Core Collector")
*/
test('Feature section video can play and pause', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the video element (adjust selector as needed)
    const video = page.locator('video'); // if there are multiple, narrow down with a specific parent section

    // Ensure video is visible
    await expect(video).toBeVisible();

    // Play the video
    await video.evaluate((v: HTMLVideoElement) => {
        return new Promise<void>((resolve, reject) => {
            v.oncanplay = () => resolve();
            v.onerror = () => reject(new Error('Video failed to load'));
        });
    });
    await video.evaluate((v: HTMLVideoElement) => v.play());


    // Wait a bit to verify it started playing
    await page.waitForTimeout(2000);

    // Check if the video is playing
    const isPlaying = await video.evaluate((v: HTMLVideoElement) => !v.paused);
    expect(isPlaying).toBe(true);

    // Pause the video
    await video.evaluate((v: HTMLVideoElement) => v.pause());

    // Verify the video is paused
    const isPaused = await video.evaluate((v: HTMLVideoElement) => v.paused);
    expect(isPaused).toBe(true);
});





/*
Verify that clicking the image in the Baroness section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Baroness section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();
    
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
Verify that clicking the image in the Buffalo Turbine section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Buffallo Turnbine section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

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
Verify that clicking the image in the STIHL section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('STIHL section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

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
Verify that clicking the image in the Greens Groomer section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Greens Groomer section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();


    // Locate the Greens Groomer section
    await page.getByText('Greens Groomer').first().scrollIntoViewIfNeeded();

    // Locate the Greens Groomer link
    const greensGroomerLink = page.getByRole('link', { name: 'natural_groomer_01.jpg' });
   

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
Verify that clicking the image in the RotaDairon section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('RotaDairon section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();


    // Locate the RotaDairon section
    await page.getByText('RotaDairon').first().scrollIntoViewIfNeeded();

    // Locate the RotaDairon link
    const rotaDaironLink = page.getByRole('link', { name: 'Screenshot 2021-03-01 221305.' });


    // Optional: wait for it to be fully visible
    await rotaDaironLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        rotaDaironLink.click(),        // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.rotadairon.fr/gb/rotadairon_smc.html/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Lely section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Lely section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();
    
    // Locate the Lely section
    await page.getByText('Lely').first().scrollIntoViewIfNeeded();
    
    // Locate the lin
    const lelyLink = page.getByRole('link', { name: 'lely.jpg' });

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
    await expect(newPage).toHaveURL('lelyturf.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Gandy section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Gandy section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Gandy section
    await page.getByText('Gandy').first().scrollIntoViewIfNeeded();

    // Locate the link
    const gandyLink = page.getByRole('link', { name: 'Gandy.JPG' });

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
    await expect(newPage).toHaveURL('https://gandy.net/');

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
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    //Locate the email input field
    const emailInput = page.locator('input[name="email"]');

    // Locate the SUBMIT form
    await equipmentPage.submitForm();

    // Verify the email input shows an error (aria-invalid="true")
    // await expect(emailInput).toHaveAttribute('aria-invalid', 'true');

    const validationMessage = await emailInput.evaluate(el => (el as HTMLInputElement).validationMessage);
    console.log('Browser says:', validationMessage);

    expect(validationMessage).not.toBe('');

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
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    //fill email input field with invalid email format
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('invalidemail');

    // Locate the SUBMIT form
    await equipmentPage.submitForm();

    // Verify the email input shows an error (aria-invalid="true")
    // await expect(emailInput).toHaveAttribute('aria-invalid', 'true');

    const validationMessage = await emailInput.evaluate(el => (el as HTMLInputElement).validationMessage);
    console.log('Browser says:', validationMessage);

    expect(validationMessage).not.toBe('');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});


/*
Ensure that the visible email address displayed in the Let’s Work Together section matches the mailto: value in the HTML code.
*/
test('Email link verification', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locator for the link
    const emailLink = page.locator('text=turf@andreandson.com').first();

    // Wait until the link is visible
    await expect(emailLink).toBeVisible({ timeout: 5000 });

    // Get visible text and href
    const text = (await emailLink.innerText()).trim();
    const href = await emailLink.getAttribute('href');

    console.log('Text:', text);
    console.log('Href:', href);

    // Assert href matches "mailto:" + text
    expect(href).toBe(`mailto:${text}`);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});