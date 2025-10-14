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
    contractbutton: Locator;
    contractdropdown: Locator;
    contractrotarydropdown: Locator;
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
  readonly companyLogo: Locator;
  readonly addressLine1: Locator;
  readonly addressLine2: Locator;
  readonly email: Locator;
  readonly phone: Locator;
  readonly trueValueLogo: Locator;

  //social media locators
  readonly twitterIcon: Locator;
  readonly instagramIcon: Locator;
  readonly facebookIcon: Locator;

  // Rotary Decompaction locators
  readonly rotarytest: {
    turfimage: Locator;
    rotaryparagraph: Locator;
    firstnamebox: Locator;
    lastnamebox: Locator;
    emailbox: Locator;
    messagebox: Locator;
    sendbutton: Locator;
    rotarydivision: Locator;
    rotaryaddress: Locator;
    rotartystate: Locator;
    rotaryemail: Locator;
    rotaryphone: Locator;


  }




  constructor(page: Page) {
    this.page = page;


    this.rotarytest = {
      turfimage: page.locator('//img[@alt="Cheer Practice"]'),
      rotaryparagraph: page.locator('//span[@style="font-size:16px;"]'),
      firstnamebox: page.locator('//input[@name="first-name"]'),
      lastnamebox: page.locator('//input[@name="last-name"]'),
      emailbox: page.locator('//input[@name="email"]'),
      messagebox: page.locator('//textarea'),
      sendbutton: page.locator('//button[.="Send"]'),
      rotarydivision: page.locator('(//span[.="Andre & Son Turf Division"]) [1]'),
      rotaryaddress: page.locator("(//span[contains(normalize-space(.), '17150 State Route 706')])[1]"),
      rotartystate: page.locator("(//span[contains(normalize-space(.), 'Montrose, PA 18801')])[1]"),
      rotaryemail: page.locator("(//*[@href='mailto:turf@andreandson.com']) [1]"),
      rotaryphone: page.locator('(//span[contains(text(), "570.278.1131")])[1]'),  
    }

    // turf prodcuts link and sublinks
    this.turfLink = {
      turfpoduct: page.locator("//*[@data-testid='linkElement-0']"),
      turfcombo: page.locator("//*[@data-testid='linkElement-0-0']"),
      turffertilizer: page.locator("//*[@data-testid='linkElement-0-1']"),
      turfchemicals: page.locator("//*[@data-testid='linkElement-0-2']"),
      turfliquid: page.locator("//*[@data-testid='linkElement-0-3']"),
      turfseed: page.locator("//*[@data-testid='linkElement-0-4']"),
      turfdressing: page.locator("//*[@data-testid='linkElement-0-5']"),
      turfamendments: page.locator("//*[@data-testid='linkElement-0-6']"),
      turfmelt: page.locator("//*[@data-testid='linkElement-0-7']"),
    };

    // contract services link and sublinks
    this.contractLink = {
      contractbutton: page.getByRole('link', {name: 'CONTRACT SERVICES'}).nth(0),
      contractdropdown: page.locator("(//p[contains(normalize-space(.), 'CONTRACT SERVICES')])"),
      contractrotarydropdown: page.getByRole('link', {name: 'ROTARY DECOMPACTION'}).nth(0),
      contractservices: page.locator("//*[@data-testid='linkElement-1']"),
      contractconventional: page.locator("//*[@data-testid='linkElement-1-0']"),
      contractdeep: page.locator("//*[@data-testid='linkElement-1-1']"),
      contractrotary: page.locator("//*[@data-testid='linkElement-1-2']"),
      contractapplication: page.locator("//*[@data-testid='linkElement-1-3']"),
      contractcore: page.locator("//*[@data-testid='linkElement-1-4']"),
      contractdressing: page.locator("//*[@data-testid='linkElement-1-5']"),
      contractseeding: page.locator("//*[@data-testid='linkElement-1-6']"),
      contractconstruction: page.locator("//*[@data-testid='linkElement-1-7']"),
    };
// (//*[@href='https://www.andreandson.com/contract-services']) [1]
// 
//(//p[contains(normalize-space(.), 'CONTRACT SERVICES')])
    // about sub links, about doesnt have a link element itself because it is not clickable
    this.aboutLink = {
      abouthover: page.locator("//*[@data-testid='linkElement-3']"),
      aboutstory: page.locator("//*[@data-testid='linkElement-3-0']"),
      aboutsales: page.locator("//*[@data-testid='linkElement-3-1']"),
      aboutphoto: page.locator("//*[@data-testid='linkElement-3-2']"),
      aboutcarrers: page.locator("//*[@data-testid='linkElement-3-3']"),
    };

    // Remaining links that dont contain sublinks
    this.equipmentLink = page.locator("//*[@data-testid='linkElement-2']");
    this.contactLink = page.locator("//*[@data-testid='linkElement-4']");
    this.itemsLink = page.locator("//*[@data-testid='linkElement-5']");

    // Footer Locators (# is used to call on the id of the footer in a locator i believe)
    this.footer = page.locator("(//div[@data-testid = 'columns']) [9]");
    // Company & contact info
    this.companyName = page.locator('(//span[.="Andre & Son Turf Division"]) [1]');
    this.companyLogo = page.locator("//img[@alt='Andre and Son Logo PNG.png']");
    this.addressLine1 = page.locator("(//span[contains(normalize-space(.), '17150 State Route 706')])[3]");
    this.addressLine2 = page.locator("(//span[contains(normalize-space(.), 'Montrose, PA 18801')])[3]");
    this.email = page.locator("(//*[@href='mailto:turf@andreandson.com']) [2]");
    this.phone = page.locator('//span[contains(text(), "570.278.1131")]');

    
    this.trueValueLogo = page.locator("//img[@id='img_comp-klwsfd3b']");

    // Social media icons
    this.twitterIcon = page.locator("//a[@aria-label='Twitter']");
    this.instagramIcon = page.locator("//a[@aria-label='Instagram   ']");
    this.facebookIcon = page.locator("//a[@aria-label='Facebook']")
  }



