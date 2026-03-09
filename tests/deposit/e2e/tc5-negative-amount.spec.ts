import { APP_CONFIG } from '../../../config/app.config';
import { test, expect } from '../../../fixtures';

test.describe('Тест-кейс 5: [негатив] Поле ввода суммы вклада', () => {
    test.beforeEach(async ({ page, tabs }) => {
        await page.goto(APP_CONFIG.baseUrl);
        await tabs.depositTab.click();
    });

    test('5.1 Ввод суммы меньше минимальной', async ({ page, depositForm }) => {
        await depositForm.amountInput.fill('7000');

        // Убираем фокус с поля (табом или кликом в другое место)
        await depositForm.termTitle.click();

        // Проверяем что сумма округлилась до минимума
        await expect(depositForm.amountInput).toHaveValue('9 999');

        // Проверяем что хинт стал красным и изменил текст
        await expect(depositForm.errorAmountHint).toHaveText('Вклад доступен от 10 000 ₽');
        await expect(depositForm.errorAmountHint).toHaveCSS('color', 'rgb(239, 49, 36)');

        // Проверяем появление вопросительного знака
        await expect(depositForm.warningIcon).toBeVisible();
    });

    test('5.2 Ввод суммы больше максимальной', async ({ depositForm }) => {
        // Пытаемся ввести 10 цифр
        await depositForm.amountInput.fill('1000000000');

        // Проверяем что поле не позволяет ввести больше 9 символов
        const value = await depositForm.amountInput.inputValue();
        expect(value.replace(/\s/g, '').length).toBeLessThanOrEqual(9);
    });
});