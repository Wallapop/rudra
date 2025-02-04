import {type Locator, type Page} from '@playwright/test';

export class BasePage {
    protected page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async cookiesAcceptation(){
        await this.page.getByRole('button', { name: 'Aceptar todo' }).click();
    }
}
