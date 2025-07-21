import { test, expect } from '@playwright/test';

test.describe('Dropdown Validations', () => {
    test.beforeEach(async({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/dropdown');
    });

    test('Dropdown Test-1', async({ page }) => {
        const dropDownMenu = page.locator('[id="dropdown"]');

        await dropDownMenu.selectOption({index: 1});

        const selectedOption = await dropDownMenu.locator('option:checked').textContent();
        console.log("Selected Option: ", selectedOption);
    });

    test('Dropdown Test-2', async({ page }) => {
        const dropDownMenu = page.locator('[id="dropdown"]');

        await dropDownMenu.selectOption('Option 2');

        const selectedOption = await dropDownMenu.locator('option:checked').textContent();
        console.log("Selected Option: ", selectedOption);

        expect(selectedOption).toBe('Option 2');
    });

    test('Dropdown Test-3', async({ page }) => {
        const dropDownMenu = page.locator('[id="dropdown"]');

        await dropDownMenu.selectOption({value: '1'});

        const selectedOption = await dropDownMenu.locator('option:checked').textContent();
        console.log("Selected Option: ", selectedOption);

        expect(selectedOption).toBe('Option 1');
    });

    test('Dropdown Test-4', async({ page }) => {
        const dropDownMenu = page.locator('[id="dropdown"]');

        await dropDownMenu.selectOption({label: 'Option 1'});

        const selectedOption = await dropDownMenu.locator('option:checked').textContent();
        console.log("Selected Option: ", selectedOption);

        expect(selectedOption).toBe('Option 1');
    });


    test.afterEach(async({ page }) => {
        await page.close();
    });
});