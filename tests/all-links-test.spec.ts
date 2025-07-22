import { test, expect } from '@playwright/test';

test.describe('All Links Validations', () => {

    test.beforeEach(async({ page }) => {
        await page.goto('https://vinothqaacademy.com/demo-site/')
    });

    test('All Links Test', async({ page }) => {
        const allLinks = page.locator('a');
        const totalLinks = await allLinks.count();
        console.log(`All Links Count: ${totalLinks}`);

        const links:string[] = [];
        for(let i=0; i<totalLinks; i++){
            const link = allLinks.nth(i);
            const href = await link.getAttribute('href');

            if(href){
                const fullURL = new URL(href, page.url()).href;
                links.push(fullURL);
            }
        }
        console.log("URL Links: ");
        links.forEach(urlLink => console.log(urlLink));
    });

    test.afterEach(async({ page }) => {
        await page.close();
    });
});