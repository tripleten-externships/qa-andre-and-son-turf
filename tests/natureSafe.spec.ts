import { Page, test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';
import { NatureSafePage, navigateToTurfKingFertilizerPage, clickOnLearnMoreLink } from '../pages/natureSafe';


test.beforeEach(async ({ page }) => {
    await navigateToTurfKingFertilizerPage(page);
})

test('Nature Safe title and text are visible', async ({ page }) => { 
  const natureSafePage = new NatureSafePage(page);

  // Title is visible
  await expect(natureSafePage.natureSafeTitle).toBeVisible();

  // Text is visible
  await expect(natureSafePage.natureSafeText).toBeVisible();
});


//learn more link

test('Nature Safe Learn More link', async ({ page }) => { 
      const turfKingFertilizerPage = new TurfKingFertilizerPage(page);

  // Learn More link should be visible
  await expect(turfKingFertilizerPage.natureSafeLearnMoreLink).toBeVisible();

  // Click on Learn More
  await turfKingFertilizerPage.natureSafeLearnMoreLink.click();

});

test.beforeEach(async ({ page }) => {
    await clickOnLearnMoreLink(page);
})

//Nature Safe 21-3-7/Label
test('Nature Safe 21-3-7 Label link', async ({page}) =>{
    const natureSafePage=new NatureSafePage(page);


    await expect(natureSafePage.natureSafe21CourseLabelLink).toBeVisible();

     const expectedUrl = 'https://www.andreandson.com/_files/ugd/3bd49b_e34685a5a1b14523b7752a7a61cc3cac.pdf';

  await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe21CourseLabelLink.click(),
  ]);
    

});

//Nature Safe 21-3-7/spec sheet
test('Nature Safe 21-3-7 Spec Sheet link', async({page}) =>{
    const natureSafePage=new NatureSafePage(page);

//click on the Spec Sheet link, verify it takes you to the correct page
 
    await expect(natureSafePage.natureSafe21CourseSpecSheetLink).toBeVisible();
     const expectedUrl = 'https://www.andreandson.com/_files/ugd/3bd49b_e34685a5a1b14523b7752a7a61cc3cac.pdf';

     await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe21CourseSpecSheetLink.click(),
  ]);

});

//Nature Safe 18-0-4 Label link

test('Nature Safe 18-0-4 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);

//click on the Label link, verify it takes you to the correct page
    await expect(natureSafePage.natureSafe18FineLabelLink).toBeVisible();
     const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6073c9bce49f48ea962afe9fa0b2730a.pdf';

     await Promise.all([
     page.waitForEvent('popup'),
     natureSafePage.natureSafe18FineLabelLink.click(),
     ]);

});

//Nature Safe 18-0-4 Spec Sheet link

test('Nature Safe 18-0-4 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);

//click on the Spec Sheet link, verify it takes you to the correct page
    await expect(natureSafePage.natureSafe18FineSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6073c9bce49f48ea962afe9fa0b2730a.pdf';
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe18FineSpecSheetLink.click(),
    ]);
});

//Nature Safe 16-0-2 Label link

test('Nature Safe 16-0-2 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);

//click on the Label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe16CourseLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6ce88dfc306c4b5a80b9d018c232a410.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe16CourseLabelLink.click(),
    ]);
});

//Nature Safe 16-0-2 Spec Sheet link

test('Nature Safe 16-0-2 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page); 


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe16CourseSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_6ce88dfc306c4b5a80b9d018c232a410.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe16CourseSpecSheetLink.click(),
    ]);
});

//Nature Safe 13-0-0 Label link

test('Nature Safe 13-0-0 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);

//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe13SuperLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_768c228db14f4c329eca538bad686477.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe13SuperLabelLink.click(),
    ]);
});

//Nature Safe 13-0-0 Spec Sheet link

test('Nature Safe 13-0-0 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page); 


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe13SuperSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_768c228db14f4c329eca538bad686477.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe13SuperSpecSheetLink.click(),
    ]);
});


//Nature Safe 12-0-6 Label link

test('Nature Safe 12-0-6 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe12CourseLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_36b7d016cf8f4069a806f14f34290ac3.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe12CourseLabelLink.click(),
    ]);
});

//Nature Safe 12-0-6 Spec Sheet link

test('Nature Safe 12-0-6 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe12CourseSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_36b7d016cf8f4069a806f14f34290ac3.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe12CourseSpecSheetLink.click(),
    ]);
});

//Nature Safe 9-0-9 Label link

test('Nature Safe 9-0-9 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe9CourseLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_b0ca38b211f14ba2bf4a024cd488446d.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe9CourseLabelLink.click(),
    ]);
});

//Nature Safe 9-0-9 Spec Sheet link

test('Nature Safe 9-0-9 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe9CourseSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_b0ca38b211f14ba2bf4a024cd488446d.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe9CourseSpecSheetLink.click(),
    ]);
});

//Nature Safe 8-5-5 Label link

test('Nature Safe 8-5-5 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe855PelletedLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_5d06ac008e2742e29e60423ed05b258a.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe855PelletedLabelLink.click(),
    ]);
});

