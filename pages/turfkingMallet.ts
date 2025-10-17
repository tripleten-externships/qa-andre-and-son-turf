    import { Locator, Page } from '@playwright/test';

    export class TurfKingMalletPage {

        readonly page: Page;
        readonly turfProductsTitle: Locator;
        readonly combinationProductLearnMoreButton: Locator;
        readonly turfkingmalletlearnmorebutton: Locator;
        readonly turfkingmalletheading: Locator;
        readonly turfkingmalletpagedescription: Locator;    
        readonly malletimage: Locator;
        readonly malletimagealttext: Locator;
        readonly spreadersettingbutton: Locator;
        readonly turfking1064withmallet: Locator;
        readonly turfking1064withmalletlabelbutton: Locator;
        readonly turfking1064withmalletSDSbutton: Locator;
        readonly turfking1064withmalletspecsheetbutton: Locator;
        readonly turfking1507withmallet: Locator;
        readonly turfking1507withmalletlabelbutton: Locator;
        readonly turfking1507withmalletSDSbutton: Locator;
        readonly turfking1507withmalletspecsheetbutton: Locator;
        readonly turfking2106withmallet: Locator;
        readonly turfking2106withmalletlabelbutton: Locator;
        readonly turfking2106withmalletSDSbutton: Locator;
        readonly turfking2106withmalletspecsheetbutton: Locator;
        

        constructor(page: Page) {
            this.page = page;
            this.turfProductsTitle = page.locator('#comp-igauz7ee0').getByRole('link', { name: 'TURF PRODUCTS' });
            this.combinationProductLearnMoreButton = page.locator('#comp-kmctlbje__item1').getByRole('link', { name: 'Learn More' });
            this.turfkingmalletlearnmorebutton = page.locator('#comp-klsvc7ly__item-klpolwaj').getByRole('link', { name: 'Learn More' });
            this.turfkingmalletheading = page.getByText('Turf King + Mallet');
            this.turfkingmalletpagedescription = page.getByText('Mallet is an insecticide for');
            this.malletimage = page.getByRole('img', { name: 'Wet grass' });
            this.malletimagealttext = page.getByAltText('wet grass');
            this.spreadersettingbutton = page.getByRole('link', { name: 'Spreader Settings' });
            this.turfking1064withmallet = page.getByText('Turf King 10-6-4 with .20%');
            this.turfking1064withmalletlabelbutton = page.locator('#comp-kmpcwdmp__3723618c-67b2-4437-aa23-7dd756dcbe8d').getByRole('link', { name: 'Label' });
            this.turfking1064withmalletSDSbutton = page.locator('#comp-kmpcwdmu__3723618c-67b2-4437-aa23-7dd756dcbe8d').getByRole('link', { name: 'SDS' });
            this.turfking1064withmalletspecsheetbutton = page.locator('#comp-kmpcwdmz2__3723618c-67b2-4437-aa23-7dd756dcbe8d').getByRole('link', { name: 'Spec Sheet' });
            this.turfking1507withmallet = page.getByText('Turf King 15-0-7 with .20%');
            this.turfking1507withmalletlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-7 with .20%' }).getByLabel('Label');
            this.turfking1507withmalletSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-7 with .20%' }).getByLabel('SDS');
            this.turfking1507withmalletspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 15-0-7 with .20%' }).getByLabel('Spec Sheet');
            this.turfking2106withmallet = page.getByText('Turf King 21-0-6 with .20%');
            this.turfking2106withmalletlabelbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 21-0-6 with .20%' }).getByLabel('Label');
            this.turfking2106withmalletSDSbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 21-0-6 with .20%' }).getByLabel('SDS');
            this.turfking2106withmalletspecsheetbutton = page.getByRole('listitem').filter({ hasText: 'Turf King 21-0-6 with .20%' }).getByLabel('Spec Sheet');
        }
        async goto() {
            await this.page.goto('/');
        }

        async clickTurfProductsTitle() {
            await this.turfProductsTitle.click();
        }

        async clickCombinationProductLearnMoreButton() {
            await this.combinationProductLearnMoreButton.click();
        }

        async clickTurfKingMalletLearnMoreButton() {
            await this.turfkingmalletlearnmorebutton.click();
        }

        async clickSpreadersettingButton() {
            await this.spreadersettingbutton.click();
            await this.page.waitForLoadState('networkidle');    
        }
        async clickTurfKing1064withMalletLabelButton() {
            await this.turfking1064withmalletlabelbutton.click();
        }
        async clickTurfKing1064withMalletSDSButton() {
            await this.turfking1064withmalletSDSbutton.click();
        }
        async clickTurfKing1064withMalletSpecSheetButton() {
            await this.turfking1064withmalletspecsheetbutton.click();
        }
        async clickTurfKing1507withMalletLabelButton() {
            await this.turfking1507withmalletlabelbutton.click();
        }
        async clickTurfKing1507withMalletSDSButton() {
            await this.turfking1507withmalletSDSbutton.click();
        }
        async clickTurfKing1507withMalletSpecSheetButton() {
            await this.turfking1507withmalletspecsheetbutton.click();
        }   
        async clickTurfKing2106withMalletLabelButton() {
            await this.turfking2106withmalletlabelbutton.click();
        }
        async clickTurfKing2106withMalletSDSButton() {
            await this.turfking2106withmalletSDSbutton.click();
        }
        async clickTurfKing2106withMalletSpecSheetButton() {
            await this.turfking2106withmalletspecsheetbutton.click();
        }
    }
