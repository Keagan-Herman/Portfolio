import { test, expect } from '@playwright/test';
import path from 'path';

test.use({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});

test('capture redesigned editorial sections', async ({ page }) => {
  // Navigate to the site
  await page.goto('http://localhost:3000');

  // Wait for initial load
  await page.waitForTimeout(2000);

  // 1. Capture Experience Section (Technical Report Layout)
  const experienceSection = page.locator('#experience');
  await experienceSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000); // Wait for animations
  await experienceSection.screenshot({ path: '/home/jules/verification/screenshots/experience_report.png' });

  // Hover over an experience item to show the "READ" cursor and background highlight
  const firstExpItem = experienceSection.locator('[data-hover]').first();
  await firstExpItem.hover();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/experience_report_hover.png' });

  // 2. Capture Contact Section (Letterpress Card & Colophon)
  const contactSection = page.locator('#contact');
  await contactSection.scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/contact_letterpress.png' });

  // Hover over a contact link
  const firstContactLink = contactSection.locator('a[data-hover]').first();
  await firstContactLink.hover();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/home/jules/verification/screenshots/contact_hover.png' });
});
