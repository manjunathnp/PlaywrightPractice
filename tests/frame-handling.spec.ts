import { test, expect } from '@playwright/test';

test.describe('Frames Validations', () => {
    test.beforeEach(async({ page }) =>{
        await page.goto('https://the-internet.herokuapp.com/nested_frames');
    });

    test('Frame Test-1',async({ page }) => {
        const totalFrames = page.frames().length;
        console.log("Total Frames: ", totalFrames);

        // LEFT-Frame - using 'Frame Name'
        const leftFrame = page.frame('frame-left');
        const leftFrameTextArea = await leftFrame?.textContent('body');
        expect(leftFrameTextArea).toContain('LEFT')

        // Bottom-Frame - using 'URL'
        const bottomFrame = page.frame({'url': /.*bottom/});
        const bottomFrameArea = await bottomFrame?.textContent('body');
        expect(bottomFrameArea).toContain('BOTTOM');

    });

    test.afterEach(async({ page }) => {
        await page.close();
    });
});