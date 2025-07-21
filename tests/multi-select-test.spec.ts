import { test, expect } from '@playwright/test';

test.describe('Dropdown Validations', () => {
    test.beforeEach(async({ page }) => {
        await page.goto('https://www.letskodeit.com/practice');
    });

    test('Multi-Select Test-1', async({ page }) => {
        const multiSelectDropdown = page.locator('[id="multiple-select-example"]')
        const options = ["Apple", "Peach"];

        await multiSelectDropdown.selectOption(options);

        const selectedOptions = await multiSelectDropdown.locator('option:checked').allTextContents();
        expect(selectedOptions.length).toBe(2);
        // expect(selectedOptions).toContain('Apple');
        // expect(selectedOptions).toContain('Peach');
        expect(selectedOptions).toEqual(expect.arrayContaining(options));

    });





    test.afterEach(async({ page }) => {
        await page.close();
    });
});