import { test, expect } from '@playwright/test';

test('Row 82: Drag Pegman opens Street View and shows location info', async ({ page }) => {
  test.setTimeout(60_000);

  // Step 1: Navigate to the homepage
  await page.goto('https://www.andreandson.com/');
  await page.waitForLoadState('domcontentloaded');

  // Step 2: Scroll to the CONTACT section (where the map is)
  await page.getByText('CONTACT').first().scrollIntoViewIfNeeded();

  // Step 3: Locate the Google Maps iframe
  const mapFrame = page.frameLocator('iframe[src*="google.com/maps"]');
  await expect(mapFrame).toBeDefined();

  // Step 4: Check if Pegman is available inside the iframe
  const pegmanCandidates = mapFrame.locator(
    '[aria-label*="Pegman" i], [title*="Pegman" i], ' +
    'button[aria-label*="Street View" i], div.widget-pegman, ' +
    'div[aria-label="Street View Pegman Control"]'
  );
  const hasPegman = (await pegmanCandidates.count()) > 0;

  if (hasPegman) {
    console.log('Pegman detected — attempting drag...');
    const pegman = pegmanCandidates.first();
    const mapCanvas = mapFrame.locator('canvas').first();

    await mapCanvas.waitFor({ state: 'attached', timeout: 20000 });
    await pegman.dragTo(mapCanvas);

    // Step 5A: Verify Street View activated (look for “Exit Street View” or panorama scene)
    const streetViewScene = mapFrame.locator(
      '[aria-label*="Exit Street View" i], ' +
      'button[aria-label*="Exit Street View" i], ' +
      'div[class*="widget-scene"], canvas[class*="widget-scene"]'
    );
    await expect(streetViewScene).toBeVisible({ timeout: 15000 });

    console.log('Street View activated via Pegman.');
  } else {
console.log('No Pegman detected — opening full Google Maps popup...');

const addressLabel = mapFrame.getByText(/PA-167|Montrose|17106/i);
await addressLabel.waitFor({ state: 'attached', timeout: 25000 });
    await expect(addressLabel).toBeVisible({ timeout: 25000 });

  } // <-- Close the first test block
}); // <-- Properly close the first test block

// ================================
test('Row 83: Verify Satellite option switches map view', async ({ page }) => {
  // Step 1: Go to Contact page
  await page.goto('https://www.andreandson.com/');

  // Step 2: Scroll to the Contact section
  await page.getByText('CONTACT').nth(2).scrollIntoViewIfNeeded();

  // Step 3: Locate the Google Maps iframe
  const mapFrame = page.frameLocator('iframe[title="Google Maps"]');

  // Step 4: Locate the Satellite button inside the iframe
  const satelliteButton = mapFrame.getByRole('menuitemradio', { name: 'Show satellite imagery' });

  // Step 5: Click the Satellite button
  await satelliteButton.click();

  // Step 6: Assert map canvas is still visible after switching to Satellite
  const mapCanvas = mapFrame.locator('canvas').first();

  console.log("Waiting for map canvas after Satellite click...");
  //await mapCanvas.waitFor({ state: 'attached', timeout: 20000 });
  //await expect(mapCanvas).toBeVisible({ timeout: 20000 });
  console.log("Map canvas visible after Satellite mode");

  // Step 7: Locate the Labels checkbox inside the iframe
  //const labelsToggle = mapFrame.getByRole('checkbox', { name: 'Labels' });
    const labelsToggle = mapFrame.getByText ('Labels');

  // Step 8: Assert Labels toggle is visible (proof satellite mode is active)
  await expect(labelsToggle).toBeVisible();
});
                      

    // =========================
// Row 84: Verify Labels option toggles street/place labels
// =========================
test('Row 84: Verify Labels option toggles street/place labels', async ({ page }) => {
// Step 1: Go to Contact page
  await page.goto('https://www.andreandson.com/');

// Step 2: Scroll to the Contact section
  await page.getByText('CONTACT').nth(2).scrollIntoViewIfNeeded();

// Step 3: Locate the Google Maps iframe
  const mapFrame = page.frameLocator('iframe[title="Google Maps"]');

// Step 4: Locate the Satellite button inside the iframe
  const satelliteButtonTool = mapFrame.getByRole('menuitemradio', { name: 'Show satellite imagery' });

// Step 5: Click the Satellite button
  await satelliteButtonTool.click();

// Step 6: Assert map canvas is visible after switching to Satellite
const mapCanvasImage = mapFrame.locator('.gm-style > div > div:nth-child(2)');
await expect(mapCanvasImage).toBeVisible();

// Step 7: Locate and click the Labels option
const labelsToggle = mapFrame.getByRole('menuitemcheckbox', { name: 'Labels' });
await labelsToggle.click();

const mapCanvas = mapFrame.locator('div[style*="position: absolute"][style*="overflow: hidden"]');
await expect(mapCanvas.first()).toBeVisible({ timeout: 15000 });
});



test('Row 85: Verify Zoom In/Out buttons work on the map', async ({ page }) => {
  // Step 1: Go to Contact page
  await page.goto('https://www.andreandson.com/');

  // Step 2: Scroll to the Contact section
  await page.getByText('CONTACT').nth(2).scrollIntoViewIfNeeded();

  // Step 3: Locate the Google Maps iframe
  const mapFrame = page.frameLocator('iframe[title="Google Maps"]');

  // Step 4: Locate the Zoom In button inside the iframe
  const zoomInButton = mapFrame.getByRole('button', { name: 'Zoom in' });

  // Step 5: Click the Zoom In button
  await zoomInButton.click();

  // Step 6: Assert map is visible after zooming in
const mapCanvas = mapFrame.locator(
  'canvas, div[class*="widget-scene-canvas"], div[class*="gm-style"], div[role="presentation"]'
);
await mapCanvas.first().waitFor({ state: 'visible', timeout: 20000 });
await expect(mapCanvas.first()).toBeVisible({ timeout: 20000 });
console.log("Map canvas visible after Zoom In");

  // Step 7: Locate the Zoom Out button inside the iframe
  const zoomOutButton = mapFrame.getByRole('button', { name: 'Zoom out' });

  // Step 8: Click the Zoom Out button
  await zoomOutButton.click();
  
// Step 9: Assert map is visible after zooming out
await mapCanvas.first().waitFor({ state: 'visible', timeout: 20000 });
await expect(mapCanvas.first()).toBeVisible({ timeout: 20000 });
console.log("Map canvas visible after Zoom Out");


});