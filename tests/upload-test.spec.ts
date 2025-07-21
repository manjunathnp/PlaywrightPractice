import { test, expect } from '@playwright/test';

test.describe('File Upload Validations', () => {
    test.beforeEach(async({ page }) => {
        await page.goto('https://testautomationpractice.blogspot.com/');
    });

    test('Single File Uplaod Test',async({ page }) => {
        const multiFileUploadChooser = page.locator('#multipleFilesInput');
        const multiFileUplaodButton = page.locator('button:has-text("Upload Multiple Files")');
        const filePath = './resources/uploads/test.txt';

        await multiFileUploadChooser.setInputFiles(filePath);
        await multiFileUplaodButton.click();

        expect(await page.locator('[id="multipleFilesStatus"]').textContent()).toContain('Multiple files selected');
    });

    test('Multi-File Uplaod', async({ page }) => {
        const multiFileUploadChooser = page.locator('#multipleFilesInput');
        const multiFileUplaodButton = page.locator('button:has-text("Upload Multiple Files")');
        const filePath = [
            './resources/uploads/test.txt',
            './resources/uploads/test2.txt'
        ];

        await multiFileUploadChooser.setInputFiles(filePath);
        await multiFileUplaodButton.click();
        
        expect(await page.locator('[id="multipleFilesStatus"]').textContent()).toContain('Multiple files selected');
    });

    test.afterEach(async({ page }) => {
        await page.close();
    });
});