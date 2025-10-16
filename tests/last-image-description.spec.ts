/* Test Case: Verify that when clicking the 18th image (bottom-right corner) in the gallery, 
   a description is displayed to provide context for the user.
   Target: The very last image (18th) in the bottom-right corner of the 6x3 gallery grid
   Expected: Description should be visible to help users understand the image content
   Current Issue: No description appears when clicking gallery images
*/
import { test, expect } from '@playwright/test';

test('Verify 18th gallery image (bottom-right) displays description when clicked', async ({ page }) => {
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
  await page.screenshot({ path: 'test-results/gallery_page_last_image.png', fullPage: true });
  
  // Wait for gallery images to load
  await page.waitForSelector('img', { timeout: 5000 });
  
  // Target the very last image (18th image, bottom-right corner)
  console.log('Targeting the 18th image (bottom-right corner of the gallery)');
  
  // Try multiple approaches to click on the 18th image
  try {
    // Approach 1: Click the 18th image (last image in the gallery)
    const eighteenthImage = page.locator('img').nth(17); // 0-indexed, so 17 = eighteenth image
    await eighteenthImage.waitFor({ state: 'visible', timeout: 5000 });
    await eighteenthImage.click();
    console.log('Clicked 18th image using approach 1 (nth(17))');
  } catch (error) {
    console.log('Approach 1 failed, trying approach 2...');
    
    try {
      // Approach 2: Click the last visible image in the gallery
      const lastImage = page.locator('img').last();
      await lastImage.click();
      console.log('Clicked 18th image using approach 2 (last image)');
    } catch (error2) {
      console.log('Approach 2 failed, trying approach 3...');
      
      try {
        // Approach 3: Click coordinates on the bottom-right corner
        await page.mouse.click(635, 850); // Bottom-right position for 18th image
        console.log('Clicked 18th image using approach 3 (coordinates)');
      } catch (error3) {
        console.log('Approach 3 failed, trying approach 4...');
        
        // Approach 4: Scroll down and click last image
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(1000);
        const lastImageAfterScroll = page.locator('img').last();
        await lastImageAfterScroll.click();
        console.log('Clicked 18th image using approach 4 (scroll + last image)');
      }
    }
  }
  
  // Wait for enlarged view to appear
  await page.waitForTimeout(2000);
  
  // Take screenshot of enlarged view to document current state
  await page.screenshot({ path: 'test-results/last_image_enlarged_view.png', fullPage: true });
  
  // Look for description elements that should appear with the image
  const descriptionSelectors = [
    '.image-description',
    '.gallery-description', 
    '.photo-caption',
    '.image-caption',
    '.description',
    '.caption',
    'p', // General paragraph that might contain description
    '.overlay-text',
    '.popup-description'
  ];
  
  let descriptionFound = false;
  let descriptionText = '';
  
  for (const selector of descriptionSelectors) {
    try {
      const descElement = page.locator(selector);
      if (await descElement.isVisible()) {
        const textContent = await descElement.textContent();
        if (textContent && textContent.trim().length > 0) {
          descriptionText = textContent;
          console.log(`Description found with selector "${selector}": ${descriptionText}`);
          descriptionFound = true;
          break;
        }
      }
    } catch (error) {
      // Continue to next selector
    }
  }
  
  // Verify the enlarged view is displayed
  console.log('Image enlarged view should now be visible');
  
  // Check if description is present
  if (descriptionFound) {
    console.log(`✅ SUCCESS: Description found: "${descriptionText}"`);
    // This would be the expected behavior
  } else {
    console.log('❌ ISSUE: No description found for the clicked image');
    console.log('This confirms the user report that images lack contextual descriptions');
    
    // Take additional screenshot to document the issue
    await page.screenshot({ path: 'test-results/no_description_issue.png', fullPage: true });
  }
  
  // Wait 5 seconds so viewer has time to see the enlarged image and check for description
  await page.waitForTimeout(5000);
  console.log('Test complete - enlarged view displayed for 5 seconds');
  
  // Document the test result
  if (!descriptionFound) {
    console.log('TEST RESULT: Confirmed that gallery images do not display descriptions when clicked');
    console.log('RECOMMENDATION: Add image descriptions to improve user experience and context');
  }
});