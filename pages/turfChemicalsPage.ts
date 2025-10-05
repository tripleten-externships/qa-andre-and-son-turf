import { Page, Locator, expect } from '@playwright/test';

export class TurfChemicalsPage {
  readonly page: Page;
  readonly learnMoreButtons: Locator;
  readonly albaughHeading: Locator;
  readonly albaughDescription: Locator;
  readonly amvacHeading: Locator;
  readonly amvacDescription: Locator;
  readonly basfHeading: Locator;
  readonly basfDescription: Locator;
  readonly bayerHeading: Locator;
  readonly bayerDescription: Locator;
  readonly envuHeading: Locator;
  readonly envuDescription: Locator;
  readonly nufarmHeading: Locator;
  readonly nufarmDescription: Locator;
  readonly pbigordonHeading: Locator;
  readonly pbigordonDescription: Locator;
  readonly qualiproHeading: Locator;
  readonly qualiproDescription: Locator;
  readonly seproHeading: Locator;
  readonly seproDescription: Locator;
  readonly sipcamagroHeading: Locator;
  readonly sipcamagroDescription: Locator;
  readonly syngentaHeading: Locator;
  readonly syngentaDescription: Locator;

  constructor(page: Page) {
    this.page = page;
    this.learnMoreButtons = page.locator('text=Learn More');

    this.albaughHeading = page.getByText('Albaugh', { exact: true });
    this.albaughDescription = page.getByText('Albaugh offers a proven portfolio of year-round course care products. A wide variety of reliable products ensures beautiful turf.' , {exact:true});
    
    this.amvacHeading = page.getByText('AMVAC', {exact:true});
    this.amvacDescription = page.getByText('AMVAC is pioneering new grounds. We carry the latest in herbicides, insecticides, and the newest combinations including the latest in fungicide technology with unmatched results. Get what you need with AMVAC.', {exact:true});

    this.basfHeading = page.getByText('BASF', {exact: true});
    this.basfDescription = page.getByText('BASF offers a powerful portfolio of product solutions that can be tailored to meet the demands of all turf landscapes. ', {exact: true});

    this.bayerHeading = page.getByText('Bayer', {exact:true});
    this.bayerDescription = page.getByText('Bayer has the fungicide, herbicide, insecticide and growth regulator solutions you need to keep your turf healthy and strong.', {exact: true});

    this.envuHeading = page.getByText('Envu', {exact:true});
    this.envuDescription = page.getByText('Envu has listened carefully to superintendents in order to create an extensive portfolio of solutions designed to help you efficiently maintain beautiful turf on tees, greens and everywhere in between.', {exact: true});

    this.nufarmHeading = page.getByText('Nufarm', {exact:true});
    this.nufarmDescription = page.getByText('Nufarm balances innovation and improvement in efficiency, safety and simplicity to bring you a focused product portfolio that saves time, delivers results and safeguards your success.', {exact: true});

    this.pbigordonHeading = page.getByText('PBI Gordon', {exact:true});
    this.pbigordonDescription = page.getByText('PBI-Gordon is a national leader in the professional turf and ornamental management industry with a portfolio offering a line of herbicides, insecticides, fungicides, growth regulators and other products.', {exact: true});

    this.qualiproHeading = page.getByText('Quali-Pro', {exact:true});
    this.qualiproDescription = page.getByText('Quali-Pro has been a leader in the development of innovative and post-patent formulations, offering professionals the industry’s widest array of active ingredients. Quali-Pro provides solutions for lawn care professionals, sports turf managers, and golf course superintendents.', {exact: true});

    this.seproHeading = page.getByText('SePro', {exact:true});
    this.seproDescription = page.getByText('SePro is dedicated to providing golf course superintendents with effective & dependable solutions.', {exact: true});

    this.sipcamagroHeading = page.getByText('Sipcam Agro', {exact:true});
    this.sipcamagroDescription = page.getByText('Whether your focus is golf courses and sports turf or lawns and nurseries, Sipcam is ready with personalized solutions to meet your turf needs.', {exact: true});

    this.syngentaHeading = page.getByText('Syngenta', {exact:true});
    this.syngentaDescription = page.getByText('Syngentas comprehensive portfolio is comprised of extensively researched solutions for the whole course including rough, tees, greens, and fairways to trees, landscape ornamentals and ponds.', {exact: true});

  }

  async goto() {
    await this.page.goto('https://www.andreandson.com/control-agents-2');
    await expect(this.page).toHaveURL(/control-agents-2/);
  }

  async verifyAlbaughHeading() {
    await expect(this.albaughHeading).toBeVisible();
  }

  async verifyAlbaughDescription() {
    await expect(this.albaughDescription).toBeVisible();
  }

    async verifyAmvacHeading() {
    await expect(this.amvacHeading).toBeVisible();
  }

  async verifyAmvacDescription() {
    await expect(this.amvacDescription).toBeVisible();
  }
  
  async verifyBasfHeading(){
    await expect(this.basfHeading).toBeVisible();
  }

  async verifyBasfDescription(){
    await expect(this.basfDescription).toBeVisible();
  }
  async verifyBayerHeading(){
    await expect(this.basfHeading).toBeVisible();
  }

  async verifyBayerDescription(){
    await expect(this.basfDescription).toBeVisible();
  }

  async verifyEnvuHeading(){
    await expect(this.basfHeading).toBeVisible();
  }

  async verifyEnvuDescription(){
    await expect(this.basfDescription).toBeVisible();
  }
  async verifyNufarmHeading(){
    await expect(this.basfHeading).toBeVisible();
  }

  async verifyNufarmDescription(){
    await expect(this.basfDescription).toBeVisible();
  }
  async verifyPbigordonHeading(){
    await expect(this.basfHeading).toBeVisible();
  }

  async verifyPbigordonDescription(){
    await expect(this.basfDescription).toBeVisible();
  }
  async verifyQualiproHeading(){
    await expect(this.basfHeading).toBeVisible();
  }

  async verifyQualiproDescription(){
    await expect(this.basfDescription).toBeVisible();
  }
  async verifySeproHeading(){
    await expect(this.basfHeading).toBeVisible();
  }

  async verifySeproDescription(){
    await expect(this.basfDescription).toBeVisible();
  }
  async verifySipcamagroHeading(){
    await expect(this.basfHeading).toBeVisible();
  }

  async verifySipcamagroDescription(){
    await expect(this.basfDescription).toBeVisible();
  }

  async verifySyngentaHeading(){
    await expect(this.basfHeading).toBeVisible();
  }

  async verifySyngentaDescription(){
    await expect(this.basfDescription).toBeVisible();
  }
  async clickLearnMore(index: number) {
    await this.learnMoreButtons.nth(index).click();
  }

  async goBackToTurfChemicals() {
    await this.page.goBack();
    await this.page.waitForLoadState('domcontentloaded');
    await expect(this.page).toHaveURL(/control-agents-2/);
  }
}
