import { Locator, Page, expect} from "@playwright/test";
import { TurfKingFertilizerPage } from "./turfKingFertilizer";
export class NatureSafePage{
natureSafeLearnMoreLink(natureSafeLearnMoreLink: any) {
    throw new Error('Method not implemented.');
}

readonly page: Page;


readonly natureSafe21CourseLabelLink: Locator;
readonly natureSafe21CourseSpecSheetLink: Locator;
readonly natureSafe18FineLabelLink: Locator;
readonly natureSafe18FineSpecSheetLink: Locator;
readonly natureSafe16CourseLabelLink: Locator;
readonly natureSafe16CourseSpecSheetLink: Locator;
readonly natureSafe13SuperLabelLink: Locator;
readonly natureSafe13SuperSpecSheetLink: Locator;
readonly natureSafe12CourseLabelLink: Locator;
readonly natureSafe12CourseSpecSheetLink: Locator;
readonly natureSafe9CourseLabelLink: Locator;
readonly natureSafe9CourseSpecSheetLink: Locator;
readonly natureSafe855PelletedLabelLink: Locator;
readonly natureSafe855PelletedSpecSheetLink: Locator;
readonly natureSafe7CourseLabelLink: Locator;
readonly natureSafe7CourseSpecSheetLink: Locator;
readonly natureSafe8SuperLabelLink: Locator;
readonly natureSafe8SuperSpecSheetLink: Locator;
readonly natureSafe566FineLabelLink: Locator;
readonly natureSafe566FineSpecSheetLink: Locator;
readonly natureSafe10KelpLabelLink: Locator;
readonly natureSafe10KelpSpecSheetLink: Locator;
readonly natureSafe1028LabelLink: Locator;
readonly natureSafe1028SpecSheetLink: Locator;
readonly natureSafe1226LabelLink: Locator;
readonly natureSafe1226SpecSheetLink: Locator;
readonly natureSafe27UflexxLabelLink: Locator;
readonly natureSafe27UflexxSpecSheetLink: Locator;
readonly natureSafe8AQMLabelLink: Locator;
readonly natureSafe8AQMSpecSheetLink: Locator;
readonly natureSafe10PBSLabelLink: Locator;
readonly natureSafe10PBSSpecSheetLink: Locator;

constructor(page: Page){
    this.page=page;
      this.natureSafe21CourseLabelLink=page.getByRole("link", {name: 'Label'}).nth(0);
    this.natureSafe21CourseSpecSheetLink=page.getByRole("link", {name: 'Spec Sheet'}).nth(0);
    this.natureSafe18FineLabelLink=page.getByRole("link",{name: 'Label'}).nth(1);
    this.natureSafe18FineSpecSheetLink=page.getByRole('link',{name: 'Spec Sheet'}).nth(1);
    this.natureSafe16CourseLabelLink=page.getByRole("link",{name: 'Label'}).nth(2);
    this.natureSafe16CourseSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(2);
    this.natureSafe13SuperLabelLink=page.getByRole("link",{name: 'Label'}).nth(3);
    this.natureSafe13SuperSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(3);
    this.natureSafe12CourseLabelLink=page.getByRole("link",{name: 'Label'}).nth(4);
    this.natureSafe12CourseSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(4);
    this.natureSafe9CourseLabelLink=page.getByRole("link",{name: 'Label'}).nth(5);
    this.natureSafe9CourseSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(5);
    this.natureSafe855PelletedLabelLink=page.getByRole("link",{name: 'Label'}).nth(6);
    this.natureSafe855PelletedSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(6);
    this.natureSafe7CourseLabelLink=page.getByRole("link",{name: 'Label'}).nth(7);
    this.natureSafe7CourseSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(7);
    this.natureSafe8SuperLabelLink=page.getByRole("link",{name: 'Label'}).nth(8);
    this.natureSafe8SuperSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(8);
    this.natureSafe566FineLabelLink=page.getByRole("link",{name: 'Label'}).nth(9);
    this.natureSafe566FineSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(9);
    this.natureSafe10KelpLabelLink=page.getByRole("link",{name: 'Label'}).nth(10);
    this.natureSafe10KelpSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(10);
    this.natureSafe1028LabelLink=page.getByRole("link",{name: 'Label'}).nth(11);
    this.natureSafe1028SpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(11);
    this.natureSafe1226LabelLink=page.getByRole("link",{name: 'Label'}).nth(12);
    this.natureSafe1226SpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(12);
    this.natureSafe27UflexxLabelLink=page.getByRole("link",{name: 'Label'}).nth(13);
    this.natureSafe27UflexxSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(13);
    this.natureSafe8AQMLabelLink=page.getByRole("link",{name: 'Label'}).nth(14);
    this.natureSafe8AQMSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).nth(14);
    this.natureSafe10PBSLabelLink=page.getByRole("link",{name: 'Label'}).last();
    this.natureSafe10PBSSpecSheetLink=page.getByRole("link",{name: 'Spec Sheet'}).last();
}} 

export const navigateToTurfKingFertilizerPage = async (page: Page): Promise<void> => {

 // Visit the website
  await page.goto('/');

  // Hover over 'Turf Products' in the header
  await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();

  // Check if the 'Turf King Fertilizer' link is visible
  if (await page.getByText('Turf King Fertilizer').nth(1).isVisible()) {

    // Click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

  } else {
    // Fallback: go directly to the page if dropdown menu doesn't appear
    await page.goto('https://www.andreandson.com/turf-king-dry-fertilizer');
  }
};

export const clickOnLearnMoreLink = async (page: Page): Promise<void> => {
  const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

  // Learn More link should be visible
  await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

  // Click on Learn More
  await turfKingFertilizerPage.natureSafeLearnMoreLink.click();
};

 