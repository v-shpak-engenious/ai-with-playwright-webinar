import { test, expect } from '@playwright/test';

test.describe('Booking.com', () => {
  test.only('should display suggestions for Florida search', async ({ page }) => {
    // await page.addLocatorHandler(page.getByLabel('Dismiss sign-in info.'), async () => {
    //   await page.getByLabel('Dismiss sign-in info.').click();
    // });

    await page.goto('https://www.booking.com/');
    await page.getByRole('button', { name: 'Accept' }).click();
    await page.getByPlaceholder('Where are you going?').fill('Florida');
    await page.getByRole('button', { name: 'Florida United States' }).click();
    await page.getByLabel('2 September 2024', { exact: true }).click();
    await page.getByLabel('8 September 2024', { exact: true }).click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByLabel('Dismiss sign-in info.').click();

    // Assert that we have word Florida in URL
    expect(page.url()).toContain('Florida');

    // Assert that data-testid="filters-sidebar" should be visible
    expect(await page.isVisible('[data-testid="filters-sidebar"]')).toBe(true);

    // Assert that data-testid="sorters-dropdown-trigger" is visible
    expect(await page.isVisible('[data-testid="sorters-dropdown-trigger"]')).toBe(true);

    // Assert that data-testid="property-card" exist more than one
    expect(await page.locator('[data-testid="property-card"]').count()).toBeGreaterThan(1);
  });
});
