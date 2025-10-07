import { Page, Locator, expect } from '@playwright/test';

export class NavigationPage {
  readonly page: Page;

  // turf product and sublink locators
  readonly turfLink: {
    turfpoduct: Locator;
    turfcombo: Locator;
    turffertilizer: Locator;
    turfchemicals: Locator;
    turfliquid: Locator;
    turfseed: Locator;
    turfdressing: Locator;
    turfamendments: Locator;
    turfmelt: Locator;
  };

  // contract services and sublink locators
  readonly contractLink: {
    contractservices: Locator;
    contractconventional: Locator;
    contractdeep: Locator;
    contractrotary: Locator;
    contractapplication: Locator;
    contractcore: Locator;
    contractdressing: Locator;
    contractseeding: Locator;
    contractconstruction: Locator;
  };
// about sublink locator
  readonly aboutLink: {
    abouthover: Locator;
    aboutstory: Locator;
    aboutsales: Locator;
    aboutphoto: Locator;
    aboutcarrers: Locator;
  };

  // Other links on the left side that dont have sublinks
  readonly equipmentLink: Locator;
  readonly contactLink: Locator;
  readonly itemsLink: Locator;

  // Information on the right hand side of the footer
  readonly footer: Locator;
  readonly companyName: Locator;
  readonly addressLine1: Locator;
  readonly addressLine2: Locator;
  readonly email: Locator;
  readonly phonePrimary: Locator;
  readonly phoneSecondary: Locator;
  readonly trueValueLogo: Locator;

  //social media locators
  readonly twitterIcon: Locator;
  readonly instagramIcon: Locator;
  readonly facebookIcon: Locator;

  // Rotary Decompaction locators




  constructor(page: Page) {
    this.page = page;

    // turf prodcuts link and sublinks
    this.turfLink = {
      turfpoduct: page.getByTestId('linkElement-0'),
      turfcombo: page.getByTestId('linkElement-0-0'),
      turffertilizer: page.getByTestId('linkElement-0-1'),
      turfchemicals: page.getByTestId('linkElement-0-2'),
      turfliquid: page.getByTestId('linkElement-0-3'),
      turfseed: page.getByTestId('linkElement-0-4'),
      turfdressing: page.getByTestId('linkElement-0-5'),
      turfamendments: page.getByTestId('linkElement-0-6'),
      turfmelt: page.getByTestId('linkElement-0-7'),
    };

    // contract services link and sublinks
    this.contractLink = {
      contractservices: page.getByTestId('linkElement-1'),
      contractconventional: page.getByTestId('linkElement-1-0'),
      contractdeep: page.getByTestId('linkElement-1-1'),
      contractrotary: page.getByTestId('linkElement-1-2'),
      contractapplication: page.getByTestId('linkElement-1-3'),
      contractcore: page.getByTestId('linkElement-1-4'),
      contractdressing: page.getByTestId('linkElement-1-5'),
      contractseeding: page.getByTestId('linkElement-1-6 '),
      contractconstruction: page.getByTestId('linkElement-1-7'),
    };

    // about sub links, about doesnt have a link element itself because it is not clickable
    this.aboutLink = {
      abouthover: page.getByTestId('linkElement-3'),
      aboutstory: page.getByTestId('linkElement-3-0'),
      aboutsales: page.getByTestId('linkElement-3-1'),
      aboutphoto: page.getByTestId('linkElement-3-2'),
      aboutcarrers: page.getByTestId('linkElement-3-3'),
    };

    // Remaining links that dont contain sublinks
    this.equipmentLink = page.getByTestId('linkElement-2');
    this.contactLink = page.getByTestId('linkElement-4');
    this.itemsLink = page.getByTestId('linkElement-5');

    // Footer Locators (# is used to call on the id of the footer in a locator i believe)
    this.footer = page.locator('#SITE_FOOTER');
    // Company & contact info
    this.companyName = page.getByText('Andre & Son Logo PNG');
    this.addressLine1 = page.getByText('17150 State Route 706');
    this.addressLine2 = page.getByText('Montrose, PA 18801');
    this.email = page.locator('a[href^="mailto:turf@andreandson.com"]');
    this.phonePrimary = page.getByText('570.278.1131');
    this.phoneSecondary = page.getByText('888.887.3770');

    
    this.trueValueLogo = page.getByText('True Value');

    // Social media icons
    this.twitterIcon = page.locator('a[href*="twitter.com/Andre Turf"]');
    this.instagramIcon = page.locator('a[href*="instagram.com/andre turf/"]');
    this.facebookIcon = page.locator('a[href*="facebook.com/andreturf"]');
  }



// Rotarty Decompaction 

async verifyRotaryDecompaction() {
    await this.page
    await this.contractLink.contractservices.hover()
    await this.contractLink.contractrotary.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Rotarty Decompaction')
}

// Hover Turf Products and click on turf king combo products
 async clickTurfProducts(){
    await this.page
    await this.turfLink.turfpoduct.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Turf Product Catalog')
  }

  async clickTurfComboProducts() {
// load page and hover turf products
    await this.page
    await this.turfLink.turfpoduct.hover()
        // click sublink turf king combo products
    await this.turfLink.turfcombo.click()   
        // Locator for h1 heading with Turf King Combination Products

    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Turf King Combination Products')
     // verify text Turf King Combination Products after clicking sublink
  }
   
