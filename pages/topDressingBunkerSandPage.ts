import { Locator, Page } from "@playwright/test";

export class TopDressingBunkerSand {

    //variables
    readonly page: Page;
    readonly pageHeaderText: Locator;
    readonly sandLearnMore: Locator;
    readonly topDressingLearnMore: Locator;

    constructor(page: Page){
        this.page = page
        this.pageHeaderText = page.getByText('Top Dressing & Bunker Sand').nth(1);
        this.sandLearnMore = page.locator('#comp-klzsuqzd__item1').getByTestId('linkElement');
        this.topDressingLearnMore = page.locator('#comp-klzsuqzd__item-kes5qvaj').getByTestId('linkElement');

    }

    //Click Learn More button for Sand
    async clickSandLearnMore(){
        await this.sandLearnMore.click();
    }

    //Click Learn More button for Top Dressing
    async clickTopDressingLearnMore(){
        await this.topDressingLearnMore.click();
    }


    }



