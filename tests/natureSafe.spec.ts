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

    await expect(turfKingFertilizerPage.natureSafe21CourseLabelLink).toBeVisible

     const expectedUrl = 'https://www.andreandson.com/_files/ugd/3bd49b_e34685a5a1b14523b7752a7a61cc3cac.pdf';

  await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafe21CourseLabelLink.click(),
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
 
    await expect(turfKingFertilizerPage.natureSafe21CourseSpecSheetLink).toBeVisible();
     const expectedUrl = 'https://www.andreandson.com/_files/ugd/3bd49b_e34685a5a1b14523b7752a7a61cc3cac.pdf';

     await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafe21CourseSpecSheetLink.click(),
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
    await expect(turfKingFertilizerPage.natureSafe18FineLabelLink).toBeVisible();
     const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6073c9bce49f48ea962afe9fa0b2730a.pdf';
     await Promise.all([
     page.waitForEvent('popup'),
     turfKingFertilizerPage.natureSafe18FineLabelLink.click(),
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
    await expect(turfKingFertilizerPage.natureSafe18FineSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6073c9bce49f48ea962afe9fa0b2730a.pdf';
    await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafe18FineSpecSheetLink.click(),
    ]);
});

//Nature Safe 16-0-2 Label link

test('Nature Safe 16-0-2 Label link', async({ page })=> {
     const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();

//click on the Label link, verify it takes you to the correct page  
    await expect(turfKingFertilizerPage.natureSafe16CourseLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6ce88dfc306c4b5a80b9d018c232a410.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafe16CourseLabelLink.click(),
    ]);
});

//Nature Safe 16-0-2 Spec Sheet link

test('Nature Safe 16-0-2 Spec Sheet link', async({ page })=> {
     const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(turfKingFertilizerPage.natureSafe16CourseSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6ce88dfc306c4b5a80b9d018c232a410.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafe16CourseSpecSheetLink.click(),
    ]);
});

//Nature Safe 13-0-0 Label link

test('Nature Safe 13-0-0 Label link', async({ page })=> {
     const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();


//click on the label link, verify it takes you to the correct page  
    await expect(turfKingFertilizerPage.natureSafe13SuperLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_768c228db14f4c329eca538bad686477.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafe13SuperLabelLink.click(),
    ]);
});

//Nature Safe 13-0-0 Spec Sheet link

test('Nature Safe 13-0-0 Spec Sheet link', async({ page })=> {
     const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(turfKingFertilizerPage.natureSafe13SuperSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_768c228db14f4c329eca538bad686477.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafe13SuperSpecSheetLink.click(),
    ]);
});


//Nature Safe 12-0-6 Label link

test('Nature Safe 12-0-6 Label link', async({ page })=> {
     const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();


//click on the label link, verify it takes you to the correct page  
    await expect(turfKingFertilizerPage.natureSafe12CourseLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_36b7d016cf8f4069a806f14f34290ac3.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafe12CourseLabelLink.click(),
    ]);
});

//Nature Safe 12-0-6 Spec Sheet link

test('Nature Safe 12-0-6 Spec Sheet link', async({ page })=> {
     const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

//learn more is visible
    await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

//click on learn more, verify it takes you to the proper page
    await page.getByRole("link", {name: 'Learn More'}).nth(4).click();


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(turfKingFertilizerPage.natureSafe12CourseSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_36b7d016cf8f4069a806f14f34290ac3.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    turfKingFertilizerPage.natureSafe12CourseSpecSheetLink.click(),
    ]);
});
