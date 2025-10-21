import { Locator, Page} from "@playwright/test";

export class IceMeltsPage{

    //variables
    readonly page: Page;
    readonly textOnHeroSection: Locator;
    readonly turfProductsMenu: Locator;
    readonly iceMeltsMenu: Locator;
    readonly regularMsdsLink: Locator;
    readonly plusMsdsLink: Locator;
    readonly hiVisMsdsLink: Locator;
    readonly letsGetGrowingTextBox: Locator;
    readonly footerSectionTurfProductsMenu: Locator;
    readonly footerSectionIceMeltsMenu: Locator;
    readonly iceMeltsTitle: Locator;
    readonly iceMeltsRegularSection: Locator;
    readonly regularMSDSButton: Locator;
    readonly iceMeltsPlusSection: Locator;
    readonly iceMeltsPlusParagraph: Locator;
    readonly plusMSDSButton: Locator;
    readonly hiVisSection: Locator;
    readonly hiVisMSDSButton: Locator;
    readonly iceMeltVerifyText: Locator;
    readonly letsGetGrowing: Locator;
    readonly testLatinLetters: any; 
    readonly messageTextArea: Locator;
    readonly testNumber: any;
    readonly testSymbols: any;
    readonly emailinputBox: Locator;
    readonly testEmailWithSymbols: any;
    readonly iceMeltsVerifyingText: Locator;

    //constructor
    constructor(page:Page){
        this.page=page;
        this.textOnHeroSection = page.locator('h1');
        this.turfProductsMenu = page.getByRole('link', { name: 'Turf Products' }).nth(0);
        this.iceMeltsMenu = page.getByRole('link', { name: 'ICE MELTS' })
        this.regularMsdsLink = page.locator('a[href="https://www.andreandson.com/_files/ugd/3bd49b_3f413d0995044470b8cbbaf8a9267e7a.pdf"]', { hasText: 'MSDS' });
        this.plusMsdsLink = page.locator('a[href="https://www.andreandson.com/_files/ugd/3bd49b_3a9ad6b2c254474c976e80ab6b3b5afe.pdf"]', { hasText: 'MSDS' });
        this.hiVisMsdsLink = page.locator('a[href="https://www.andreandson.com/_files/ugd/3bd49b_2888424fe70246cb9dd41427cad1f8a6.pdf"]', { hasText: 'MSDS' });
        this.letsGetGrowingTextBox = page.locator('div').filter({ hasText: 'Let\'s Get Growing' }).nth(0);
        this.footerSectionTurfProductsMenu = page.locator("(//div[@class='i4bvwx'])[1]");
        this.footerSectionIceMeltsMenu = page.getByTestId('linkElement-0-7').filter({ hasText: 'ICE MELTS' });
        this.iceMeltsTitle = page.getByText('Ice Melts', { exact: true });
        this.iceMeltsRegularSection = page.getByText('Ice Melts', { exact: true });
        this.regularMSDSButton = page.getByRole('listitem').filter({ hasText: 'Ice Melt Regular Ice Melt' }).getByTestId('linkElement');
        this.iceMeltsPlusSection = page.getByText('Ice Melt Plus', { exact: true });
        this.iceMeltsPlusParagraph = page.getByText('Ice Melt Plus is our Ice Melt');
        this.plusMSDSButton =  page.locator('#comp-kym0q5gu__item-kes5qvaj').getByTestId('linkElement');
        this.hiVisSection = page.getByText('Ice Melt Hi Vis', { exact: true });
        this.hiVisMSDSButton = page.getByRole('listitem').filter({ hasText: 'Ice Melt Hi VisIce Melt Hi' }).getByTestId('linkElement');
        this.iceMeltVerifyText = page.locator('h1, h2, [role="heading"]').first();
        this.letsGetGrowing = page.getByRole('heading', { name: 'Let\'s Get Growing' });
        this.testLatinLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        this.messageTextArea = page.getByPlaceholder('Enter your text here');
        this.testNumber = 1234567890;
        this.testSymbols = "!@#$%^&*()_+-=[]{}|;':\",.<>/?`~";
        this.emailinputBox = page.getByRole('textbox', { name: 'Email Address*' });
        this.testEmailWithSymbols = '@._';
        this.iceMeltsVerifyingText = page.getByRole('heading', { name: /ICE MELTS/i });
    }
   /* //methods
    async navigateToIceMelts(): Promise<void> {
    await this.page.goto('/', { waitUntil: 'load' });
    await this.turfProductsMenu.hover();
    await this.page.waitForTimeout(7000);
    const isMenuVisible = await this.iceMeltsMenu.isVisible({ timeout: 20000 }).catch(() => false);
    
    if (isMenuVisible) {
      await this.iceMeltsMenu.click({ timeout: 20000 });
    } else {
      await this.page.goto('https://www.andreandson.com/ice-melts');
    }
  }*/
}
