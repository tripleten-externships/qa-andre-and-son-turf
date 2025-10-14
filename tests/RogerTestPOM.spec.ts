


//Rotary Decompaction
/*
test('Verify Rotary Decompaction web page', async ({ page }) => {
    await page.goto('https://www.andreandson.com');
    const nav = new NavigationPage(page);
    await nav.verifyRotaryDecompaction();
    //go to andre and son website 

    //hover over contract services

    //click on rotary decompaction

    //verify the page title
});
*/


/*
test('Verify you can hover and click and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await nav.
});
*/


// Footer Tests
// start of Turf Prodcuts

/*
test('Verify Truf Product is clickable and correct', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickTurfProducts();
});

test('Verify you can hover and click Turf King Combo Products and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickTurfComboProducts()
});

test('Verify Dropdown Menu Appears', async ({page}) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.verifyDropdownMenu()
    const rotarydropdown = page.locator("(//p[contains(@id,'comp-igauz7eemoreContainer2label')])")
    await rotarydropdown.isVisible()
});

test('Verify you can hover and click Turf King Fertlizlier and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickTurfFertilizer()
});

test('Verify you can hover and click Turf King Chemicals and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickTurfChemicals()
});

test('Verify you can hover and click Liquid Fertlizer and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickLiquidFertilizer()
});

test('Verify you can hover and click Seed and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickSeed()
});

test('Verify you can hover and click Top Dressing & Bunker Sand and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickDressingandBunkerSand()
});

test('Verify you can hover and click Amendments & Conditioners and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickAmendments()
});

test('Verify you can hover and click Ice Melts and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickMelts()
});
// end of Turf Products tests

// start of Contract Services
test('Verify you can hover and click Contract Services and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickContractServices()
});

test('Verify you can hover and click Conventional Areification and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickConventionalAerification()
});

test('Verify you can hover and click Deep Tine Areification and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickDeepTine()
});

test('Verify you can hover and click Application Services and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickApplicationServices()
});

test('Verify you can hover and click Core Removal and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickCoreRemoval()
});

test('Verify you can hover and click Topdressing and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickTopDressing()
});

test('Verify you can hover and click Seeding and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickSeeding()
});

test('Verify you can hover and click Construction & Renovation and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickConstruction()
});
// end of Contract Services

// start of Equipment
test('Verify you can click Equipment and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickEquipment()
});
// end of Equipment

// start of About
test('Verify you can hover and click Our Story & Team and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.hoverAboutclickStory()
});

test('Verify you can hover and click Sales Team and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.hoverAboutclickSales()
});

test('Verify you can hover and click Photo Gallery and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.hoverAboutclickPhoto()
});

test('Verify you can hover and click Careers and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.hoverAboutclickCareers()
});
// end of About

// start of Contact
test('Verify you can hover and click Contact and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickContact()
});
// end of Contact


// start of Items
test('Verify you can hover and click Items and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.clickItems()
});
// end of Items

// start of Footer tests
test('Verify the footer and other information is visible and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.verifyFooterIsVisible()
});

test('Verify the contact information is correct and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com')
    await nav.verifyContactInfo()
});

test('Verify the Social Media icons and links and that page is accurate', async ({ page }) => {
    const nav = new NavigationPage(page)
    await page.goto('https://www.andreandson.com') 
    await nav.verifySocialMediaLinks()
});
*/
// end of Footer tests