import { Locator, Page} from "@playwright/test";

export class ContractServicesPage{

 //variables
   readonly page: Page;
   readonly contractServicesTitle: Locator;
   readonly contractServicesVideo: Locator;
   readonly conventionalAerificationElement: Locator;
   readonly deepTineAerificationElement: Locator;
   readonly rotaryDecompactionElement: Locator;
   readonly coreRemovalElement: Locator;
   readonly applicationServicesElement: Locator;
   readonly topdressingElement: Locator;
   readonly seedingElement: Locator;
   readonly constructionAndRenovationElement: Locator;

   constructor(page:Page) {
        this.page=page;
        this.contractServicesTitle = page.locator('h1, h2, [role="heading"]').first();
        this.contractServicesVideo = page.getByRole('region', { name: 'main content' }).locator('img');
        this.conventionalAerificationElement = page.getByText('Conventional Aerification');
        this.deepTineAerificationElement = page.getByText('Deep Tine Aerification');
        this.rotaryDecompactionElement = page.getByText('Rotary Decompaction', { exact: true });
        this.coreRemovalElement = page.getByText('Core Removal', { exact: true });
        this.applicationServicesElement = page.getByText('Application Services', { exact: true });
        this.topdressingElement = page.getByText('Topdressing', { exact: true });
        this.seedingElement = page.getByText('Seeding', { exact: true });
        this.constructionAndRenovationElement = page.getByText('Construction & Renovation', { exact: true });
}
}
