'use client';

type Props = {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: 'text' | 'number';
    step?: string;
    min?: number;
    max?: number;
    suffix?: string;
};

export function InputField({
    label,
    value,
    onChange,
    type = 'number',
    step = '1',
    min,
    max,
    suffix,
}: Props) {
    return (
        <label className="block space-y-1.5">
            <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-medium text-slate-700">{label}</span>
                {suffix ? <span className="text-xs text-slate-500">{suffix}</span> : null}
            </div>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                step={step}
                min={min}
                max={max}
                className="h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            />
        </label>
    );
}