import { Page, Locator } from '@playwright/test';

export class DepositForm {
    private readonly root: Locator;

    // Ограничиваем область поиска локаторов рамкой всего калькулятора, 
    // чтобы не было пересечений с другими формами на странице
    constructor(private readonly page: Page) {
        this.root = page.locator('#calculator[data-widget-name="Block"]');
    }

    // Поле ввода 'Сумма вклада'
    get amountInput(): Locator {
        return this.page.locator('[data-test-id="amount-input-form-control"] input[type="text"]').first();
    }

    // Сабтайтл 'от 10 000 ₽' под полем ввода, серым цветом маленькими буквами
    get amountHint(): Locator {
        return this.page.locator('[data-test-id="amount-input-form-control-hint"]');
    }

    // Сабтайтл 'Вклад доступен от 10 000 ₽' под полем ввода, когда красный, когда введена не верная сумма
    get errorAmountHint(): Locator {
        return this.page.getByText('Вклад доступен от 10 000 ₽');
    }

    // Срок вклада
    get termTitle(): Locator {
        return this.page.getByText('Срок вклада:');
    }

    // Кнопка '2 месяца', с неразрывным пробелом nbsp
    get term2Months(): Locator {
        return this.page.getByRole('button', { name: '2 месяца' });
    }

    get term3Months(): Locator {
        return this.page.getByRole('button', { name: '3 месяца' });
    }

    get term4Months(): Locator {
        return this.page.getByRole('button', { name: '4 месяца' });
    }

    get term6Months(): Locator {
        return this.page.getByRole('button', { name: '6 месяцев' });
    }

    get term9Months(): Locator {
        return this.page.getByRole('button', { name: '9 месяцев' });
    }

    get term1Year(): Locator {
        return this.page.getByRole('button', { name: '1 год' });
    }

    get term1_5Years(): Locator {
        return this.page.getByRole('button', { name: '1,5 года' });
    }

    get term2Years(): Locator {
        return this.page.getByRole('button', { name: '2 года' });
    }

    get term3Years(): Locator {
        return this.page.getByRole('button', { name: '3 года' });
    }

    // Разделы и переключатели
    get conditionsTitle(): Locator {
        return this.page.locator('#calculator').getByText('Условия:', { exact: true });
    }

    // Свитчер "Новые деньги"
    get newMoneySwitch(): Locator {
        return this.page.locator('label')
            .filter({ hasText: 'Новые деньги' })
            .locator('input[type="checkbox"]');
    }

    // Тайтл 'Новые деньги' справа от свитчера
    get newMoney(): Locator {
        return this.page.getByText('Новые деньги', { exact: true });
    }

    // Иконка 'i' для свитчера 'Новые деньги'
    get iIconNewMoney(): Locator {
        return this.page.locator('label')
            .filter({ hasText: 'Новые деньги' })
            .locator('[data-test-id="icon-glyph-InformationCircleSIcon"]');
    }

    // Всплывашка для свитчера 'Новые деньги'
    get newMoneyTooltip(): Locator {
        return this.page.getByText("Деньги, которые не находились на накопительных счетах", { exact: false });
    }

    // Весь свитчер "Без вывода процентов (капитализация)" (кликабельный элемент)
    get capitalizationSwitch(): Locator {
        return this.page.locator('label')
            .filter({ hasText: 'Без вывода процентов (капитализация)' })
            .first();
    }

    // Тайтл 'Без вывода процентов (капитализация)' справа от свитчера
    get capitalization(): Locator {
        return this.page.getByText('Без вывода процентов (капитализация)').first();
    }

    // Иконка 'i' для свитчера 'Без вывода процентов (капитализация)'
    get iIconCapitalization(): Locator {
        return this.page.locator('label')
            .filter({ hasText: 'Без вывода процентов (капитализация)' })
            .locator('[data-test-id="icon-glyph-InformationCircleSIcon"]');
    }

    // Всплывашка для свитчера 'Без вывода процентов (капитализация)'
    get capitalizationTooltip(): Locator {
        return this.page.getByText('Ставка выше за счёт капитализации процентов', { exact: false });
    }

    // Текстовка серым цветом под всем общим блоком 'Рассчитайте выгоду'
    get footerSubTitle(): Locator {
        return this.page.getByText('От 10 000 ₽ для Альфа‑Вклада Новые Деньги, от 50 000');
    }

    // Красная иконка 'i' внутри инпута суммы, появляется в случае введения неверной суммы
    get warningIcon(): Locator {
        return this.page.locator('[data-test-id="amount-input-error-icon"]').getByRole('img');
    }

    // ТАБЛИЦА РАСЧЁТОВ -> 'Наше предложение'
    get ourOffer(): Locator {
        return this.page.locator('#calculator').getByText('Наше предложение');
    }

    // Заголовки колонок
    get columnConditions(): Locator {
        return this.page.getByText('Условия', { exact: true });
    }

    get columnAllClients(): Locator {
        return this.page.locator('#calculator').getByText('Всем клиентам');
    }

    get columnAlfaOnly(): Locator {
        return this.page.locator('#calculator').getByText('Клиентам Alfa Only');
    }

    // Строка 'Процентная ставка'
    get rateLabel(): Locator {
        return this.page.locator('[data-test-id="interestRate-rub"]');
    }

    // Процентная ставка для всех клиентов (первое значение с паттерном '14,60%')
    get rateForAll(): Locator {
        return this.page.locator('td')
            .filter({ hasText: /^\d+,\d+%$/ })
            .first();
    }

    // Процентная ставка для Alfa Only (второе значение с паттерном '15,00%')
    get rateForAlfaOnly(): Locator {
        return this.page.locator('td')
            .filter({ hasText: /^\d+,\d+%$/ })
            .last();
    }

    // Строка 'Доход по вкладу'
    get incomeLabel(): Locator {
        return this.page.getByText('Доход по вкладу', { exact: false });
    }

    // Доход для всех клиентов (паттерн '+ 10 950 ₽' или '+ 11 250 ₽')
    get incomeForAll(): Locator {
        return this.page.locator('td')
            .filter({ hasText: /\+ \d+[\s]?\d+ ₽/ })
            .first();
    }

    // Доход для Alfa Only
    get incomeForAlfaOnly(): Locator {
        return this.page.locator('td')
            .filter({ hasText: /\+ \d+[\s]?\d+ ₽/ })
            .last();
    }

    // Строка 'Сумма в конце срока'
    get totalLabel(): Locator {
        return this.page.getByText('Сумма в конце срока', { exact: false });
    }

    // Итоговая сумма для всех клиентов (паттерн '310 950 ₽' или '311 250 ₽')
    get totalForAll(): Locator {
        return this.page.locator('td')
            .filter({ hasText: /\d+[\s]?\d+ ₽/ })
            .first();
    }

    // Итоговая сумма для Alfa Only
    get totalForAlfaOnly(): Locator {
        return this.page.locator('td')
            .filter({ hasText: /\d+[\s]?\d+ ₽/ })
            .last();
    }

    // Кнопка 'Подробные условия'
    get detailedConditionsButton(): Locator {
        return this.page.locator('[data-test-id="detailedConditionsBtn-rub"]');
    }

    // Кнопка 'Открыть вклад'
    get openDepositButton(): Locator {
        return this.page.locator('[data-test-id="openDepositBtn-rub"]');
    }
} 