/* Sales Team Test Case 65: Verify that all titles and descriptions use consistent fonts, colors, and formatting according to the design standard.
   This test validates actual font properties and will FAIL if fonts are inconsistent.
*/

import { test, expect } from '@playwright/test';

interface FontProperties {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  color: string;
}

test('Verify font consistency on Sales Team page', async ({ page }, testInfo) => {
  // Navigate to home page
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  console.log('DEBUG: Starting font consistency test on Sales Team page');
  await page.screenshot({ path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}_initial.png`, fullPage: true });

  // Navigate to Sales Team page
  const aboutButton = page.getByRole('button', { name: 'ABOUT', exact: true });
  await aboutButton.waitFor({ state: 'visible', timeout: 5000 });
  await aboutButton.click();

  const salesTeamLink = page.getByRole('link', { name: 'SALES TEAM' });
  await salesTeamLink.waitFor({ state: 'visible', timeout: 5000 });
  await salesTeamLink.click();

  // Wait for page to load
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(2000); // Allow time for fonts to load

  console.log('DEBUG: On Sales Team page, analyzing font consistency');
  await page.screenshot({ path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}_salesteam_page.png`, fullPage: true });

  // Function to get computed font properties
  const getFontProperties = async (selector: string): Promise<FontProperties[]> => {
    const elements = await page.locator(selector).all();
    const properties: FontProperties[] = [];
    
    for (const element of elements) {
      const isVisible = await element.isVisible();
      if (isVisible) {
        const props = await element.evaluate((el) => {
          const computed = window.getComputedStyle(el);
          return {
            fontFamily: computed.fontFamily,
            fontSize: computed.fontSize,
            fontWeight: computed.fontWeight,
            color: computed.color
          };
        });
        properties.push(props);
      }
    }
    return properties;
  };

  // Test 1: Check all headings (h1, h2, h3) have consistent font families
  console.log('Testing heading font consistency...');
  const headings = await getFontProperties('h1, h2, h3');
  
  if (headings.length > 1) {
    const firstHeadingFont = headings[0].fontFamily;
    console.log(`First heading font family: ${firstHeadingFont}`);
    
    for (let i = 1; i < headings.length; i++) {
      console.log(`Heading ${i + 1} font family: ${headings[i].fontFamily}`);
      expect(headings[i].fontFamily, `Heading ${i + 1} should have consistent font family`).toBe(firstHeadingFont);
    }
  }

  // Test 2: Check all paragraph text has consistent font families
  console.log('Testing paragraph font consistency...');
  const paragraphs = await getFontProperties('p');
  
  if (paragraphs.length > 1) {
    const firstParagraphFont = paragraphs[0].fontFamily;
    console.log(`First paragraph font family: ${firstParagraphFont}`);
    
    for (let i = 1; i < paragraphs.length; i++) {
      console.log(`Paragraph ${i + 1} font family: ${paragraphs[i].fontFamily}`);
      
      // Highlight paragraph 8 when the error occurs
      if (i === 7) { // This is paragraph 8
        const paragraph8Element = page.locator('p').nth(7);
        await paragraph8Element.evaluate(element => {
          element.style.border = '5px solid #FF0000';
          element.style.backgroundColor = '#FFE6E6';
          element.style.padding = '10px';
          element.style.borderRadius = '5px';
        });
        
        console.log('Paragraph 8 highlighted - waiting 10 seconds for presentation...');
        await page.waitForTimeout(10000);
      }
      
      expect(paragraphs[i].fontFamily, `Paragraph ${i + 1} should have consistent font family`).toBe(firstParagraphFont);
    }
  }

  // Test 3: Check title elements specifically
  console.log('Testing title font consistency...');
  const titles = await getFontProperties('[class*="title"], [class*="heading"], .name, .position');
  
  if (titles.length > 1) {
    const firstTitleFont = titles[0].fontFamily;
    console.log(`First title font family: ${firstTitleFont}`);
    
    for (let i = 1; i < titles.length; i++) {
      console.log(`Title ${i + 1} font family: ${titles[i].fontFamily}`);
      expect(titles[i].fontFamily, `Title ${i + 1} should have consistent font family`).toBe(firstTitleFont);
    }
  }

  // Test 4: Verify font weights are consistent within similar element types
  console.log('Testing font weight consistency...');
  if (headings.length > 1) {
    const firstHeadingWeight = headings[0].fontWeight;
    console.log(`First heading font weight: ${firstHeadingWeight}`);
    
    for (let i = 1; i < headings.length; i++) {
      console.log(`Heading ${i + 1} font weight: ${headings[i].fontWeight}`);
      expect(headings[i].fontWeight, `Heading ${i + 1} should have consistent font weight`).toBe(firstHeadingWeight);
    }
  }

  // Log all font properties for debugging
  console.log('=== FONT ANALYSIS SUMMARY ===');
  console.log('Headings found:', headings.length);
  console.log('Paragraphs found:', paragraphs.length);
  console.log('Titles found:', titles.length);
  
  headings.forEach((heading, index) => {
    console.log(`Heading ${index + 1}: ${heading.fontFamily} | ${heading.fontSize} | ${heading.fontWeight}`);
  });

  paragraphs.forEach((paragraph, index) => {
    console.log(`Paragraph ${index + 1}: ${paragraph.fontFamily} | ${paragraph.fontSize} | ${paragraph.fontWeight}`);
  });

  // Take final screenshot with highlighting
  await page.screenshot({ path: `test-results/${testInfo.title.replace(/[^a-z0-9]/gi, '_')}_final_highlighted.png`, fullPage: true });
  
  console.log('Font consistency test completed with highlighting');
});
