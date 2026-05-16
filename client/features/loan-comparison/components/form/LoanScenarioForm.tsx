'use client';

import { LoanScenarioInput, PrepaymentFrequency } from '../../types/loan';
import { InputField } from './InputField';

type Props = {
    scenario: LoanScenarioInput;
    onChange: (patch: Partial<LoanScenarioInput>) => void;
};

export function LoanScenarioForm({ scenario, onChange }: Props) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-900">{scenario.name}</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    Editable scenario
                </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InputField label="Loan Amount" value={scenario.loanAmount} onChange={(v) => onChange({ loanAmount: Number(v) || 0 })} />
                <InputField label="Interest Rate" value={scenario.interestRate} onChange={(v) => onChange({ interestRate: Number(v) || 0 })} suffix="% p.a." step="0.01" />
                <InputField label="EMI" value={scenario.emi} onChange={(v) => onChange({ emi: Number(v) || 0 })} />
                <InputField label="Tenure" value={scenario.tenureYears} onChange={(v) => onChange({ tenureYears: Number(v) || 0 })} suffix="years" />
                <InputField label="Yearly Prepayment" value={scenario.yearlyPrepayment} onChange={(v) => onChange({ yearlyPrepayment: Number(v) || 0 })} />
                <label className="block space-y-1.5">
                    <div className="text-sm font-medium text-slate-700">Prepayment Frequency</div>
                    <select
                        value={scenario.prepaymentFrequency}
                        onChange={(e) => onChange({ prepaymentFrequency: e.target.value as PrepaymentFrequency })}
                        className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-all focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
                    >
                        <option value="none">None</option>
                        <option value="monthly">Monthly</option>
                        <option value="half-yearly">Half-yearly</option>
                        <option value="yearly">Yearly</option>
                    </select>
                </label>
            </div>
        </div>
    );
}