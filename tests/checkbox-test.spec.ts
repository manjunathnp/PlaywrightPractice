import { test, expect } from '@playwright/test';

test.describe('Checkbox Selection Validations', () => {
    test.beforeEach(async({ page }) =>{
        await page.goto('https://vinothqaacademy.com/demo-site/');
    });

    test('Checkbox Test-1', async({ page }) =>{
        const devOpsCheckBox = page.locator('[id="vfb-20-3"]');
        const othersCheckBox = page.locator('[id="vfb-20-5"]');

        const othersCheckBoxStatus = await othersCheckBox.isChecked();
        const devOpsCheckBoxStatus = await devOpsCheckBox.isChecked();

        expect(devOpsCheckBoxStatus).toBe(true);

        if(othersCheckBoxStatus===false){
            await othersCheckBox.check();
        }
        expect(await othersCheckBox.isChecked()).toBe(true);
    });

    test.afterEach(async({ page }) =>{
        await page.close();
    });
})