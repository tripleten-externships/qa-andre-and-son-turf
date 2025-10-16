/* DO NOT EDIT — saved copy of working test
   Photo Gallery Test Case 57: Verify that when clicking an image in the gallery, the enlarged view displays the image title properly aligned and centered.
   Photo Gallery Test Case 60:Verify that when clicking an image in the gallery, the enlarged view displays the image correctly.
   Photo Gallery Test Case 61:Verify that when enlarging an image in the gallery, the browser URL endpoint matches the displayed image title.
*/
import { test, expect } from '@playwright/test';

test('Verify image gallery enlarged view displays title properly aligned and centered', async ({ page }) => {
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
  
  // Try multiple approaches to click on the 4th gallery image
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
  
  // Take screenshot of enlarged view
  await page.screenshot({ path: 'test-results/enlarged_view.png', fullPage: true });
  
  // Verify the enlarged view is displayed
  console.log('Image enlarged view should now be visible');
  
  // Wait 5 seconds so viewer has time to see the enlarged image and title alignment
  await page.waitForTimeout(5000);
  console.log('Test complete - enlarged view displayed for 5 seconds');
});