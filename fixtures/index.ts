import { test as base } from '@playwright/test';
import { APP_CONFIG } from '../config/app.config';

import { BenefitsPage } from '../pages/benefits.page';
import { TabsComponent } from '../components/tabs.component';
import { AccountForm } from '../components/account.component';
import { CreditForm } from '../components/credit.component';
import { DepositForm } from '../components/deposit.component';
import { MortgageForm } from '../components/mortgage.component';
import { HowToOpenPage } from '../pages/how-to-open.page';

type BenefitsFixtures = {
    tabs: TabsComponent;
    depositForm: DepositForm;
    accountForm: AccountForm;
    creditForm: CreditForm;
    mortgageForm: MortgageForm;
    benefitsPage: BenefitsPage;
    howToOpenPage: HowToOpenPage;
};

export const test = base.extend<BenefitsFixtures>({
    tabs: async ({ page }, use) => {
        const tabs = new TabsComponent(page);
        await use(tabs);
    },

    depositForm: async ({ page }, use) => {
        const form = new DepositForm(page);
        await use(form);
    },

    accountForm: async ({ page }, use) => {
        const form = new AccountForm(page);
        await use(form);
    },

    creditForm: async ({ page }, use) => {
        const form = new CreditForm(page);
        await use(form);
    },

    mortgageForm: async ({ page }, use) => {
        const form = new MortgageForm(page);
        await use(form);
    },

    benefitsPage: async ({ page, tabs, depositForm, accountForm, creditForm, mortgageForm }, use) => {
        const benefitsPage = new BenefitsPage(page, {
            tabs,
            depositForm,
            accountForm,
            creditForm,
            mortgageForm
        });
        await use(benefitsPage);
    },
    
    howToOpenPage: async ({ page }, use) => {
        const howToOpenPage = new HowToOpenPage(page);
        await use(howToOpenPage);
    }
});

export { expect } from '@playwright/test';