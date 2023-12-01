import { expect, test } from '@playwright/test';

test.describe('Clock', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Page has clock container', async ({ page }) => {
    await expect(page.locator('.clock')).toBeVisible();
  });

  test('Page has 4 digits and 1 dots SVG container', async ({ page }) => {
    await expect(page.locator('main svg')).toHaveCount(5);
  });

  test('Page has 28 polygons', async ({ page }) => {
    await expect(page.locator('main polygon')).toHaveCount(28);
  });

  test('Page has 2 circles', async ({ page }) => {
    await expect(page.locator('main circle')).toHaveCount(2);
  });
});
