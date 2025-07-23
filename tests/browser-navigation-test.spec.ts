import { test, expect } from '@playwright/test';

test.describe('Browser Navigation Validation', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/');
    });

    test('Browser Naviagation Test', async ({ page }) => {
        const inputLink = page.getByRole('link', {name: 'Inputs'});
        await inputLink.click();
        await expect(page).toHaveURL(/.*input/)

        // Backward Navigation
        await page.goBack();
        await expect(page).toHaveURL(/.herokuapp*/);

        // Forward Navigation
        await page.goForward();
        await expect(page).toHaveURL(/.*input/)

        // Reload Page
        await page.reload();
        await expect(page).toHaveURL(/.*input/)
    });
    
    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
});