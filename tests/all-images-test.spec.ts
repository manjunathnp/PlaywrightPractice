import { test, expect } from '@playwright/test';

test.describe('All Images Validations', () => {
    test.beforeEach(async({ page }) => {
        await page.goto('https://askomdch.com');
    });

    test('All Images Test-1', async({ page }) => {
        const allImages = page.locator('img');
        const totalImages = await allImages.count();
        console.log('Total Images Count: ', totalImages);

        const imagesURL:string[] = [];
        for(let i=0; i<totalImages; i++){
            const img = allImages.nth(i);
            const imgSrc = await img.getAttribute('src');

            if(imgSrc){
                const fullURL = new URL(imgSrc, page.url()).href;
                imagesURL.push(fullURL);
            }
        }
        imagesURL.forEach(imgURL => console.log(imgURL));
    }); 
    
    test.afterEach(async({ page }) => {
        await page.close();
    });
});