import { test, expect } from '@playwright/test';

test.describe('Enter Text Validation', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    });

     test('Enter Text using fill() Test', async({ page }) => {
        const usernameTextField = page.getByRole('textbox', {name: 'Username'});
        const loginButton = page.getByRole('button', {name: 'Login'});
        const errorMsgContainer = page.locator('[class="error-message-container error"]');

        await usernameTextField.fill('testing')
        await loginButton.click();

        expect(await errorMsgContainer.textContent()).toBe('Epic sadface: Password is required');
    });

    test('Enter Text using keyboard.insertText() Test', async({ page }) => {
        const usernameTextField = page.getByRole('textbox', {name: 'Username'});
        const loginButton = page.getByRole('button', {name: 'Login'});
        const errorMsgContainer = page.locator('[class="error-message-container error"]');

        await usernameTextField.focus();
        await page.keyboard.insertText('tester');
        await loginButton.click();

        expect(await errorMsgContainer.textContent()).toBe('Epic sadface: Password is required');
    });

    test('Enter Text using pressSequentially() Test', async({ page }) => {
        const usernameTextField = page.getByRole('textbox', {name: 'Username'});
        const loginButton = page.getByRole('button', {name: 'Login'});
        const errorMsgContainer = page.locator('[class="error-message-container error"]');

        await usernameTextField.click();
        await usernameTextField.pressSequentially('test')
        await loginButton.click();

        expect(await errorMsgContainer.textContent()).toBe('Epic sadface: Password is required');
    });

    test.afterEach(async({ page }) => {
        await page.close();
    });
});