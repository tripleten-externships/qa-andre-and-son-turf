import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer.page';

test('Andre&Son logo in header is visible and takes you to designated page', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

    
// visit the website 
    await page.goto('/');

//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

//andre&son logo in header is visible and takes you back to the home page

    await turfKingFertilizerPage.andreAndSonLogoHeader.isVisible();
    await turfKingFertilizerPage.andreAndSonLogoHeader.click();

})