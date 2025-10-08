import { Locator, Page} from "@playwright/test";

export class ContractServicesPage{

    //variables
   readonly page: Page;
   readonly contractServicesTitle: Locator;
   readonly contractServicesVideo: Locator;

   constructor(page:Page){
        this.page=page;
        this.contractServicesTitle = page.locator('h1, h2, [role="heading"]').first();
        this.contractServicesVideo = page.getByRole('region', { name: 'main content' }).locator('img')
    }


}

