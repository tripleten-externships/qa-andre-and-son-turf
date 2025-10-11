import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { TurfProducts } from '../pages/turfProductsPage';
import { TopDressingBunkerSand } from '../pages/topDressingBunkerSandPage';
import { TopDressingPage } from '../pages/topDressingPage'; 
import { SandPage } from '../pages/sandPage';

//Verify "Top Dressing and Bunker Sand" page has correct url and title
test('Top Dressing and Bunker Sand page test', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const topDressing = new TopDressingBunkerSand(page);

    await page.goto('/');

    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        await homePage.navigateToTopDressingBunkerSandViaHover();
    }
    else{
        await homePage.navigateToTurfProducts();
        await turfProducts.navigatetoTopDressing();
        }

    await expect (page).toHaveURL("https://www.andreandson.com/top-dressing-bunker-sand");

    await expect(topDressing.pageHeaderText).toContainText('Top Dressing & Bunker Sand');

});

//Verify that after clicking "Learn More" button for Top Dressing  page contains correct url and title
test('Top Dressing page contains correct url and title', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const topDressingBunkerSand = new TopDressingBunkerSand(page);
    const topDressing = new TopDressingPage(page);

    await page.goto('/');
 
    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        await homePage.navigateToTopDressingBunkerSandViaHover();
    }
    else{
        await homePage.navigateToTurfProducts();
        await turfProducts.navigatetoTopDressing();
        }

    await topDressingBunkerSand.clickTopDressingLearnMore();

    await expect(page).toHaveURL("https://www.andreandson.com/top-dressing");

    await expect (topDressing.topDressingHeader).toContainText('Top Dressing');

});

//Verify that Sand "Learn More" button button leads to correct url with correct title
test('Sand Learn More leads to correct url with correct title', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const topDressing = new TopDressingBunkerSand(page);
    const sandPage = new SandPage(page);

    await page.goto('/');

    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        await homePage.navigateToTopDressingBunkerSandViaHover();
    }
    else{
        await homePage.navigateToTurfProducts();
        await turfProducts.navigatetoTopDressing();
        }

    await topDressing.clickSandLearnMore();

    await expect (page).toHaveURL("https://www.andreandson.com/sand-1");

    await expect (sandPage.sandHeader).toContainText('Sand');

});

