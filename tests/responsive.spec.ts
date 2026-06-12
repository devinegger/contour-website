import { test, expect } from '@playwright/test';

test.describe('navigation', () => {
  test('collapses to hamburger on mobile, full links on desktop', async ({ page, isMobile }) => {
    await page.goto('/');
    const links = page.locator('ul.nav-links');
    const hamburger = page.locator('#hamburger-btn');

    if (isMobile) {
      await expect(links).toBeHidden();
      await expect(hamburger).toBeVisible();

      await hamburger.click();
      await expect(page.locator('#mobile-menu')).toBeVisible();
      await expect(page.locator('#mobile-menu .mobile-link').first()).toBeVisible();

      await hamburger.click();
      await expect(page.locator('#mobile-menu')).toBeHidden();
    } else {
      await expect(links).toBeVisible();
      await expect(hamburger).toBeHidden();
    }
  });
});

test.describe('hero', () => {
  test('headline scales with viewport', async ({ page, isMobile }) => {
    await page.goto('/');
    const h1 = page.locator('h1').first();
    await expect(h1).not.toBeEmpty();
    const fontSize = await h1.evaluate((el) => parseFloat(getComputedStyle(el).fontSize));

    if (isMobile) {
      // Display floor is 38px; anything near the old 56px floor is a regression.
      expect(fontSize).toBeGreaterThanOrEqual(34);
      expect(fontSize).toBeLessThanOrEqual(46);
    } else {
      expect(fontSize).toBeGreaterThanOrEqual(56);
    }
  });
});

test.describe('pagespeed widget', () => {
  test('idle state shows only the form — no gauges, no spinner', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#psi-form')).toBeVisible();
    await expect(page.locator('#psi-result')).toBeHidden();
    await expect(page.locator('#psi-loading')).toBeHidden();
  });

  test('invalid URL shows inline error without leaving the page', async ({ page }) => {
    await page.goto('/');
    await page.locator('#psi-url').fill('not a url at all');
    await page.locator('#psi-btn').click();
    await expect(page.locator('#psi-error')).toBeVisible();
    await expect(page.locator('#psi-result')).toBeHidden();
  });
});

test.describe('pages render', () => {
  for (const path of ['/', '/about/', '/services/', '/contact/']) {
    test(`${path} has no horizontal overflow`, async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
});
