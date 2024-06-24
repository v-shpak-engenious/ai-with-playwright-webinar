
//yarn playwright codegen     

// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await page.getByRole('link', { name: 'Get started' }).click();
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
//   await page.getByLabel('Search').click();
//   await page.getByPlaceholder('Search docs').fill('asse');
//   await page.getByRole('option', { name: 'Assertions', exact: true }).getByRole('link').click();
//   await expect(page.locator('h1')).toContainText('Assertions');
// });

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await page.getByLabel('Search').click();
  await page.getByPlaceholder('Search docs').fill('asse');
  await page.getByRole('option', { name: 'Assertions', exact: true }).getByRole('link').click();
  await expect(page.locator('h1')).toContainText('Assertions');
});