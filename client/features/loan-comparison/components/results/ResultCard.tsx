import { MetricItem } from './MetricItem';

type Props = {
    title: string;
    items: { label: string; value: string; subValue?: string }[];
    highlight?: boolean;
};

export function ResultCard({ title, items, highlight }: Props) {
    return (
        <div className={`rounded-2xl border bg-white p-3 shadow-sm ${highlight ? 'border-slate-300' : 'border-slate-200'}`}>
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <div className="mt-2 flex gap-2">
                {items.map((item) => (
                    <MetricItem key={item.label} {...item} />
                ))}
            </div>
        </div>
    );
}