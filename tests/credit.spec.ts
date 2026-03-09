import { test, expect } from '../fixtures';
import { APP_CONFIG } from '../config/app.config';

test.describe('Рассчитайте выгоду - Кредит', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(APP_CONFIG.baseUrl);
    });

    test('Открываем вкладку Кредит и проверяем что она выбрана', async ({ tabs }) => {
        await tabs.creditTab.click();
        await expect(tabs.creditTab).toHaveAttribute('aria-selected', 'true');
    });
});