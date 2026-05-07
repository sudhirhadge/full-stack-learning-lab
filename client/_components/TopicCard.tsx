import Link from 'next/link';

type TopicCardProps = {
    title: string;
    description: string;
    href: string;
    level: 'Intermediate' | 'Advanced';
    skills: string[];
};

export default function TopicCard({ title, description, href, level, skills }: TopicCardProps) {
    const levelColor = level === 'Intermediate' ? 'bg-blue-500/20 text-blue-300 ring-blue-500/30' : 'bg-purple-500/20 text-purple-300 ring-purple-500/30';

    return (
        <Link href={href}>
            <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-sm shadow-slate-950/20 transition hover:border-blue-500/40 hover:bg-slate-950">
                <div className="mb-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition">{title}</h3>
                    <span className={`flex-shrink-0 rounded-full px-3 py-1 text-xs font-semibold ring-1 ${levelColor}`}>
                        {level}
                    </span>
                </div>
                <p className="mb-6 text-slate-300 leading-7">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 group-hover:bg-slate-700 transition"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
