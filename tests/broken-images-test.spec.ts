import { test, expect } from '@playwright/test';

test('Broken Links Validations', async({ page,request }) => {
    await page.goto('https://askomdch.com');

    const allImages = page.locator('img');
    const totalImages = await allImages.count();
    console.log("Total Image Count: ", totalImages);

    const brokenImages: string[] = [];
    for(let i=0; i<totalImages; i++){
        const img = allImages.nth(i);
        const src = await img.getAttribute('src');

        if(src){
            try{
                const response = await request.get(src);
                if(response.status() >= 400)
                    brokenImages.push(src);
            }catch{
                brokenImages.push(src);
            }
        }
    }

    console.log("Total Broken Images: ", brokenImages.length);

    console.log("Broken Images: ");
    brokenImages.forEach(brokenImage => {
        console.log(brokenImage);
    })

    await page.close();
});