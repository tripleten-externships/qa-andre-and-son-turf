import { test, expect, Locator } from '@playwright/test';
import { SeedingPage } from '../pages/seeding';

/*
    Test to verify that Seeding page loads successfully.
*/
test('Page loads successfully', async ({ page }) => {
    const seedingPage = new SeedingPage(page);

    await seedingPage.navigateSeeding();

});

/*
Verify that the page title in the hero section "Seeding"
*/
test('Seeding page hero section', async ({ page }) => {
    const seedingPage = new SeedingPage(page);

    //Visit the web application 
    await seedingPage.navigateSeeding();

    // const headingText: Locator = page.locator('span.wixui-rich-text__text', { hasText: 'Seeding' }).first();

    //validate text matches with the hero section 
    await expect(seedingPage.headingText).toHaveText('Seeding');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});



/*
Verify that clicking Send button without filling the form shows validation messages.
*/
test('Send button validation with empty fields', async ({ page }) => {
    const seedingPage = new SeedingPage(page);
    
    //Visit the web application 
    await seedingPage.navigateSeeding();

    // Locate the email input field
    const emailInput = page.locator('input[name="email"]');

    // Click the SEND button
    await seedingPage.clickSendForm();

    //check validation message
    const validationMessage = await seedingPage.emailInput.evaluate(el => (el as HTMLInputElement).validationMessage);
    console.log('Browser says:', validationMessage);

    expect(validationMessage).not.toBe('');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});


/*
Verify that when clicking Send with an invalid email in the form found in the 
Let's Work Together section, the form is not submitted and an error is shown (invalid email format)
*/
test('Email field with invalid format', async ({ page }) => {
    const seedingPage = new SeedingPage(page);
    
    //Visit the web application 
    await seedingPage.navigateSeeding();

    //fill email input field with invalid email format
    // const emailInput = page.locator('input[name="email"]');
    await seedingPage.emailInput.fill('invalidemail');

    // Click the SEND button
    await seedingPage.clickSendForm();

    //check validation message
    const validationMessage = await seedingPage.emailInput.evaluate(el => (el as HTMLInputElement).validationMessage);
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
    const seedingPage = new SeedingPage(page);

    //Visit the web application
    await seedingPage.navigateSeeding();

    // Locator for the link
    // const emailLink = page.locator('a[data-auto-recognition="true"]').first();

    // Wait until the link is visible
    await expect(seedingPage.emailLink).toBeVisible({ timeout: 5000 });

    // // Get visible text and href
    const text = (await seedingPage.emailLink.innerText()).trim();
    const href = await seedingPage.emailLink.getAttribute('href');

    console.log('Text:', text);
    console.log('Href:', href);

    // // Assert href matches "mailto:" + text
    expect(href).toBe(`mailto:${text}`);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});