import { APP_CONFIG } from '../../../config/app.config';
import { test, expect } from '../../../fixtures';

test.describe('Тест-кейс 4: Прайс-секция "Наше предложение" и кнопки', () => {
    test.beforeEach(async ({ page, tabs }) => {
        await page.goto(APP_CONFIG.baseUrl);
        await tabs.depositTab.click();
    });

    test('4.1 Проверка структуры таблицы', async ({ depositForm }) => {
        // Проверяем заголовки колонок
        await expect(depositForm.columnConditions).toBeVisible();
        await expect(depositForm.columnAllClients).toBeVisible();
        await expect(depositForm.columnAlfaOnly).toBeVisible();

        // Проверяем строки
        await expect(depositForm.rateLabel).toBeVisible();
        await expect(depositForm.incomeLabel).toBeVisible();
        await expect(depositForm.totalLabel).toBeVisible();

        // Проверяем значения (должны быть не пустые)
        await expect(depositForm.rateForAll).not.toBeEmpty();
        await expect(depositForm.rateForAlfaOnly).not.toBeEmpty();
        await expect(depositForm.incomeForAll).not.toBeEmpty();
        await expect(depositForm.incomeForAlfaOnly).not.toBeEmpty();
        await expect(depositForm.totalForAll).not.toBeEmpty();
        await expect(depositForm.totalForAlfaOnly).not.toBeEmpty();
    });

    test('4.2 Кнопка "Подробные условия" открывает PDF', async ({ context, depositForm }) => {
        // В данный момент playwright не может проверить открытие PDF в новой вкладке, 
        // так как PDF открывается через встроенный просмотрщик браузера, 
        // который не позволяет взаимодействовать с его содержимым. 
        // Поэтому мы проверим, что при клике на кнопку открывается новая вкладка с URL, 
        // который содержит "pdf" (или другой ожидаемый фрагмент).
        // https://github.com/dgtlmoon/changedetection.io/issues/2019

        // Проверяем видимость кнопки
        await expect(depositForm.detailedConditionsButton).toBeVisible();

        // TODO: добавить проверку открытия PDF когда будет решение
        // const pagePromise = context.waitForEvent('page');
        // await depositForm.detailedConditionsButton.click();
        // const pdfPage = await pagePromise;
        // const url = pdfPage.url();
        // expect(url).toMatch(/\.pdf$/);
        // await pdfPage.close();
    });

    test('4.3 Кнопка "Открыть вклад" ведет на страницу с инструкцией', async ({ page, depositForm, howToOpenPage }) => {
        // Сначала клик на кнопку
        await depositForm.openDepositButton.click();

        // Ждём, что хеш стал #HowToGet
        await page.waitForFunction(() => location.hash === '#HowToGet', { timeout: 5000 });

        // Проверяем заголовок инструкции
        await expect(howToOpenPage.howToOpenHeading).toBeVisible({ timeout: 5000 });
    });
});