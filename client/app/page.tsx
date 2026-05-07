
import Link from 'next/link';
import FeatureCard from '@/_components/FeatureCard';
import InfoCard from '@/_components/InfoCard';
import SectionHeading from '@/_components/SectionHeading';
import { progressCards, roadmapCards, stats, projectDetails } from '@/utils/homeData';

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 px-6 py-16 sm:px-12 lg:px-20">
        <div
          className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.35),_transparent_35%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-300 ring-1 ring-blue-500/20">
                Full Stack Learning Lab
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Learn modern full-stack development with real project experiments.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                A living playground where every feature is an opportunity to learn React, Next.js, TypeScript, Tailwind CSS, Prisma, and server-driven UI patterns.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/learning"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500 sm:w-auto"
                >
                  Explore Learning Paths
                </Link>
                <Link
                  href="/learning/serverActions/snippets/new"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-900 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800 sm:w-auto"
                >
                  Create a Snippet
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard
                title="Project Snapshot"
                description="This repository is built as a hands-on learning lab. It already includes an interactive Next.js frontend, a polished UI, and the foundation for server actions, Prisma database integration, and reusable components."
                className="sm:col-span-2"
              />
              {stats.map((stat) => (
                <InfoCard
                  key={stat.label}
                  title={stat.label}
                  description={stat.value}
                  compact
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-12 lg:px-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Project progress"
              title="What has been built so far"
              description="The project now includes a robust homepage, navigation header, production-grade page layouts, server action examples, and a code snippet editor. It is designed to feel like a real learning app with polished visuals and clear content structure."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {progressCards.map((card) => (
                <FeatureCard key={card.title} title={card.title} description={card.description} />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-sm shadow-slate-950/20">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Project Details</h3>
                <p className="text-slate-300 leading-7">
                  A compact summary of the project purpose, current status, and intended audience.
                </p>
              </div>
              <div className="mt-6">
                <ul className="space-y-3 text-slate-300">
                  {projectDetails.map((detail) => (
                    <li key={detail.label} className="rounded-2xl bg-slate-950 px-4 py-3 ring-1 ring-slate-800/70">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-300">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">
                        {detail.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <InfoCard
              title="How to use"
              description="Review the app structure, open the component files, and follow the learning path to build new features and integrate the backend."
            >
              <ol className="mt-6 space-y-4 list-decimal px-4 text-slate-300">
                <li>Create and style UI components with Tailwind CSS.</li>
                <li>Connect forms to server actions for seamless data mutations.</li>
                <li>Extend the backend with Prisma and SQLite for persistent storage.</li>
              </ol>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950 px-6 py-16 sm:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Roadmap"
              title="Future important topics coming next"
              description="The next phase will focus on backend integration, state management, authentication, deployment, and polish for a production-grade learning experience."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {roadmapCards.map((card) => (
                <FeatureCard key={card.title} title={card.title} description={card.description} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