  async clickTurfFertilizer() {
    await this.page
    await this.turfLink.turfpoduct.hover()
    await this.turfLink.turffertilizer.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Turf King Fertilizer Products')
  }

  async clickTurfChemicals(){
    await this.page
    await this.turfLink.turfpoduct.hover()
    await this.turfLink.turfchemicals.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Turf Chemicals')
  }

  async clickLiquidFertilizer(){
    await this.page
    await this.turfLink.turfpoduct.hover()
    await this.turfLink.turfliquid.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Liquid Fertilizer Products')
  }

  async clickSeed(){
    await this.page
    await this.turfLink.turfpoduct.hover()
    await this.turfLink.turfseed.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Seed')
  }

    async clickDressingandBunkerSand(){
    await this.page
    await this.turfLink.turfpoduct.hover()
    await this.turfLink.turfdressing.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Top Dressing & Bunker Sand')
  }

  async clickAmendments(){
    await this.page
    await this.turfLink.turfpoduct.hover()
    await this.turfLink.turfamendments.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Amendments & Conditioners')
  }

   async clickMelts(){
    await this.page
    await this.turfLink.turfpoduct.hover()
    await this.turfLink.turfmelt.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Ice Melts')
  }
// end of Turf Prodcuts


  async clickContractServices() {
    await this.page
    await this.contractLink.contractservices.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Contract Services')
  }

  async clickConventionalAerification() {
    await this.page
    await this.contractLink.contractservices.hover()
    await this.contractLink.contractconventional.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Conventional Areification')
  }

  async clickDeepTine() {
    await this.page
    await this.contractLink.contractservices.hover()
    await this.contractLink.contractdeep.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Deep Tine Areification')
  }

  async clickRotaryDecompaction() {
    await this.page
    await this.contractLink.contractservices.hover()
    await this.contractLink.contractrotary.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Rotarty Decompaction')
  }

async clickApplicationServices() {
    await this.page
    await this.contractLink.contractservices.hover()
    await this.contractLink.contractapplication.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Application Services')
  }

async clickCoreRemoval() {
    await this.page
    await this.contractLink.contractservices.hover()
    await this.contractLink.contractcore.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Core Removal')
  }

async clickTopDressing() {
    await this.page
    await this.contractLink.contractservices.hover()
    await this.contractLink.contractdressing.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Topdressing')
  }

async clickSeeding() {
    await this.page
    await this.contractLink.contractservices.hover()
    await this.contractLink.contractseeding.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Seeding')
  }

  async clickConstruction() {
    await this.page
    await this.contractLink.contractservices.hover()
    await this.contractLink.contractconstruction.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Contruction and Renovation')
  }
// end of Contract Services

async clickEquipment() {
    await this.page
    await this.equipmentLink.hover()
    await this.equipmentLink.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText('Equipment Sales')
  }

async hoverAboutclickStory() {
    await this.page
    await this.aboutLink.abouthover.hover()
    await this.aboutLink.aboutstory.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText("Let's go way back")
  }

async hoverAboutclickSales() {
    await this.page
    await this.aboutLink.abouthover.hover()
    await this.aboutLink.aboutsales.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText("And the guys who bring our office to you...")
  }

  async hoverAboutclickPhoto() {
    await this.page
    await this.aboutLink.abouthover.hover()
    await this.aboutLink.aboutphoto.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText("See us in Action")
  } 

  async hoverAboutclickCareers() {
    await this.page
    await this.aboutLink.abouthover.hover()
    await this.aboutLink.aboutcarrers.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText("Careers")
  }
 // end of About
  
 async clickContact() {
    await this.page
    await this.contactLink.click()
    const Header = this.page.locator('h2')
    await expect(Header).toContainText("CONTACT")
  }
 // end of Contact

 async clickItems() {
    await this.page
    await this.itemsLink.click()
    const Header = this.page.locator('h1')
    await expect(Header).toContainText("EXCELLENCE IN TURF PRODUCTS AND MANAGEMENT")
  }
// end of Items



// Verify that information in the footer is visible
async verifyFooterIsVisible() {
    await expect(this.footer).toBeVisible();
    await expect(this.companyName).toBeVisible();
    await expect(this.addressLine1).toBeVisible();
    await expect(this.addressLine2).toBeVisible();
  }

// Verify that contact information is correct 
  async verifyContactInfo() {
    await expect(this.email).toHaveAttribute('href', 'mailto:turf@andreandson.com');
    await expect(this.phonePrimary).toBeVisible();
    await expect(this.phoneSecondary).toBeVisible();
  }

// Verify that social media links are correct
  async verifySocialMediaLinks() {
    await expect(this.twitterIcon).toBeVisible()
    await expect(this.twitterIcon).toHaveAttribute('href', /twitter\.com/);
    await expect(this.instagramIcon).toHaveAttribute('href', /instagram\.com/);
    await expect(this.instagramIcon).toBeVisible()
    await expect(this.facebookIcon).toHaveAttribute('href', /facebook\.com/);
    await expect(this.facebookIcon).toBeVisible()





















  }
}
