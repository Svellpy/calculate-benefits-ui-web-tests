import { Page, Locator } from '@playwright/test';

// Страница 'Как открыть вклад' 
export class HowToOpenPage {
    constructor(private readonly page: Page) { }

    // Заголовок секции
    get howToOpenHeading(): Locator {
        return this.page.getByRole('heading', { name: 'Как открыть вклад' });
    }
}