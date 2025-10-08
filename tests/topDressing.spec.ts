import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { TurfProducts } from "../pages/turfProductsPage";
import { TopDressingBunkerSand } from "../pages/topDressingBunkerSandPage";
import { TopDressingPage } from "../pages/topDressingPage";


//Verify that after clicking "Learn More" button for Top Dressing , page contains Top Dressing title
test('Top Dressing page contains text Top Dressing in header', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const topDressingBunkerSand = new TopDressingBunkerSand(page);
    const topDressing = new TopDressingPage(page);

    //go to home page
    await page.goto('/');

    //if Turf Products sub menu is visible 
    if (await homePage.AmendmentsConditionersSubMenu.isVisible()){
        // click Amendments and Conditioners in sub menu
        await homePage.navigateToTopDressingBunkerSandViaHover();
    }
    //else
    else{
        //click Turf Products
        await homePage.navigateToTurfProducts();
        //Click Amendments and Conditioners Learn More
        await turfProducts.navigatetoTopDressing();
        }

    //click Learn More button under Sand
    await topDressingBunkerSand.clickTopDressingLearnMore();

    //verify header contains Top Dressing
    await expect (topDressing.topDressingHeader).toContainText('Top Dressing');

});