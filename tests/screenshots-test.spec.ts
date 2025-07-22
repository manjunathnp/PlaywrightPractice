import { test, expect } from '@playwright/test';

test.describe('Screenshots Validations', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://askomdch.com/');
    });

    test('Default Screenshot Test', async({ page }) => {
        await page.screenshot({path: './screenshots/defaultSS.png'});
    });

    test('Full Page Screenshot Test', async({ page }) => {
        await page.screenshot({path: './screenshots/fullPageSS.png', fullPage: true});
    });

    test('Element Level Screenshot Test', async({ page }) => {
        const logo = page.getByRole('link', { name: 'AskOmDch' });
        await logo.screenshot({path: './screenshots/elementSS.png'});
    });

    test.afterEach(async({ page }) => {
        await page.close();
    });
});