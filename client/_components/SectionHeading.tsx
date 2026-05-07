type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      <p className="max-w-3xl text-base leading-7 text-slate-300">
        {description}
      </p>
    </div>
  );
}
