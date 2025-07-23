// Enabled Disabled Element Validations Demo

import { test, expect } from '@playwright/test';

test.describe('Enabled Disabled Element Validation', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://practice.expandtesting.com/radio-buttons');
    });

     test('Enabled Element Test', async({ page }) => {
        const redColorRadioButton = page.locator('[id="red"]');
        await expect(redColorRadioButton).toBeEnabled();
    });

    test('Disabled Element Test', async({ page }) => {
        const greenColorRadioButton = page.locator('[id="green"]');
        await expect(greenColorRadioButton).toBeDisabled();
    });

    test.afterEach(async({ page }) => {
        await page.close();
    });
});