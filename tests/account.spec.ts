import { test, expect } from '../fixtures';
import { APP_CONFIG } from '../config/app.config';

test.describe('Рассчитайте выгоду - Счёт', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(APP_CONFIG.baseUrl);
    });

    test('Открываем вкладку Счёт и проверяем что она выбрана', async ({ tabs }) => {
        await tabs.accountTab.click();
        await expect(tabs.accountTab).toHaveAttribute('aria-selected', 'true');
    });
});