import { expect, type Locator, type Page , FrameLocator} from '@playwright/test';


export class ContactsPage{

    //variables 
    readonly page: Page;
    readonly mapFrame: FrameLocator;
    readonly satelliteButton: Locator;
    readonly labelsButton: Locator;
    readonly zoomIn: Locator;
    readonly zoomout: Locator;
    readonly inquiriesSection: Locator;
    readonly contactPageLink: Locator;
    readonly emailLink: Locator;



    


    constructor(page: Page){
        this.page = page;
        this.mapFrame = page.frameLocator('iframe[title="Google Maps"]');
        this.headingText = page.locator('span.wixui-rich-text__text', { hasText: 'Contact Us' }).first();
        this.emailInput = page.locator('input[name="email"]');
        this.emailLink = page.locator('a[data-auto-recognition="true"]').first();
    }
}