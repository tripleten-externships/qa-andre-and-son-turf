import { Locator, Page, expect} from "@playwright/test";

export class TurfKingFertilizerPage{

readonly page: Page;

readonly turfProductsMenu: Locator;
readonly turfKingFertilizer: Locator;
readonly turfKingFertilizerProductsTitle: Locator;
readonly heroSubtitleText: Locator;
readonly turfKingFertImg: Locator;
readonly turfKingFertImgBag: Locator;
readonly contractServicesMenu: Locator;
readonly equipmentMenu: Locator;
readonly aboutMenu: Locator;
readonly moreMenu: Locator;
readonly contactHeader: Locator;
readonly itemHeader: Locator;
readonly trueValueLogoHeader: Locator;
readonly turfKingStandardSGN220Title: Locator;
readonly turfKingStandardSGN220Text: Locator;
readonly turfKingStandardLearnMoreLink: Locator;
readonly turfKingEnhancedSGN220Title: Locator;
readonly turfKingEnhancedSGN220Text: Locator;
readonly turfKingEnhancedLearnMoreLink: Locator;
readonly turfKingMini150Title: Locator;
readonly turfKingMiniText: Locator;
readonly turfkingMiniLearnMoreLink: Locator;
readonly turfKingMicro90Title: Locator;
readonly turfKingMicro90Text: Locator;
readonly turfKingMicro90LearnMoreLink: Locator;
readonly natureSafeTitle: Locator;
readonly natureSafeText: Locator;
readonly natureSafeLearnMoreLink: Locator;
readonly theAndersonsTitle: Locator;
readonly theAndersonsText: Locator;
readonly theAndersonsLearnMoreLink: Locator;

readonly contractServicesHeader: Locator;
readonly aboutHeader: Locator;
readonly moreHeaderMenu: Locator;
readonly equipmentHeader: Locator;
readonly andreAndSonLogoHeader: Locator;



constructor(page: Page){
    this.page=page;
    this.turfProductsMenu=page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0);
    this.turfKingFertilizer=page.getByRole('link', {name:'Turf King Fertilizer'}).nth(1);
    this.turfKingFertilizerProductsTitle=page.getByText('Turf King Fertilizer Products');
    this.heroSubtitleText=page.getByText('We are the Turf King for a reason.');
    this.turfKingFertImg=page.getByAltText('turf_king_fert.png');
    this.turfKingFertImgBag=page.getByAltText('New Bag Template.jpg');
    this.contractServicesMenu=page.getByText('CONTRACT SERVICES');
    this.equipmentMenu=page.getByTestId('comp-igauz7ee2label');
    this.aboutMenu=page.getByTestId('comp-igauz7ee3label');
    this.moreMenu=page.getByTestId('comp-igauz7ee__more__label');
    this.contactHeader=page.getByTestId('comp-igauz7eemoreContainer');
    this.itemHeader=page.getByTestId('comp-igauz7eemoreContainer');
    this.trueValueLogoHeader=page.getByAltText('1280px-True_Value_logo.svg.png').nth(0);
    this.turfKingStandardSGN220Title=page.getByText('Turf King Standard SGN 220', {exact: true});
    this.turfKingStandardSGN220Text=page.getByText('the ideal fertilizer for golf course rough,');
    this.turfKingStandardLearnMoreLink=page.getByRole("link", {name: 'Learn More'}).nth(0);
    this.turfKingEnhancedSGN220Title=page.getByText('Turf King Enhanced SGN 220', {exact: true});
    this.turfKingEnhancedSGN220Text=page.getByText('These blends are enhanced with nutrient-rich');
    this.turfKingEnhancedLearnMoreLink=page.getByRole("link", {name: 'Learn More'}).nth(1);
    this.turfKingMini150Title=page.getByText('Turf King Mini SGN 150', {exact: true});
    this.turfKingMiniText=page.getByText('Fairways, tees, and turf areas');
    this.turfkingMiniLearnMoreLink=page.getByRole("link", {name: 'Learn More'}).nth(2); 
    this.turfKingMicro90Title=page.getByText('Turf King Micro SGN 90', {exact: true});
    this.turfKingMicro90Text=page.getByText('Turf King SGN 90 is the smallest granular fertilizer');
    this.turfKingMicro90LearnMoreLink=page.getByRole("link", {name: 'Learn More'}).nth(3);
    this.natureSafeTitle=page.getByText('Nature Safe', {exact: true});
    this.natureSafeText=page.getByText('natural organic and fortified organic');
    this.natureSafeLearnMoreLink=page.getByRole('link', {name: 'Learn More'}).nth(4);
    this.theAndersonsTitle=page.getByText('The Andersons', {exact: true});
    this.theAndersonsText=page.getByText('We offer a full range of fertilizers,');
    this.theAndersonsLearnMoreLink=page.getByRole("link", {name: 'Learn More'}).last();

    this.contractServicesHeader=page.getByRole("link", {name: 'CONTRACT SERVICES'}).nth(0);
    this.aboutHeader=page.getByRole('button', { name: 'ABOUT', exact: true }).nth(0);
    this.moreHeaderMenu=page.getByText('More', { exact: true });
    this.equipmentHeader=page.getByRole('link', {name: 'EQUIPMENT'}).nth(0);
    this.andreAndSonLogoHeader=page.getByAltText('logo_edited_edited.png').nth(0);
    


}


async navigate(){

// visit the website 
    await this.page.goto('/');

//hover over 'Turf Products' in the header.
    await this.turfPoductsMenu.hover();

// Wait until the link is visible
    await this.turfKingFertilizer.waitFor({ state: 'visible' });
 
// click on 'Turf King Fertilizer'
    await this.turfKingFertilizer.click();
}

}
