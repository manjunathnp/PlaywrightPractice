import { Page, Locator } from '@playwright/test';

export class HomePage{
    readonly page: Page;
    readonly menuButton: Locator;
    readonly logoutLink: Locator;

    constructor(page: Page){
        this.page = page;
        this.menuButton = page.locator('#react-burger-menu-btn');
        this.logoutLink = page.locator('#logout_sidebar_link');
    }

    async logout(){
        this.menuButton.click();
        this.logoutLink.click();
    }

    async isProductsPageVisible(): Promise<boolean>{
        return this.page.locator('.title').isVisible();
    }

}