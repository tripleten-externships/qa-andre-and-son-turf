import { test, expect } from '@playwright/test';

test('navigate to Our Story & Team (robust)', async ({ page }, testInfo: any) => {
  await page.goto('https://www.andreandson.com/', { waitUntil: 'load' });

  // Try a few ways to open the ABOUT section (site may render it as a button, link or hidden behind a menu)
  const tryAbout = async () => {
    const attempts = [
      page.getByRole('button', { name: 'ABOUT', exact: true }),
      page.getByRole('link', { name: 'ABOUT', exact: true }),
      page.getByText('ABOUT', { exact: true })
    ];
    for (const locator of attempts) {
      try {
        await locator.click({ timeout: 3000 });
        return true;
      } catch {
        // ignore and try next
      }
    }

    // Try opening a generic menu button if ABOUT is inside a menu
    try {
      await page.locator('button[aria-label*="menu"], button[aria-label*="Menu"]').first().click({ timeout: 3000 });
      // after opening menu, click ABOUT link if present
      const aboutInMenu = page.getByRole('link', { name: /ABOUT/i }).first();
      await aboutInMenu.click({ timeout: 3000 });
      return true;
    } catch {
      return false;
    }
  };

  await tryAbout();

  // Click the OUR STORY & TEAM link. The site appears to render the text inside a <p> nested in an <a>.
  // Prefer an anchor containing the text to match the DOM seen in the screenshot.
  const ourStoryAnchor = page.locator('a:has(p:has-text("OUR STORY"))').first();

  // helper to click with retries, JS-click fallback, and screenshot on final failure
  const clickWithRetries = async (locator: import('@playwright/test').Locator) => {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.scrollIntoViewIfNeeded();
        await locator.click({ timeout: 5000 });
        return;
      } catch (err) {
        // try a JS click fallback before retrying
        try {
          const handle = await locator.elementHandle();
          if (handle) {
            await page.evaluate((el) => (el as HTMLElement).click(), handle);
            return;
          }
        } catch {
          // ignore JS click errors and continue retrying
        }

        if (attempt === 3) {
          // final failure: save screenshot and attach to test output
          try {
            const screenshotPath = testInfo.outputPath(`our-story-fail-${Date.now()}.png`);
            await page.screenshot({ path: screenshotPath, fullPage: true });
            await testInfo.attach('failure-screenshot', { path: screenshotPath, contentType: 'image/png' });
          } catch {
            // ignore attach errors
          }
          throw err;
        }

        await page.waitForTimeout(500);
      }
    }
  };

  if (await ourStoryAnchor.count() > 0) {
    await clickWithRetries(ourStoryAnchor);
  } else {
    // Fallback to role-based locator
    const ourStory = page.getByRole('link', { name: /OUR STORY/i }).first();
    await clickWithRetries(ourStory);
  }

  // Smoke assert that we reached the expected section
  await expect(page.getByText("Let's go way back")).toBeVisible({ timeout: 10000 });
});