import { test, expect, chromium } from '@playwright/test';

test.describe('Video Recordings Validations', () => {
    test('Video Recording Test', async({}) => {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            recordVideo: {
                dir: './screen-recordings/',
                size: { width: 1280, height: 720 }
            }
        });

        const page = await context.newPage();
        await page.goto('https://askomdch.com');
        await page.getByRole('link', { name: 'Shop Now' }).first().click();
        await expect(page.locator('h1')).toContainText('Store');

        await context.close();
        await browser.close();

    });
});