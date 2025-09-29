import { Locator, Page} from "@playwright/test";

export class homePage{

readonly turfPoductsMenu: Locator;


constructor(page: Page){
    this.page=page;
    this.turfPoductsMenu=page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0);

}



}

await page.goto('https://www.andreandson.com/');
