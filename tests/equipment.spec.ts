import { test, expect, APIRequestContext, Page } from '@playwright/test';
import { EquipmentPage } from '../pages/equipment';

/*
Verify that the page title in the hero section "EQUIPMENT SALES"
Verify that the video plays in the hero when user lands in the Equipment page
*/
test('Equipment page hero section and video', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Verify hero title
    await equipmentPage.verifyHeroTitle('EQUIPMENT SALES');

    // Verify video is visible and check autoplay
    const isPaused = await equipmentPage.verifyHeroVideo();
    expect(isPaused).toBe(true); // change to false if you expect autoplay
});

/*
Verify that the video plays correctly in the Feature section (FS900 Riding Sweeper /Core Collector")
*/
test('Feature section video can plays', async ({ page, browserName }) => {
  test.skip(browserName === 'chromium', 'Skipping video playback test in Chromium');
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Play the feature video
    await equipmentPage.playFeatureVideo();

    // Verify that the video is playing by checking that currentTime is increasing
    expect(equipmentPage.initialTime).toBeLessThan(equipmentPage.laterTime);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});

/*
Verify that the video can be paused/played in the Feature section (FS900 Riding Sweeper /Core Collector")
*/
test('Feature section video can pause/play', async ({ page, browserName }) => {
  test.skip(browserName === 'chromium', 'Skipping video playback test in Chromium');
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Play the feature video
    await equipmentPage.playFeatureVideo();

    // Pause the video
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.pause());
    const isPaused = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.paused);

    // Verify that the video is paused
    expect(isPaused).toBe(true);

    // Wait a few seconds before closing
    await page.waitForTimeout(2000);

    // Play the video
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.play());
    const isPlaying = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => !v.paused);

    // Verify that the video is playing
    expect(isPlaying).toBe(true);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});

/*
Verify that the video can be muted/unmuted in the Feature section (FS900 Riding Sweeper /Core Collector")
*/
test('Feature section video can mute/unmute', async ({ page, browserName }) => {
  test.skip(browserName === 'chromium', 'Skipping video playback test in Chromium');
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Play the feature video
    await equipmentPage.playFeatureVideo();

    // Mute the video
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.muted = true);
    const isMuted = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.muted);

    // Verify that the video is muted
    expect(isMuted).toBe(true);

    // Wait a few seconds before closing
    await page.waitForTimeout(2000);

    // Unmute the video
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.muted = false);
    const isUnmuted = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => !v.muted);

    // Verify that the video is unmuted
    expect(isUnmuted).toBe(true);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});

/* 
Verify that the volume the video in the Feature section (FS900 Riding Sweeper /Core Collector") 
can be adjusted using the video player controls.
*/
test('Feature section video can adjust volume', async ({ page, browserName }) => {
  test.skip(browserName === 'chromium', 'Skipping video playback test in Chromium');
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Play the feature video
    await equipmentPage.playFeatureVideo();

    // Set volume (0.5)
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => { v.volume = 0.5; });

    // Verify that the video has sound
    const volume = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.volume);
    expect(volume).toBe(0.5);

    // Wait a few seconds 
    await page.waitForTimeout(2000);

    // Set volume (0.0)
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => { v.volume = 0.0; });

    // Mute the video
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.muted = true);
    const isMuted = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.muted);

    // Verify that the video is muted
    expect(isMuted).toBe(true);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});

/*
Verify that the video in the Feature section (FS900 Riding Sweeper /Core Collector") 
can be viewed in full-screen and exit full-screen mode.*/
test('Feature section video can toggle full screen', async ({ page, browserName }) => {
  test.skip(browserName === 'chromium', 'Skipping video playback test in Chromium');
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Play the feature video
    await equipmentPage.playFeatureVideo();

    // Video in full screen
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.requestFullscreen());
    const isFullScreen = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => document.fullscreenElement === v);

    // Verify that the video is in full screen
    expect(isFullScreen).toBe(true);

    // Wait a few seconds before closing
    await page.waitForTimeout(2000);

    // Exit full screen
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => document.exitFullscreen());
    const isNotFullScreen = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => document.fullscreenElement !== v);

    // Verify that the video is not in full screen
    expect(isNotFullScreen).toBe(true);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});

