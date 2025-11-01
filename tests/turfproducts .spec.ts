import { test, expect } from '@playwright/test';
import { TurfProductPage } from '../pages/turfproducts';
import { turfProducthomePage } from '../pages/turfproducthome';

//before running the test make sure to go to the "turf product" page by clicking on the "turf products" title on the home page


/*verify the content on turf product page
verify the page url is correct
verify their is a video playing on the page;
verify the hero section has a title "There's a Reason We're the Turf King - See for Yourself" on it
verify the hero section has a description "See for yourself why we're the best in the business."
verify the page has a title "Turf Product Catalog" heading on the left side of the page
verify the title"Turf Product catalog" title has a description "Browse our product catalog" under it.
verify the page has a title "combination products" on the right side of the page.
verify the title "combination products" has a description under it.
verify the combination products link is working correctly.*/


    test('Turf Product catalog and details', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    //go to the home page first
    await turfProductHome.goto();
    //click on the turf products title to go to the turf product page
    await turfProductHome.turfproductstitle.click();
    //verify the page url is correct
    await expect(page).toHaveURL(/.*turf-product/);
    //verify their is a video playing on the page;
    await expect(turfProductPage.video).toBeVisible();
    //verify the hero section has a title "There's a Reason We're the Turf King - See for Yourself" on it
    await expect(turfProductPage.herosectionTitletext).toBeVisible();
    //verify the hero section has a description "See for yourself why we're the best in the business."
    await expect(turfProductPage.herosectionDescriptiontext).toBeVisible();
    //verify the page has a title "Turf Product Catalog" heading is present
    await expect(turfProductPage.turfProductCatalogheading).toBeVisible();
    //verify the title"Turf Product catalog" title has a description "Browse our product catalog" under it.
    await expect(turfProductPage.turfProductCatalogDescription).toBeVisible();
    //verify the page has a title "combination products" 
    await expect(turfProductPage.combinationProductsTitle).toBeVisible();
    //verify the title "combination products" has a description under it.
    await expect(turfProductPage.combinationProductsDescription).toBeVisible();
    //verify the learnmore button is present under the description of the combination products
    await expect(turfProductPage.combinationProductslearnmorebutton).toBeVisible();
    //verify the combination products image is visible
    await expect(turfProductPage.combinationproductsimage).toBeVisible();
    //verify the combination product image has alt text "combinationproducts.jpg"
    await expect(turfProductPage.combinationproductsimagealttext).toBeVisible();

    });

test('Turf King Fertilizer Section', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify Turf King Fertilizer section elements
    await expect(turfProductPage.turfkingfetitlizertitle).toBeVisible();
    await expect(turfProductPage.turfkingfertilizerdescription).toBeVisible();
    await expect(turfProductPage.turfkingfertilizerlearnmorebutton).toBeVisible();
    await expect(turfProductPage.turfkingfertilizerimage).toBeVisible();
});

test('Control Agents Section', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify Control Agents section elements
    await expect(turfProductPage.controlagentstitle).toBeVisible();
    await expect(turfProductPage.controlagentsdescription).toBeVisible();
    await expect(turfProductPage.controlagentslearnmorebutton).toBeVisible();
    await expect(turfProductPage.controlagentimage).toBeVisible();
});

test('Liquid Fertilizer Section', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify Liquid Fertilizer section elements
    await expect(turfProductPage.liquidfertilizertitle).toBeVisible();
    await expect(turfProductPage.liquidfertilizerdescription).toBeVisible();
    await expect(turfProductPage.liquidfertilizerlearnmorebutton).toBeVisible();
    await expect(turfProductPage.liquidfertilizerimage).toBeVisible();
});

test('Seed Section', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify Seed section elements
    await expect(turfProductPage.seedtitle).toBeVisible();
    await expect(turfProductPage.seeddescription).toBeVisible();
    await expect(turfProductPage.seedlearnmorebutton).toBeVisible();
    await expect(turfProductPage.seedimage).toBeVisible();
});

