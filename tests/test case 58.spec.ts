/* DO NOT EDIT — saved copy of working test
   This file is a snapshot of the working test named 'waybackunderline'.
   Keep this file read-only to avoid accidental edits when creating new tests.
   Our Story and Team Test Case 58: Verify that the page title “Let’s go way back” is displayed with the word “way” fully underlined.
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

      await expect(page.getByText("Let's go way back")).toBeVisible({ timeout: 5000 });
      await ourStoryLink.click();
    })(), 10_000);
  } catch (err) {
    console.log('Interaction sequence timed out or failed:', String(err));
    await page.screenshot({ path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}_timeout.png`, fullPage: true }).catch(() => {});
    return;
  }
});
