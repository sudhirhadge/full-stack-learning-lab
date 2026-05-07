type FeatureCardProps = {
  title: string;
  description: string;
  label?: string;
};

export default function FeatureCard({
  title,
  description,
  label,
}: FeatureCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm shadow-slate-950/20 transition hover:border-blue-500/20 hover:bg-slate-950">
      {label ? <p className="text-sm font-semibold text-blue-300">{label}</p> : null}
      <h3 className="mt-3 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-slate-300 leading-7">{description}</p>
    </article>
  );
}
