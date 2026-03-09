import { APP_CONFIG } from '../../../config/app.config';
import { test, expect } from '../../../fixtures';

test.describe('Тест-кейс 3: Переключатели условий', () => {
    test.beforeEach(async ({ page, tabs }) => {
        await page.goto(APP_CONFIG.baseUrl);
        await tabs.depositTab.click();
    });

    test('3.1 Выключение тоггла "Новые деньги"', async ({ depositForm }) => {
        const rateBefore = await depositForm.rateForAll.textContent();

        await depositForm.newMoneySwitch.click({ force: true });
        await expect(depositForm.newMoneySwitch).not.toBeChecked();

        // Ждем изменения ставки (или дохода/суммы)
        await expect(depositForm.rateForAll).not.toHaveText(rateBefore!);
        await expect(depositForm.rateForAll).toHaveText(/\d+,\d+%/);
    });

    test('3.2 Выключение тоггла "Без вывода процентов"', async ({ depositForm }) => {
        const rateBefore = await depositForm.rateForAll.textContent();

        await depositForm.capitalizationSwitch.click();

        const checkbox = depositForm.capitalizationSwitch.locator('input[type="checkbox"]');
        await expect(checkbox).not.toBeChecked();

        await expect(depositForm.rateForAll).not.toHaveText(rateBefore!);
        await expect(depositForm.rateForAll).toHaveText(/\d+,\d+%/);
    });

    test('3.3 Появление подсказки для "Новые деньги"', async ({ depositForm }) => {
        await depositForm.iIconNewMoney.hover({ force: true });

        await expect(depositForm.newMoneyTooltip).toBeVisible({ timeout: 5000 });
    });

    test('3.4 Появление подсказки для "Без вывода процентов"', async ({ depositForm }) => {
        await depositForm.iIconCapitalization.hover({ force: true });

        await expect(depositForm.capitalizationTooltip).toBeVisible({ timeout: 5000 });
    });

    test('3.5 Проверка видимости элементов', async ({ depositForm }) => {
        await expect(depositForm.conditionsTitle).toBeVisible();
        await expect(depositForm.newMoney).toBeVisible();
        await expect(depositForm.capitalization).toBeVisible();
        await expect(depositForm.iIconNewMoney).toBeVisible();
        await expect(depositForm.iIconCapitalization).toBeVisible();
    });
});