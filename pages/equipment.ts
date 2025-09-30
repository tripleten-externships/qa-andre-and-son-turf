import { expect, Locator, Page } from "@playwright/test";


export class EquipmentPage {
    readonly page: Page;
    readonly equipmentLink: Locator;
    readonly heroTitle: Locator;
    readonly heroVideoContainer: Locator;
    readonly heroVideo: Locator;
    readonly submitButton: Locator;
    readonly baronessLink: Locator;
    readonly buffaloTurbineLink: Locator;
    readonly stihlLink: Locator;
    readonly greensGroomerSection: Locator;
    readonly greensGroomerLink: Locator;
    readonly rotaDaironSection: Locator;
    readonly rotaDaironLink: Locator;
    readonly lelySection: Locator;
    readonly lelyLink: Locator;
    readonly earthWaySection: Locator;
    readonly earthWayLink: Locator;
    readonly microRainSection: Locator;
    readonly microRainLink: Locator;
    readonly ferrisSection: Locator;
    readonly ferrisLink: Locator;
    readonly broyhillSection: Locator;
    readonly broyhillLink: Locator;
    readonly dreamTurfSection: Locator;
    readonly dreamTurfLink: Locator;
    readonly turfTimeSection: Locator;
    readonly turfTimeLink: Locator;
    readonly bluebirdSection: Locator;
    readonly bluebirdLink: Locator;
    readonly ryanSection: Locator;
    readonly ryanLink: Locator;
    readonly spectrumSection: Locator;
    readonly spectrumLink: Locator;
    readonly andersonsSection: Locator;
    readonly andersonsLink: Locator;
    readonly standardGolfSection: Locator;
    readonly standardGolfLink: Locator;
    readonly linemarkInternationalSection: Locator;
    readonly linemarkInternationalLink: Locator;
    readonly gandySection: Locator;
    readonly gandyLink: Locator;
    readonly snowExSection: Locator;
    readonly snowExLink: Locator;
    readonly turfExSection: Locator;
    readonly turfExLink: Locator;
    readonly emailInput: Locator;
    readonly emailLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.equipmentLink = page.locator('a[data-testid="linkElement"]', { hasText: 'EQUIPMENT' });
        this.heroTitle = page.locator('span.color_15.wixui-rich-text__text');
        this.heroVideoContainer = page.locator('#videoContainer_comp-klspq2qr');
        this.heroVideo = this.heroVideoContainer.locator('video');
        this.submitButton = page.locator('button[aria-label="Submit"]').first();
        this.baronessLink = page.locator('a[href="https://baroness.us/"]');
        this.buffaloTurbineLink = page.locator('a[href="https://buffaloturbine.com/"]');
        this.stihlLink = page.locator('a[href="https://andresoninc.stihldealer.net/"]');
        this.greensGroomerSection = page.getByText('Greens Groomer').first();
        this.greensGroomerLink = page.getByRole('link', { name: 'natural_groomer_01.jpg' });
        this.rotaDaironSection = page.getByText('RotaDairon').first();
        this.rotaDaironLink = page.getByRole('link', { name: 'Screenshot 2021-03-01 221305.' });
        this.lelySection = page.getByText('Lely').first();
        this.lelyLink = page.getByRole('link', { name: 'lely.jpg' });
        this.earthWaySection = page.getByText('EarthWay').first();
        this.earthWayLink = page.getByRole('link', { name: 'Earthway.JPG' });
        this.microRainSection = page.getByText('Micro Rain').first();
        this.microRainLink = page.getByRole('link', { name: 'MR43BPP KID.jfif' });
        this.ferrisSection = page.getByText('Ferris').first();
        this.ferrisLink = page.getByRole('link', { name: 'Ferris.JPG' });
        this.broyhillSection = page.getByText('Broyhill').first();
        this.broyhillLink = page.getByRole('link', { name: 'Broyhill.JPG' });
        this.dreamTurfSection = page.getByText('Dream Turf Equipment').first();
        this.dreamTurfLink = page.getByRole('link', { name: 'Dream Turf Equipment.JPG' });
        this.turfTimeSection = page.getByText('TurfTime Equipment').first();
        this.turfTimeLink = page.getByRole('link', { name: 'TurfTime.JPG' });
        this.bluebirdSection = page.getByText('Bluebird').first();
        this.bluebirdLink = page.getByRole('link', { name: 'Bluebird.JPG' });
        this.ryanSection = page.getByText('Ryan').first();
        this.ryanLink = page.getByRole('link', { name: 'Ryan.JPG' });
        this.spectrumSection = page.getByText('Spectrum Technologies').first();
        this.spectrumLink = page.getByRole('link', { name: 'Sprectrum technologies.JPG' });
        this.andersonsSection = page.getByText('The Andersons').first();
        this.andersonsLink = page.getByRole('link', { name: 'the andersons.JPG' });
        this.standardGolfSection = page.getByText('Standard Golf').first();
        this.standardGolfLink = page.getByRole('link', { name: 'standard golf.JPG' });
        this.linemarkInternationalSection = page.getByText('Linemark International').first();
        this.linemarkInternationalLink = page.getByRole('link', { name: 'Linemark.JPG' });
        this.gandySection = page.getByText('Gandy').first();
        this.gandyLink = page.getByRole('link', { name: 'Gandy.JPG' });
        this.snowExSection = page.getByText('SnowEx').first();
        this.snowExLink = page.getByRole('link', { name: 'SnowEx.JPG' });
        this.turfExSection = page.getByText('TurfEx').first();
        this.turfExLink = page.getByRole('link', { name: 'Turf Ex.JPG' });
        this.emailInput = page.locator('input[name="email"]');
        this.emailLink = page.locator('text=turf@andreandson.com').first();
    }

    async navigate() {
        await this.page.goto('/');
        await this.equipmentLink.click();
        await expect(this.page).toHaveURL(/equipment/);
    }

    async verifyHeroTitle(expectedText: string) {
        await expect(this.heroTitle).toHaveText(expectedText);
    }

    async verifyHeroVideo() {
        await expect(this.heroVideoContainer).toBeVisible();
        await expect(this.heroVideoContainer).toHaveAttribute('data-video-info', /.+/);
        await expect(this.heroVideo).toBeVisible();

        const isPaused = await this.heroVideo.evaluate(video => (video as HTMLVideoElement).paused);
        return isPaused;
    }

    async submitForm() {
        // Ensure the SUBMIT button is visible
        await expect(this.submitButton).toBeVisible();

        // Click the SUBMIT button
        await this.submitButton.click();

    }
}