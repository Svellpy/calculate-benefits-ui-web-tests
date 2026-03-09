import { Page, Locator } from '@playwright/test';

export class TabsComponent {
    private readonly root: Locator;

    // Ограничиваем область поиска локаторов рамкой всего калькулятора, 
    // чтобы не было пересечений с другими формами на странице
    constructor(private readonly page: Page) {
        this.root = page.locator('[data-test-id="calculator-layout"]');
    }

    get depositTab(): Locator {
        return this.page.locator('[data-test-id="TabsHeader-deposit"]');
    }

    get accountTab(): Locator {
        return this.page.locator('[data-test-id="TabsHeader-savings"]');
    }

    get creditTab(): Locator {
        return this.page.locator('[data-test-id="TabsHeader-pil"]');
    }

    get mortgageTab(): Locator {
        return this.page.locator('[data-test-id="TabsHeader-mrt"]');
    }

    get benefitTitle(): Locator {
        return this.page.getByRole('heading', { name: 'Рассчитайте выгоду' });
    }
}