import { test, expect } from '@playwright/test';
//yarn playwright test --project firefox    

test('should display suggestions for Florida search', async ({ page }) => {
  await page.goto('https://www.booking.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByPlaceholder('Where are you going?').fill('Florida');
  await page.getByRole('button', { name: 'Florida'}).nth(0).click();
  await page.getByLabel('15 July').click();
  await page.getByLabel('21 July').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByLabel('Dismiss sign-in info.').click();
  await expect(page.getByRole('tab', { name: 'Beaches' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Relax in nature' })).toBeVisible();
  await expect(page.getByRole('tab', { name: 'Romantic' })).toBeVisible();
  await expect(page.getByTestId('TripTypeRecommendations')).toContainText('Get inspiration for your next trip');
});

test('should diplay offers and promotions', async ({ page }) => {
  await page.goto('https://www.booking.com/');
  await page.getByRole('button', { name: 'Accept' }).click();
  await expect(page.getByText('Offers', { exact: true })).toBeVisible();
  await expect(page.getByText('Promotions, deals, and')).toBeVisible();
});






// test.only('should display Booking.com logo', async ({ page }) => {
//   await page.goto('https://www.booking.com/');
//   await page.getByRole('button', { name: 'Accept' }).click();
//   //await expect(page.getByRole('img', { name: 'Booking.com logo' })).toBeVisible();
//   await expect(page.getByTestId('header-booking-logo')).toBeVisible()
// });

// //add visial regression test for booking.com
// test('should pass visual regression test for booking.com', async ({ page }) => {
//   await page.goto('https://www.booking.com/');
//   await page.getByRole('button', { name: 'Accept' }).click();
//   const screenshot = await page.screenshot();
//   // Compare the screenshot with a reference image using a visual regression tool
//   // For example, you can use a tool like Playwright's built-in visual regression testing
//   // await expect(screenshot).toMatchSnapshot('booking-homepage');
// });

//