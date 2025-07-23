import { test, expect } from '@playwright/test';

test.describe('Mouse Events Validations', () => {
    test.beforeEach(async({ page }) =>{
        await page.goto('https://vinothqaacademy.com/mouse-event/');
    });

    test('Mouse Click-Enter Text Test',async({ page }) => {
        const textBox = page.locator('[id="textbox"]');
        const testText = 'Testing Mouse Click and Enter Text';

        await textBox.click();
        await textBox.pressSequentially(testText);

        await expect(textBox).toHaveValue(testText);

    });

    test('Mouse Right-Click Test',async({ page }) => {
        await page.locator('[id="rightclick"]').click({'button': 'right'});
        await expect(page.locator('[id="myDiv"]').getByRole('link', {name: 'Registration Form'})).toBeVisible();
    });

    test('Mouse Double-Click Test',async({ page }) => {
        await page.locator('[id="dblclick"]').dblclick();
        await expect(page.locator('[id="demo"]')).toContainText('Double Click Action is Performed');
    });





    test.afterEach(async({ page }) => {
        await page.close();
    });
});