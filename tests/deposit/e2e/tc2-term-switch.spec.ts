import { APP_CONFIG } from '../../../config/app.config';
import { test, expect } from '../../../fixtures';

type TermTestCase = {
    name: string;
    key: 'term2Months' | 'term3Months' | 'term4Months' | 'term6Months' |
    'term9Months' | 'term1Year' | 'term1_5Years' | 'term2Years' | 'term3Years'
};

const termTestData: TermTestCase[] = [
    { name: '2 месяца', key: 'term2Months' },
    { name: '3 месяца', key: 'term3Months' },
    { name: '4 месяца', key: 'term4Months' },
    { name: '6 месяцев', key: 'term6Months' },
    { name: '9 месяцев', key: 'term9Months' },
    { name: '1 год', key: 'term1Year' },
    { name: '1,5 года', key: 'term1_5Years' },
    { name: '2 года', key: 'term2Years' },
    { name: '3 года', key: 'term3Years' }
];

test.describe('Срок вклада', () => {
    test.beforeEach(async ({ page, tabs }) => {
        await page.goto(APP_CONFIG.baseUrl);
        await tabs.depositTab.click();
    });

    termTestData.forEach(({ name, key }) => {
        test(name, async ({ depositForm }) => {
            await depositForm[key].click();

            await expect(depositForm.rateForAll).toHaveText(/\d+,\d+%/);
            await expect(depositForm.rateForAlfaOnly).toHaveText(/\d+,\d+%/);
            await expect(depositForm.incomeForAll).toHaveText(/\+ [\d\s]+ ₽/);
            await expect(depositForm.incomeForAlfaOnly).toHaveText(/\+ [\d\s]+ ₽/);
            await expect(depositForm.totalForAll).toHaveText(/[\d\s]+ ₽/);
            await expect(depositForm.totalForAlfaOnly).toHaveText(/[\d\s]+ ₽/);
        });
    });
});