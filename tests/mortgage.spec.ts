import { test, expect } from '../fixtures';
import { APP_CONFIG } from '../config/app.config';

test.describe('Рассчитайте выгоду - Ипотека', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(APP_CONFIG.baseUrl);
    });

    test('Открываем вкладку Ипотека и проверяем что она выбрана', async ({ tabs }) => {
        await tabs.mortgageTab.click();
        await expect(tabs.mortgageTab).toHaveAttribute('aria-selected', 'true');
    });
});