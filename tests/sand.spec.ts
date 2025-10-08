import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { TurfProducts } from "../pages/turfProductsPage";
import { TopDressingBunkerSand } from "../pages/topDressingBunkerSandPage";
import { SandPage } from "../pages/sandPage";

//Verify that "Learn More" button is clickable for Sand, page contains Sand in title
test('Learn More button is clickable for Sand', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProducts = new TurfProducts(page);
    const topDressing = new TopDressingBunkerSand(page);
    const sandPage = new SandPage(page);

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
    await topDressing.clickSandLearnMore();

    //verify header contains Sand
    await expect (sandPage.sandHeader).toContainText('Sand');

});
