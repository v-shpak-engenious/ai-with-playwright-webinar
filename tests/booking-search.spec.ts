import { test, expect } from '@playwright/test';

test.describe('Booking.com Search Functionality', () => {
  test.only('TC_Booking_Search_01 - Search for Hotels in Florida @booking', async ({ page }) => {
    // Step 1: Open the Booking.com homepage
    await page.goto('https://www.booking.com');

    // Step 2: Accept cookies if prompted
    const acceptCookiesButton = page.locator('button', { hasText: 'Accept' });
    if (await acceptCookiesButton.isVisible()) {
      await acceptCookiesButton.click();
    }

    // Step 3: Locate the search input field labeled "Where are you going?" and enter "Miami"
    const destinationInput = page.locator('input[name="ss"]');
    await destinationInput.fill('Miami');
    await page.getByRole('button', { name: 'Miami Florida, United States' }).click();

    const checkInDateSelector = page.locator('td[role="gridcell"] >> text="1"').nth(1);
    await checkInDateSelector.click();

    // Select the check-out date (September 10, 2024)
    // Click the first matching cell with "10" if multiple matches exist

    //getByLabel('1 September 2024', { exact: true })
    //getByLabel('10 September')
    const checkOutDateSelector = page.locator('td[role="gridcell"] >> text="10"').nth(1);
    await checkOutDateSelector.click();

    const searchButtonLocator = page.locator('button[type="submit"]');
    await searchButtonLocator.click();

    //FINISH THIS TEST FROM HERE ->
  });
});

//? Test Steps:
// Open the Booking.com homepage.
// Accept cookies
// Locate the search input field labeled "Where are you going?"
// Enter "Miami" into the search input field.
// Select the check-in and check-out dates from the calendar.
// Choose the number of guests and rooms.
// Click the "Search" button.
// Wait for the search results page to load.

//? Expected Results:
// The search results page should load successfully.
// The page should display a list of hotels located in Miami.
// The "Sort by" options and filters should be visible on the page.
