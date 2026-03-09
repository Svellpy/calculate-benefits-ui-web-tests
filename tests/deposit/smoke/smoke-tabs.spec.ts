import { test, expect } from '../../../fixtures';
import { APP_CONFIG } from '../../../config/app.config';

test.describe('Smoke тесты для компонента табов', () => {
    test.beforeEach(async ({ page, tabs }) => {
        await page.goto(APP_CONFIG.baseUrl);
    });

    test('Проверка видимости таба "Вклады"', async ({ tabs }) => {
        await expect(tabs.depositTab).toBeVisible();
    });

    test('Проверка видимости таба "Счета"', async ({ tabs }) => {
        await expect(tabs.accountTab).toBeVisible();
    });

    test('Проверка видимости таба "Кредиты"', async ({ tabs }) => {
        await expect(tabs.creditTab).toBeVisible();
    });

    test('Проверка видимости таба "Ипотека"', async ({ tabs }) => {
        await expect(tabs.mortgageTab).toBeVisible();
    });

    test('Проверка заголовка "Рассчитайте выгоду"', async ({ tabs }) => {
        await expect(tabs.benefitTitle).toBeVisible();
    });

    test('Проверка текста в заголовке "Рассчитайте выгоду"', async ({ tabs }) => {
        await expect(tabs.benefitTitle).toHaveText('Рассчитайте выгоду');
    });
});