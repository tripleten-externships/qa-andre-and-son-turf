import { Locator, Page} from "@playwright/test";

export class homePage{

readonly page: Page;
readonly turfPoductsMenu: Locator;
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


constructor(page: Page){
    this.page=page;
    this.turfPoductsMenu=page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0);
    this.turfKingFertilizer=page.getByRole('link', {name:'Turf King Fertilizer'}).nth(1);
    this.turfKingFertilizerProductsTitle=page.getByText('Turf King Fertilizer Products');
    this.heroSubtitleText=page.getByText('We are the Turf King for a reason.');
    this.turfKingFertImg=page.getByTestId('img_comp-klzdqziy1');
    this.turfKingFertImgBag=page.getByTestId('img_comp-klzdqzj31');
    this.contractServicesMenu=page.getByText('CONTRACT SERVICES');
    this.equipmentMenu=page.getByTestId('comp-igauz7ee2label');
    this.aboutMenu=page.getByTestId('comp-igauz7ee3label');
    this.moreMenu=page.getByTestId('comp-igauz7ee__more__label');
    this.contactHeader=page.getByTestId('comp-igauz7eemoreContainer');
    this.itemHeader=page.getByTestId('comp-igauz7eemoreContainer');
    this.trueValueLogoHeader=page.getByTestId('img_comp-klwsebuo');
    this.turfKingStandardSGN220Title=page.getByText('Turf King Standard SGN 220', {exact: true});
    this.turfKingStandardSGN220Text=page.getByText('Turf King SGN 220 is the ideal fertilizer for golf course rough,');
    this.turfKingStandardLearnMoreLink=page.getByRole("link", {name: 'Learn More'}).nth(0);
    this.turfKingEnhancedSGN220Title=page.getByText('Turf King Enhanced SGN 220', {exact: true});
    this.turfKingEnhancedSGN220Text=page.getByText('These blends are enhanced with nutrient-rich');
    this.turfKingEnhancedLearnMoreLink=page.getByRole("link", {name: 'Learn More'}).nth(1);
    this.turfKingMini150Title=page.getByText('Turf King Mini SGN 150', {exact: true});
    this.turfKingMiniText=page.getByText('Fairways, tees, and turf areas');
    this.turfkingMiniLearnMoreLink=page.getByRole("link", {name: 'Learn More'}).nth(2); 
    this.turfKingMicro90Title=page.getByText('Turf King Micro SGN 90' {exact: true});
    this.turfKingMicro90Text=page.getByText('Turf King SGN 90 is the smallest granular fertilizer');
    this.turfKingMicro90LearnMoreLink=page.getByRole("link", {name: 'Learn More'}).nth(3);
    this.natureSafeTitle=page.getByTestId('comp-klzdqzkh__item-klpolwaj');
    this.natureSafeText=page.getByText('natural organic and fortified organic');
    this.natureSafeLearnMoreLink=page.getByRole('link', {name: 'Learn More'}).nth(4);
    this.theAndersonsTitle=page.getByTestId('comp-klzdqzkh__item-klponhaa');
    this.theAndersonsText=page.getByText('We offer a full range of fertilizers,');
    this.theAndersonsLearnMoreLink=page.getByRole("link", {name: 'Learn More'}).last();




}



}

await page.goto('https://www.andreandson.com/');
