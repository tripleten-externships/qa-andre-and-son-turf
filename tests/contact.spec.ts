import { test, expect } from '@playwright/test';

test('Row 82: Drag Pegman opens Street View and shows location info', async ({ page }) => {
  test.setTimeout(60_000);

  // Step 1: Navigate to the homepage
  await page.goto('https://www.andreandson.com/');

  // Step 2: Scroll to the CONTACT section
  await page.getByText('CONTACT').nth(2).scrollIntoViewIfNeeded();
  
 // Step 3: Locate Google Maps iframe (robust)
let mapFrame;
try {
  mapFrame = page.frameLocator('iframe[title="Google Maps"]');
  await expect(mapFrame.locator('canvas').first()).toBeVisible({ timeout: 10000 });
  console.log("Found Google Maps iframe by title");
} catch {
  console.log("Falling back to src-based iframe locator...");
  mapFrame = page.frameLocator('iframe[src*="google.com/maps"]');
}

// Step 4: Locate Pegman inside iframe
const pegman = mapFrame.getByRole('button', { name: 'Drag Pegman onto the map to' });
await expect(pegman).toBeVisible({ timeout: 20000 });

// Step 5: Locate map canvas inside iframe (robust wait)
console.log('Waiting for map canvas...');
const mapCanvas = mapFrame.locator('canvas').first();
await mapCanvas.waitFor({ state: 'attached', timeout: 40000 });
await expect(mapCanvas).toBeVisible({ timeout: 20000 });
console.log('Map canvas found');


  // Step 6: Drag Pegman onto the map
  const pegBox = await pegman.boundingBox();
  const canvasBox = await mapCanvas.boundingBox();

  if (!pegBox || !canvasBox) {
    throw new Error('Pegman or map canvas not found');
  }

  await page.mouse.move(pegBox.x + pegBox.width / 2, pegBox.y + pegBox.height / 2);
  await page.mouse.down();
  await page.mouse.move(canvasBox.x + canvasBox.width / 2, canvasBox.y + canvasBox.height / 2);
  await page.mouse.up();

  // Step 7: Verify Street View opened by checking address info
  const address = mapFrame.getByText('PA-167').first();
  await expect(address).toBeVisible({ timeout: 15000 });
});
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
  await mapCanvas.waitFor({ state: 'attached', timeout: 20000 });
  await expect(mapCanvas).toBeVisible({ timeout: 20000 });
  console.log("✅ Map canvas visible after Satellite mode");

  // Step 7: Locate the Labels checkbox inside the iframe
  const labelsToggle = mapFrame.getByRole('checkbox', { name: 'Labels' });

  // Step 8: Assert Labels toggle is visible (proof satellite mode is active)
  await expect(labelsToggle).toBeVisible();
});
                                                    
// =========================
// Row 84: Verify Labels option toggles street/place labels
// =========================
test('Row 84: Verify Labels option toggles street/place labels', async ({ page }) => {
  await page.goto('https://www.andreandson.com/');

  // Locate the Google Maps iframe
  const mapFrame = page.frameLocator('iframe[title="Google Maps"]');

  // Step 1: Enable Satellite view first (Labels only appears when Satellite is active)
  const satelliteButton = mapFrame.getByRole('menuitemradio', { name: 'Show satellite imagery' });
  await satelliteButton.click();

  // Step 2: Locate and click the Labels option
  const labelsToggle = mapFrame.getByText('Labels');
  await labelsToggle.click();

  // Step 3: Assert map canvas is still visible after toggling labels
  const mapCanvas = mapFrame.locator('canvas');
  await expect(mapCanvas).toBeVisible();
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

  // Step 6: Assert map canvas is still visible after zooming in
  const mapCanvas = mapFrame.locator('canvas').first();

  console.log("Waiting for map canvas after Zoom In click...");
  await mapCanvas.waitFor({ state: 'attached', timeout: 20000 });
  await expect(mapCanvas).toBeVisible({ timeout: 20000 });
  console.log("✅ Map canvas visible after Zoom In");

  // Step 7: Locate the Zoom Out button inside the iframe
  const zoomOutButton = mapFrame.getByRole('button', { name: 'Zoom out' });

  // Step 8: Click the Zoom Out button
  await zoomOutButton.click();

  // Step 9: Assert map canvas is still visible after zooming out
  console.log("Waiting for map canvas after Zoom Out click...");
  await mapCanvas.waitFor({ state: 'attached', timeout: 20000 });
  await expect(mapCanvas).toBeVisible({ timeout: 20000 });
  console.log("✅ Map canvas visible after Zoom Out");
});