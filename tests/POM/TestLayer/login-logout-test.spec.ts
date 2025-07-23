import { test, expect } from '../BaseLayer/baseFixture';
import { credentials } from '../TestDataLayer/credentials';

test('Login and Logout Flow for SauceDemo', async ({ loginPage, homePage }) => {

  await loginPage.login(credentials.validUser.username, credentials.validUser.password);

  expect(await homePage.isProductsPageVisible()).toBeTruthy();

  await homePage.logout();

  await expect(loginPage.usernameField).toBeVisible(); 
});
