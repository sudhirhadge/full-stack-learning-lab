import { LoanScenarioInput } from "../types/loan";

export const DEFAULT_SCENARIOS: LoanScenarioInput[] = [
    {
        id: 'scenario-1',
        name: 'Conservative',
        loanAmount: 3300000,
        interestRate: 7,
        emi: 35000,
        tenureYears: 20,
        yearlyPrepayment: 300000,
        prepaymentFrequency: 'half-yearly',
    },
    {
        id: 'scenario-2',
        name: 'Balanced',
        loanAmount: 3300000,
        interestRate: 7.5,
        emi: 35000,
        tenureYears: 20,
        yearlyPrepayment: 300000,
        prepaymentFrequency: 'half-yearly',
    },
    {
        id: 'scenario-3',
        name: 'Aggressive',
        loanAmount: 3300000,
        interestRate: 8.0,
        emi: 35000,
        tenureYears: 20,
        yearlyPrepayment: 300000,
        prepaymentFrequency: 'half-yearly',
    },
];

export const MIN_LOAN_AMOUNT = 100000;
export const MAX_LOAN_AMOUNT = 50000000;
export const MIN_RATE = 1;
export const MAX_RATE = 30;
export const MIN_TENURE = 1;
export const MAX_TENURE = 40;