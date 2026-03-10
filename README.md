# calculate-benefits-ui-web-tests

# Тестовый фреймворк UI автотестов (форма "Рассчитайте выгоду")

Тесты на данный момент пока что реализованы только на вкладку "Вклад" (deposit)

# В `package.json` определены скрипты:

| Сокращение | Скрипт | Описание |
|------------|--------|----------|
| `npm run install:all` | `npm install && npx playwright install` | Установка необходимых зависимостей |
| `npm run test` | `npx playwright test` | Запуск тестов в idle |
| `npm run test:ui` | `npx playwright test --ui` | Запуск тестов в UI режиме |
| `npm run codegen` | `npx playwright codegen https://alfabank.ru` | Запуск Playwright хелп платформы для написания тестов |
| `npm run report` | `npx playwright show-report` | Открыть HTML отчет о последнем прогоне тестов |

## Структура фреймворка

```
calculate-benefits-ui-web-tests/
├── config/
│   └── app.config.ts           # Конфигурация фреймворка
│
├── fixtures/
│   └── index.ts                # Фикстуры Playwright для выноса инициализации в отдельный слой
│
├── components/
│   ├── tabs.component.ts       # Компонент Табов (Page Object)
│   └── deposit.component.ts    # Компонент "Вклад" (Page Object)
│
├── pages/
│   ├── benefits.page.ts        # Страница "Рассчитайте выгоду" (Page Object)
│   └── how-to-open.page.ts     # Страница "Как открыть вклад" (Page Object)
│
└── tests/
    └── deposit/
        ├── smoke/                              # Быстрая проверка доступности всех элементов
        │   ├── smoke-tabs.spec.ts              # Проверка переключения табов
        │   └── smoke-elements.spec.ts          # Проверка наличия всех элементов
        │
        └── e2e-tests/                          # Тесты написанные поверх ручных e2e
            ├── tc1-amount-input.spec.ts        # Поле ввода суммы вклада
            ├── tc2-term-switch.spec.ts         # Переключатель срока вклада
            ├── tc3-condition-toggles.spec.ts   # Переключатели условий
            ├── tc4-price-section.spec.ts       # Прайс-секция "Наше предложение"
            └── tc5-negative-amount.spec.ts     # [Негатив] Поле ввода суммы вклада
```

Особенности:
1. В компонентах `tabs.component.ts` и `deposit.component.ts` определены `root` элементы для ускорения тестов, и упрощения написания локаторов, чтобы плейрайт искал только внутри этой части большой html страницы
2. В соответствующих пакетах можно найти реализацию объекты страниц (Page Object),
реализовано с помощью фикстур `fixtures/index.ts`, чтобы инициализировать объекты страниц не в тестовом классе

<img width="1519" height="858" alt="image" src="https://github.com/user-attachments/assets/19e40bd6-82e3-4e39-b436-12b6710437e7" />

<img width="1522" height="905" alt="image" src="https://github.com/user-attachments/assets/6dfe89cf-a0c4-48f0-953a-8f62d6ecd009" />


