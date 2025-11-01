import test, { Locator, Page, expect} from "@playwright/test";
export class ContractServicesPage{

 //variables
   readonly page: Page;
   readonly contractServicesTitle: Locator;
   readonly contractServicesVideo: Locator;
   readonly conventionalAerificationElement: Locator;
   readonly deepTineAerificationElement: Locator;
   readonly rotaryDecompactionElement: Locator;
   readonly coreRemovalElement: Locator;
   readonly applicationServicesElement: Locator;
   readonly topdressingElement: Locator;
   readonly seedingElement: Locator;
   readonly constructionAndRenovationElement: Locator;
   readonly getQuoteHeading: Locator;
   readonly firstNameInput: Locator;
   readonly lastNameInput: Locator;
   readonly emailInput: Locator;
   readonly heroVideo: Locator;
   readonly heroPosterImg: Locator;
   readonly conventionalNewPageTitle: Locator;
   readonly deepTineNewPageTitle: Locator;
   readonly rotaryNewPageTitle: Locator;
   readonly coreRemovalNewPageTitle: Locator;
   readonly applicationNewPageTitle: Locator;
   readonly topDressNewPageTitle: Locator;
   readonly seedingNewPageTitle: Locator;
   readonly constructionNewPageTitle: Locator;
   readonly getaQuoteSection: Locator;
   readonly testLatinText: any;
   readonly testNumber: any;
   readonly testSymbols: any

 //constructor  

   constructor(page:Page) {
        this.page=page;
        this.contractServicesTitle = page.locator('h1, h2, [role="heading"]').first();
        this.contractServicesVideo = page.getByRole('region', { name: 'main content' }).locator('img');
        this.conventionalAerificationElement = page.getByText('Conventional Aerification');
        this.deepTineAerificationElement = page.getByText('Deep Tine Aerification');
        this.rotaryDecompactionElement = page.getByText('Rotary Decompaction', { exact: true });
        this.coreRemovalElement = page.getByText('Core Removal', { exact: true });
        this.applicationServicesElement = page.getByText('Application Services', { exact: true });
        this.topdressingElement = page.getByText('Topdressing', { exact: true });
        this.seedingElement = page.getByText('Seeding', { exact: true });
        this.constructionAndRenovationElement = page.getByText('Construction & Renovation', { exact: true });
        this.getQuoteHeading = page.getByRole('heading', { name: 'Get a Quote' });
        this.firstNameInput = page.getByLabel('First Name');
        this.lastNameInput = page.getByLabel('Last Name');
        this.emailInput = page.getByLabel('Email');
        this.heroVideo = page.locator('wix-video video').first();
        this.heroPosterImg = page.locator('wix-video wow-image img').first();
        this.conventionalNewPageTitle = page.getByRole('heading', { name: 'Conventional Aerification', level: 1 });
        this.deepTineNewPageTitle = page.getByRole('heading', { name: 'Deep Tine Aerification', level: 1 });
        this.rotaryNewPageTitle = page.getByRole('heading', { name: 'Rotary Decompaction', level: 1 });
        this.coreRemovalNewPageTitle = page.getByRole('heading', { name: 'Core Removal', level: 1 });
        this.applicationNewPageTitle = page.getByRole('heading', { name: 'Application Services', level: 1 });
        this.topDressNewPageTitle = page.getByRole('heading', { name: 'Topdressing', level: 1 });
        this.seedingNewPageTitle = page.getByRole('heading', { name: 'Seeding', level: 1 });
        this.constructionNewPageTitle = page.getByRole('heading', { name: 'Construction and Renovation', level: 1 });
        this.getaQuoteSection = page.locator('h2:has-text("Get a Quote")');
        this.testLatinText = "abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.testNumber = "1234567890";
        this.testSymbols = "@._-!";
    }

// Method: Verify section visible
  async verifySectionVisible(): Promise<void> {
    await expect(this.getQuoteHeading).toBeVisible({ timeout: 10000 });
  }

  // Method: Fill first name and assert value
  async fillFirstName(text: string): Promise<void> {
    await this.firstNameInput.fill(text);
    await expect(this.firstNameInput).toHaveValue(text);
  }

  // Similar for last name
  async fillLastName(text: string): Promise<void> {
    await this.lastNameInput.fill(text);
    await expect(this.lastNameInput).toHaveValue(text);
  }

  // For email (handles Latin/numbers)
  async fillEmail(text: string): Promise<void> {
    await this.emailInput.fill(text);
    await expect(this.emailInput).toHaveValue(text);
  }

/*
// Verify video is playing (fixed for Locator compatibility)
async verifyHeroVideoPlaying(): Promise<void> {
  // Wait for video element to be visible
  await this.heroVideo.waitFor({ state: 'visible', timeout: 15000 });

  // Check source is present
  const src = await this.heroVideo.evaluate((el: HTMLVideoElement) => el.src);
  console.log('Video src:', src);
  expect(src).toBeTruthy();

  // Force reload
  await this.heroVideo.evaluate((el: HTMLVideoElement) => el.load());
  await this.page.waitForTimeout(2000);

  // Poll for readyState >=2
  let readyState = 0;
  const loadPollTimeout = 45000;
  const loadPollInterval = 1000;
  const loadStartTime = Date.now();
  while (readyState < 2 && (Date.now() - loadStartTime) < loadPollTimeout) {
    readyState = await this.heroVideo.evaluate((el: HTMLVideoElement) => el.readyState);
    if (readyState < 2) {
      await this.page.waitForTimeout(loadPollInterval);
    }
  }
  expect(readyState).toBeGreaterThanOrEqual(2);

  // Assert attributes
  await expect(this.heroVideo).toHaveAttribute('autoplay', '');
  await expect(this.heroVideo).toHaveAttribute('muted', '');

  // Force play (wrapped)
  try {
    await this.heroVideo.evaluate((el: HTMLVideoElement) => el.play());
    console.log('Play succeeded');
  } catch (e) {
    console.log('Play failed (expected):', e.message);
  }

  // Poll for !paused (playing)
  let isPaused = true;
  const playPollTimeout = 10000;
  const playPollInterval = 500;
  const playStartTime = Date.now();
  while (isPaused && (Date.now() - playStartTime) < playPollTimeout) {
    isPaused = await this.heroVideo.evaluate((el: HTMLVideoElement) => el.paused);
    if (isPaused) {
      await this.page.waitForTimeout(playPollInterval);
    }
  }
  expect(isPaused).toBe(false);

  // Short final wait
  await this.page.waitForTimeout(1000);

  // Optional poster
  // await expect(this.heroPosterImg).toHaveCSS('opacity', '0', { timeout: 10000 });
}*/
}