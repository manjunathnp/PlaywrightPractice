// Text Match/Mismatch

import {test, expect} from '@playwright/test'

test.describe('Text Match/Mismatch Demo', ()=>{
    test.beforeEach(async({page})=>{
        await page.goto('https://www.letskodeit.com/practice')
    });

    test('Text Match/Mismatch Test', async({page})=>{
        const openWindowButton = page.getByRole('button', {name: 'Open Window'});
        await expect(openWindowButton).toHaveText('Open Window');
        await expect(openWindowButton).not.toHaveText('OPEN WINDOW');
    });

    test.afterEach(async({page})=>{
        await page.close();
    });
});