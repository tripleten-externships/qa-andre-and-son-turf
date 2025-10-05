import { test, expect } from '@playwright/test';
import { TuftProductsPage } from '../pages/turfproducts';
import { LiquidFertilizersPage } from '../pages/liquidfertilizers';
//import { beforeEach } from 'node:test';

//beforeEach(async ({ page }) => {
    //Go to home page
    //await page.goto('/');
    //click on "Turf Products" title
    //const turfProductsPage = new TuftProductsPage(page);
    //await turfProductsPage.hoverTurfProductsTitle();
    //await turfProductsPage.clickLiquidFertilizerLink();
//}

//* Verify that the description under title "Liquid Fertilizer Products" is visible and readable by user
//* Verify that the description under title "Liquid Fertilizer Products" says "We got what you need to make your grass grow!"
//* Verify that "Turf King Fertilizer" logo in the Liquid Fertilizer page has Alt text in Devtools. 
//* Verify that "Turf King Fertilizer" bag in the Liquid Fertilizer page has Alt text in Devtools. 
test('verify Liquid Fertilizer Products text and images', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    const liquidFertilizersPage = new LiquidFertilizersPage(page);
    //go to home page
    //await page.goto('/');
    //hover over "Turf Products" title and click on "LIQUID FERTILIZER" link
    //await turfProductsPage.hoverTurfProductsTitle();  
    //await turfProductsPage.clickLiquidFertilizerLink();

    //go directly to Liquid Fertilizer page
    await page.goto('https://www.andreandson.com/liquid-fertilizer');
    // assert that the title "Liquid Fertilizer Products" is visible to user
    await expect(liquidFertilizersPage.liquidFertilizersProducts).toBeVisible();
    // assert that the description under title "Liquid Fertilizer Products" is visible and readable by user
    await expect(liquidFertilizersPage.liquidFertilizersProductsText).toBeVisible();
    // assert that "Turf King Fertilizer" logo in the Liquid Fertilizer page has Alt text in Devtools. 
    await expect(liquidFertilizersPage.liquidFertilizersProductsTKAltText).toBeVisible();
    // assert that "Turf King Fertilizer" bag in the Liquid Fertilizer page has Alt text in Devtools. 
    await expect(liquidFertilizersPage.liquidFertilizersProductsTKBagAltText).toBeVisible();
});

//* Verify that the title "Turf King Maxx Phite" and its description is visible and readable by user
//* Verify that clicking on "Learn More" button under "Turf King Maxx Phite" takes the user to "Turf King Maxx Phite" page
test('verify Turf King Maxx Phite title, text and Learn More button', async ({ page }) => {
    const turfProductsPage = new TuftProductsPage(page);
    const liquidFertilizersPage = new LiquidFertilizersPage(page); 
    //go to home page
    //await page.goto('/');
    //hover over "Turf Products" title and click on "LIQUID FERTILIZER" link
    //await turfProductsPage.hoverTurfProductsTitle();  
    //await turfProductsPage.clickLiquidFertilizerLink();

    //go directly to Liquid Fertilizer page
    await page.goto('https://www.andreandson.com/liquid-fertilizer');
    // assert that the title "Turf King Maxx Phite" is visible to user
    await expect(liquidFertilizersPage.turfKingMaxxPhiteTitle).toBeVisible();
    // assert that the description under title "Turf King Maxx Phite" is visible and readable by user
    await expect(liquidFertilizersPage.turfKingMaxxPhiteText).toBeVisible();
    //click on "Learn More" button under "Turf King Maxx Phite"
    await liquidFertilizersPage.clickTKMPLearnMoreButton();
    //assert that user is taken to "Turf King Maxx Phite" page
    await expect(page).toHaveURL('https://www.andreandson.com/turf-king-phosphate-maxx-phite');
}); 

//* Verify that the title "Plant Food" and its description is visible and readable by user
//* Verify that clicking on "Learn More" button under "Plant Food" takes the user to "Plant Food" page
test('verify Plant Food title, text and Learn More button', async ({ page }) => {   
    const turfProductsPage = new TuftProductsPage(page);
    const liquidFertilizersPage = new LiquidFertilizersPage(page); 
    //go to home page  
    //await page.goto('/');
    //hover over "Turf Products" title and click on "LIQUID FERTILIZER" link
    //await turfProductsPage.hoverTurfProductsTitle();  
    //await turfProductsPage.clickLiquidFertilizerLink();

    //go directly to Liquid Fertilizer page
    await page.goto('https://www.andreandson.com/liquid-fertilizer');
    // assert that the title "Plant Food" is visible to user
    await expect(liquidFertilizersPage.plantFoodTitle).toBeVisible();
    // assert that the description under title "Plant Food" is visible and readable by user
    await expect(liquidFertilizersPage.plantFoodText).toBeVisible();
    //click on "Learn More" button under "Plant Food"
    await liquidFertilizersPage.clickPFLearnMoreButton();
    //assert that user is taken to "Plant Food" page
    await expect(page).toHaveURL('https://www.andreandson.com/plant-food');
});     

//* Verify that the title "Aqua-Aid" and its description is visible and readable by user
//* Verify that clicking on "Learn More" button under "Aqua-Aid" takes the user to "Aqua-Aid" page
test('verify Aqua-Aid title, text and Learn More button', async ({ page }) => { 
    const turfProductsPage = new TuftProductsPage(page);
    const liquidFertilizersPage = new LiquidFertilizersPage(page); 
    //go to home page
    //await page.goto('/');
    //hover over "Turf Products" title and click on "LIQUID FERTILIZER" link
    //await turfProductsPage.hoverTurfProductsTitle();  
    //await turfProductsPage.clickLiquidFertilizerLink();
    
    //go directly to Liquid Fertilizer page
    await page.goto('https://www.andreandson.com/liquid-fertilizer');
    // assert that the title "Aqua-Aid" is visible to user
    await expect(liquidFertilizersPage.aquaAidTitle).toBeVisible(); 
    // assert that the description under title "Aqua-Aid" is visible and readable by user
    await expect(liquidFertilizersPage.aquaAidText).toBeVisible();
    //click on "Learn More" button under "Aqua-Aid"
    await liquidFertilizersPage.clickAALearnMoreButton();
    //assert that user is taken to "Aqua-Aid" page
    await expect(page).toHaveURL('https://www.andreandson.com/aqua-aid');
});