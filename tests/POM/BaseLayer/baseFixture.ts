import { test as baseFixture } from '@playwright/test';
import { LoginPage } from '../PageLayer/LoginPage';
import { HomePage } from '../PageLayer/HomePage';

type Pages = {
    loginPage: LoginPage;
    homePage: HomePage;
}

export const test = baseFixture.extend<Pages>({
    loginPage: async({ page }, use) => {
        await use(new LoginPage(page));
    },

    homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
});

// Setup
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

// Teardown
test.afterEach(async ({ page }) => {
    await page.close();
});

export { expect } from '@playwright/test';
