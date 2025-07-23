import { test, expect } from '@playwright/test';

test.describe('Hidden Visible Element Validation', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://www.letskodeit.com/practice');
    });

     test('Hidden Element Test', async({ page }) => {
        const hideButton = page.locator('[id="hide-textbox"]');
        const textboxElement = page.locator('id="displayed-text"');

        await hideButton.click();
        await expect(textboxElement).toBeHidden();
    });

    test('Visbile Element Test', async({ page }) => {
        const showButton = page.locator('[id="show-textbox"]');
        const hideButton = page.locator('[id="hide-textbox"]');
        const textboxElement = page.locator('[id="displayed-text"]');

        await hideButton.click();   
        await showButton.click();

        await expect(textboxElement).toBeVisible();
    });

    test.afterEach(async({ page }) => {
        await page.close();
    });
});