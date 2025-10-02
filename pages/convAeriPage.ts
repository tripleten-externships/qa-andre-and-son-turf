import { Locator, Page } from "@playwright/test";

export class ConvAero{

    //variables
    readonly page: Page;
    readonly contractServices: Locator;

    constructor(page: Page){
        this.page=page;
        this.contractServices=page.getByRole('link', { name: 'CONTRACT SERVICES' }).nth(0);
    }
    async hoverContractServices(){
        await this.contractServices.hover();
    }

}