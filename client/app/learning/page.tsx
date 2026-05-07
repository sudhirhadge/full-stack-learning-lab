import TopicCard from '@/_components/TopicCard';
import SectionHeading from '@/_components/SectionHeading';
import { learningTopics } from '@/app/learning/_utils/learningTopics';
function LearningPage() {
    const beginnerTopics = learningTopics.filter((t) => t.level === 'Intermediate');
    const advancedTopics = learningTopics.filter((t) => t.level === 'Advanced');

    return (
        <div className="bg-slate-950 text-slate-100">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-16 sm:px-12 lg:px-20">
                <div
                    className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_35%)]"
                    aria-hidden="true"
                />
                <div className="relative mx-auto max-w-7xl">
                    <div className="max-w-3xl space-y-6">
                        <span className="inline-flex rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-300 ring-1 ring-blue-500/20">
                            Learning Path
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Master Modern Full-Stack Development
                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-slate-300">
                            A comprehensive learning journey covering server actions, databases, authentication, performance optimization, and advanced Next.js patterns. Each concept includes hands-on examples and real-world best practices.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intermediate Topics */}
            <section className="mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:px-20">
                <div className="mb-12">
                    <SectionHeading
                        eyebrow="Getting Started"
                        title="Intermediate Concepts"
                        description="Build a solid foundation with these core full-stack concepts that every developer should master."
                    />
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {beginnerTopics.map((topic) => (
                        <TopicCard
                            key={topic.id}
                            title={topic.title}
                            description={topic.description}
                            href={topic.href}
                            level={topic.level}
                            skills={topic.skills}
                        />
                    ))}
                </div>
            </section>

            {/* Advanced Topics */}
            <section className="border-t border-slate-800 bg-slate-950 px-6 py-16 sm:px-12 lg:px-20">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-12">
                        <SectionHeading
                            eyebrow="Advanced Training"
                            title="Expert-Level Topics"
                            description="Take your skills to the next level with advanced patterns, optimization techniques, and production-grade practices."
                        />
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {advancedTopics.map((topic) => (
                            <TopicCard
                                key={topic.id}
                                title={topic.title}
                                description={topic.description}
                                href={topic.href}
                                level={topic.level}
                                skills={topic.skills}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:px-20">
                <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-sm shadow-slate-950/20 sm:p-12">
                    <div className="grid gap-10 sm:grid-cols-2">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-white">How to Use This Learning Path</h2>
                            <p className="text-slate-300 leading-7">
                                Start with intermediate concepts to build your foundation. Once comfortable, move to advanced topics to master production-grade patterns and real-world optimization techniques.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="font-semibold text-white">Learning Tips</h3>
                            <ul className="space-y-2 text-slate-300">
                                <li className="flex gap-3">
                                    <span className="text-blue-300">→</span>
                                    <span>Read the concept explanation thoroughly</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-300">→</span>
                                    <span>Try the code examples in your local project</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-blue-300">→</span>
                                    <span>Build mini-projects to reinforce learning</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LearningPage