/* 
Verify that the video in the Feature section (FS900 Riding Sweeper /Core Collector") 
can seek/jump to different time points using the video player controls.
*/
test('Feature section video can seek/jump in time', async ({ page, browserName }) => {
  test.skip(browserName === 'chromium', 'Skipping video playback test in Chromium');
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Play the feature video
    await equipmentPage.playFeatureVideo();

    // Jump to 20 seconds
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => { v.currentTime = 20; });

    // Verify that the video jumped to approximately 20seconds
    let time = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.currentTime);
    expect(time).toBeGreaterThanOrEqual(20);

    // Wait a few seconds before closing
    await page.waitForTimeout(2000);

    // Jump back to 5s
    await equipmentPage.featureVideo.evaluate(v => { (v as HTMLVideoElement).currentTime = 5; });
    time = await equipmentPage.featureVideo.evaluate(v => (v as HTMLVideoElement).currentTime);
    expect(time).toBeLessThan(20);
    expect(time).toBeGreaterThanOrEqual(5);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});

/* NOT WORKING - NEEDS FIX
Verify that clicking the “Play Picture-in-Picture” button opens the video in a floating PiP window, 
which can be moved, resized, and closed.
*/
test('Feature section video can toggle PIP', async ({ page, browserName }) => {
  test.skip(browserName === 'chromium', 'Skipping video playback test in Chromium');
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Play the feature video
    await equipmentPage.playFeatureVideo();
    
    // Request Picture-in-Picture
    // await equipmentPage.featureVideo.evaluate(async ((v: HTMLVideoElement) => {v.requestPictureInPicture();
    await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => v.requestPictureInPicture());
    const isPiP = await equipmentPage.featureVideo.evaluate((v: HTMLVideoElement) => document.pictureInPictureElement !== null);
    

    // Assert video is in PiP   
    // const isPiP = await page.evaluate(() => document.pictureInPictureElement !== null);
    expect(isPiP).toBe(true);

    // Exit PiP
    await page.evaluate(() => document.exitPictureInPicture());

    // Assert PiP is closed
    const isPiPClosed = await page.evaluate(() => document.pictureInPictureElement === null);
    expect(isPiPClosed).toBe(true);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
});

/*
Verify that clicking the image in the Baroness section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Baroness section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();
    
    /// Locate the Baroness link
    // const baronessLink = page.locator('a[href="https://baroness.us/"]');

    // Scroll it into view
    await equipmentPage.baronessLink.scrollIntoViewIfNeeded();

    // Optional: wait for it to be fully visible
    await equipmentPage.baronessLink.waitFor({ state: 'visible' });
    
    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.baronessLink.click(),  // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://baroness.us/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Buffalo Turbine section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Buffallo Turnbine section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    /// Locate the Buffalo Turbine link
    // const buffaloTurbineLink = page.locator('a[href="https://buffaloturbine.com/"]');

    // Scroll it into view
    await equipmentPage.buffaloTurbineLink.scrollIntoViewIfNeeded();

    // Optional: wait for it to be fully visible
    await equipmentPage.buffaloTurbineLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.buffaloTurbineLink.click(),  // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://buffaloturbine.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the STIHL section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('STIHL section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    /// Locate the STIHL link
    // const stihlLink = page.locator('a[href="https://andresoninc.stihldealer.net/"]');

    // Scroll it into view
    await equipmentPage.stihlLink.scrollIntoViewIfNeeded();

    // Optional: wait for it to be fully visible
    await equipmentPage.stihlLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.stihlLink.click(),   // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://andresoninc.stihldealer.net/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Greens Groomer section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Greens Groomer section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();


    // Locate the Greens Groomer section
    await equipmentPage.greensGroomerSection.scrollIntoViewIfNeeded();

    // Locate the Greens Groomer link
    // const greensGroomerLink = page.getByRole('link', { name: 'natural_groomer_01.jpg' });
   

    // Optional: wait for it to be fully visible
    await equipmentPage.greensGroomerLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.greensGroomerLink.click(),            // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL(/^https?:\/\/(www\.)?greensgroomer\.com\/?$/);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the RotaDairon section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('RotaDairon section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();


    // Locate the RotaDairon section
    await equipmentPage.rotaDaironSection.scrollIntoViewIfNeeded();

    // Locate the RotaDairon link
    // const rotaDaironLink = page.getByRole('link', { name: 'Screenshot 2021-03-01 221305.' });


    // Optional: wait for it to be fully visible
    await equipmentPage.rotaDaironLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.rotaDaironLink.click(),  // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.rotadairon.fr/gb/rotadairon_smc.html');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/* 
Verify that clicking the image in the Lely section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Lely section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();
    
    // Locate the Lely section
    await equipmentPage.lelySection.scrollIntoViewIfNeeded();

    // Locate the link
    // const lelyLink = page.getByRole('link', { name: 'lely.jpg' });

    // Optional: wait for it to be fully visible
    await equipmentPage.lelyLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.lelyLink.click(),    // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL(/^https?:\/\/(www\.)?lelyturf\.com\/?$/);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the EarthWay section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('EarthWay section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();
    
    // Locate the Lely section
    await equipmentPage.earthWaySection.scrollIntoViewIfNeeded();

    // Locate the link
    // const earthWayLink = page.getByRole('link', { name: 'Earthway.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.earthWayLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.earthWayLink.click(),   // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://earthway.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Micro Rain section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Micro Rain section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Micro Rain section
    await equipmentPage.microRainSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const microRainLink = page.getByRole('link', { name: 'MR43BPP KID.jfif' });

    // Optional: wait for it to be fully visible
    await equipmentPage.microRainLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.microRainLink.click(),  // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.microrain.net/applications/sports-fields-grounds');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Ferris section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Ferris section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Ferris section
    await equipmentPage.ferrisSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const ferrisLink = page.getByRole('link', { name: 'Ferris.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.ferrisLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.ferrisLink.click(),   // click normally, no force needed
    ]);

    // Wait for it to load
    // await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.ferrismowers.com/na/en_us/home.html');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/* LINK LEADS TO A 404 PAGE
Verify that clicking the image in the Broyhill section opens the correct website
 as specified in the <a> element of the HTML.
*/
test.fail('Broyhill section link', async ({ page, request }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Broyhill section
    await equipmentPage.broyhillSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const broyhillLink = page.getByRole('link', { name: 'Broyhill.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.broyhillLink.waitFor({ state: 'visible' });

    // Capture the target URL (this is what we expect)
    const expectedUrl = 'https://broyhill.com/golf-sports-turf-care/grooming/trailers/silhouette-i-sports-turf/';

    // Backend check BEFORE clicking
    const response = await request.get(expectedUrl);
    expect(response.status(), `Backend returned ${response.status()} for ${expectedUrl}`).toBe(200);

    
    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.broyhillLink.click(),  // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // // Verify URL
    // await expect(newPage).toHaveURL('https://broyhill.com/golf-sports-turf-care/grooming/trailers/silhouette-i-sports-turf/');

    // Wait a few seconds before closing
    await newPage.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Dream Turf Equipment section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Dream Turf Equipment section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Dream Turf Equipment section
    await equipmentPage.dreamTurfSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const dreamTurfLink = page.getByRole('link', { name: 'Dream Turf Equipment.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.dreamTurfLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.dreamTurfLink.click(),  // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.dreamturfequipment.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the TurfTime Equipment section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('TurfTime Equipment section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the TurfTime Equipment section
    await equipmentPage.turfTimeSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const turfTimeLink = page.getByRole('link', { name: 'TurfTime.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.turfTimeLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.turfTimeLink.click(), // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.turftimeeq.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Bluebird section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Bluebird section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Bluebird section
    await equipmentPage.bluebirdSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const bluebirdLink = page.getByRole('link', { name: 'Bluebird.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.bluebirdLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.bluebirdLink.click(), // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://bluebirdturf.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/* URL MISMATCH -- REDIRECTS TO ANOTHER PAGE
Verify that clicking the image in the Ryan section opens the correct website
 as specified in the <a> element of the HTML.
*/
test.fail('Ryan section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Ryan section
    await equipmentPage.ryanSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const ryanLink = page.getByRole('link', { name: 'Ryan.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.ryanLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.ryanLink.click(), // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.ryanturf.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/* 
Verify that clicking the image in the Spectrum Technologies section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Spectrum Technologies section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Spectrum Technologies section
    await equipmentPage.spectrumSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const spectrumLink = page.getByRole('link', { name: 'Sprectrum technologies.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.spectrumLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.spectrumLink.click(),   // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.specmeters.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/* URL MISMATCH -- REDIRECTS TO ANOTHER PAGE
Verify that clicking the image in the The Andersons section opens the correct website
 as specified in the <a> element of the HTML.
*/
test.fail('The Andersons section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the The Andersons section
    await equipmentPage.andersonsSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const andersonsLink = page.getByRole('link', { name: 'the andersons.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.andersonsLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.andersonsLink.click(), // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://intl.andersonspro.com/products/turf/agolf/spreaders');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Standard Golf section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Standard Golf section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Standard Golf section
    await equipmentPage.standardGolfSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const standardGolfLink = page.getByRole('link', { name: 'standard golf.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.standardGolfLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.standardGolfLink.click(), // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.standardgolf.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Linemark International section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Linemark International section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Linemark International section
    await equipmentPage.linemarkInternationalSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const linemarkInternationalLink = page.getByRole('link', { name: 'Linemark.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.linemarkInternationalLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.linemarkInternationalLink.click(),      // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://www.linemarkinternational.com/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the Gandy section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('Gandy section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the Gandy section
    await equipmentPage.gandySection.scrollIntoViewIfNeeded();

    // Locate the link
    // const gandyLink = page.getByRole('link', { name: 'Gandy.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.gandyLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.gandyLink.click(),  // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL('https://gandy.net/');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/* 
Verify that clicking the image in the SnowEx section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('SnowEx section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the SnowEx section
    await equipmentPage.snowExSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const snowExLink = page.getByRole('link', { name: 'SnowEx.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.snowExLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.snowExLink.click(),  // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL(/^https?:\/\/(www\.)?snowexproducts\.com\/?$/);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});

/*
Verify that clicking the image in the TurfEx section opens the correct website
 as specified in the <a> element of the HTML.
*/
test('TurfEx section link', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locate the TurfEx section
    await equipmentPage.turfExSection.scrollIntoViewIfNeeded();

    // Locate the link
    // const turfExLink = page.getByRole('link', { name: 'Turf Ex.JPG' });

    // Optional: wait for it to be fully visible
    await equipmentPage.turfExLink.waitFor({ state: 'visible' });

    // Click and capture the new tab
    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'), // listens for the new tab
        equipmentPage.turfExLink.click(),  // click normally, no force needed
    ]);

    // Wait for it to load
    await newPage.waitForLoadState();

    // Verify URL
    await expect(newPage).toHaveURL(/^https?:\/\/(www\.)?turfexproducts\.com\/?$/);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();
    await newPage.close();

});


/*
Verify that clicking SUBMIT button without filling the form shows validation messages.
*/
test('SUBMIT button validation with empty fields', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    //Locate the email input field
    // const emailInput = page.locator('input[name="email"]');

    // Locate the SUBMIT form
    await equipmentPage.submitForm();

    // Verify the email input shows an error (aria-invalid="true")
    // await expect(emailInput).toHaveAttribute('aria-invalid', 'true');

    const validationMessage = await equipmentPage.emailInput.evaluate(el => (el as HTMLInputElement).validationMessage);
    console.log('Browser says:', validationMessage);

    expect(validationMessage).not.toBe('');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});


/*
Verify that when clicking Submit with an invalid email in the form found in the 
Let's Work Together section, the form is not submitted and an error is shown (invalid email format)
*/
test('Email field with invalid format', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    //fill email input field with invalid email format
    // const emailInput = page.locator('input[name="email"]');
    await equipmentPage.emailInput.fill('invalidemail');

    // Locate the SUBMIT form
    await equipmentPage.submitForm();

    // Verify the email input shows an error (aria-invalid="true")
    // await expect(emailInput).toHaveAttribute('aria-invalid', 'true');

    const validationMessage = await equipmentPage.emailInput.evaluate(el => (el as HTMLInputElement).validationMessage);
    console.log('Browser says:', validationMessage);

    expect(validationMessage).not.toBe('');

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});


/*
Ensure that the visible email address displayed in the Let’s Work Together section matches
 the mailto: value in the HTML code.
*/
test.fail('Email link verification', async ({ page }) => {
    const equipmentPage = new EquipmentPage(page);

    // Navigate to equipment page
    await equipmentPage.navigate();

    // Locator for the link
    // const emailLink = page.locator('text=turf@andreandson.com').first();

    // Wait until the link is visible
    await expect(equipmentPage.emailLink).toBeVisible({ timeout: 5000 });

    // Get visible text and href
    const text = (await equipmentPage.emailLink.innerText()).trim();
    const href = await equipmentPage.emailLink.getAttribute('href');

    console.log('Text:', text);
    console.log('Href:', href);

    // Assert href matches "mailto:" + text
    expect(href).toBe(`mailto:${text}`);

    // Wait a few seconds before closing
    await page.waitForTimeout(3000);

    // Close the page
    await page.close();

});