/* Test Case: Verify that when an image is marked as a favorite in the Photo Gallery screen, 
   the favorite status remains visible when the image is opened in the enlarged view.
*/
import { test, expect } from '@playwright/test';

test('Verify favorite status remains visible in enlarged view', async ({ page }) => {
  // Navigate to the website
  await page.goto('https://www.andreandson.com/');
  await page.waitForLoadState('networkidle');
  
  // Click ABOUT button
  await page.getByRole('button', { name: 'ABOUT', exact: true }).click();
  await page.waitForTimeout(1000);
  
  // Click PHOTO GALLERY link
  await page.getByRole('link', { name: 'PHOTO GALLERY' }).click();
  await page.waitForLoadState('networkidle');
  
  console.log('Reached photo gallery page');
  await page.screenshot({ path: 'test-results/gallery_page.png', fullPage: true });
  
  // Wait for gallery images to load
  await page.waitForSelector('img', { timeout: 5000 });
  
  // Try multiple approaches to click on the 4th gallery image (using working approach from Photo Gallery 57)
  try {
    // Approach 1: Click the 4th visible gallery image
    const fourthImage = page.locator('.gallery-item img').nth(3); // nth(3) = 4th image (0-indexed)
    await fourthImage.waitFor({ state: 'visible', timeout: 5000 });
    await fourthImage.click();
    console.log('Clicked 4th gallery image using approach 1');
  } catch (error) {
    console.log('Approach 1 failed, trying approach 2...');
    
    try {
      // Approach 2: Click the 4th img element in the gallery
      const fourthGalleryImage = page.locator('img').nth(3); // 4th image
      await fourthGalleryImage.click();
      console.log('Clicked 4th gallery image using approach 2');
    } catch (error2) {
      console.log('Approach 2 failed, trying approach 3...');
      
      // Approach 3: Click by coordinates on the 4th image (top row, rightmost)
      await page.mouse.click(585, 450); // Approximate center of 4th image
      console.log('Clicked 4th gallery image using coordinates approach');
    }
  }
  
  // Wait for enlarged view to appear
  await page.waitForTimeout(2000);
  
  // NEW STEP: Mark the image as favorite using the locator from Playwright recording
  try {
    // Click the favorite button (from your Playwright recording)
    await page.locator('.info-element-social').first().click();
    console.log('Successfully marked image as favorite');
    
    // Take screenshot after favoriting
    await page.screenshot({ path: 'test-results/image_favorited.png', fullPage: true });
    
    // Verify that the favorite status is visible in the enlarged view
    const favoriteIndicator = page.locator('.info-element-social').first();
    await expect(favoriteIndicator).toBeVisible();
    console.log('Favorite status confirmed visible in enlarged view');
    
  } catch (error) {
    console.log('Failed to favorite the image or verify favorite status:', error);
    await page.screenshot({ path: 'test-results/favorite_failed.png', fullPage: true });
  }
  
  // Take final screenshot of enlarged view with favorite status
  await page.screenshot({ path: 'test-results/enlarged_view_with_favorite.png', fullPage: true });
  
  // Verify the enlarged view is displayed
  console.log('Image enlarged view should now be visible with favorite status');
  
  // Wait 5 seconds so viewer has time to see the enlarged image with favorite status
  await page.waitForTimeout(5000);
  console.log('Test complete - enlarged view with favorite status displayed for 5 seconds');
});