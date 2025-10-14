import { expect, Locator, Page } from "@playwright/test";
import { turfProducthomePage } from "./turfproduct home";


export class TurfProductPage {
    async clickTurfProductsTitle() {
        await this.turfProductTitle.click();
    }
    async EnterYourTextHeretextbox(text: string) {
        await this.enteryourtexthereinputfield.fill(text);
    }
    readonly page: Page;
    readonly andreandsonlogo: Locator;
    readonly turfProductTitle: Locator;
    readonly video: Locator;
    readonly herosectionTitletext: Locator;
    readonly herosectionDescriptiontext: Locator;
    readonly turfProductCatalogheading: Locator;
    readonly turfProductCatalogDescription: Locator;
    readonly combinationProductsTitle: Locator;
    readonly combinationProductsDescription: Locator;
    readonly combinationProductsdescriptionlink: Locator;
    readonly combinationProductslearnmorebutton: Locator;
    readonly combinationproductsimage: Locator;
    readonly combinationproductsimagealttext: Locator;
    readonly turfkingfetitlizertitle: Locator;
    readonly turfkingfertilizerdescription: Locator;
    readonly turfkingfertilizerlearnmorebutton: Locator;
    readonly turfkingfertilizerimage: Locator;
    readonly turfkingfertilizerimagealttext: Locator;
    readonly controlagentstitle: Locator;
    readonly controlagentsdescription: Locator;
    readonly controlagentslearnmorebutton: Locator;
    readonly controlagentimage: Locator;
    readonly controlagentsimagealttext: Locator;
    readonly liquidfertilizertitle: Locator;
    readonly liquidfertilizerdescription: Locator;
    readonly liquidfertilizerlearnmorebutton: Locator;
    readonly liquidfertilizerimage: Locator;
    readonly liquidfertilizerimagealttext: Locator;
    readonly seedtitle: Locator;
    readonly seeddescription: Locator;
    readonly seedlearnmorebutton: Locator;
    readonly seedimage: Locator;
    readonly seedimagealttext: Locator;
    readonly Amendmentsturfproductsfooterlink: any;
    readonly amendmentsConditionersTitle: Locator;
    readonly amendmentsConditionersDescription: Locator;
    readonly amendmentsConditionersLearnMoreButton: Locator;
    readonly amendmentsConditionersImage: Locator;
    readonly amendmentsConditionersImageAltText: Locator;
    readonly TopDressingandBunkerSandtitle: Locator;
    readonly TopDressingandBunkerSanddescription: Locator;
    readonly TopDressingandBunkerSandlearnmorebutton: Locator;
    readonly TopDressingandBunkerSandimage: Locator;
    readonly TopDressingandBunkerSandimagealttext: Locator;
    readonly icemeltstitle: Locator;
    readonly icemeltsdescription: Locator;
    readonly icemeltslearnmorebutton: Locator;
    readonly icemeltsimage: Locator;
    readonly icemeltsimagealttext: Locator;
    readonly HaveAQuestionAboutOurProductstext: Locator;
    readonly enteryourtexthereinputfield: Locator;
    readonly emailaddresstextinputfield: Locator;
    readonly submitbutton: Locator;
    readonly backgroundimage: Locator;


