import { APP_CONFIG } from '../../../config/app.config';
import { test, expect } from '../../../fixtures';

test.describe('Тест-кейс 1: Поле ввода суммы вклада', () => {
    test.beforeEach(async ({ page, tabs }) => {
        await page.goto(APP_CONFIG.baseUrl);
        await tabs.depositTab.click();
    });

    test('1.1 Проверка состояния (данные по умолчанию)', async ({ depositForm }) => {
        // Проверяем заголовок
        await expect(depositForm.ourOffer).toBeVisible();
        
        // Проверяем дисклеймер под полем
        await expect(depositForm.amountHint).toContainText('от 10 000 ₽');
        
        // Проверяем данные по умолчанию
        await expect(depositForm.amountInput).toHaveValue('300 000');
        await expect(depositForm.newMoneySwitch).toBeChecked();
        await expect(depositForm.capitalizationSwitch).toBeChecked();
    });

    test('1.2 Клик по полю появляется курсор', async ({ depositForm }) => {
        await depositForm.amountInput.click();
        await expect(depositForm.amountInput).toBeFocused();
    });

    test('1.3 Ввод валидной суммы обновляет таблицу', async ({ depositForm }) => {
        const testAmount = '500000';
        const expectedFormatted = '500 000';
        
        await depositForm.amountInput.fill(testAmount);
        await expect(depositForm.amountInput).toHaveValue(expectedFormatted);
        
        // Проверяем что суммы в таблице изменились (не остались старыми)
        const incomeText = await depositForm.incomeForAll.textContent();

        // старая сумма для 300k
        expect(incomeText).not.toContain('10 950');
    });
});