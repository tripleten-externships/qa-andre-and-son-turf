import { Page, Locator, FrameLocator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly contactSection: Locator;
  readonly mapFrame: FrameLocator;
   readonly body: Locator;
    readonly TurfProducts: Locator;
    readonly TopDressingBunkerSand: Locator;
    readonly TopDressingBunkerSandLearnMore: Locator;
    readonly AmendmentsConditionersLearnMore: Locator;
    readonly AmendmentsConditionersSubMenu: Locator;
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

  constructor(page: Page) {
    this.page = page;
    this.contactSection = page.getByText('CONTACT').nth(2);
    this.mapFrame = page.frameLocator('iframe[title="Google Maps"]');
    this.body = page.getByRole('link', { name: 'ANDRE & SON' });
        this.TurfProducts = page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0); 
        this.TopDressingBunkerSand = page.getByRole('link', { name: 'TOP DRESSING & BUNKER SAND' });
        this.TopDressingBunkerSandLearnMore = page.locator('#comp-kmctlbje__item-klsv14oh').getByTestId('linkElement');
        this.AmendmentsConditionersLearnMore = page.locator('#comp-kmctlbje__item-klsv0vv7').getByTestId('linkElement');
        this.AmendmentsConditionersSubMenu = page.getByRole('link', { name: 'ADMENDMENTS & CONDITIONERS' });
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

  async scrollToContactSection() {
    await this.contactSection.scrollIntoViewIfNeeded();
  }

  async enableSatelliteView() {
    const satelliteButton = this.mapFrame.getByRole('menuitemradio', { name: 'Show satellite imagery' });

    // Wait until the button is visible
    await satelliteButton.waitFor({ state: 'visible', timeout: 20000 });
    console.log('✅ Satellite button is visible.');

    // Ensure it’s scrolled into view
    await satelliteButton.scrollIntoViewIfNeeded();

    // Optional small wait to ensure Google Maps is interactive
    await this.page.waitForTimeout(2000);

    // Click the Satellite button
    await satelliteButton.click({ timeout: 10000 });
    console.log('✅ Clicked Satellite button successfully.');
  }

  async verifyMapCanvasVisible() {
    const mapCanvas = this.page.locator('//div[@id="comp-ig69hlqz"]');
    await expect(mapCanvas).toBeVisible({ timeout: 20000 });
  }
   // CLick on Turf Products in header
    async navigateToTurfProducts(){
        await this.TurfProducts.click();
    }

    //click on Top Dressing Bunker Sand in Turf Products sub menu
    async navigateToTopDressingBunkerSandViaHover() {
        await this.TurfProducts.hover();
        await this.page.waitForTimeout(1000);
        await this.TopDressingBunkerSand.waitFor({ state: 'visible' });
        await this.TopDressingBunkerSand.click();
        await this.page.waitForURL('**/top-dressing-bunker-sand');
   }

    //click on Amendments and Conditioners in Turf Products sub menu 
    async navigateToAmendmentsConditionersViaHover() {
        await this.TurfProducts.hover();
        await this.page.waitForTimeout(1000);
        await this.AmendmentsConditionersSubMenu.waitFor({ state: 'visible' });
        await this.AmendmentsConditionersSubMenu.click();
        await this.page.waitForURL('**/soil-admendments');
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
