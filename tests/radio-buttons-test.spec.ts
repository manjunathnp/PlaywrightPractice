import { test, expect } from '@playwright/test';

test.describe('Radio Buttons Validation', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://vinothqaacademy.com/demo-site/');
    });

    test('Radio Button Test', async ({ page }) => {
        const maleRadioButton = page.getByRole('radio', {name: 'Male', exact: true});
        const femaleRadioButton = page.getByRole('radio', {name: 'Female', exact: true});
        const otherRadioButton = page.getByRole('radio', {name: 'Other', exact: true});

        if(!await maleRadioButton.isChecked()){
            await maleRadioButton.check();
            await expect(maleRadioButton).toBeChecked();
        }

        if(!await femaleRadioButton.isChecked()){
            await femaleRadioButton.check();
            await expect(femaleRadioButton).toBeChecked();
        }

        if(!await otherRadioButton.isChecked()){
            await otherRadioButton.check();
            await expect(otherRadioButton).toBeChecked();
        }
    });
    
    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
});