import { test, expect } from '@playwright/test';

test('verify Our Story content is visible', async ({ page }, testInfo: any) => {
  await page.goto('https://www.andreandson.com/', { waitUntil: 'load' });

  // prefer role-based click but be tolerant to variations
  try {
    await page.getByRole('button', { name: 'ABOUT', exact: true }).click({ timeout: 3000 });
  } catch {
    // fallback: click a link or text
    await page.getByRole('link', { name: /ABOUT/i }).click({ timeout: 3000 });
  }

  // Click anchor that contains the OUR STORY text (handles <a><p>OUR STORY & TEAM</p></a> structure)
  const ourStoryAnchor = page.locator('a:has(p:has-text("OUR STORY"))').first();

  const clickWithRetries = async (locator: import('@playwright/test').Locator) => {
    for (let attempt = 1; attempt <= 3; attempt++) {
      try {
        await locator.waitFor({ state: 'visible', timeout: 5000 });
        await locator.scrollIntoViewIfNeeded();
        await locator.click({ timeout: 5000 });
        return;
      } catch (err) {
        try {
          const handle = await locator.elementHandle();
          if (handle) {
            await page.evaluate((el) => (el as HTMLElement).click(), handle);
            return;
          }
        } catch {
          // ignore
        }

        if (attempt === 3) {
          try {
            const screenshotPath = testInfo.outputPath(`our-story-fail-1-${Date.now()}.png`);
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
    const ourStory = page.getByRole('link', { name: /OUR STORY/i }).first();
    await clickWithRetries(ourStory);
  }

  await expect(page.getByText("Let's go way back")).toBeVisible({ timeout: 10000 });
});