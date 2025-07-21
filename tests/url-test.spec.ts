import { test, expect } from '@playwright/test';

test.describe('URL Validations', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://www.saucedemo.com/')    
    });
    test('Print URL Test', async({ page }) => {
        const pageURL = page.url();
        console.log("Page URL: ", pageURL);
    });

    test('URL Test-1', async({ page }) => {
        await expect(page).toHaveURL('https://www.saucedemo.com/');
    });

    test('URL Test-2', async({ page }) => {
        expect(page.url()).toBe('https://www.saucedemo.com/');
    });

    test('URL Test-3', async({ page }) =>{
        await expect(page).toHaveURL(/.*sauce/);
    });

    test.afterEach(async({ page }) => {
       await page.close(); 
    });
});