import { test, expect } from '../../../fixtures';
import { APP_CONFIG } from '../../../config/app.config';

test.describe('SMOKE: Основные элементы на странице Вклада', () => {
    test.beforeEach(async ({ page, tabs }) => {
        await page.goto(APP_CONFIG.baseUrl);
        await tabs.depositTab.click();
    });

    // Поле ввода и подсказки
    test('Поле ввода суммы видимо', async ({ depositForm }) => {
        await expect(depositForm.amountInput).toBeVisible();
    });

    test('Хинт под полем ввода видим', async ({ depositForm }) => {
        await expect(depositForm.amountHint).toBeVisible();
    });

    test('Сообщение об ошибке суммы скрыто (по умолчанию)', async ({ depositForm }) => {
        await expect(depositForm.errorAmountHint).not.toBeVisible();
    });

    test('Иконка предупреждения скрыта (по умолчанию)', async ({ depositForm }) => {
        await expect(depositForm.warningIcon).not.toBeVisible();
    });

    // Срок вклада
    test('Заголовок "Срок вклада:" видим', async ({ depositForm }) => {
        await expect(depositForm.termTitle).toBeVisible();
    });

    test('Кнопка срока "3 месяца" видима (дефолтная)', async ({ depositForm }) => {
        await expect(depositForm.term3Months).toBeVisible();
    });

    // Свитчеры условий
    test('Свитчер "Новые деньги" видим', async ({ depositForm }) => {
        await expect(depositForm.newMoney).toBeVisible();
    });

    test('Иконка "i" для "Новые деньги" видима', async ({ depositForm }) => {
        await expect(depositForm.iIconNewMoney).toBeVisible();
    });

    test('Свитчер капитализации видим', async ({ depositForm }) => {
        await expect(depositForm.capitalization).toBeVisible();
    });

    test('Иконка "i" для капитализации видима', async ({ depositForm }) => {
        await expect(depositForm.iIconCapitalization).toBeVisible();
    });

    // Таблица расчетов
    test('Заголовок "Наше предложение" видим', async ({ depositForm }) => {
        await expect(depositForm.ourOffer).toBeVisible();
    });

    test('Колонка "Условия" видима', async ({ depositForm }) => {
        await expect(depositForm.columnConditions).toBeVisible();
    });

    test('Колонка "Всем клиентам" видима', async ({ depositForm }) => {
        await expect(depositForm.columnAllClients).toBeVisible();
    });

    test('Колонка "Клиентам Alfa Only" видима', async ({ depositForm }) => {
        await expect(depositForm.columnAlfaOnly).toBeVisible();
    });

    test('Строка "Процентная ставка" видима', async ({ depositForm }) => {
        await expect(depositForm.rateLabel).toBeVisible();
    });

    test('Ставка для всех клиентов отображается', async ({ depositForm }) => {
        await expect(depositForm.rateForAll).toBeVisible();
    });

    test('Ставка для Alfa Only отображается', async ({ depositForm }) => {
        await expect(depositForm.rateForAlfaOnly).toBeVisible();
    });

    test('Строка "Доход по вкладу" видима', async ({ depositForm }) => {
        await expect(depositForm.incomeLabel).toBeVisible();
    });

    test('Доход для всех клиентов отображается', async ({ depositForm }) => {
        await expect(depositForm.incomeForAll).toBeVisible();
    });

    test('Доход для Alfa Only отображается', async ({ depositForm }) => {
        await expect(depositForm.incomeForAlfaOnly).toBeVisible();
    });

    test('Строка "Сумма в конце срока" видима', async ({ depositForm }) => {
        await expect(depositForm.totalLabel).toBeVisible();
    });

    test('Сумма для всех клиентов отображается', async ({ depositForm }) => {
        await expect(depositForm.totalForAll).toBeVisible();
    });

    test('Сумма для Alfa Only отображается', async ({ depositForm }) => {
        await expect(depositForm.totalForAlfaOnly).toBeVisible();
    });

    // Кнопки
    test('Кнопка "Подробные условия" видима', async ({ depositForm }) => {
        await expect(depositForm.detailedConditionsButton).toBeVisible();
    });

    test('Кнопка "Открыть вклад" видима', async ({ depositForm }) => {
        await expect(depositForm.openDepositButton).toBeVisible();
    });

    // Футер
    test('Текст в футере видим', async ({ depositForm }) => {
        await expect(depositForm.footerSubTitle).toBeVisible();
    });
});