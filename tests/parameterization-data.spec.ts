import { test, expect } from '@playwright/test';

const credentials = [
    {
        "username": "standard_user",
        "password": "secret_sauce"
    },
    {
        "username": "visual_user",
        "password": "secret_sauce"
    }
]

credentials.forEach(data => {
        test(`Validations for the User: ${data.username}`, async()=>{
            console.log(`Logged in Using: ${data.username} | ${data.password}`);
        });
    })
credentials.forEach((data) => {
    test(`Test for the ${data.username}`, async({ page }) =>{

        await page.goto("https://www.saucedemo.com/");
        const usernameTextField = page.locator('[data-test="username"]');
        const passwordTextField = page.locator('[data-test="password"]');
        const loginButton = page.locator('[data-test="login-button"]');
        const productsText = page.locator('[data-test="title"]');
    
        await usernameTextField.pressSequentially(data.username);
        await passwordTextField.pressSequentially(data.password);
    
        await loginButton.click();
        await expect(productsText).toBeVisible();
    
        await page.close();
    });
})

