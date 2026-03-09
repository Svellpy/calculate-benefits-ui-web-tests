export const APP_CONFIG = {
  baseUrl: 'https://alfabank.ru',
  defaultTimeoutMs: 30_000,
} as const;

export const BENEFITS_TABS = {
  deposit: 'Вклад',
  account: 'Счёт',
  credit: 'Кредит',
  mortgage: 'Ипотека',
} as const;

export type BenefitsTabKey = keyof typeof BENEFITS_TABS;
export type BenefitsTabLabel = (typeof BENEFITS_TABS)[BenefitsTabKey];
