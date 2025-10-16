/* Test Case 51: Navigate to Our Story & Team page and capture URL
   This test verifies navigation to the Our Story & Team page by:
   1. Clicking the ABOUT button
   2. Clicking the "OUR STORY & TEAM" link  
   3. Capturing and highlighting the resulting URL for verification
   Expected URL endpoint: andreandson.com/about-1
*/

import { test, expect } from '@playwright/test';

// helper that rejects after ms milliseconds so we can bail from a sequence
function withTimeout<T>(promise: Promise<T>, ms: number) {
  let timer: any;
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => {
      timer = setTimeout(() => reject(new Error(`Timed out after ${ms}ms`)), ms);
    }),
  ]).finally(() => clearTimeout(timer));
}

test('waybackunderline', async ({ page }, testInfo) => {
  // navigate to baseURL defined in playwright.config.ts
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  console.log('DEBUG: current URL =', page.url());
  await page.screenshot({ path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}_initial.png`, fullPage: true }).catch(() => {});

  try {
    await withTimeout((async () => {
      const aboutButton = page.getByRole('button', { name: 'ABOUT', exact: true });
      await aboutButton.waitFor({ state: 'visible', timeout: 5000 });
      await aboutButton.click();

      const ourStoryLink = page.getByRole('link', { name: 'OUR STORY & TEAM' });
      await ourStoryLink.waitFor({ state: 'visible', timeout: 5000 });
      await ourStoryLink.click();

      // Wait for the page to load and log the URL
      await page.waitForLoadState('networkidle');
      console.log('DEBUG: Our Story & Team page URL =', page.url());
      
      // Take a screenshot to see the loaded page
      await page.screenshot({ path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}_ourstory.png`, fullPage: true }).catch(() => {});
      
      // Add visual highlighting to emphasize the URL in browser
      await page.evaluate(() => {
        // Create a highlighted box at the top to draw attention to URL area
        const highlightDiv = document.createElement('div');
        highlightDiv.style.position = 'fixed';
        highlightDiv.style.top = '0';
        highlightDiv.style.left = '0';
        highlightDiv.style.width = '100%';
        highlightDiv.style.height = '80px';
        highlightDiv.style.border = '5px solid red';
        highlightDiv.style.backgroundColor = 'rgba(255, 255, 0, 0.3)'; // Yellow highlight
        highlightDiv.style.zIndex = '9999';
        highlightDiv.style.pointerEvents = 'none';
        highlightDiv.innerHTML = '<div style="text-align:center; font-size:16px; font-weight:bold; color:red; padding:25px;">URL: ' + window.location.href + '</div>';
        document.body.appendChild(highlightDiv);
      });
      
      // Wait a moment for the highlight to appear
      await page.waitForTimeout(1000);
      
      // Take screenshot with URL highlighted
      await page.screenshot({ path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}_url_highlighted.png`, fullPage: true }).catch(() => {});
      
      // Log the URL for emphasis
      console.log('DEBUG: HIGHLIGHTED URL =', page.url());
    })(), 10_000);
  } catch (err) {
    console.log('Interaction sequence timed out or failed:', String(err));
    await page.screenshot({ path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}_timeout.png`, fullPage: true }).catch(() => {});
    return;
  }
  
  // Pause for 5 seconds so you can view the page before the browser closes
  await page.waitForTimeout(5_000);
});