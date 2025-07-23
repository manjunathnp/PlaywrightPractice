// Assertions Demo

import {test, expect} from '@playwright/test'

test.describe('Assertions Validations', () => {
    test('Hard Assertions Test', async ({ page }) => {
    const a = 100;
    const b = 200;
    
    expect(a > b).toBeTruthy();
    console.log("This statement wont be printed on the console");
    });

    test('Soft Assertions Test', async ({ page }) => {
    const a = 100;
    const b = 200;
    
    expect.soft(a > b).toBeTruthy();
    console.log("This statement will be printed on the console");
    }); 
});


