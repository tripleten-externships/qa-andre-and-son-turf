import { test, Locator, expect } from '@playwright/test';
import { TurfKingFertilizerPage } from '../pages/turfKingFertilizer.page';

test('when hovering over contract srvices in the header, it shows menu', async ({ page }) => { 
    const turfKingFertilizerPage=new TurfKingFertilizerPage(page);

// visit the website 
    await page.goto('/');

//hover over 'Contract Services' in the header
    await page.getByRole("link", {name: 'CONTRACT SERVICES'}).nth(0).hover();


})
