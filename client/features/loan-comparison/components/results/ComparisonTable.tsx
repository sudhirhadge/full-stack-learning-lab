import { ComparisonMetric } from '../../types/loan';

type Props = {
    rows: ComparisonMetric[];
    compact?: boolean;
};

export function ComparisonTable({ rows }: Props) {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="border-b border-slate-200 px-5 py-4">
                <h3 className="text-base font-semibold text-slate-900">Scenario Comparison</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-slate-200 text-sm">
                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-5 py-3 text-left font-medium text-slate-600">Metric</th>
                            <th className="px-5 py-3 text-left font-medium text-slate-600">Scenario 1</th>
                            <th className="px-5 py-3 text-left font-medium text-slate-600">Scenario 2</th>
                            <th className="px-5 py-3 text-left font-medium text-slate-600">Scenario 3</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                        {rows.map((row) => (
                            <tr key={row.label} className="hover:bg-slate-50/60">
                                <td className="px-5 py-3 font-medium text-slate-800">{row.label}</td>
                                <td className="px-5 py-3 text-slate-600">{row.scenario1}</td>
                                <td className="px-5 py-3 text-slate-600">{row.scenario2}</td>
                                <td className="px-5 py-3 text-slate-600">{row.scenario3}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}