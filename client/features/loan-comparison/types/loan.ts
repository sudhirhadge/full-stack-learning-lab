export type PrepaymentFrequency = 'none' | 'monthly' | 'yearly' | 'half-yearly';

export type LoanScenarioInput = {
    id: string;
    name: string;
    loanAmount: number;
    interestRate: number;
    emi: number;
    tenureYears: number;
    yearlyPrepayment: number;
    prepaymentFrequency: PrepaymentFrequency;
};

export type AmortizationEntry = {
    month: number;
    openingBalance: number;
    interest: number;
    principal: number;
    prepayment: number;
    closingBalance: number;
    totalPaidThisMonth: number;
};

export type LoanScenarioResult = {
    monthlyRate: number;
    originalTenureMonths: number;
    calculatedEmi: number;
    actualClosureMonth: number;
    totalInterestPaid: number;
    totalPaid: number;
    interestSaved: number;
    tenureSavedMonths: number;
    outstandingReduction: number;
    amortizationSchedule: AmortizationEntry[];
};

export type ComparisonMetric = {
    label: string;
    scenario1: string;
    scenario2: string;
    scenario3: string;
};