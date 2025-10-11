import {test, expect} from '@playwright/test';
import { TurfProductPage } from '../pages/turf product ';
import { TurfKingProdiaminePage } from '../pages/turf king Prodiamine';

//before all the tests in this file, we need to navigate to the Turf Product page
//and then click on the Turf King + Prodiamine "learn more" link to navigate to the Turf King + Prodiamine page
test.beforeAll(async ({page})=>{
    const turfProductPage = new TurfProductPage(page);
    await turfProductPage.page.goto('/turf-product');
    await turfProductPage.page.waitForLoadState('networkidle');
    await turfProductPage.learnMoreButton.click();
}); 

test.describe('Turf King + Prodiamine Page Tests', ()=>{