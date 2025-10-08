import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { TurfProducts } from '../pages/turfProductsPage';
import { TopDressingBunkerSand } from '../pages/topDressingBunkerSandPage';

//test page title includes "Top Dressing and Bunker Sand"
test('Top Dressing and Bunker Sand page title test', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const topDressing = new TopDressingBunkerSand(page);

    //go to homepage
    await page.goto('/');

    //if Turf Products sub menu is visible, click Amendments and Conditioners in sub menu 
    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        await homePage.navigateToTopDressingBunkerSandViaHover();
    }
    //else navigate to Turf Products page, click Amendments and Conditioners Learn More
    else{
        await homePage.navigateToTurfProducts();
        await turfProducts.navigatetoTopDressing();
        }

    //verify "Top Dressing and Bunker Sand" text in header
    await expect(topDressing.pageHeaderText).toContainText('Top Dressing & Bunker Sand');

});

//Verify that "Learn More" button is clickable for Top Dressing

