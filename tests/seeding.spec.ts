import { test, expect, Locator } from '@playwright/test';
import { HomePage } from '../pages/example';

/*
    Test to verify that Seeding page loads successfully.
*/
test('Page loads successfully', async ({ page }) => {
    const homePage = new HomePage(page);  
    // Visit the web application
    await page.goto('/');
    
    // await page.getByText('Contract Services').first().hover();
    const contractServicesLink = page.locator('a[data-testid="linkElement"][href*="contract-services"]').first();
    // const contractServices = page.locator('#comp-igauz7ee1label');
    const moreContractServicesBtn = page.locator('button[aria-label="More CONTRACT SERVICES pages"]');

    
    // Confirm it starts collapsed
    await expect(contractServicesLink).toHaveAttribute('aria-expanded', 'false');

    // Hover over the element
    await moreContractServicesBtn.hover();

    // Wait until it expands
    await expect(contractServicesLink).toHaveAttribute('aria-expanded', 'true');

    // Click on Seeding link
    // await page.getByText('Seeding').click();

    // Verify that page loads successfully
    // await expect(page.url()).toEqual('https://www.andreandson.com/seeding');

});

/*
Verify that the page title in the hero section "Seeding"
*/
test('Seeding page hero section', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('https://www.andreandson.com/seeding');

    const heading: Locator = page.locator('span.wixui-rich-text__text', { hasText: 'Seeding' }).first();

    //validate text matches with the hero section 
    await expect(heading).toHaveText('Seeding');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});



/*
Verify that clicking Send button without filling the form shows validation messages.
*/
test('Send button validation with empty fields', async ({ page }) => {
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('https://www.andreandson.com/seeding');

    // Locate the email input field
    const emailInput = page.locator('input[name="email"]');

    // Locate the SEND button
    const sendButton = page.locator('button[aria-label="Send"]');
    await expect(sendButton).toBeVisible();

    // Click the SEND button
    await sendButton.click();


    const validationMessage = await emailInput.evaluate(el => (el as HTMLInputElement).validationMessage);
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
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('https://www.andreandson.com/seeding');

    //fill email input field with invalid email format
    const emailInput = page.locator('input[name="email"]');
    await emailInput.fill('invalidemail');

    // Locate the SEND button
    const sendButton = page.locator('button[aria-label="Send"]');
    await expect(sendButton).toBeVisible();

    // Click the SEND button
    await sendButton.click();

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
    const homePage = new HomePage(page);   
    //Visit the web application 
    await page.goto('https://andreandson.com/seeding');

    // Locator for the link
    const emailLink = page.locator('a[data-auto-recognition="true"]').first();;

    // Wait until the link is visible
    await expect(emailLink).toBeVisible({ timeout: 5000 });

    // // Get visible text and href
    const text = (await emailLink.innerText()).trim();
    const href = await emailLink.getAttribute('href');

    console.log('Text:', text);
    console.log('Href:', href);

    // // Assert href matches "mailto:" + text
    expect(href).toBe(`mailto:${text}`);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});