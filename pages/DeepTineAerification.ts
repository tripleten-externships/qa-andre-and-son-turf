import { Locator, Page } from "@playwright/test";

export class DeepTineAerification{

    //variables 
    readonly page: Page;
    readonly contractServices: Locator; // hover over CONTRACT SERVICES
    readonly clickDEEPTINEAERIFICATION: Locator; // click on DEEP TINE AERIFICATION
    readonly mainContentRegion: Locator; // main content region
    readonly GreenDT1Image: Locator; // specific image by its accessible name
    readonly DeepTineGreens2Image: Locator; // specific image by its accessible name
    readonly FairwaysDeepTine1Image: Locator; // specific image by its accessible name
    readonly pageDescriptionText: Locator; // page description text
    readonly firstnamefield: Locator; // first name field
    readonly fillfirstName: Locator; // fill out first name field
    readonly lastnamefield: Locator; // last name field
    readonly filllastname: Locator; // fill out last name field
    readonly emailfield: Locator; // email field
    readonly fillemail: Locator; // fill out email field
    readonly messagefield: Locator; // message field
    readonly fillmessage: Locator; // fill out message field


    //locators
    constructor(page: Page){
        this.page=page;
        this.contractServices=page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0);
        this.clickDEEPTINEAERIFICATION=page.getByRole('link', { name: 'DEEP TINE AERIFICATION' });
        this.mainContentRegion=page.getByRole('region', { name: 'main content' });
        this.GreenDT1Image=page.getByRole('img', { name: 'GreenDT1.jpg' });
        this.DeepTineGreens2Image=page.getByRole('img', { name: 'Deep Tine Greens 2.jpg' });
        this.FairwaysDeepTine1Image=page.getByRole('img', { name: 'Fairways Deep Tine 1.jpg' });
        this.pageDescriptionText=page.getByText('Deep Tine Aerification is proven to be one of the most important cultural practices for turf maintenance.  The ability to reach greater depths, while fracturing the soil to relieve compaction allows for deeper roots and overall better drainage.');
        this.firstnamefield=page.getByLabel('First Name');
        this.fillfirstName=page.getByLabel('First Name');
        this.lastnamefield=page.getByLabel('Last Name');
        this.filllastname=page.getByLabel('Last Name');
        this.emailfield=page.getByLabel('Email');
        this.fillemail=page.getByLabel('Email');
        this.messagefield=page.getByLabel('Message');
        this.fillmessage=page.getByLabel('Message');


    }

    // hover over CONTRACT SERVICES
    async hoverContractServices(){
        await this.contractServices.hover();
    }
    // click on DEEP TINE AERIFICATION
    async DEEPTINEAERIFICATION() {
    if (await this.clickDEEPTINEAERIFICATION.isVisible()) {
      await Promise.all([
        this.page.waitForNavigation(), // ensure the page loads after clicking
        this.clickDEEPTINEAERIFICATION.click(),
      ]);
    } else {
      await this.page.goto('https://www.andreandson.com/deep-tine-aerificiation')};
    }
    // Verify that one image exists in the "main content" region
    async verifymaincontentimage(){
        return await this.mainContentRegion.locator('img').first().isVisible();
    }
    async verifyGreenDT1Image(){
        return await this.GreenDT1Image.isVisible();
    }
    async verifyDeepTineGreens2Image(){
        return await this.DeepTineGreens2Image.isVisible();
    }
    async verifyFairwaysDeepTine1Image(){
        return await this.FairwaysDeepTine1Image.isVisible();
    }
    // Verify page description text displays correctly
    async verifypagedescriptiontext(){
        return await this.pageDescriptionText.isVisible();
    }
    // click on the first name field
    async clickfirstNameField(){
        await this.firstnamefield.click();
    } 
    // fill out the first name field
    async fillfirstNameField(name: string){
        await this.fillfirstName.fill(name);
    }
    // click on the last name field
    async clicklastNameField(){
        await this.lastnamefield.click();
    }
    // fill out the last name field
    async lastname(name: string){
        await this.filllastname.fill(name);
    }
    // click on the email field
    async clickemailField(){
        await this.emailfield.click();
    }
    // fill out the email field
    async fillemailField(email: string){
        await this.fillemail.fill(email);
    }
    // click on the message field
    async clickmessageField(){
        await this.messagefield.click();
    }
    // fill out the message field
    async fillmessageField(message: string){
        await this.fillmessage.fill(message);
    }



}