//Nature Safe 8-5-5 Spec Sheet link

test('Nature Safe 8-5-5 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe855PelletedSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_5d06ac008e2742e29e60423ed05b258a.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe855PelletedSpecSheetLink.click(),
    ]);
});

//Nature Safe 7-12-0 Label link

test('Nature Safe 7-12-0 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe7CourseLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_e7f98ece5d1d47ddb1fe743fb19dce83.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe7CourseLabelLink.click(),
    ]);
});

//Nature Safe 7-12-0 Spec Sheet link

test('Nature Safe 7-12-0 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page); 


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe7CourseSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_e7f98ece5d1d47ddb1fe743fb19dce83.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe7CourseSpecSheetLink.click(),
    ]);
});

//Nature Safe 8-3-5 Label link

test('Nature Safe 8-3-5 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page); 


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe8SuperLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_ce8f40d122964d22b0f1242176c8c3d3.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe8SuperLabelLink.click(),
    ]);
});

//Nature Safe 8-3-5 Spec Sheet link

test('Nature Safe 8-3-5 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);

//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe8SuperSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_ce8f40d122964d22b0f1242176c8c3d3.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe8SuperSpecSheetLink.click(),
    ]);
});

//Nature Safe 5-6-6 Label link

test('Nature Safe 5-6-6 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page); 


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe566FineLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_0adca84b3f9d482eb1f318bae4ceb0f3.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe566FineLabelLink.click(),
    ]);
});

//Nature Safe 5-6-6 Spec Sheet link

test('Nature Safe 5-6-6 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe566FineSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_0adca84b3f9d482eb1f318bae4ceb0f3.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe566FineSpecSheetLink.click(),
    ]);
  
});

//Nature Safe 10-0-8 Label link

test('Nature Safe 10-0-8 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe10KelpLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_4218d88b406345779a83ee4a2b2c16c8.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe10KelpLabelLink.click(),
    ]);
});

//Nature Safe 10-0-8 Spec Sheet link

test('Nature Safe 10-0-8 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe10KelpSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_4218d88b406345779a83ee4a2b2c16c8.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe10KelpSpecSheetLink.click(),
    ]);
  
});

//Nature Safe 10-2-8 Label link

test('Nature Safe 10-2-8 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe1028LabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_f61076609b7949b0a3d114af96664ac9.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe1028LabelLink.click(),
    ]);
});

//Nature Safe 10-2-8 Spec Sheet link

test('Nature Safe 10-2-8 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe1028SpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_f61076609b7949b0a3d114af96664ac9.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe1028SpecSheetLink.click(),
    ]);
  
});

//Nature Safe 12-2-6 Label link

test('Nature Safe 12-2-6 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe1226LabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_ebf1f46ad2c7499598fdba0556d34e4e.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe1226LabelLink.click(),
    ]);
});

//Nature Safe 12-2-6 Spec Sheet link

test('Nature Safe 12-2-6 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe1226SpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_ebf1f46ad2c7499598fdba0556d34e4e.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe1226SpecSheetLink.click(),
    ]);
  
});

//Nature Safe 27-0-2 Label link

test('Nature Safe 27-0-2 Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe27UflexxLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_bd736c935fba49d9bba4f805663cacb5.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe27UflexxLabelLink.click(),
    ]);
});

//Nature Safe 27-0-2 Spec Sheet link

test('Nature Safe 27-0-2 Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe27UflexxSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_bd736c935fba49d9bba4f805663cacb5.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe27UflexxSpecSheetLink.click(),
    ]);
  
});

//Nature Safe 8-3-5 AQM Label link

test('Nature Safe 8-3-5 AQM Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe8AQMLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_47b945f9114b4277a8db6cdab8e9f63e.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe8AQMLabelLink.click(),
    ]);
});

//Nature Safe 8-3-5 AQM Spec Sheet link

test('Nature Safe 8-3-5 AQM Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page); 


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe8AQMSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_a66acefe4eb44edabe8ab1a90ab1d6ba.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe8AQMSpecSheetLink.click(),
    ]);
  
});

//Nature Safe 10-2-8 PBS Label link

test('Nature Safe 10-2-8 PBS Label link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the label link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe10PBSLabelLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_7d5507ebe6dc4e898052f841de111b19.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe10PBSLabelLink.click(),
    ]);
});

//Nature Safe 10-2-8 PBS Spec Sheet link

test('Nature Safe 10-2-8 PBS Spec Sheet link', async({ page })=> {
     const natureSafePage=new NatureSafePage(page);


//click on the spec sheet link, verify it takes you to the correct page  
    await expect(natureSafePage.natureSafe10PBSSpecSheetLink).toBeVisible();
    const expectedUrl='https://www.andreandson.com/_files/ugd/3bd49b_5ee3e169fd684ccfaacc29aad9cdbeae.pdf'; 
    await Promise.all([
    page.waitForEvent('popup'),
    natureSafePage.natureSafe10PBSSpecSheetLink.click(),
    ]);
  
});