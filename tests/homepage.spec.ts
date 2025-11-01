import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';

//* Verify that CONTACT is visible
//* Verify that the map is visible
//* Verify that the Location title is visible
//* Verify that the Location address is visible
//* Verify that the email is visible
//* Verify that the phone numbers are visible
//* Verify that the Inquiries title is visible
//* Verify that the Inquiries text is visible
//* Verify that the Contact Us title is visible
//* Verify that the user can enter the name
//* Verify that the user can enter the email
//* Verify that the user can enter subject
//* Verify that the user can enter text
//* Verify that the Submit button is visible
//* Verify that the Employment title is visible
//* Verify that the Employment text is visible
//* Verify that the Employment link bring user to the appropriate page
//* Verify that Get a Quote is visible
//* Verify that the phone number is visible
test('Contact part of the Home Page', async ({ page }) => {
    //Go to home page
    await page.goto('/');
    const homePage = new HomePage (page);
    //assert that the CONTACT Title is visible
    await expect(homePage.contactTitle).toBeVisible();
    //aasert that the map is visible
    //await expect(homePage.map).toBeVisible();
    //assert that the Location title is visible
    await expect(homePage.locationTitle).toBeVisible();
    //asert that Location address is visible
    await expect(homePage.locationAddress1).toBeVisible();
    await expect(homePage.locationAddress2).toBeVisible();
    //assert that Location email is visible
    await expect(homePage.locationEmail).toBeVisible();
    //assert that the phone numbers ar visible
    await expect(homePage.locationPhoneNumbers).toBeVisible();
    //assert that the Inquiries Title and Text are visible
    await expect(homePage.inquiriesTitle).toBeVisible();
    await expect(homePage.inquiriesText).toBeVisible();
    //assert that the Enter Your Name is visible and the box is fillable
    await expect(homePage.enterYourNameText).toBeVisible();
    await homePage.fillName('Demo Name');
    //assert that the Enter Your Email is visible and the box is fillable
    await expect(homePage.enterYourEmailText).toBeVisible();
    await homePage.fillEmail('demoemail@mail.com');
    //assert that the Enter Your Subject is visible and the box is fillable
    await expect(homePage.enterYourSubjectText).toBeVisible();
    await homePage.fillSubject('Demo Subject');
    //assert that Enter Your Message is visible and the box is fillable
    await expect(homePage.enterYourMessageText).toBeVisible();
    await homePage.fillText('Demo Message');
    //assert that the Submit button is visible
    await expect(homePage.contactUsSubmitButton).toBeVisible();
    //assert that the Get A Quote text and phone number is visible
    await expect(homePage.getAQuoteText).toBeVisible();
    await expect(homePage.getAQuotePhoneNumber).toBeVisible();
    //assert that the Employment title and text are visible
    await expect(homePage.employmentTitle).toBeVisible();
    await expect(homePage.employmentText).toBeVisible();
    //assert that the employlemt link brings you to the careers page
    await homePage.clickEmploymentLink();
    //assert the URL
    await expect(page).toHaveURL('https://www.andreandson.com/careers')
});