import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
 readonly page: Page;
 readonly turfLink:
 readonly contractLink
 readonly equipmentLink
 readonly aboutLink
 readonly contactLink
 readonly itemsLink


// --- Navigation methods ---
  constructor(page: Page) {
    this.page = page;
    this.turfLink = {
        turfproduct: page.getByTestId('linkElement-0'),
        turfcombo: page.getByTestId('linkElement-0-0'),
        turffertilizer: page.getByTestId('linkElement-0-1'),
        turfcontrol: page.getByTestId('linkElement-0-2'),
        turfliquid: page.getByTestId('linkElement-0-3'),
        turfseed: page.getByTestId('linkElement-0-4'),
        turfdressing: page.getByTestId('linkElement-0-5'),
        turfsoil: page.getByTestId('linkElement-0-6'),
        turfmelts: page.getByTestId('linkElement-0-7'),

    this.contractLink = {
        contractservices: page.getByTestId('linkElement-1'),
        contractconventional: page.getByTestId('linkElement-1-0'),
        contractdeeptine: page.getByTestId('linkElement-1-1'),
        contractrotary: page.getByTestId('linkElement-1-2'),
        contractapplication: page.getByTestId('linkElement-1-3'),
        contractcore: page.getByTestId('linkElement-1-4'),
        contracttop: page.getByTestId('linkElement-1-5'),
        contractseeding: page.getByTestId('linkElement-1-6'),
        contractconstruction: page.getByTestId('linkElement-1-7')

   

    this.aboutLink = {
        aboutstory: page.getByTestId('linkElement-3-0'),
        aboutsales: page.getByTestId('linkElement-3-1'),
        aboutphoto: page.getByTestId('linkElement-3-2'),
        aboutcarrers: page.getByTestId('linkElement-3-3')

    this.equipment = page.getByTestId('linkElement-2)

    this.contactLink = page.getByTestId('linkElement-4')

    this.itemsLink = page.getByTestId('linkElement-5)

    }
    }



    };
// other locators i am unsure how to add since the ones above stopped working after the first
// this.