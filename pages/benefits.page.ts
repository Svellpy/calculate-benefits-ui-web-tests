import { Page } from '@playwright/test';
import { TabsComponent } from '../components/tabs.component';
import { DepositForm } from '../components/deposit.component';
import { AccountForm } from '../components/account.component';
import { CreditForm } from '../components/credit.component';
import { MortgageForm } from '../components/mortgage.component';

type BenefitsComponents = {
    tabs: TabsComponent;
    depositForm: DepositForm;
    accountForm: AccountForm;
    creditForm: CreditForm;
    mortgageForm: MortgageForm;
};

export class BenefitsPage {
    constructor(
        private readonly page: Page,
        public readonly components: BenefitsComponents
    ) { }

    get tabs(): TabsComponent {
        return this.components.tabs;
    }

    get depositForm(): DepositForm {
        return this.components.depositForm;
    }

    get accountForm(): AccountForm {
        return this.components.accountForm;
    }

    get creditForm(): CreditForm {
        return this.components.creditForm;
    }

    get mortgageForm(): MortgageForm {
        return this.components.mortgageForm;
    }
}