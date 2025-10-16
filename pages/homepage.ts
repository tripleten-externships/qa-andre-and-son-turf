import { Locator, Page } from "@playwright/test";

export class HomePage{

    readonly page: Page;
    readonly contactTitle: Locator;
    readonly map: Locator;
    readonly locationTitle: Locator;
    readonly locationAddress1: Locator;
    readonly locationAddress2: Locator;
    readonly locationEmail: Locator;
    readonly locationPhoneNumbers: Locator;
    readonly inquiriesTitle: Locator;
    readonly inquiriesText: Locator;
    readonly contactUsTitle: Locator;
    readonly enterYourNameText: Locator;
    readonly nameInputBox: Locator;
    readonly enterYourEmailText: Locator;
    readonly emailInputBox: Locator;
    readonly enterYourSubjectText: Locator;
    readonly subjectInputBox: Locator;
    readonly enterYourMessageText: Locator;
    readonly messageInputBox: Locator;
    readonly contactUsSubmitButton: Locator;
    readonly employmentTitle: Locator;
    readonly employmentText: Locator;
    readonly employmentLink: Locator;
    readonly getAQuoteText: Locator;
    readonly getAQuotePhoneNumber: Locator;

    constructor(page: Page){
        this.page=page;
        this.contactTitle=page.getByText('CONTACT').nth(2);
        this.map=page.locator('iframe[title="Google Maps"]').contentFrame().locator('.gm-style > div > div:nth-child(2)');
        this.locationTitle=page.getByRole('heading', { name: 'Location' })
        this.locationAddress1=page.locator('(//span[normalize-space()="17150 State Route 706"])[1]');
        this.locationAddress2=page.locator('(//span[normalize-space()="Montrose, PA 18801"])[1]');
        this.locationEmail=page.locator('(//a[normalize-space()="turf@andreandson.com"])[1]');
        this.locationPhoneNumbers=page.locator('//main[@id="PAGES_CONTAINER"]//p[6]');
        this.inquiriesTitle=page.getByRole('heading', { name: 'Inquiries' });
        this.inquiriesText=page.getByRole('paragraph').filter({ hasText: 'Our experienced sales team is' });
        this.contactUsTitle=page.getByRole('heading', { name: 'Contact Us' });
        this.enterYourNameText=page.getByText('Enter Your Name');
        this.nameInputBox=page.locator('(//input)[1]');
        this.enterYourEmailText=page.getByText('Enter Your Email');
        this.emailInputBox=page.locator('(//input)[2]');
        this.enterYourSubjectText=page.getByText('Enter Your Subject');
        this.subjectInputBox=page.locator('(//input)[3]');
        this.enterYourMessageText=page.getByText('Enter your message');
        this.messageInputBox=page.locator('//textarea');
        this.contactUsSubmitButton=page.locator('//button[@aria-label="Submit"]')
        this.employmentTitle=page.getByRole('heading', { name: 'Employment' });
        this.employmentText=page.getByText('We are always looking for');
        this.employmentLink=page.getByRole('link', { name: 'careers page' });
        this.getAQuoteText=page.getByText('Get a quote:');
        this.getAQuotePhoneNumber=page.getByText('888.887.3770', { exact: true });
    }

    async fillName(Name: string){
        await this.nameInputBox.fill(Name);
    }
    async fillEmail(email: string){
        await this.emailInputBox.fill(email);
    }
    async fillSubject(subject: string){
        await this.subjectInputBox.fill(subject);
    }
    async fillText(text: string){
        await this.messageInputBox.fill(text);
    }
    async clickEmploymentLink(){
        await this.employmentLink.click();
    }

}