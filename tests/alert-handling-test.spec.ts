import { test, expect } from '@playwright/test';

test.describe('Alert Handling Validations', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://vinothqaacademy.com/alert-and-popup/');
    });

    test('Alert Test', async({ page }) => {
        const alertBoxButton = page.locator('[name="alertbox"]');
        const alertBoxClickMessage = page.locator('[id="demotwo"]');

        page.on('dialog', async(alert) => {
            const alertMsg = alert.message();
            console.log('Alert Message: ', alertMsg);
            expect(alertMsg).toBe('I am an alert box!');
            
            await alert.accept();
        });
        await alertBoxButton.click();
        expect(await alertBoxClickMessage.textContent()).toBe('You clicked on OK!');
    });

    test('Confirmation-Accept-Alert Test', async({ page }) => {
        const confirmAlertBox = page.locator('[name="confirmalertbox"]');
        const confirmationAlertMsg = page.locator('[id="demo"]');
        
        page.on('dialog', async(alert) => {
            await alert.accept();
        });
        await confirmAlertBox.click();
        expect(await confirmationAlertMsg.textContent()).toBe('You clicked on OK!');

    });

    test('Confirmation-Dismiss-Alert Test', async({ page }) => {
        const confirmAlertBox = page.locator('[name="confirmalertbox"]');
        const confirmationAlertMsg = page.locator('[id="demo"]');
        
        page.on('dialog', async(alert) => {
            await alert.dismiss();
        });
        await confirmAlertBox.click();
        expect(await confirmationAlertMsg.textContent()).toBe('You clicked on Cancel!');

    });

    test('Prompt-Alert-Test', async({ page }) => {
        const inputText = 'Yes';
        const promptAlertButton = page.locator('[name="promptalertbox1234"]');
        const promptAlertMsg = page.locator('[id="demoone"]');
        const promotAlertMsgText = 'Thanks for Liking Automation';

        page.on('dialog', async(dialog) => {
            await dialog.accept(inputText);
        });
        await promptAlertButton.click();
        expect(await promptAlertMsg.textContent()).toBe(promotAlertMsgText);
    });
    

    test.afterEach(async({ page }) => {
        await page.close();
    });
});