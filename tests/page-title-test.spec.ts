import { test, expect } from '@playwright/test';

test.describe('Page Title Validation', () => {
    
    test.beforeEach(async ({ page }) => {
        await page.goto('https://parabank.parasoft.com/parabank/admin.htm');
    });

    test('Title Test-1', async ({ page }) => {
        const aboutUsLink = page.getByRole('link', {name: 'About Us'});
        await aboutUsLink.nth(1).click();

        await expect(page).toHaveTitle('ParaBank | About Us');
    });

    test('Title Test-2', async ({ page }) => {
        const locationsLink = page.getByText('Locations');
        await locationsLink.nth(1).click();
        
        await expect(page).toHaveTitle(/.*Automated Software Testing*/);
    });

    test('Title Test-3', async ({ page }) => {
        const productsLink = page.getByText('Products');
        await productsLink.nth(1).click();

        const pageTilte = page.title();
        
        expect(await pageTilte).toBe('Automated Software Testing Tools - Ensure Quality - Parasoft');
    });
    

    test.afterEach(async ({ page }) => {
        await page.close();
    });
    
    
    
})
