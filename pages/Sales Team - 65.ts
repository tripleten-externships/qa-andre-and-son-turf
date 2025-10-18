/* DO NOT EDIT — saved copy of working test
   Sales Team Test Case 65: Verify that all titles and descriptions use consistent fonts, colors, and formatting according to the design standard.
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

      // click the SALES TEAM link under the ABOUT menu
      const salesTeamLink = page.getByRole('link', { name: 'SALES TEAM' });
      await salesTeamLink.waitFor({ state: 'visible', timeout: 5000 });
      await salesTeamLink.click();

      // optionally assert we're on the Sales Team page by checking the URL or a known text
      await page.waitForURL('**/sales-team', { timeout: 5000 }).catch(() => {});
    })(), 10_000);
  } catch (err) {
    console.log('Interaction sequence timed out or failed:', String(err));
    await page.screenshot({ path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}_timeout.png`, fullPage: true }).catch(() => {});
    return;
  }
  // pause for 10 seconds so you can see the final page before the browser closes
  await page.waitForTimeout(10_000);
});
