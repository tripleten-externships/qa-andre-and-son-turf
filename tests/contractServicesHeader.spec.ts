import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer';

test('when hovering over contract services in the header, it shows menu, and when clicked it takes you to the designated page', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

// visit the website 
    await page.goto('/');


//hover over 'Turf Products' in the header.
    await page.getByRole('link', { name: 'TURF PRODUCTS' }).nth(0).hover();
 
// click on 'Turf King Fertilizer'
    await page.getByText('Turf King Fertilizer').nth(1).click();

//hover over 'Contract Services' in the header
    await page.getByRole("link", {name: 'CONTRACT SERVICES'}).nth(0).hover();

//verify that when clicked, it takes you to the designated page

    await turfKingFertilizerPage.contractServicesHeader.click();
})
