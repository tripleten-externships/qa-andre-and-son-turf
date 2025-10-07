import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { TurfProducts } from "../pages/turfProductsPage";
import { TopDressingBunkerSand } from "../pages/topDressingBunkerSandPage";
import { TopDressingPage } from "../pages/topDressingPage";


//Verify that after clicking "Learn More" button for Top Dressing , page contains Top Dressing title
test('Top Dressing page contains text Top Dressing in header', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProductsPage = new TurfProducts(page);
    const topDressingBunkerSandPage = new TopDressingBunkerSand(page);
    const topDressingPage = new TopDressingPage(page);

    //go to home page
    await page.goto('/');

    //click on Turf Products
    //await homePage.navigateToTopDressingBunkerSand();

    //click on Turf Products
    await homePage.navigateToTurfProducts();

    //Click on Top Dressing Learn More
    await turfProductsPage.navigatetoTopDressing();

    //click Learn More button under Sand
    await topDressingBunkerSandPage.clickTopDressingLearnMore();

    //verify header contains Top Dressing
    await expect (topDressingPage.topDressingHeader).toContainText('Top Dressing');

})