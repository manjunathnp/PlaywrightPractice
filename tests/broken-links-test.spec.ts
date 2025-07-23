import { test, expect } from '@playwright/test';

test('Broken Links Validations', async({ page,request }) => {
    await page.goto('https://askomdch.com');

    const allLinks = page.locator('a');
    const totalLinks = await allLinks.count();

    const brokenLinks: string[] = [];
    for(let i=0; i<totalLinks; i++){
        const link = allLinks.nth(i);
        const href = await link.getAttribute('href');

        if(href){
            try{
                const response = await request.get(href);
                if(response.status() >= 400)
                    brokenLinks.push(href);
            }catch{
                brokenLinks.push(href);
            }
        }
    }

    console.log("Total Broken Links: ", brokenLinks.length);

    console.log("Broken Links: ");
    brokenLinks.forEach(link => {
        const fullURL = new URL(link, page.url()).href;
        console.log(fullURL);
    })

    await page.close();
});