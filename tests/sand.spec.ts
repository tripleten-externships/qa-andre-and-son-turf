import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { TurfProducts } from "../pages/turfProductsPage";
import { TopDressingBunkerSand } from "../pages/topDressingBunkerSandPage";
import { SandPage } from "../pages/sandPage";

//Verify that "Learn More" button is clickable for Sand, page contains Sand in title
test('Learn More button is clickable for Sand', async ({ page }) => {

    const homePage = new HomePage(page);
    const turfProductsPage = new TurfProducts(page);
    const topDressingPage = new TopDressingBunkerSand(page);
    const sandPage = new SandPage(page);

    //go to home page
    await page.goto('/');

    //click on Turf Products
    await homePage.navigateToTurfProducts();

    //click Top Dressing and Bunker Sand Learn More
    await turfProductsPage.navigatetoTopDressing();

    //click Learn More button under Sand
    await topDressingPage.clickSandLearnMore();

    //verify header contains Sand
    await expect (sandPage.sandHeader).toContainText('Sand');

})