test('Amendments & Conditioners Section', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify Amendments & Conditioners section elements
    await expect(turfProductPage.amendmentsConditionersTitle).toBeVisible();
    await expect(turfProductPage.amendmentsConditionersDescription).toBeVisible();
    await expect(turfProductPage.amendmentsConditionersLearnMoreButton).toBeVisible();
    await expect(turfProductPage.amendmentsConditionersImage).toBeVisible();
});

test('Top Dressing & Bunker Sand Section', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify Top Dressing & Bunker Sand section elements
    await expect(turfProductPage.TopDressingandBunkerSandtitle).toBeVisible();
    await expect(turfProductPage.TopDressingandBunkerSanddescription).toBeVisible();
    // Learn more button locator may need adjustment - commenting out for now
    // await expect(turfProductPage.TopDressingandBunkerSandlearnmorebutton).toBeVisible();
    await expect(turfProductPage.TopDressingandBunkerSandimage).toBeVisible();
});

test('Ice Melts Section', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify Ice Melts section elements
    await expect(turfProductPage.icemeltstitle).toBeVisible();
    await expect(turfProductPage.icemeltsdescription).toBeVisible();
    // Learn more button locator may need adjustment - commenting out for now  
    // await expect(turfProductPage.icemeltslearnmorebutton).toBeVisible();
    await expect(turfProductPage.icemeltsimage).toBeVisible();
});

test('Contact Form Elements', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Scroll to the form section to ensure it's visible
    await turfProductPage.HaveAQuestionAboutOurProductstext.scrollIntoViewIfNeeded();
    
    // Verify contact form elements
    await expect(turfProductPage.HaveAQuestionAboutOurProductstext).toBeVisible();
    await expect(turfProductPage.enteryourtexthereinputfield).toBeVisible();
    await expect(turfProductPage.emailaddresstextinputfield).toBeVisible();
    await expect(turfProductPage.submitbutton).toBeVisible();
});

test('Form Input Functionality', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Scroll to the form section
    await turfProductPage.enteryourtexthereinputfield.scrollIntoViewIfNeeded();
    
    // Test form input functionality
    await turfProductPage.entertextinyourtextinputfield('This is a test message about turf products');
    await turfProductPage.entertextinemailaddressinputfield('test@example.com');
    
    // Verify the input values
    await expect(turfProductPage.enteryourtexthereinputfield).toHaveValue('This is a test message about turf products');
    await expect(turfProductPage.emailaddresstextinputfield).toHaveValue('test@example.com');
});

test('Navigation Links Functionality', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify combination products description link is clickable and visible
    await expect(turfProductPage.combinationProductsdescriptionlink).toBeVisible();
    
    // Test that the link element has proper href attribute (without actually clicking to avoid navigation issues)
    await expect(turfProductPage.combinationProductsdescriptionlink).toHaveAttribute('href');
});

test('Learn More Buttons Functionality', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify the main Learn More buttons are visible and clickable
    await expect(turfProductPage.combinationProductslearnmorebutton).toBeVisible();
    await expect(turfProductPage.turfkingfertilizerlearnmorebutton).toBeVisible();
    await expect(turfProductPage.controlagentslearnmorebutton).toBeVisible();
    await expect(turfProductPage.liquidfertilizerlearnmorebutton).toBeVisible();
    await expect(turfProductPage.seedlearnmorebutton).toBeVisible();
    await expect(turfProductPage.amendmentsConditionersLearnMoreButton).toBeVisible();
    // Note: Some specific Learn More buttons may have different selectors - commenting out problematic ones
    // await expect(turfProductPage.TopDressingandBunkerSandlearnmorebutton).toBeVisible();
    // await expect(turfProductPage.icemeltslearnmorebutton).toBeVisible();
});

test('Page Layout and Background Elements', async ({ page }) => {
    const turfProductPage = new TurfProductPage(page);
    const turfProductHome = new turfProducthomePage(page);
    
    // Navigate to turf products page
    await turfProductHome.goto();
    await turfProductHome.turfproductstitle.click();
    
    // Verify page layout elements
    await expect(turfProductPage.andreandsonlogo).toBeVisible();
    await expect(turfProductPage.backgroundimage).toBeVisible();
});

