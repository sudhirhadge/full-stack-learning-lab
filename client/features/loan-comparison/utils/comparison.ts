import { LoanScenarioInput, LoanScenarioResult } from '../types/loan';
import { buildAmortizationSchedule } from './amortization';
import { calculateEmi } from './emi';

export function calculateScenario(input: LoanScenarioInput): LoanScenarioResult {
    const { schedule, monthlyRate, originalTenureMonths } = buildAmortizationSchedule(input);
    const calculatedEmi = input.emi > 0 ? input.emi : calculateEmi(input.loanAmount, input.interestRate, originalTenureMonths);

    const totalInterestPaid = schedule.reduce((sum, row) => sum + row.interest, 0);
    const totalPaid = schedule.reduce((sum, row) => sum + row.totalPaidThisMonth, 0);
    const actualClosureMonth = schedule.length;
    const tenureSavedMonths = Math.max(0, originalTenureMonths - actualClosureMonth);

    const baseTotalPaid = calculatedEmi * originalTenureMonths;
    const baseTotalInterest = baseTotalPaid - input.loanAmount;
    const interestSaved = Math.max(0, baseTotalInterest - totalInterestPaid);
    const outstandingReduction = Math.max(0, input.loanAmount - (schedule.at(-1)?.closingBalance ?? input.loanAmount));

    return {
        monthlyRate,
        originalTenureMonths,
        calculatedEmi,
        actualClosureMonth,
        totalInterestPaid,
        totalPaid,
        interestSaved,
        tenureSavedMonths,
        outstandingReduction,
        amortizationSchedule: schedule,
    };
}

export function formatMonths(months: number) {
    const years = Math.floor(months / 12);
    const remaining = months % 12;
    if (years <= 0) return `${months} mo`;
    if (remaining === 0) return `${years} yr`;
    return `${years} yr ${remaining} mo`;
}