    constructor (page: Page) {
        this.page = page;
        this.andreandsonlogo = page.getByRole('link', { name: 'logo_edited_edited.png' });
        this.turfProductTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
        this.video = page.locator('video');
        this.herosectionTitletext = page.getByText("There's a Reason We're the Turf King");
        this.herosectionDescriptiontext = page.locator('p').filter({ hasText: 'Our Turf King line of' });
        this.turfProductCatalogheading = page.getByText('TURF PRODUCT CATALOG');
        this.turfProductCatalogDescription = page.locator('p').filter({ hasText: 'Browse our product catalog of' });
        this.combinationProductsTitle = page.getByText('Combination Products', { exact: true })
        this.combinationProductsDescription = page.locator('p').filter({ hasText: 'All of our combination' });
        this.combinationProductsdescriptionlink = page.getByRole('link', { name: 'combination products' });
        this.combinationProductslearnmorebutton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
        this.combinationproductsimage = page.getByRole('img', { name: 'combination products.jpg' });
        this.combinationproductsimagealttext = page.locator('img[alt="combination products.jpg"]');
        this.turfkingfetitlizertitle = page.locator('h2').filter({ hasText: 'Turf King Fertilizer' });
        this.turfkingfertilizerdescription = page.locator('p').filter({ hasText: 'Our fertilizers are premium' });
        this.turfkingfertilizerlearnmorebutton = page.locator('#comp-kmctlbje__item-kes5qvil').getByRole('link', { name: 'Learn More' });
        this.turfkingfertilizerimage = page.getByRole('img', { name: 'dry fert.jpg' });
        this.turfkingfertilizerimagealttext = page.locator('img[alt="fertilizer.jpg"]');
        this.controlagentstitle = page.locator('h2').filter({ hasText: 'Control Agents' });
        this.controlagentsdescription = page.getByText('Taking pride in teaming up');
        this.controlagentslearnmorebutton = page.locator('#comp-kmctlbje__item-kes5qvaj').getByRole('link', { name: 'Learn More' });
        this.controlagentimage = page.getByRole('img', { name: 'control agents.jpg' });
        this.controlagentsimagealttext = page.locator('img[alt="controlagents.jpg"]');
        this.liquidfertilizertitle = page.getByText('Liquid Fertilizer', { exact: true });
        this.liquidfertilizerdescription = page.getByText('We\'ve got what you need to');
        this.liquidfertilizerlearnmorebutton = page.locator('#comp-kmctlbje__item-klsuvpkr').getByRole('link', { name: 'Learn More' });
        this.liquidfertilizerimage = page.getByRole('img', { name: 'liquid fert.jpg' });
        this.liquidfertilizerimagealttext = page.locator('img[alt="liquidfertilizer.jpg"]');
        this.seedtitle = page.getByText('Seed', { exact: true });
        this.seeddescription = page.getByText('Turf King seed is blended');
        this.seedlearnmorebutton = page.locator('#comp-kmctlbje__item-klsuvqus').getByRole('link', { name: 'Learn More' });
        this.seedimage = page.getByRole('img', { name: 'seed.jpg' }); 
        this.seedimagealttext = page.locator('img[alt="seed.jpg"]');
        this.amendmentsConditionersTitle = page.getByText('Amendments & Conditioners');
        this.amendmentsConditionersDescription = page.getByRole('paragraph').filter({ hasText: 'Golf, athletic sports,' });
        this.amendmentsConditionersLearnMoreButton = page.locator('#comp-kmctlbje__item-klsv0vv7').getByRole('link', { name: 'Learn More' });
        this.amendmentsConditionersImage = page.getByRole('img', { name: 'soil amendments.jpg' });
        this.amendmentsConditionersImageAltText = page.locator('img[alt="soilamendments.jpg"]');
        this.TopDressingandBunkerSandtitle = page.getByText('Top Dressing & Bunker Sand', { exact: true });
        this.TopDressingandBunkerSanddescription = page.getByText('Enhance your turf\'s health');
        this.TopDressingandBunkerSandlearnmorebutton = page.locator('#comp-kmctlbje__item-klsv14oh > .uUxqWY').getByRole('link', { name: 'Learn More' });
        this.TopDressingandBunkerSandimage = page.getByRole('img', { name: 'topdressing.jpg' })
        this.TopDressingandBunkerSandimagealttext = page.locator('img[alt="topdressing.jpg"]');
        this.icemeltstitle = page.getByText('Ice Melt', { exact: true });
        this.icemeltsdescription = page.getByRole('paragraph').filter({ hasText: 'Ice melt is designed to make' });
        this.icemeltslearnmorebutton = page.locator('#comp-kmctlbje__item-klsv16ry > .uUxqWY').getByRole('link', { name: 'Learn More' });
        this.icemeltsimage = page.getByRole('img', { name: 'ice melt.jpg' });
        this.icemeltsimagealttext = page.locator('img[alt="icemelts.jpg"]');
        this.HaveAQuestionAboutOurProductstext = page.getByText('Have a question about our');
        this.enteryourtexthereinputfield = page.getByPlaceholder('Enter your text here');
        this.emailaddresstextinputfield = page.getByRole('textbox', { name: 'Email Address*' });
        this.submitbutton = page.getByTestId('buttonElement');
        this.backgroundimage = page.getByRole('img', { name: 'RoughPic.jpg' });
       
    }
    async goto() {
        await this.page.goto('/turf-products');
    }
    async clickturfproductstitle() {
        await this.turfProductTitle.click();
    }
    async clickcombinationproductsdescriptionlink() {
        await this.combinationProductsdescriptionlink.click();
    }
    async entertextinyourtextinputfield(text: string) {
        await this.enteryourtexthereinputfield.fill(text);
    }
    async entertextinemailaddressinputfield(email: string) {
        await this.emailaddresstextinputfield.fill(email);
    }
    async clicksubmitbutton() {
        await this.submitbutton.click();
 }
}