'use client';

import { LoanScenarioForm } from '../form/LoanScenarioForm';
import { ComparisonTable } from '../results/ComparisonTable';
import { ResultCard } from '../results/ResultCard';
import { SectionContainer } from '../results/SectionContainer';
import { LoanAmortizationChart } from '../charts/LoanAmortizationChart';
import { useLoanComparison } from '../../hooks/useLoanComparison';
import { formatCurrency, formatNumber } from '../../utils/formatters';
import { formatMonths } from '../../utils/comparison';

export function LoanComparisonLayout() {
    const { scenarios, results, updateScenario } = useLoanComparison();

    const comparisonRows = [
        {
            label: 'EMI',
            scenario1: formatCurrency(results[0].result.calculatedEmi),
            scenario2: formatCurrency(results[1].result.calculatedEmi),
            scenario3: formatCurrency(results[2].result.calculatedEmi),
        },
        {
            label: "Intrest Rate",
            scenario1: results[0].scenario.interestRate + '%',
            scenario2: results[1].scenario.interestRate + '%',
            scenario3: results[2].scenario.interestRate + '%',
        },
        {
            label: 'Loan closure duration',
            scenario1: formatMonths(results[0].result.actualClosureMonth),
            scenario2: formatMonths(results[1].result.actualClosureMonth),
            scenario3: formatMonths(results[2].result.actualClosureMonth),
        },
        {
            label: 'Total interest',
            scenario1: formatCurrency(results[0].result.totalInterestPaid),
            scenario2: formatCurrency(results[1].result.totalInterestPaid),
            scenario3: formatCurrency(results[2].result.totalInterestPaid),
        },
        {
            label: 'Total paid : Principal + Interest',
            scenario1: formatCurrency(results[0].result.totalPaid),
            scenario2: formatCurrency(results[1].result.totalPaid),
            scenario3: formatCurrency(results[2].result.totalPaid),
        },
        {
            label: 'Interest saved w.r.t. base emi case',
            scenario1: formatCurrency(results[0].result.interestSaved),
            scenario2: formatCurrency(results[1].result.interestSaved),
            scenario3: formatCurrency(results[2].result.interestSaved),
        },
        {
            label: 'Tenure reduction',
            scenario1: formatMonths(results[0].result.tenureSavedMonths),
            scenario2: formatMonths(results[1].result.tenureSavedMonths),
            scenario3: formatMonths(results[2].result.tenureSavedMonths),
        },
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="mb-6">
                    <h1 className="text-2xl font-semibold text-slate-900">Loan Comparison & Prepayment Simulator</h1>
                    <p className="mt-1 text-sm text-slate-600">
                        Compare three loan strategies with live amortization, savings, and closure estimates.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="space-y-6">
                        {scenarios.map((scenario) => (
                            <LoanScenarioForm
                                key={scenario.id}
                                scenario={scenario}
                                onChange={(patch) => updateScenario(scenario.id, patch)}
                            />
                        ))}
                    </div>

                    <div className="space-y-5 lg:sticky lg:top-6 lg:self-start">
                        {results.map(({ scenario, result }) => (
                            <SectionContainer
                                key={scenario.id}
                                title={scenario.name}
                                description="Real-time calculated insights"
                            >
                                <div className="grid gap-4">
                                    <ResultCard
                                        title="Core Metrics"
                                        items={[
                                            { label: 'Loan closure time', value: formatMonths(result.actualClosureMonth) },
                                            { label: 'Total interest paid', value: formatCurrency(result.totalInterestPaid) },
                                            { label: 'Interest saved', value: formatCurrency(result.interestSaved) },
                                        ]}
                                    />
                                    {/* <ResultCard
                                        title="Impact Metrics"
                                        items={[
                                            { label: 'Tenure saved', value: formatMonths(result.tenureSavedMonths) },
                                            { label: 'Total payment', value: formatCurrency(result.totalPaid) },
                                            { label: 'Outstanding reduction', value: formatCurrency(result.outstandingReduction) },
                                        ]}
                                        highlight
                                    /> */}
                                </div>
                            </SectionContainer>
                        ))}

                        {/* <LoanAmortizationChart result={results[0].result} /> */}
                    </div>
                </div>

                <div className="mt-6">
                    <ComparisonTable rows={comparisonRows} />
                </div>
            </div>
        </div>
    );
}