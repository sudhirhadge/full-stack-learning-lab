import { LoanScenarioInput } from "../types/loan";

export const DEFAULT_SCENARIOS: LoanScenarioInput[] = [
    {
        id: 'scenario-1',
        name: 'Conservative',
        loanAmount: 5000000,
        interestRate: 8.5,
        emi: 0,
        tenureYears: 20,
        yearlyPrepayment: 200000,
        prepaymentFrequency: 'yearly',
    },
    {
        id: 'scenario-2',
        name: 'Balanced',
        loanAmount: 5000000,
        interestRate: 8.25,
        emi: 0,
        tenureYears: 20,
        yearlyPrepayment: 100000,
        prepaymentFrequency: 'half-yearly',
    },
    {
        id: 'scenario-3',
        name: 'Aggressive',
        loanAmount: 5000000,
        interestRate: 8.1,
        emi: 0,
        tenureYears: 20,
        yearlyPrepayment: 25000,
        prepaymentFrequency: 'monthly',
    },
];

export const MIN_LOAN_AMOUNT = 100000;
export const MAX_LOAN_AMOUNT = 50000000;
export const MIN_RATE = 1;
export const MAX_RATE = 30;
export const MIN_TENURE = 1;
export const MAX_TENURE = 40;