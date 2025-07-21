import { test, expect } from '@playwright/test';
import { error } from 'console';
import * as fs from 'fs/promises';

test.describe('File Download Validations', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/download');
    });

    test('File Download Test', async({ page }) => {
        const fileName = 'file.json';
        const downloadDir = './resources/downloads/';
        const filePath = downloadDir+fileName;

        const downloadPromise = page.waitForEvent('download');
        await page.getByText(fileName).click();
        const download = await downloadPromise;

        await download.saveAs(downloadDir+download.suggestedFilename());

        await verifyFileExists(filePath);

        async function verifyFileExists(filePath:string) {
            try{
                await fs.access(filePath);
                console.log(`File named '${download.suggestedFilename()}' exists in ${filePath}`);

            }catch{
                console.error('No such file found');
                throw new Error('File not found')
            }
        }

    });

    test.afterEach(async({ page }) => {
        await page.close();
    })
});