import { test, expect } from '@playwright/test';

test('Attributes Test', async ({ page }) => {
    await page.goto('https://saucedemo.com/');

    const usernameTxtFld = page.locator('[placeholder="Username"]');

    const usernameTextField_IDAttribute = await usernameTxtFld.getAttribute('id');
    console.log("Username Text Field ID Attribute Value: ", usernameTextField_IDAttribute);

    await expect(usernameTxtFld).toHaveAttribute("id", "user-name");

    await page.close();
});

