import {type Locator, type Page} from '@playwright/test';

export class WallPage {
    private page: Page;

    readonly allCategoriesButton:Locator;

    constructor(page: Page){
        this.page = page;
        this.allCategoriesButton= page.getByLabel('Todas las categorías');
    }

    async navigateTo(){
        await this.page.goto('https://es.wallapop.com/wall');
    }
}