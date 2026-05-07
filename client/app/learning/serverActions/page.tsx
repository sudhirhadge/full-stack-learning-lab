import Link from 'next/link';
import InfoCard from '@/_components/InfoCard';
import SectionItemList from '@/_components/SectionItemList';

const serverActionNotes = [
    {
        title: 'Primary mutation pattern',
        description:
            'Server Actions are the preferred way to handle data changes in Next.js, avoiding extra API routing when you can call server functions directly.',
    },
    {
        title: 'HTML form integration',
        description:
            'Server Actions connect directly to HTML form submissions, so your form data flows to the server without manual fetch logic.',
    },
    {
        title: 'Zero-runtime data transfer',
        description:
            'Forms call server functions with structured input, enabling safer, more predictable backend updates with less client-side boilerplate.',
    },
];

const quickStartSteps = [
    {
        description: "Create a server action using the 'use server' directive in a server component.",
    },
    {
        description: 'Attach the action function to your form with the action prop.',
    },
    {
        description: 'Submit the form to execute the server function and update backend state.',
    },
];

function ServerActionpage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8">
            <div className="max-w-4xl mx-auto space-y-10">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">Server Actions</h1>
                    <p className="text-lg text-slate-400">
                        The modern way to handle data mutations in Next.js applications.
                    </p>
                </div>

                <InfoCard
                    title="Key server action notes"
                    description="All the important patterns in one compact production-style section."
                >
                    <SectionItemList items={serverActionNotes} numbered />
                </InfoCard>

                <InfoCard
                    title="Quick start guide"
                    description="Use these concise steps to wire server actions into your form workflow."
                >
                    <SectionItemList items={quickStartSteps} />
                </InfoCard>

                <div className="text-center">
                    <Link
                        href="/learning/serverActions/snippets/new"
                        className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-blue-700 hover:scale-105"
                    >
                        Try Creating a Snippet
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServerActionpage