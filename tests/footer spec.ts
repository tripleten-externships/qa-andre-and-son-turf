 this.footerSection = page.locator('footer');
        this.turfproductsfooterlink = page.getByTestId('linkElement-0');
        this.twittericoninfooterlink = page.getByRole('link', { name: 'Twitter' });
        this.facebookiconinfooterlink = page.getByRole('link', { name: 'Facebook' });
        this.instagramiconinfooterlink = page.getByRole('link', { name: 'Instagram' });
        this.andreandsonimage = page.getByRole('img', { name: 'Andre and Son Logo PNG.png' });