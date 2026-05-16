'use client';

import { LoanScenarioResult } from '../../types/loan';
import { formatCurrency } from '../../utils/formatters';

type Props = {
    result: LoanScenarioResult;
    compact?: boolean;
};

export function LoanAmortizationChart({ result }: Props) {
    const sample = result.amortizationSchedule.slice(0, 12);

    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-base font-semibold text-slate-900">Monthly Breakdown</h3>
            <div className="mt-4 grid gap-2">
                {sample.map((row) => (
                    <div key={row.month} className="grid grid-cols-4 gap-2 text-xs text-slate-600">
                        <div>Month {row.month}</div>
                        <div>{formatCurrency(row.interest)} interest</div>
                        <div>{formatCurrency(row.prepayment)} prepay</div>
                        <div>{formatCurrency(row.closingBalance)} balance</div>
                    </div>
                ))}
            </div>
        </div>
    );
}