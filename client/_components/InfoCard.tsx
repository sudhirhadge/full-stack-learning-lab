import type { ReactNode } from 'react';

type InfoCardProps = {
    title: string;
    description: string;
    children?: ReactNode;
    className?: string;
    compact?: boolean;
};

export default function InfoCard({
    title,
    description,
    children,
    className = '',
    compact = false,
}: InfoCardProps) {
    const baseStyles = compact
        ? 'rounded-3xl border border-slate-700 bg-slate-950 p-6'
        : 'rounded-3xl border border-slate-800 bg-slate-900 p-8';

    return (
        <div className={`${baseStyles} shadow-sm shadow-slate-950/20 ${className}`}>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-4 text-slate-300 leading-7">{description}</p>
            {children ? <div className="mt-6">{children}</div> : null}
        </div>
    );
}
