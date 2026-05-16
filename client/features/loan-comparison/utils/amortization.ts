import { AmortizationEntry, LoanScenarioInput } from '../types/loan';
import { calculateEmi, calculateMonthlyRate } from './emi';

function prepaymentAmount(input: LoanScenarioInput, month: number) {
    if (input.yearlyPrepayment <= 0) return 0;
    if (input.prepaymentFrequency === 'monthly') return input.yearlyPrepayment / 12;
    if (input.prepaymentFrequency === 'yearly' && month % 12 === 0) return input.yearlyPrepayment;
    if (input.prepaymentFrequency === 'half-yearly' && month % 6 === 0) return input.yearlyPrepayment / 2;
    return 0;
}

export function buildAmortizationSchedule(input: LoanScenarioInput) {
    const tenureMonths = Math.max(1, Math.round(input.tenureYears * 12));
    const monthlyRate = calculateMonthlyRate(input.interestRate);
    const emi = input.emi > 0 ? input.emi : calculateEmi(input.loanAmount, input.interestRate, tenureMonths);

    const schedule: AmortizationEntry[] = [];
    let balance = input.loanAmount;
    let month = 0;
    let safety = 0;

    while (balance > 0.01 && safety < 1200) {
        month += 1;
        safety += 1;

        const openingBalance = balance;
        const interest = openingBalance * monthlyRate;
        let principal = Math.max(0, emi - interest);
        let closingBalance = openingBalance - principal;
        let prepayment = prepaymentAmount(input, month);

        if (prepayment > 0) {
            prepayment = Math.min(prepayment, Math.max(0, closingBalance));
            closingBalance -= prepayment;
        }

        if (closingBalance < 0) {
            principal += closingBalance;
            closingBalance = 0;
        }

        const totalPaidThisMonth = Math.min(openingBalance + interest, emi + prepayment);

        schedule.push({
            month,
            openingBalance,
            interest,
            principal: Math.max(0, principal),
            prepayment,
            closingBalance: Math.max(0, closingBalance),
            totalPaidThisMonth,
        });

        balance = closingBalance;
        if (balance <= 0.01) break;
    }

    return {
        schedule,
        emi,
        actualClosureMonth: schedule.length,
        monthlyRate,
        originalTenureMonths: tenureMonths,
    };
}