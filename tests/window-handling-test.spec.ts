import { test, expect } from '@playwright/test';

test.describe('Window Handling Validations', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://vinothqaacademy.com/multiple-windows/');
    });

    test('New Tab Test', async({ page }) => {
        const newBrowserTabButton = page.locator('[name="145newbrowsertab234"]');

        const [newTab] = await Promise.all([
            page.waitForEvent('popup'),
            await newBrowserTabButton.click()
        ]);
        await newTab.waitForLoadState();
        await expect(newTab).toHaveURL('https://vinothqaacademy.com/webtable/');

        const pages = newTab.context().pages();
        await pages[1].close();
    });

    test('New Window Test', async({ page }) => {
        const newWindowButton = page.locator('[name="newbrowserwindow123"]');

        const [newWindow] = await Promise.all([
            page.waitForEvent('popup'),
            await newWindowButton.click()
        ]);
        await newWindow.waitForLoadState();
        await expect(newWindow).toHaveURL('https://vinothqaacademy.com/webtable/');

        const pages = newWindow.context().pages();
        await pages[1].close();
    });

    test('New Message Window Test', async({ page }) =>{
        const newMessageWindowButton = page.locator('[name="123newmessagewindow321"]');

        const [newMsgWindow] = await Promise.all([
            page.waitForEvent('popup'),
            await newMessageWindowButton.click()
        ]);
        await newMsgWindow.waitForLoadState();
        await expect(newMsgWindow.locator('body')).toContainText('Welcome to Vinoth Q. A Academy. Happy Learning');

        const pages = newMsgWindow.context().pages();
        await pages[1].close();
    });

    test('New Window-2 Test', async({ page }) => {
        const newWindowLink = page.getByRole('link', {name: 'New Browser Tab Link'});

        const [newLinkWindow] = await Promise.all([
            page.waitForEvent('popup'),
            await newWindowLink.click()
        ]);
        await newLinkWindow.waitForLoadState();
        await expect(newLinkWindow).toHaveURL('https://vinothqaacademy.com/webtable/');

        const pages = newLinkWindow.context().pages();
        await pages[1].close();
    });

    test.afterEach(async({ page }) => {
        await page.close();
    });
});