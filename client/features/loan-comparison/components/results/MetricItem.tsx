type Props = {
    label: string;
    value: string;
    subValue?: string;
};

export function MetricItem({ label, value, subValue }: Props) {
    return (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 transition-all hover:shadow-sm">
            <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{label}</div>
            <div className="mt-1 text-lg font-semibold text-slate-900">{value}</div>
            {subValue ? <div className="mt-1 text-xs text-slate-500">{subValue}</div> : null}
        </div>
    );
}