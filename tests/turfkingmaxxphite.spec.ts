import { test, expect } from '@playwright/test';
import { TuftProductsPage } from '../pages/turfproducts';
import { LiquidFertilizersPage } from '../pages/liquidfertilizers';
import { TurfKingMaxxPhitePage } from '../pages/turfkingmaxxphite';
//import { beforeEach } from 'node:test';

//beforeEach(async ({ page }) => {
    //Go to home page
    //await page.goto('/');
    //hover on "Turf Products" title
    //const turfProductsPage = new TuftProductsPage(page);
    //await turfProductsPage.hoverTurfProductsTitle();
    //click on "LIQUID FERTILIZER" link
    //const liquidFertilizersPage = new LiquidFertilizersPage(page);
    //await turfProductsPage.clickLiquidFertilizerLink();
    //click on "Turf King Maxx Phite" Learn More button
    //const turfKingMaxxPhitePage = new TurfKingMaxxPhitePage(page);
    //await liquidFertilizersPage.clickTKMPLearnMoreButton();
//}

//* Verify that the title "Turf King Maxx Phite" and its description is visible and readable by user
//* 
test('verify "Turf King Maxx Phite" text and images', async ({ page }) => {
  
});