import { Locator, Page } from "@playwright/test";

export class ConvAero{

    //variables
    readonly page: Page;
    readonly contractServices: Locator; // hover over CONTRACT SERVICES
    readonly CONVENTIONALAERIFICIATION: Locator; // waiting to see if CONVENTIONAL AERIFICATION is visible
    readonly conventionalaerification: Locator; // click on CONVENTIONAL AERIFICATION
    readonly mainContentRegion: Locator; // main content region
    readonly mainContentImages: Locator; // images in main content region
    readonly fairwaysAerificationImage: Locator; // specific image by its accessible name
    readonly conventionalAercoreGreensImage: Locator; // specific image by its accessible name
    readonly pageDescriptionText: Locator; // page description text
    readonly clickfirstName: Locator; // first name field
    readonly fillfirstname: Locator; // fill out first name field
    readonly clicklastName: Locator; // last name field
    readonly filllastname: Locator; // fill out last name field
    readonly clickemail: Locator; // email field
    readonly fillemail: Locator; // fill out email field
    readonly clickmessage: Locator; // message field
    readonly fillmessage: Locator; // fill out message field
    

    constructor(page: Page){
        this.page=page;
        this.contractServices=page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0);
        this.CONVENTIONALAERIFICIATION=page.getByRole('link', { name: 'CONVENTIONAL AERIFICIATION' });
        this.conventionalaerification=page.getByRole('link', { name: 'CONVENTIONAL AERIFICIATION' });
        this.mainContentRegion=page.getByRole('region', { name: 'main content' });
        this.mainContentImages=this.mainContentRegion.locator('img');
        this.fairwaysAerificationImage=page.getByRole('img', { name: 'Fairways Aerification 3.jpg' });
        this.conventionalAercoreGreensImage=page.getByRole('img', { name: 'Conventional Aercore Greens 2' });
        this.pageDescriptionText=page.getByText('Conventional aerification is the process of removing small cores of soil from the turf and soil profile to reduce compaction, improve water infiltration, and enhance overall turf health. This method is commonly used on golf courses, sports fields, and other high-traffic turf areas.');
        this.clickfirstName=page.getByLabel('First Name');
        this.fillfirstname=page.getByRole('textbox', { name: 'First Name *' });
        this.clicklastName=page.getByLabel('Last Name');
        this.filllastname=page.getByRole('textbox', { name: 'Last Name *' });
        this.clickemail=page.getByLabel('Email');
        this.fillemail=page.getByRole('textbox', { name: 'Email *' });
        this.clickmessage=page.getByLabel('Message');
        this.fillmessage=page.getByRole('textbox', { name: 'Message *' });
    
    }

    // hover over CONTRACT SERVICES
    async hoverContractServices(){
        await this.contractServices.hover();
    }
    // waiting to see if CONVENTIONAL AERIFICATION is visible
    async isvisibleCONVENTIONALAERIFICIATION(){
        return await this.CONVENTIONALAERIFICIATION.isVisible();
    }
    // click on CONVENTIONAL AERIFICATION
    async clickCONVENTIONALAERIFICIATION(){
        await this.conventionalaerification.click();
    }
    // Verify that one image exists in the "main content" region
    async verifymaincontentimage(){
        return await this.mainContentImages.first().isVisible();
    }
    // Verify specific image by their accessible names
    async verifyfairwaysAerificationImage(){
        return await this.fairwaysAerificationImage.isVisible();
    } 
    // Verify specific image by their accessible names
    async verifyconventionalAercoreGreensImage(){
        return await this.conventionalAercoreGreensImage.isVisible();
    }
    // Verify page description text displays correctly
    async verifypagedescriptiontext(){
        return await this.pageDescriptionText.isVisible();
    }
    // Verify field "First Name" can be filled out
    async clickfirstNameField(){
        await this.clickfirstName.click();
    }
    async fillfirstNameField(name: string){
        await this.fillfirstname.fill(name);
    }
    // Verify field "Last Name" can be filled out
    async clicklastNameField(){
        await this.clicklastName.click();
    }
    async filllastNameField(name: string){
        await this.filllastname.fill(name);
    }
    // Verify field "Email" can be filled out
    async clickemailField(){
        await this.clickemail.click();
    }
    async fillemailField(email: string){
        await this.fillemail.fill(email);
    }
    // Verify field "Message" can be filled out
    async clickmessageField(){
        await this.clickmessage.click();
    }
    async fillmessageField(message: string){
        await this.fillmessage.fill(message);
    }

}