// Rotarty Decompaction 
// If statement to use for when the .hover doesnt work
/*
 if (await this.turfLink..isVisible()) {await this.turflink..click();}
    else {
      await this.page.goto("https://www.andreandson.com/turf-products");
}
*/

async RotaryDecompactionVisible (){
  return await this.contractLink.contractrotarydropdown.isVisible();
}

async verifyRotaryDecompaction() {
    await this.contractLink.contractbutton.hover();
    if (await this.contractLink.contractrotarydropdown.isVisible()) {await this.contractLink.contractrotarydropdown.click();}
    else {
      await this.page.goto("https://www.andreandson.com/rotary-decompaction");
    } 
}

async verifyDropdownMenu (){
  await this.contractLink.contractdropdown.hover();
}

// Hover Turf Products and click on turf king combo products
 async clickTurfProducts(){
    await this.turfLink.turfpoduct.click()
  }

  async clickTurfComboProducts() {
// load page and hover turf products
    await this.turfLink.turfpoduct.hover()
    // go to combo product if visible else go to web page
    if (await this.turfLink.turfcombo.isVisible()) {await this.turfLink.turfcombo.click();}
    else {
      await this.page.goto("https://www.andreandson.com/turf-king-combo-products");
    }
        // click sublink turf king combo products   
        // Locator for h1 heading with Turf King Combination Products

    
     // verify text Turf King Combination Products after clicking sublink
  }
   
  async clickTurfFertilizer() {
    await this.turfLink.turfpoduct.hover()
    if (await this.turfLink.turffertilizer.isVisible()) {await this.turfLink.turffertilizer.click();}
    else {
      await this.page.goto("https://www.andreandson.com/turf-king-dry-fertilizer");
}
    
  }

  async clickTurfChemicals(){
    await this.turfLink.turfpoduct.hover()
    if (await this.turfLink.turfchemicals.isVisible()) {await this.turfLink.turfchemicals.click();}
    else {
      await this.page.goto("https://www.andreandson.com/control-agents-2");
}
    
  }

  async clickLiquidFertilizer(){
    await this.turfLink.turfpoduct.hover()
    if (await this.turfLink.turfliquid.isVisible()) {await this.turfLink.turfliquid.click();}
    else {
      await this.page.goto("https://www.andreandson.com/liquid-fertilizer");
}
    
  }

  async clickSeed(){
    await this.turfLink.turfpoduct.hover()
    if (await this.turfLink.turfseed.isVisible()) {await this.turfLink.turfseed.click();}
    else {
      await this.page.goto("https://www.andreandson.com/seed");
}
    
  }

    async clickDressingandBunkerSand(){
    await this.turfLink.turfpoduct.hover()
    if (await this.turfLink.turfdressing.isVisible()) {await this.turfLink.turfdressing.click();}
    else {
      await this.page.goto("https://www.andreandson.com/top-dressing-bunker-sand");
}
   
  }

  async clickAmendments(){
    await this.turfLink.turfpoduct.hover()
    if (await this.turfLink.turfamendments.isVisible()) {await this.turfLink.turfamendments.click();}
    else {
      await this.page.goto("https://www.andreandson.com/soil-admendments");
}
    
  }

   async clickMelts(){
    await this.turfLink.turfpoduct.hover()
    if (await this.turfLink.turfmelt.isVisible()) {await this.turfLink.turfmelt.click();}
    else {
      await this.page.goto("https://www.andreandson.com/ice-melts");
}
  
  }

