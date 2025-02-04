import {type Locator, type Page} from '@playwright/test';
import { BasePage } from './BasePage';

export class WallPage extends BasePage{
    
    readonly allCategoriesButton:Locator;

    constructor(page:Page){
        super(page);
        this.allCategoriesButton = this.page.getByLabel('Todas las categorías');
    }

    async navigateTo(){
        await this.page.goto('https://es.wallapop.com/');
    }

    async clickAllCategories(){
        await this.allCategoriesButton.click();
    }
}