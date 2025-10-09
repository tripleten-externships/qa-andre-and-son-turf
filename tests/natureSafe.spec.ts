import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';


test.beforeEach(async ({ page }) => {

// visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();

// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();
})

test('Nature Safe title and text are visible', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);


//title is visible
    await expect(turfKingFertilizerPage.natureSafeTitle).toBeVisible();

//text is visible
    await expect(turfKingFertilizerPage.natureSafeText).toBeVisible();

})

//learn more link

test('Nature Safe learn more link', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);


//learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();

})

//Nature Safe 21-3-7/Label
test('Nature Safe 21-3-7 Label link', async ({page}) =>{
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

    //learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();

//click on the Label link, verify it takes you to the correct page

    await expect(turfKingFertilizerPage.natureSafeCourseLabelLink).toBeVisible

     const expectedUrl = 'https://www.andreandson.com/_files/ugd/3bd49b_e34685a5a1b14523b7752a7a61cc3cac.pdf';

  await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafeCourseLabelLink.click(),
  ]);
    

});

//Nature Safe 21-3-7/spec sheet
test('Nature Safe 21-3-7 Spec Sheet link', async({page}) =>{
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

    //learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();

//click on the Spec Sheet link, verify it takes you to the correct page
 
    await expect(turfKingFertilizerPage.natureSafeCourseSpecSheetLink).toBeVisible();
     const expectedUrl = 'https://www.andreandson.com/_files/ugd/3bd49b_e34685a5a1b14523b7752a7a61cc3cac.pdf';

     await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafeCourseSpecSheetLink.click(),
  ]);

});

//Nature Safe 18-0-4 Label link

test('Nature Safe 18-0-4 Label link', async({ page })=> {
     const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();

//click on the Label link, verify it takes you to the correct page
    await expect(turfKingFertilizerPage.natureSafeFineLabelLink).toBeVisible();
     const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6073c9bce49f48ea962afe9fa0b2730a.pdf';
     await Promise.all([
     page.waitForEvent('popup'),
     turfKingFertilizerPage.natureSafeFineLabelLink.click(),
     ]);

});

//Nature Safe 18-0-4 Spec Sheet link

test('Nature Safe 18-0-4 Spec Sheet link', async({ page })=> {
     const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();

//click on the Spec Sheet link, verify it takes you to the correct page
    await expect(turfKingFertilizerPage.natureSafeFineSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6073c9bce49f48ea962afe9fa0b2730a.pdf';
    await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafeFineSpecSheetLink.click(),
    ]);
});
