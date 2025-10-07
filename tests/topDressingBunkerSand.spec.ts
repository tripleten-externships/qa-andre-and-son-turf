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

    //click on Turf Products
    await homePage.navigateToTurfProducts();

    //click on Top Dressing Learn More
    await turfProducts.navigatetoTopDressing();

    //verify "Top Dressing and Bunker Sand" text in header
    await expect(topDressing.pageHeaderText).toContainText('Top Dressing & Bunker Sand');

})

//Verify that "Learn More" button is clickable for Top Dressing

