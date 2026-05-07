import Link from 'next/link';
import { devModeTopics } from '@/app/learning/_utils/learningDevModeTopics';

function DevModePage() {
    return (
        <div className="min-h-screen bg-white font-mono text-sm text-slate-900">
            <div className="max-w-6xl mx-auto p-6 space-y-8">
                {/* Header */}
                <div className="border-b border-slate-300 pb-6">
                    <div className="mb-2 text-xs text-slate-500">~/learning/devmode</div>
                    <h1 className="text-3xl font-bold text-slate-900 mb-2">Full-Stack Learning (Dev Mode)</h1>
                    <p className="text-slate-600">
                        Raw learning content. No fluff, just concepts and code. Click any topic to dive in.
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100 border border-slate-300 rounded">
                    <div>
                        <div className="text-xs text-slate-600 uppercase tracking-wide">Total Topics</div>
                        <div className="text-2xl font-bold text-slate-900">{devModeTopics.length}</div>
                    </div>
                    <div>
                        <div className="text-xs text-slate-600 uppercase tracking-wide">Status</div>
                        <div className="text-2xl font-bold text-slate-900">In Progress</div>
                    </div>
                    <div>
                        <div className="text-xs text-slate-600 uppercase tracking-wide">Last Updated</div>
                        <div className="text-2xl font-bold text-slate-900"> {new Date().toLocaleDateString()}</div>
                    </div>
                </div>

                {/* Topics List */}
                <div className="space-y-3">
                    {devModeTopics.map((topic) => (
                        <Link key={topic.id} href={topic.href}>
                            <div
                                className="border border-slate-300 p-4 hover:bg-slate-50 cursor-pointer transition group"
                            >
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600">
                                        {topic.title}
                                    </h3>
                                    <code className="text-xs bg-slate-200 px-2 py-1 text-slate-700 flex-shrink-0">
                                        {topic.id}
                                    </code>
                                </div>
                                <p className="text-slate-700 text-xs leading-relaxed mb-3">
                                    {topic.description}
                                </p>
                                <div className="flex gap-2 flex-wrap">
                                    {topic.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs bg-slate-200 text-slate-700 px-2 py-1 border border-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Footer Info */}
                <div className="border-t border-slate-300 pt-6 text-xs text-slate-600 space-y-2">
                    <div>
                        <strong>Dev Mode Features:</strong>
                        <p>- Minimal UI, maximum content</p>
                        <p>- Raw markdown-style layout</p>
                        <p>- Tag-based topic organization</p>
                        <p>- Terminal-friendly design</p>
                    </div>
                    <div className="mt-4 p-4 bg-slate-100 border border-slate-300 font-mono">
                        <code>~/learning/devmode $ echo "ready to learn?"</code>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevModePage;