// end of Turf Prodcuts footer navigation


  async clickContractServices() {

    await this.contractLink.contractservices.click()
    
  }

  async clickConventionalAerification() {

    await this.contractLink.contractservices.hover()
     if (await this.contractLink.contractconventional.isVisible()) {await this.contractLink.contractconventional.click();}
    else {
      await this.page.goto("https://www.andreandson.com/conventional-aerification");
}
   
  }

  async clickDeepTine() {

    await this.contractLink.contractservices.hover()
     if (await this.contractLink.contractdeep.isVisible()) {await this.contractLink.contractdeep.click();}
    else {
      await this.page.goto("https://www.andreandson.com/deep-tine-aerificiation");
}
   
  }


/*

excluding this since I already have a test for the rotart decompation page along with additional tests in the location

  async clickRotaryDecompaction() {

    await this.contractLink.contractservices.hover()
     if (await this.turfLink.turfmelt.isVisible()) {await this.turfLink.turfmelt.click();}
    else {
      await this.page.goto("https://www.andreandson.com/ice-melts");
}
    
  }
*/


async clickApplicationServices() {
  
    await this.contractLink.contractservices.hover()
     if (await this.contractLink.contractapplication.isVisible()) {await this.contractLink.contractapplication.click();}
    else {
      await this.page.goto("https://www.andreandson.com/application-services");
}
   
  }

async clickCoreRemoval() {
    await this.contractLink.contractservices.hover()
     if (await this.contractLink.contractcore.isVisible()) {await this.contractLink.contractcore.click();}
    else {
      await this.page.goto("https://www.andreandson.com/core-removal");
}
   
  }

async clickTopDressing() {
    await this.contractLink.contractservices.hover()
     if (await this.contractLink.contractdressing.isVisible()) {await this.contractLink.contractdressing.click();}
    else {
      await this.page.goto("https://www.andreandson.com/topdressing");
}
   
  }

async clickSeeding() {
    await this.contractLink.contractservices.hover()
     if (await this.contractLink.contractseeding.isVisible()) {await this.contractLink.contractseeding.click();}
    else {
      await this.page.goto("https://www.andreandson.com/seeding");
}
   
  }

  async clickConstruction() {
    await this.contractLink.contractservices.hover()
     if (await this.contractLink.contractconstruction.isVisible()) {await this.contractLink.contractconstruction.click();}
    else {
      await this.page.goto("https://www.andreandson.com/construction-renovation");
}
    
  }
// end of Contract Services

async clickEquipment() {
    await this.equipmentLink.hover()
     if (await this.equipmentLink.isVisible()) {await this.equipmentLink.click();}
    else {
      await this.page.goto("https://www.andreandson.com/equipment");
    }
    
  }

async hoverAboutclickStory() {
    await this.aboutLink.abouthover.hover()
    if (await this.aboutLink.aboutstory.isVisible()) {await this.aboutLink.aboutstory.click();}
    else {
      await this.page.goto("https://www.andreandson.com/about-1");
    }
    
  }

async hoverAboutclickSales() {
    await this.aboutLink.abouthover.hover()
    if (await this.aboutLink.aboutsales.isVisible()) {await this.aboutLink.aboutsales.click();}
    else {
      await this.page.goto("https://www.andreandson.com/sales-team");
    }
 
  }

  async hoverAboutclickPhoto() {
    await this.page
    await this.aboutLink.abouthover.hover()
    if (await this.aboutLink.aboutphoto.isVisible()) {await this.aboutLink.aboutphoto.click();}
    else {
      await this.page.goto("https://www.andreandson.com/photo-gallery");
    }
    
  } 

  async hoverAboutclickCareers() {
    await this.page
    await this.aboutLink.abouthover.hover()
    if (await this.aboutLink.aboutcarrers.isVisible()) {await this.aboutLink.aboutcarrers.click();}
    else {
      await this.page.goto("https://www.andreandson.com/careers");
    }
    
  }
 // end of About
  
 async clickContact() {
    await this.page
    await this.contactLink.click()
    
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
